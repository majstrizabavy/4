const partnerEventForm = document.getElementById('partnerEventForm');
const partnerCitySelect = document.getElementById('partnerCityKey');
const partnerPosterInput = document.getElementById('partnerPoster');
const partnerPosterName = document.getElementById('partnerPosterName');
const partnerFormStatus = document.getElementById('partnerFormStatus');
const partnerSubmitButton = document.getElementById('partnerSubmitButton');

function setPartnerFormStatus(type, message) {
  if (!partnerFormStatus) return;

  partnerFormStatus.className = `partner-form__status${type ? ` is-${type}` : ''}`;
  partnerFormStatus.textContent = message;
}

function renderPartnerCities() {
  if (!partnerCitySelect || !window.MZSupabase) return;

  const options = [
    '<option value="">Vyber si mesto a okolie</option>',
    ...window.MZSupabase.getCityOptions().map((city) => (
      `<option value="${city.key}">${window.MZSupabase.escapeHtml(city.name)}</option>`
    ))
  ];

  partnerCitySelect.innerHTML = options.join('');
}

function updatePosterLabel() {
  if (!partnerPosterInput || !partnerPosterName) return;

  const selectedFile = partnerPosterInput.files?.[0];
  partnerPosterName.textContent = selectedFile
    ? `Vybraný súbor: ${selectedFile.name}`
    : 'PNG, JPG alebo WEBP do 5 MB.';
}

function setPartnerSubmittingState(isSubmitting) {
  if (!partnerSubmitButton) return;

  partnerSubmitButton.disabled = isSubmitting;
  partnerSubmitButton.textContent = isSubmitting ? 'Odosielam akciu...' : 'Poslať akciu na schválenie';
}

async function uploadPosterFile(supabaseClient, file, slug, eventDate) {
  if (!file) return '';

  const isAllowedType = ['image/png', 'image/jpeg', 'image/webp'].includes(file.type);
  if (!isAllowedType) {
    throw new Error('Plagát musí byť vo formáte PNG, JPG alebo WEBP.');
  }

  const maxSizeBytes = 5 * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    throw new Error('Plagát je príliš veľký. Použi prosím súbor do 5 MB.');
  }

  const posterPath = window.MZSupabase.buildPosterPath(file.name, slug, eventDate);
  const { error } = await supabaseClient.storage
    .from(window.MZSupabase.posterBucket)
    .upload(posterPath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type
    });

  if (error) {
    throw new Error('Plagát sa nepodarilo nahrať. Skús to prosím ešte raz.');
  }

  return posterPath;
}

async function handlePartnerEventSubmit(event) {
  event.preventDefault();
  if (!partnerEventForm || !window.MZSupabase) return;

  setPartnerSubmittingState(true);
  setPartnerFormStatus('', 'Kontrolujem údaje a odosielam akciu na schválenie...');

  try {
    const supabaseClient = window.MZSupabase.getClient();
    const formData = new FormData(partnerEventForm);
    const title = String(formData.get('title') || '').trim();
    const eventDate = String(formData.get('event_date') || '').trim();
    const cityKey = String(formData.get('city_key') || '').trim();
    const venueName = String(formData.get('venue_name') || '').trim();
    const regionLabel = String(formData.get('region_label') || '').trim();
    const category = String(formData.get('category') || '').trim();
    const audience = String(formData.get('audience') || '').trim();
    const description = String(formData.get('description') || '').trim();
    const moreInfoUrl = window.MZSupabase.normalizeExternalUrl(formData.get('more_info_url'));
    const partnerName = String(formData.get('partner_name') || '').trim();
    const submitterName = String(formData.get('submitter_name') || '').trim();
    const submitterEmail = String(formData.get('submitter_email') || '').trim();
    const submitterPhone = String(formData.get('submitter_phone') || '').trim();
    const selectedCity = window.MZSupabase.getCityByKey(cityKey);
    const posterFile = partnerPosterInput?.files?.[0] || null;

    if (!title || !eventDate || !selectedCity || !partnerName || !submitterName || !submitterEmail) {
      throw new Error('Prosím vyplň názov akcie, dátum, lokalitu, partnera, meno a email kontaktu.');
    }

    const slugBase = window.MZSupabase.slugify(title) || 'nova-akcia';
    const slug = `${slugBase}-${Date.now().toString(36)}`;
    const posterPath = await uploadPosterFile(supabaseClient, posterFile, slug, eventDate);

    const { error } = await supabaseClient
      .from('events')
      .insert({
        title,
        slug,
        status: 'pending',
        event_date: eventDate,
        city_key: selectedCity.key,
        city_label: selectedCity.name,
        venue_name: venueName || null,
        region_label: regionLabel || null,
        description: description || null,
        audience: audience || null,
        category: category || null,
        poster_path: posterPath || null,
        more_info_url: moreInfoUrl || null,
        submitter_name: submitterName,
        submitter_email: submitterEmail,
        submitter_phone: submitterPhone || null,
        partner_name: partnerName
      });

    if (error) {
      throw new Error('Akciu sa nepodarilo uložiť. Skús to prosím ešte raz.');
    }

    partnerEventForm.reset();
    updatePosterLabel();
    renderPartnerCities();
    setPartnerFormStatus('success', 'Akcia je odoslaná. Najprv ju skontrolujeme a až potom ju zverejníme v kalendári.');
  } catch (error) {
    setPartnerFormStatus('error', error.message || 'Niečo sa nepodarilo. Skús to prosím ešte raz.');
  } finally {
    setPartnerSubmittingState(false);
  }
}

function initPartnerEventForm() {
  if (!partnerEventForm || !window.MZSupabase) return;

  renderPartnerCities();
  updatePosterLabel();
  setPartnerFormStatus('', 'Vyplň základné údaje o akcii. Po odoslaní ju najprv schválime.');

  partnerEventForm.addEventListener('submit', handlePartnerEventSubmit);
  if (partnerPosterInput) {
    partnerPosterInput.addEventListener('change', updatePosterLabel);
  }
}

initPartnerEventForm();
