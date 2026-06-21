
const listingGroups = [
  {
    id: 'lonavala',
    title: 'Popular homes in Lonavala',
    listings: [
      { id: 1, title: 'Villa in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 30000, rating: 4.92, reviews: 198, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&h=600&fit=crop'] },
      { id: 2, title: 'Villa in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 34234, rating: 5.0, reviews: 87, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'] },
      { id: 3, title: 'Home in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 72000, rating: 4.88, reviews: 134, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'] },
      { id: 4, title: 'Home in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 17280, rating: 4.93, reviews: 312, badge: null, imgs: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&h=600&fit=crop'] },
      { id: 5, title: 'Home in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 26818, rating: 4.93, reviews: 245, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&h=600&fit=crop'] },
      { id: 6, title: 'Villa in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 30811, rating: 4.84, reviews: 178, badge: null, imgs: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&h=600&fit=crop'] },
      { id: 7, title: 'Villa in Lonavala', location: 'Lonavala, Maharashtra', nights: 2, price: 32000, rating: 4.89, reviews: 203, badge: null, imgs: ['https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687644-c7171b46d1c4?w=900&h=600&fit=crop'] },
    ]
  },
  {
    id: 'northgoa',
    title: 'Available in North Goa this weekend',
    listings: [
      { id: 11, title: 'Flat in Candolim', location: 'Candolim, Goa', nights: 2, price: 4000, rating: 4.92, reviews: 156, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=600&fit=crop'] },
      { id: 12, title: 'Flat in Siolim', location: 'Siolim, Goa', nights: 2, price: 4756, rating: 4.88, reviews: 89, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&h=600&fit=crop'] },
      { id: 13, title: 'Flat in Vagator', location: 'Vagator, Goa', nights: 2, price: 11698, rating: 5.0, reviews: 223, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=600&fit=crop'] },
      { id: 14, title: 'Apartment in Goa', location: 'Panaji, Goa', nights: 2, price: 8000, rating: 5.0, reviews: 167, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?w=900&h=600&fit=crop'] },
      { id: 15, title: 'Flat in Mapusa', location: 'Mapusa, Goa', nights: 2, price: 6720, rating: 4.89, reviews: 98, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?w=900&h=600&fit=crop'] },
      { id: 16, title: 'Flat in Assagao', location: 'Assagao, Goa', nights: 2, price: 8000, rating: 4.88, reviews: 312, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&h=600&fit=crop'] },
      { id: 17, title: 'Villa in Baga', location: 'Baga, Goa', nights: 2, price: 18413, rating: 4.98, reviews: 445, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop'] },
    ]
  },
  {
    id: 'karjat',
    title: 'Stay in Karjat',
    listings: [
      { id: 21, title: 'Villa in Kashele', location: 'Kashele, Karjat', nights: 2, price: 53396, rating: 4.91, reviews: 67, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&h=600&fit=crop'] },
      { id: 22, title: 'Home in Kashele', location: 'Kashele, Karjat', nights: 2, price: 18602, rating: 4.93, reviews: 134, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&fit=crop'] },
      { id: 23, title: 'Home in Karjat', location: 'Karjat, Maharashtra', nights: 2, price: 27389, rating: 4.9, reviews: 89, badge: null, imgs: ['https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687644-c7171b46d1c4?w=900&h=600&fit=crop'] },
      { id: 24, title: 'Cottage in Nadhal', location: 'Nadhal, Karjat', nights: 2, price: 18431, rating: 4.86, reviews: 203, badge: null, imgs: ['https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&h=600&fit=crop'] },
      { id: 25, title: 'Cabin in Nadhal', location: 'Nadhal, Karjat', nights: 2, price: 10887, rating: 4.75, reviews: 56, badge: null, imgs: ['https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&h=600&fit=crop'] },
      { id: 26, title: 'Villa in Naldhe', location: 'Naldhe, Karjat', nights: 2, price: 17004, rating: 4.85, reviews: 178, badge: null, imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=600&fit=crop'] },
      { id: 27, title: 'Villa in Karjat', location: 'Karjat, Maharashtra', nights: 2, price: 37657, rating: 4.94, reviews: 321, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&h=600&fit=crop'] },
    ]
  },
  {
    id: 'manali',
    title: 'Popular stays in Manali',
    listings: [
      { id: 31, title: 'Cottage in Old Manali', location: 'Old Manali, Himachal Pradesh', nights: 2, price: 8500, rating: 4.95, reviews: 287, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=600&fit=crop'] },
      { id: 32, title: 'Cabin in Manali', location: 'Manali, Himachal Pradesh', nights: 2, price: 12000, rating: 4.88, reviews: 156, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=900&h=600&fit=crop'] },
      { id: 33, title: 'Chalet in Kullu', location: 'Kullu, Himachal Pradesh', nights: 2, price: 9800, rating: 4.9, reviews: 98, badge: null, imgs: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop'] },
      { id: 34, title: 'Farmhouse in Naggar', location: 'Naggar, Himachal Pradesh', nights: 2, price: 15600, rating: 4.97, reviews: 203, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=900&h=600&fit=crop'] },
      { id: 35, title: 'Villa in Manali', location: 'Manali, Himachal Pradesh', nights: 2, price: 22000, rating: 4.93, reviews: 412, badge: 'Guest favourite', imgs: ['https://images.unsplash.com/photo-1468413253076-d8c3e28c9bce?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=900&h=600&fit=crop'] },
      { id: 36, title: 'Home in Solang', location: 'Solang, Himachal Pradesh', nights: 2, price: 18900, rating: 4.86, reviews: 134, badge: null, imgs: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&h=600&fit=crop', 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&h=600&fit=crop'] },
    ]
  }
];
// Flat listings array for filter compatibility
const listings = listingGroups.flatMap(g => g.listings.map(l => ({ ...l, cat: g.id, priceLabel: 'night' })));
const experiences = [
  { name: 'Sunset Yacht Cruise', tag: 'On the water', price: '₹4,200 / person', meta: '3 hrs · All levels', img: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=900&h=560&fit=crop' },
  { name: 'Pasta Making Masterclass', tag: 'Food & drink', price: '₹2,800 / person', meta: '2.5 hrs · Beginner', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=560&fit=crop' },
  { name: 'Morning Yoga on the Rooftop', tag: 'Wellness', price: '₹1,200 / person', meta: '1.5 hrs · All levels', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&h=560&fit=crop' },
  { name: 'City Photography Walk', tag: 'Arts & culture', price: '₹1,800 / person', meta: '3 hrs · All levels', img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&h=560&fit=crop' },
];
const services = [
  { name: 'Airport Transfer', tag: 'Transport', price: '₹1,500 / ride', meta: 'Up to 4 guests · Any time', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&h=560&fit=crop' },
  { name: 'Private Chef for a Night', tag: 'Food & drink', price: '₹6,500 / session', meta: '3 hrs · Home visit', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=560&fit=crop' },
  { name: 'Guided Sightseeing Tour', tag: 'Local guide', price: '₹2,200 / person', meta: '4 hrs · Small group', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&h=560&fit=crop' },
];
const destinations = [
  { name: 'Goa', dist: '1,456 km', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&h=600&fit=crop' },
  { name: 'Bali', dist: '4,660 km', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=600&fit=crop' },
  { name: 'Maldives', dist: '2,200 km', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&h=600&fit=crop' },
  { name: 'Santorini', dist: '6,300 km', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&h=600&fit=crop' },
  { name: 'Manali', dist: '950 km', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&h=600&fit=crop' },
  { name: 'Coorg', dist: '1,100 km', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop' },
];
const reviews = [
  { text: 'Absolutely loved the place — spotless, stylish, and the host was incredibly responsive. The views from the balcony at sunrise were something else.', name: 'Priya M.', location: 'Mumbai, India', color: '#ff385c' },
  { text: 'The listing photos didn\'t do it justice — it was even better in person. Would book again without a second thought.', name: 'James T.', location: 'London, UK', color: '#7C3AED' },
  { text: 'Stayed for a week with my family. The kids loved the pool and we loved the privacy. Super easy check-in process too.', name: 'Selin K.', location: 'Istanbul, Turkey', color: '#0EA5E9' },
  { text: 'Perfect remote work setup — fast wifi, a great desk, and a beautiful natural setting. Really helped me recharge.', name: 'David W.', location: 'San Francisco, USA', color: '#10B981' },
  { text: 'Discovered this place by accident and ended up extending the trip by 3 nights. That says it all, really.', name: 'Amara O.', location: 'Lagos, Nigeria', color: '#F59E0B' },
  { text: 'Exceptional value for the price. Warm host, clean rooms, and a location that\'s hard to beat. Airbnb found us a gem.', name: 'Yuki S.', location: 'Tokyo, Japan', color: '#EF4444' },
];
let likedIds = new Set();
let activeCategory = 'all';
let currentImgIndex = {};
const nightsFallback = 7;
function renderStars(score) {
  return '<i class="fas fa-star"></i> ' + score.toFixed(2);
}
function formatPrice(value) { return '₹' + value.toLocaleString('en-IN'); }
function makeListingCard(item) {
  currentImgIndex[item.id] = currentImgIndex[item.id] || 0;
  const likedClass = likedIds.has(item.id) ? 'liked' : '';
  const badge = item.badge ? `<div class="card-badge">${item.badge}</div>` : '';
  const priceHtml = `<strong>${formatPrice(item.price)}</strong> <span>for ${item.nights} nights</span>`;
  return `
    <div class="listing-card" data-id="${item.id}">
      <div class="listing-img-wrap">
        ${badge}
        <img src="${item.imgs[0]}" alt="${item.title}" class="listing-main-img" data-id="${item.id}" loading="lazy">
        <button class="wishlist-btn ${likedClass}" data-id="${item.id}"><i class="${likedIds.has(item.id) ? 'fas' : 'far'} fa-heart"></i></button>
        <button class="carousel-control carousel-prev" data-id="${item.id}"><i class="fas fa-chevron-left"></i></button>
        <button class="carousel-control carousel-next" data-id="${item.id}"><i class="fas fa-chevron-right"></i></button>
        <div class="photo-dots">
          ${item.imgs.map((_, index) => `<span class="photo-dot${index === 0 ? ' active' : ''}"></span>`).join('')}
        </div>
      </div>
      <div class="listing-info" data-price="${item.price}">
        <div class="listing-top">
          <div class="listing-loc">${item.title}</div>
          <div class="listing-rating">${renderStars(item.rating)}</div>
        </div>
        <div class="listing-date">${item.location}</div>
        <div class="listing-price">${priceHtml} · ★ ${item.rating}</div>
      </div>
    </div>`;
}
function renderListings(category = null, filtered = null) {
  const container = $('#listingGroupsContainer');
  container.empty();
  if (filtered) {
    const gridId = 'filteredGrid';
    container.html(`
      <div class="section-row-header">
        <div class="section-row-title">${filtered.length} stays found</div>
      </div>
      <div class="scroll-section-wrapper">
        <button class="h-scroll-btn scroll-left hidden-btn" data-target="${gridId}"><i class="fas fa-chevron-left"></i></button>
        <div class="listings-row" id="${gridId}"></div>
        <button class="h-scroll-btn scroll-right" data-target="${gridId}"><i class="fas fa-chevron-right"></i></button>
      </div>`);
    const grid = $(`#${gridId}`);
    if (!filtered.length) {
      grid.html('<div class="empty-state text-center py-5"><i class="fas fa-search fa-2x" style="color:#dcdcdc"></i><p class="mt-3">No stays found.</p></div>');
      return;
    }
    filtered.forEach(item => grid.append(makeListingCard(item)));
    setTimeout(() => updateScrollBtns(gridId), 100);
    return;
  }
  let groups = listingGroups;
  if (category && category !== 'all') groups = listingGroups.map(g => ({ ...g, listings: g.listings.filter(l => l.cat === category || g.id === category) })).filter(g => g.listings.length);
  groups.forEach(group => {
    const gridId = 'grid_' + group.id;
    container.append(`
      <div class="mb-5">
        <div class="section-row-header">
          <div class="section-row-title">${group.title} <a href="#" title="See all"><i class="fas fa-arrow-right"></i></a></div>
        </div>
        <div class="scroll-section-wrapper">
          <button class="h-scroll-btn scroll-left hidden-btn" data-target="${gridId}"><i class="fas fa-chevron-left"></i></button>
          <div class="listings-row" id="${gridId}"></div>
          <button class="h-scroll-btn scroll-right" data-target="${gridId}"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>`);
    const grid = $(`#${gridId}`);
    group.listings.forEach(item => grid.append(makeListingCard(item)));
    const nativeEl = document.getElementById(gridId);
    if (nativeEl) nativeEl.addEventListener('scroll', function () { updateScrollBtns(gridId); });
    setTimeout(() => updateScrollBtns(gridId), 100);
  });
}
function renderServices() {
  const grid = $('#svcGrid');
  grid.empty();
  services.forEach(svc => {
    grid.append(`
      <div class="exp-card svc-card" style="cursor:pointer;" data-svcname="${svc.name.replace(/"/g, '&quot;')}">
        <div class="exp-img"><img src="${svc.img}" alt="${svc.name}" loading="lazy"></div>
        <div class="exp-body">
          <div class="exp-tag">${svc.tag}</div>
          <div class="exp-name">${svc.name}</div>
          <div class="exp-meta">${svc.meta}</div>
          <div class="exp-price">${svc.price}</div>
        </div>
      </div>`);
  });
}
function renderExperiences() {
  const grid = $('#expGrid');
  grid.empty();
  experiences.forEach(exp => {
    grid.append(`
      <div class="exp-card">
        <div class="exp-img"><img src="${exp.img}" alt="${exp.name}" loading="lazy"></div>
        <div class="exp-body">
          <div class="exp-tag">${exp.tag}</div>
          <div class="exp-name">${exp.name}</div>
          <div class="exp-meta">${exp.meta}</div>
          <div class="exp-price">${exp.price}</div>
        </div>
      </div>`);
  });
}
function renderDestinations() {
  const grid = $('#destGrid');
  grid.empty();
  destinations.forEach(dest => {
    grid.append(`
      <div class="dest-card">
        <img src="${dest.img}" alt="${dest.name}" loading="lazy">
        <div class="dest-overlay"></div>
        <div class="dest-content"><div class="dest-name">${dest.name}</div><div class="dest-dist">${dest.dist} away</div></div>
      </div>`);
  });
}
function renderReviews() {
  const grid = $('#revGrid');
  grid.empty();
  reviews.forEach(review => {
    grid.append(`
      <div class="rev-card">
        <div class="rev-stars">★★★★★</div>
        <p class="rev-text">"${review.text}"</p>
        <div class="rev-author">
          <div class="rev-avatar" style="background:${review.color};">${review.name[0]}</div>
          <div>
            <div class="rev-name">${review.name}</div>
            <div class="rev-location">${review.location}</div>
          </div>
        </div>
      </div>`);
  });
}
function showToast(message) {
  const toast = $(`<div class="toast-msg">${message}</div>`);
  $('#toastStack').append(toast);
  setTimeout(() => toast.fadeOut(300, function () { $(this).remove(); }), 2600);
}
function updatePriceDisplay() {
  const total = $('#totalPriceToggle').is(':checked');
  $('.listing-info').each(function () {
    const base = parseFloat($(this).data('price')) || 0;
    const display = total ? `<strong>${formatPrice(base * nightsFallback)}</strong> <span>total (${nightsFallback} nights)</span>` : `<strong>${formatPrice(base)}</strong> <span>/ night</span>`;
    $(this).find('.listing-price').html(display);
  });
}
function updateScrollBtns(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const wrapper = el.closest('.scroll-section-wrapper');
  if (!wrapper) return;
  const leftBtn = wrapper.querySelector('.scroll-left');
  const rightBtn = wrapper.querySelector('.scroll-right');
  if (leftBtn) {
    el.scrollLeft <= 10
      ? leftBtn.classList.add('hidden-btn')
      : leftBtn.classList.remove('hidden-btn');
  }
  if (rightBtn) {
    el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
      ? rightBtn.classList.add('hidden-btn')
      : rightBtn.classList.remove('hidden-btn');
  }
}
function updateAllScrollBtns() {
  document.querySelectorAll('.listings-row, .exp-grid, .dest-grid, .rev-grid').forEach(function (el) {
    if (el.id) updateScrollBtns(el.id);
  });
  ['expGrid', 'svcGrid', 'destGrid', 'revGrid'].forEach(updateScrollBtns);
}
function applyFilters() {
  const minInput = parseFloat($('#minPrice').val()) || 0;
  const maxInput = parseFloat($('#maxPrice').val()) || Infinity;
  const minRating = parseFloat($('#minRating').val()) || 0;
  let filtered = listings.filter(item => item.price >= minInput && item.price <= maxInput && item.rating >= minRating);
  renderListings(null, filtered);
  showToast(`${filtered.length} stays found`);
}
$(document).ready(function () {
  const isExperiencesPage = window.location.pathname.includes('experiences.html');
  const isServicesPage = window.location.pathname.includes('services.html') || document.querySelector('#servicesSection');
  
  if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    renderListings();
    renderDestinations();
    renderReviews();
  } else if (isExperiencesPage) {
    renderExperiences();
    renderServices();
  } else if (isServicesPage) {
    renderServices();
  }
  
  // Profile dropdown toggle
  $('#profileDropTrigger').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
  });
  
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#profileDropTrigger').length) {
      $('#profileDropTrigger').removeClass('active');
    }
  });
  
  // categoryBar removed in new design
  $(document).on('click', '.wishlist-btn', function (e) {
    e.stopPropagation();
    const id = parseInt($(this).data('id'));
    if (likedIds.has(id)) {
      likedIds.delete(id);
      $(this).removeClass('liked').html('<i class="far fa-heart"></i>');
      showToast('Removed from wishlist');
    } else {
      likedIds.add(id);
      $(this).addClass('liked').html('<i class="fas fa-heart"></i>');
      showToast('Saved to wishlist');
    }
  });
  $(document).on('click', '.carousel-next, .carousel-prev', function (e) {
    e.stopPropagation();
    const id = parseInt($(this).data('id'));
    const listing = listings.find(item => item.id === id);
    if (!listing || !listing.imgs) return;
    const direction = $(this).hasClass('carousel-next') ? 1 : -1;
    currentImgIndex[id] = (currentImgIndex[id] + direction + listing.imgs.length) % listing.imgs.length;
    const idx = currentImgIndex[id];
    const wrap = $(this).closest('.listing-img-wrap');
    wrap.find('.listing-main-img').attr('src', listing.imgs[idx]);
    const dots = wrap.find('.photo-dot');
    dots.removeClass('active');
    $(dots[idx]).addClass('active');
  });
  $('#navSearchPill, #navCompactSearch, #mobileSearchTrigger').on('click', function () {
    $('#searchModal').addClass('show');
    setTimeout(() => $('#modalWhere').focus(), 150);
  });
  $('#closeSearch').on('click', function () { $('#searchModal').removeClass('show'); });
  $('#searchModal').on('click', function (e) { if ($(e.target).is('#searchModal')) $(this).removeClass('show'); });
  $('#filtersBtn').on('click', function () { $('#filterModal').addClass('show'); });
  $('#closeFilter').on('click', function () { $('#filterModal').removeClass('show'); });
  $('#filterModal').on('click', function (e) { if ($(e.target).is('#filterModal')) $(this).removeClass('show'); });
  $('#doSearch, #doSearchModal').on('click', function () {
    const where = $('#searchWhere').val().trim() || $('#modalWhere').val().trim();
    if (where) showToast(`🔍 Searching stays in ${where}...`);
    else showToast('Please enter a destination');
    $('#searchModal').removeClass('show');
  });
  $('#applyFilter').on('click', function () {
    applyFilters();
    $('#filterModal').removeClass('show');
  });
  $('#clearFilter').on('click', function () {
    $('#minPrice,#maxPrice,#minRating').val('');
    renderListings(activeCategory);
    $('#filterModal').removeClass('show');
    showToast('Filters cleared');
  });
  $('#scrollUp').on('click', function () { $('html,body').animate({ scrollTop: 0 }, 400); });

  $(window).on('scroll', function () {
    const scrollY = $(window).scrollTop();
    scrollY > 420 ? $('#scrollUp').addClass('visible') : $('#scrollUp').removeClass('visible');
    if (scrollY > 80) {
      $('.main-nav').addClass('scrolled');
    } else {
      $('.main-nav').removeClass('scrolled');
    }
    updateAllScrollBtns();
  });

  // ── HORIZONTAL SCROLL BUTTONS ── (functions defined at top-level scope above)
  $(document).on('scroll', '.listings-row, .exp-grid, .dest-grid, .rev-grid', function () {
    const id = $(this).attr('id');
    if (id) updateScrollBtns(id);
  });
  // jQuery doesn't delegate scroll on non-window, use native
  ['listingsGrid', 'expGrid', 'svcGrid', 'destGrid', 'revGrid'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('scroll', function () { updateScrollBtns(id); });
  });
  $(document).on('click', '.h-scroll-btn', function () {
    const targetId = $(this).data('target');
    const el = document.getElementById(targetId);
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    if ($(this).hasClass('scroll-right')) {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    setTimeout(function () { updateScrollBtns(targetId); }, 400);
  });
  // Init button states after render
  setTimeout(updateAllScrollBtns, 100);

  // Compact nav pill click → scroll to top and show search
  $('#navCompactSearch').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 300, function () {
      $('.search-section').removeClass('hidden');
      $('.main-nav').removeClass('scrolled');
    });
  });

  // Profile dropdown toggle
  $('#profileDropTrigger').on('click', function (e) {
    e.stopPropagation();
    $('#profileDropdown').toggleClass('open');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#profileDropTrigger').length) {
      $('#profileDropdown').removeClass('open');
    }
  });

  $('#heroCta').on('click', function (e) { e.preventDefault(); showToast('✨ Finding your ideal stay...'); setTimeout(function () { $('#categoryBar .category-item').removeClass('active'); $('#categoryBar .category-item[data-cat="beachfront"]').addClass('active'); activeCategory = 'beachfront'; renderListings('beachfront'); $('html,body').animate({ scrollTop: $('#listingsSection').offset().top - 90 }, 500); }, 500); });
  $(document).on('click', '.listing-card', function (e) { if ($(e.target).is('button') || $(e.target).closest('button').length) return; const title = $(this).find('.listing-loc').text(); showToast(`🏠 Viewing: ${title}`); });
  $(document).on('click', '.dest-card', function () { const name = $(this).find('.dest-name').text(); showToast(`🌍 Browsing stays in ${name}`); });
  $(document).on('click', '.exp-card', function () { const name = $(this).find('.exp-name').text(); showToast(`✨ ${name} — opening details`); });

  $('.tab-btn').on('click', function () {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    const tabText = $(this).text().trim();

    if (tabText.includes('Homes')) {
      $('html,body').animate({ scrollTop: 0 }, 400);
    } else if (tabText.includes('Experiences')) {
      $('html,body').animate({
        scrollTop: $('.experience-section').first().offset().top - 90
      }, 400);
    } else if (tabText.includes('Services')) {
      $('html,body').animate({
        scrollTop: $('#servicesSection').offset().top - 90
      }, 400);
    }
  });
});
