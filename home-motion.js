(() => {
  const clip = document.querySelector('.video-beat video');
  if (!clip) return;

  const copy = document.querySelector('.video-beat > div');
  const caption = document.querySelector('#deck-caption');

  if (caption) {
    caption.remove();
  }

  if (copy) {
    copy.className = 'video-context';
    copy.innerHTML = `
      <h2>Boarding starts with a meet &amp; greet</h2>
      <p>New boarding guests begin with an in-home meet &amp; greet. Pickup and delivery are included throughout Greater Midland / Odessa at no additional cost.</p>
      <dl aria-label="Boarding rates">
        <div><dt>Overnight boarding</dt><dd>$60 <span>per night · 3-night minimum</span></dd></div>
        <div><dt>Holiday periods</dt><dd>$65 <span>per night · 3-night minimum</span></dd></div>
      </dl>
      <a class="phone-button gold" href="tel:8323818150">Call or text 832.381.8150</a>
    `;
  }

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const animation = document.createElement('img');
  animation.className = 'video-gif';
  animation.src = 'assets/golden-retriever-deck.gif';
  animation.alt = 'Golden retriever on the deck.';
  clip.replaceWith(animation);
})();
