/* ============================================================
   LOVE DAYS – Phúc & Quỳnh Lưu
   Main Application Logic
   ============================================================ */

// ===================== CONFIGURATION =====================

const CONFIG = {
  // Ngày bắt đầu yêu: 14/02/2025 lúc 19:00 (giờ Việt Nam)
  startDate: new Date('2025-02-14T19:00:00+07:00'),
  him: 'Nguyễn Trọng Phúc',
  her: 'Đặng Thị Quỳnh Lưu',
};

// ===================== MILESTONES =====================
// Thêm/sửa các ngày kỉ niệm tại đây
const MILESTONES = [
  {
    id: 'start',
    month: 2, day: 14, year: 2025,
    title: 'Ngày Bắt Đầu Yêu',
    icon: '💕',
    message: 'Ngày mà hai trái tim tìm thấy nhau...',
    type: 'anniversary'
  },
  {
    id: 'womens-day',
    month: 3, day: 8,
    title: 'Ngày Quốc Tế Phụ Nữ',
    icon: '🌷',
    message: 'Chúc em luôn xinh đẹp và hạnh phúc!',
    type: 'holiday'
  },
  {
    id: 'vn-womens',
    month: 10, day: 20,
    title: 'Ngày Phụ Nữ Việt Nam',
    icon: '🌸',
    message: 'Em là phụ nữ tuyệt vời nhất đời anh!',
    type: 'holiday'
  },
  {
    id: 'christmas',
    month: 12, day: 25,
    title: 'Giáng Sinh',
    icon: '🎄',
    message: 'Merry Christmas! Món quà của anh là có em bên cạnh.',
    type: 'holiday'
  },
  {
    id: 'new-year',
    month: 1, day: 1,
    title: 'Năm Mới',
    icon: '🎆',
    message: 'Chúc mừng năm mới! Năm mới thêm yêu nhau hơn nha!',
    type: 'holiday'
  },
  {
    id: 'valentine',
    month: 2, day: 14,
    title: 'Valentine & Kỉ Niệm Ngày Yêu',
    icon: '💝',
    message: 'Happy Valentine! Thêm một năm bên nhau, thêm yêu em nhiều hơn...',
    type: 'anniversary'
  },
  // Thêm sinh nhật anh (sửa ngày phù hợp)
  {
    id: 'his-birthday',
    month: 1, day: 1, // ← SỬA NGÀY SINH NHẬT ANH TẠI ĐÂY
    title: 'Sinh Nhật Anh Phúc',
    icon: '🎂',
    message: 'Happy Birthday anh yêu!',
    type: 'birthday'
  },
  // Thêm sinh nhật em (sửa ngày phù hợp)
  {
    id: 'her-birthday',
    month: 1, day: 2, // ← SỬA NGÀY SINH NHẬT EM TẠI ĐÂY
    title: 'Sinh Nhật Em Lưu',
    icon: '🎂',
    message: 'Happy Birthday em yêu! Chúc em mãi xinh đẹp!',
    type: 'birthday'
  },
];

// ===================== PLAYLIST =====================
// Thêm bài hát: đặt file MP3 vào thư mục audio/ và thêm vào danh sách dưới đây
const PLAYLIST = [
  { title: 'Our Love Song', artist: 'Christina Perri', src: 'audio/Our Love Song.mp3' },
  // Thêm bài hát mới ở đây theo format:
  // { title: 'Tên bài hát', artist: 'Ca sĩ', src: 'audio/ten-file.mp3' },
];

// ===================== TIMELINE DATA =====================
function generateTimeline() {
  const now = new Date();
  const start = CONFIG.startDate;
  const items = [];


  // Dã ngoại Cầu Ba Son - Tháng 3/2025
  items.push({
    date: new Date(2025, 2, 20),
    title: 'Dã Ngoại Cầu Ba Son',
    desc: 'Buổi dã ngoại lãng mạn bên Cầu Ba Son 💛',
    icon: '🌉',
    special: true,
    photos: ['images/memories/bason-1.jpg', 'images/memories/bason-2.jpg', 'images/memories/bason-3.jpg', 'images/memories/bason-4.jpg', 'images/memories/bason-5.jpg']
  });

  // Triển lãm Đại Sứ Quán Pháp - Cuối tháng 3/2025
  items.push({
    date: new Date(2025, 2, 28),
    title: 'Triển Lãm Đại Sứ Quán Pháp',
    desc: 'Cùng nhau xem triển lãm ảnh báo chí tại Đại Sứ Quán Pháp 🎨',
    icon: '🏛️',
    special: true,
    photos: ['images/memories/phap-1.jpg', 'images/memories/phap-2.jpg', 'images/memories/phap-3.jpg']
  });


  // Chuyến đi Đà Lạt - Tháng 6/2025
  items.push({
    date: new Date(2025, 5, 15),
    title: 'Chuyến Đi Đà Lạt',
    desc: 'Chuyến du lịch Đà Lạt — thành phố ngàn hoa 🌸',
    icon: '🏔️',
    special: true,
    photos: ['images/memories/dalat-1.jpg', 'images/memories/dalat-2.jpg', 'images/memories/dalat-3.jpg', 'images/memories/dalat-4.jpg', 'images/memories/dalat-5.jpg', 'images/memories/dalat-6.jpg']
  });

  // Đi Chùa - Tháng 8/2025
  items.push({
    date: new Date(2025, 7, 15),
    title: 'Đi Chùa Cùng Nhau',
    desc: 'Cùng nhau đi chùa cầu bình an',
    icon: '🙏',
    special: true,
    photos: ['images/memories/chua-1.jpg', 'images/memories/chua-2.jpg', 'images/memories/chua-3.jpg', 'images/memories/chua-4.jpg', 'images/memories/chua-5.jpg']
  });




  // Sort by date
  items.sort((a, b) => a.date - b.date);

  // Mark past/future
  items.forEach(item => {
    item.isPast = item.date <= now;
  });

  return items;
}

// ===================== COUNTER =====================
function updateCounter() {
  const now = new Date();
  const diff = now - CONFIG.startDate;

  if (diff < 0) {
    document.getElementById('counter-days').textContent = '0';
    document.getElementById('counter-hours').textContent = '00';
    document.getElementById('counter-minutes').textContent = '00';
    document.getElementById('counter-seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('counter-days').textContent = days;
  document.getElementById('counter-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('counter-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('counter-seconds').textContent = String(seconds).padStart(2, '0');
}

// ===================== NEXT MILESTONE =====================
function updateNextMilestone() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();

  let nearest = null;
  let nearestDays = Infinity;

  for (const m of MILESTONES) {
    // Build the next occurrence of this milestone
    let mDate = new Date(now.getFullYear(), m.month - 1, m.day);

    // If it's today, show it
    if (currentMonth === m.month && currentDay === m.day) {
      document.getElementById('next-milestone-text').textContent =
        `Hôm nay: ${m.icon} ${m.title}!`;
      return;
    }

    // If past this year, use next year
    if (mDate < now) {
      mDate = new Date(now.getFullYear() + 1, m.month - 1, m.day);
    }

    const daysUntil = Math.ceil((mDate - now) / (1000 * 60 * 60 * 24));
    if (daysUntil < nearestDays && daysUntil > 0) {
      nearestDays = daysUntil;
      nearest = m;
    }
  }

  if (nearest) {
    document.getElementById('next-milestone-text').textContent =
      `${nearest.icon} ${nearest.title} — còn ${nearestDays} ngày`;
  }
}

// ===================== FLOATING HEARTS (Canvas) =====================
class HeartParticle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * this.canvas.width;
    this.y = initial
      ? Math.random() * this.canvas.height
      : this.canvas.height + 20;
    this.size = Math.random() * 12 + 6;
    this.speedY = Math.random() * 0.6 + 0.2;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.wobbleAmp = Math.random() * 30 + 10;
    this.wobbleFreq = Math.random() * 0.02 + 0.005;
    this.opacity = Math.random() * 0.25 + 0.05;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.baseX = this.x;
    this.tick = Math.random() * 1000;
    // Color hue from pink to rose
    this.hue = 330 + Math.random() * 30;
    this.sat = 70 + Math.random() * 20;
    this.light = 65 + Math.random() * 20;
  }

  update() {
    this.tick++;
    this.y -= this.speedY;
    this.x = this.baseX + Math.sin(this.tick * this.wobbleFreq) * this.wobbleAmp;
    this.rotation += this.rotSpeed;

    if (this.y < -30) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = `hsl(${this.hue}, ${this.sat}%, ${this.light}%)`;
    this.drawHeartShape(ctx, this.size);
    ctx.restore();
  }

  drawHeartShape(ctx, size) {
    const s = size / 2;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(0, -s * 0.5, -s, -s * 0.5, -s, s * 0.1);
    ctx.bezierCurveTo(-s, s * 0.7, 0, s * 1.1, 0, s * 1.1);
    ctx.bezierCurveTo(0, s * 1.1, s, s * 0.7, s, s * 0.1);
    ctx.bezierCurveTo(s, -s * 0.5, 0, -s * 0.5, 0, s * 0.3);
    ctx.fill();
  }
}

function initParticles() {
  const canvas = document.getElementById('hearts-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hearts = [];
  const count = Math.min(35, Math.floor(window.innerWidth / 40));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Check reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i++) {
    hearts.push(new HeartParticle(canvas));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      h.update();
      h.draw(ctx);
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// ===================== AUDIO PLAYER =====================
class MusicPlayer {
  constructor() {
    this.audio = new Audio();
    this.playlist = PLAYLIST;
    this.currentIndex = 0;
    this.isPlaying = false;

    // DOM
    this.btnPlay = document.getElementById('btn-play');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.trackTitle = document.getElementById('track-title');
    this.trackArtist = document.getElementById('track-artist');
    this.progressFill = document.getElementById('progress-fill');
    this.currentTimeEl = document.getElementById('current-time');
    this.totalTimeEl = document.getElementById('total-time');
    this.volumeSlider = document.getElementById('volume-slider');
    this.visualizer = document.getElementById('visualizer');
    this.progressContainer = document.getElementById('progress-container');

    this.bindEvents();

    if (this.playlist.length > 0) {
      this.loadTrack(0);
    }

    // Set initial volume
    this.audio.volume = 0.7;
  }

  bindEvents() {
    this.btnPlay.addEventListener('click', () => this.toggle());
    this.btnPrev.addEventListener('click', () => this.prev());
    this.btnNext.addEventListener('click', () => this.next());

    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('loadedmetadata', () => {
      this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
    });

    this.volumeSlider.addEventListener('input', (e) => {
      this.audio.volume = e.target.value / 100;
    });

    // Seek
    const progressBar = this.progressContainer.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (this.audio.duration) {
          this.audio.currentTime = pct * this.audio.duration;
        }
      });
    }
  }

  loadTrack(index) {
    if (this.playlist.length === 0) return;
    this.currentIndex = index;
    const track = this.playlist[index];
    this.audio.src = track.src;
    this.trackTitle.textContent = track.title;
    this.trackArtist.textContent = track.artist;
    this.progressFill.style.width = '0%';
    this.currentTimeEl.textContent = '0:00';

    // Update playlist active state
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  toggle() {
    if (this.playlist.length === 0) return;
    this.isPlaying ? this.pause() : this.play();
  }

  async play() {
    if (this.playlist.length === 0) return;
    
    try {
        await this.audio.play();
        this.isPlaying = true;
        this.updatePlayButton();
        this.visualizer.classList.add('playing');
    } catch (err) {
        console.error('Playback failed:', err);
        this.isPlaying = false;
        this.updatePlayButton();
        throw err; // Re-throw for caller to handle
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayButton();
    this.visualizer.classList.remove('playing');
  }

  next() {
    if (this.playlist.length === 0) return;
    const nextIdx = (this.currentIndex + 1) % this.playlist.length;
    this.loadTrack(nextIdx);
    if (this.isPlaying) this.play();
  }

  prev() {
    if (this.playlist.length === 0) return;
    // If > 3s in, restart; else go to previous
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    const prevIdx = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.loadTrack(prevIdx);
    if (this.isPlaying) this.play();
  }

  updateProgress() {
    if (!this.audio.duration) return;
    const pct = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressFill.style.width = pct + '%';
    this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
  }

  updatePlayButton() {
    const iconPlay = this.btnPlay.querySelector('.icon-play');
    const iconPause = this.btnPlay.querySelector('.icon-pause');
    if (this.isPlaying) {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
      this.btnPlay.setAttribute('aria-label', 'Tạm dừng');
    } else {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      this.btnPlay.setAttribute('aria-label', 'Phát nhạc');
    }
  }

  formatTime(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  }
}

// ===================== PLAYLIST UI =====================
function renderPlaylist(player) {
  const container = document.getElementById('playlist-list');
  container.innerHTML = '';

  if (PLAYLIST.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px 24px; text-align: center; color: var(--warm-mid);">
        <p style="font-size: 2rem; margin-bottom: 12px;">🎵</p>
        <p style="font-size: 0.9rem; font-weight: 500;">Chưa có bài hát nào</p>
        <p style="font-size: 0.78rem; margin-top: 6px;">Thêm file MP3 vào thư mục <strong style="color: var(--pink-500);">audio/</strong></p>
      </div>
    `;
    return;
  }

  PLAYLIST.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (i === player.currentIndex ? ' active' : '');
    item.innerHTML = `
      <span class="playlist-item-num">${i + 1}</span>
      <div class="playlist-item-info">
        <span class="playlist-item-title">${track.title}</span>
        <span class="playlist-item-artist">${track.artist}</span>
      </div>
    `;
    item.addEventListener('click', () => {
      player.loadTrack(i);
      player.play();
    });
    container.appendChild(item);
  });
}

function setupPlaylistToggle() {
  const panel = document.getElementById('playlist-panel');
  const openBtn = document.getElementById('playlist-toggle-btn');
  const closeBtn = document.getElementById('playlist-close');

  openBtn.addEventListener('click', () => {
    panel.classList.toggle('open');
    panel.setAttribute('aria-hidden', !panel.classList.contains('open'));
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  });
}

// ===================== MILESTONE DETECTION & MODAL =====================
function checkTodayMilestone() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  for (const m of MILESTONES) {
    if (m.month === month && m.day === day) {
      const dismissKey = `milestone-${m.id}-${now.getFullYear()}-dismissed`;
      if (!sessionStorage.getItem(dismissKey)) {
        setTimeout(() => showMilestoneModal(m), 3500);
        return;
      }
    }
  }
}

function showMilestoneModal(milestone) {
  const modal = document.getElementById('milestone-modal');
  const now = new Date();

  // Populate content
  document.getElementById('modal-title').textContent = `${milestone.icon} ${milestone.title}`;
  document.getElementById('modal-date').textContent = formatDateVN(now);
  document.getElementById('modal-message').textContent = milestone.message;

  // Days count
  const diff = now - CONFIG.startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById('modal-footer-text').textContent =
    `Đã yêu nhau được ${days} ngày 💕`;

  // Create memory carousel placeholders
  renderMemoryCarousel();

  // Create confetti
  createConfetti();

  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  const modal = document.getElementById('milestone-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Mark as dismissed
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  for (const m of MILESTONES) {
    if (m.month === month && m.day === day) {
      sessionStorage.setItem(`milestone-${m.id}-${now.getFullYear()}-dismissed`, 'true');
    }
  }

  // Clear confetti
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
}

function createConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#ff6b9d', '#ffd93d', '#ff8a5c', '#f472b6', '#a78bfa', '#34d399', '#fb923c'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 4) + 's';
    piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
    piece.style.width = (Math.random() * 8 + 4) + 'px';
    piece.style.height = (Math.random() * 8 + 4) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(piece);
  }
}

// ===================== MEMORY PHOTOS =====================
const MEMORIES = [
  { src: 'images/memories/dalat-1.jpg', caption: 'Đà Lạt — 1' },
  { src: 'images/memories/dalat-2.jpg', caption: 'Đà Lạt — 2' },
  { src: 'images/memories/dalat-3.jpg', caption: 'Đà Lạt — 3' },
  { src: 'images/memories/dalat-4.jpg', caption: 'Đà Lạt — 4' },
  { src: 'images/memories/dalat-5.jpg', caption: 'Đà Lạt — 5' },
  { src: 'images/memories/dalat-6.jpg', caption: 'Đà Lạt — 6' },
  // Cầu Ba Son - Tháng 3/2025
  { src: 'images/memories/bason-1.jpg', caption: 'Ba Son — 1' },
  { src: 'images/memories/bason-2.jpg', caption: 'Ba Son — 2' },
  { src: 'images/memories/bason-3.jpg', caption: 'Ba Son — 3' },
  { src: 'images/memories/bason-4.jpg', caption: 'Ba Son — 4' },
  { src: 'images/memories/bason-5.jpg', caption: 'Ba Son — 5' },
  // Đại Sứ Quán Pháp - Cuối tháng 3/2025
  { src: 'images/memories/phap-1.jpg', caption: 'ĐSQ Pháp — 1' },
  { src: 'images/memories/phap-2.jpg', caption: 'ĐSQ Pháp — 2' },
  { src: 'images/memories/phap-3.jpg', caption: 'ĐSQ Pháp — 3' },
  // Đi Chùa - Tháng 8/2025
  { src: 'images/memories/chua-1.jpg', caption: 'Đi Chùa — 1' },
  { src: 'images/memories/chua-2.jpg', caption: 'Đi Chùa — 2' },
  { src: 'images/memories/chua-3.jpg', caption: 'Đi Chùa — 3' },
  { src: 'images/memories/chua-4.jpg', caption: 'Đi Chùa — 4' },
  { src: 'images/memories/chua-5.jpg', caption: 'Đi Chùa — 5' },
  // Video example
  // { type: 'video', src: 'images/memories/video-1.mp4', caption: 'Video Kỷ Niệm' },
  // Thêm ảnh kỷ niệm mới ở đây:
  // { src: 'images/memories/ten-file.jpg', caption: 'Mô tả' },
];

function renderMemoryCarousel() {
  const carousel = document.getElementById('memory-carousel');
  carousel.innerHTML = '';

  if (MEMORIES.length === 0) {
    // Fallback placeholders
    const defaults = [
      { icon: '💕', caption: 'Ngày đầu tiên' },
      { icon: '🌹', caption: 'Hẹn hò' },
      { icon: '📸', caption: 'Kỷ niệm đẹp' },
    ];
    defaults.forEach(mem => {
      const frame = document.createElement('div');
      frame.className = 'memory-frame';
      frame.innerHTML = `
        <div class="memory-placeholder">${mem.icon}</div>
        <p class="memory-caption">${mem.caption}</p>
      `;
      carousel.appendChild(frame);
    });
    return;
  }

  MEMORIES.forEach((mem, idx) => {
    const frame = document.createElement('div');
    frame.className = 'memory-frame';
    frame.style.cursor = 'pointer';
    frame.innerHTML = `
      <img src="${mem.src}" alt="${mem.caption}" class="memory-photo" loading="lazy" onerror="this.parentElement.innerHTML='<div class=memory-placeholder>📸</div><p class=memory-caption>${mem.caption}</p>'" />
      <p class="memory-caption">${mem.caption}</p>
    `;
    frame.addEventListener('click', () => openGallery(idx));
    carousel.appendChild(frame);
  });
}

// ===================== PHOTO GALLERY LIGHTBOX =====================
let galleryCurrentIndex = 0;
let galleryPhotos = MEMORIES; // default to all memories

function openGallery(startIndex, photos) {
  galleryPhotos = photos || MEMORIES;
  galleryCurrentIndex = startIndex || 0;
  
  const lightbox = document.getElementById('gallery-lightbox');
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  renderGalleryDots();
  updateGalleryPhoto();
  
  // Add keyboard listener
  document.addEventListener('keydown', galleryKeyHandler);
}

function closeGallery() {
  const lightbox = document.getElementById('gallery-lightbox');
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', galleryKeyHandler);
}

function updateGalleryPhoto() {
  const photo = document.getElementById('gallery-photo');
  const caption = document.getElementById('gallery-caption');
  const counter = document.getElementById('gallery-counter');
  const mem = galleryPhotos[galleryCurrentIndex];
  
  // Fade out
  photo.classList.add('switching');
  
  setTimeout(() => {
    photo.src = mem.src;
    photo.alt = mem.caption;
    caption.textContent = mem.caption;
    counter.textContent = `${galleryCurrentIndex + 1} / ${galleryPhotos.length}`;
    
    // Update dots
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === galleryCurrentIndex);
    });
    
    // Fade in
    photo.classList.remove('switching');
  }, 200);
}

function galleryPrev() {
  galleryCurrentIndex = (galleryCurrentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  updateGalleryPhoto();
}

function galleryNext() {
  galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryPhotos.length;
  updateGalleryPhoto();
}

function renderGalleryDots() {
  const dotsContainer = document.getElementById('gallery-dots');
  dotsContainer.innerHTML = '';
  galleryPhotos.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === galleryCurrentIndex ? ' active' : '');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ảnh ${i + 1}`);
    dot.addEventListener('click', () => {
      galleryCurrentIndex = i;
      updateGalleryPhoto();
    });
    dotsContainer.appendChild(dot);
  });
}

function galleryKeyHandler(e) {
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft') galleryPrev();
  if (e.key === 'ArrowRight') galleryNext();
}

function setupGalleryEvents() {
  document.getElementById('gallery-close').addEventListener('click', closeGallery);
  document.getElementById('gallery-backdrop').addEventListener('click', closeGallery);
  document.getElementById('gallery-prev').addEventListener('click', galleryPrev);
  document.getElementById('gallery-next').addEventListener('click', galleryNext);
}

// Rewind button — scroll carousel back and forth
function setupRewindButton() {
  const btn = document.getElementById('btn-rewind');
  btn.addEventListener('click', () => {
    const carousel = document.getElementById('memory-carousel');
    // Scroll to end, then back
    carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
    setTimeout(() => {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }, 1200);
  });
}

// ===================== TIMELINE =====================
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  const allItems = generateTimeline();
  container.innerHTML = '';

  // Only show items that have photos
  const items = allItems.filter(item => item.photos && item.photos.length > 0);

  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item special';
    el.dataset.index = i;

    const dateStr = formatDateVN(item.date);
    const heroPhoto = item.photos[0];
    const thumbPhotos = item.photos.slice(1, 4); // show up to 3 thumbnails

    // Build thumbnail HTML
    const thumbsHTML = thumbPhotos.length > 0
      ? `<div class="timeline-thumbs">
          ${thumbPhotos.map((src, ti) => `<img src="${src}" alt="${item.title}" class="timeline-thumb" data-gallery-index="${ti + 1}" loading="lazy" />`).join('')}
          ${item.photos.length > 4 ? `<span class="timeline-thumb-more">+${item.photos.length - 4}</span>` : ''}
        </div>`
      : '';

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card timeline-photo-card">
        <div class="timeline-hero-wrap" data-gallery-index="0">
          <img src="${heroPhoto}" alt="${item.title}" class="timeline-hero-photo" loading="lazy" />
          <div class="timeline-hero-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
          </div>
        </div>
        ${thumbsHTML}
        <div class="timeline-card-body">
          <p class="timeline-date">${dateStr}</p>
          <span class="timeline-icon">${item.icon}</span>
          <h3 class="timeline-card-title">${item.title}</h3>
          <p class="timeline-desc">${item.desc}</p>
          <button class="view-memory-btn view-photos-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            Xem ${item.photos.length} Ảnh
          </button>
        </div>
      </div>
    `;

    // Click hero photo → open gallery
    const heroWrap = el.querySelector('.timeline-hero-wrap');
    heroWrap.addEventListener('click', () => {
      const galleryPhotos = item.photos.map((src, idx) => ({
        src,
        caption: `${item.title} — Ảnh ${idx + 1}`
      }));
      openGallery(0, galleryPhotos);
    });

    // Click thumbnails → open gallery at that index
    el.querySelectorAll('.timeline-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.galleryIndex);
        const galleryPhotos = item.photos.map((src, j) => ({
          src,
          caption: `${item.title} — Ảnh ${j + 1}`
        }));
        openGallery(idx, galleryPhotos);
      });
    });

    // Click "Xem Ảnh" button → open gallery
    el.querySelector('.view-photos-btn').addEventListener('click', () => {
      const galleryPhotos = item.photos.map((src, idx) => ({
        src,
        caption: `${item.title} — Ảnh ${idx + 1}`
      }));
      openGallery(0, galleryPhotos);
    });

    container.appendChild(el);
  });

  // Scroll animation
  setupScrollReveal();
}

// Global function for inline onclick
window.triggerMilestoneForTimeline = function(index) {
  const items = generateTimeline();
  const item = items[index];
  if (!item) return;

  showMilestoneModal({
    id: 'timeline-' + index,
    title: item.title,
    icon: item.icon,
    message: item.desc,
    month: item.date.getMonth() + 1,
    day: item.date.getDate(),
  });
};

// ===================== SCROLL REVEAL =====================
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
}

// ===================== NAVIGATION =====================
function setupNavigation() {
  const links = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('section');

  // Active link on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// ===================== HELPERS =====================
function formatDateVN(date) {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`;
}


// ===================== LOVE QUESTION =====================
function setupLoveQuestion() {
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const modal = document.getElementById('thank-you-modal');
  const btnClose = document.getElementById('btn-close-thank-you');

  // Yes button -> Open modal + confetti
  btnYes.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    createConfetti(document.querySelector('.thank-you-content'));
  });

  // Close modal
  const closeThankYou = () => {
    modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
  };
  btnClose.addEventListener('click', closeThankYou);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeThankYou);

  // No button -> Time-based Quadrant Teleport
  let dodgeCount = 0;
  
  // Custom Random based on Human Time (H:M:S:MS)
  const timeRandom = (salt = 1) => {
    // Get explicit time components
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ms = now.getMilliseconds();
    
    // Formula: mix components to get a chaotic seed
    // We add dodgeCount to ensure it changes even if called multiple times in same ms (unlikely but safe)
    const timeValue = (h * 3600) + (m * 60) + s + (ms / 1000);
    
    // Apply chaotic recursive function or Trig
    // sin(time * salt)
    const chaos = Math.sin((timeValue * 1000) * salt + dodgeCount); 
    
    // Normalize to 0..1
    return (chaos + 1) / 2;
  };
  
  const dodge = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    dodgeCount++;
    
    const container = document.querySelector('.question-card');
    if (!container) return; 
    
    btnNo.style.position = 'fixed';
    btnNo.style.transition = 'none';
    
    const cRect = container.getBoundingClientRect();
    const btnWidth = btnNo.offsetWidth || 120;
    const btnHeight = btnNo.offsetHeight || 50;
    
    // Bounds + 10% overlap
    const expandX = btnWidth * 0.1;
    const expandY = btnHeight * 0.1;
    
    const minX = cRect.left - expandX;
    const maxX = cRect.right - btnWidth + expandX;
    const minY = cRect.top - expandY;
    const maxY = cRect.bottom - btnHeight + expandY;
    
    const centerX = cRect.left + cRect.width / 2;
    const centerY = cRect.top + cRect.height / 2;
    
    // Current Quad
    const rect = btnNo.getBoundingClientRect();
    const currCX = rect.left + rect.width / 2;
    const currCY = rect.top + rect.height / 2;
    
    let currentQuad = 0;
    if (currCX > centerX) currentQuad += 1;
    if (currCY > centerY) currentQuad += 2;
    
    // Pick Random NEXT Quadrant using TIME RANDOM
    let nextQuad;
    // Use factor 0.001 for slow change, or just salt
    const r1 = timeRandom(0.123);
    nextQuad = Math.floor(r1 * 4);
    
    // Ensure different quad
    if (nextQuad === currentQuad) {
        nextQuad = (currentQuad + 1) % 4; // Simple shift if collision
    }
    
    // Calculate Position in Quad
    let qMinX, qMaxX, qMinY, qMaxY;
    
    if (nextQuad % 2 === 0) { // Left
        qMinX = minX;
        qMaxX = centerX - btnWidth; 
        qMaxX = Math.max(qMaxX, qMinX); 
    } else { // Right
        qMinX = centerX;
        qMaxX = maxX; 
    }
    
    if (nextQuad < 2) { // Top
        qMinY = minY;
        qMaxY = centerY - btnHeight;
        qMaxY = Math.max(qMaxY, qMinY);
    } else { // Bottom
        qMinY = centerY;
        qMaxY = maxY;
    }
    
    // Randomize in Quadrant using TIME RANDOM with different salts
    const rX = timeRandom(0.456);
    const rY = timeRandom(0.789);
    
    let newX = qMinX + rX * (qMaxX - qMinX);
    let newY = qMinY + rY * (qMaxY - qMinY);
    
    // Final Clamp
    newX = Math.min(Math.max(newX, minX), maxX);
    newY = Math.min(Math.max(newY, minY), maxY);
    
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
    btnNo.style.transform = 'none';
    
    console.log(`TimeJump: ${currentQuad}->${nextQuad} | Pos ${Math.round(newX)},${Math.round(newY)} | Time ${Date.now()}`);
  };

  btnNo.addEventListener('mouseover', dodge);
  // btnNo.addEventListener('click', dodge); // Removed as per logic
  btnNo.addEventListener('touchstart', dodge);
}

// ===================== CONFETTI =====================
function createConfetti(container) {
  const colors = ['#ec4899', '#f472b6', '#fb7185', '#e11d48', '#fff'];
  const confettiCount = 50;
  
  // Use container or body
  const target = container || document.body;
  
  // Note: we need a position: relative container for absolute confetti
  // If target is modal content, it works.
  
  for (let i = 0; i < confettiCount; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position starting from top
    el.style.left = Math.random() * 100 + '%';
    el.style.top = '-10px';
    
    // Animation properties
    el.style.animationDuration = (Math.random() * 2 + 2) + 's'; // 2-4s
    el.style.animationDelay = (Math.random() * 1) + 's';
    
    // Random shapes
    if (Math.random() > 0.5) {
      el.style.borderRadius = '50%';
      el.style.width = (Math.random() * 8 + 4) + 'px';
      el.style.height = el.style.width;
    } else {
      el.style.width = (Math.random() * 10 + 5) + 'px';
      el.style.height = (Math.random() * 6 + 4) + 'px';
    }
    
    // Create a container for confetti if not exists or just append to target
    let confettiContainer = target.querySelector('.confetti-container');
    if (!confettiContainer) {
      confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      target.appendChild(confettiContainer);
    }
    
    confettiContainer.appendChild(el);
    
    // Remove after animation
    setTimeout(() => {
      el.remove();
    }, 5000);
  }
}

// ===================== INITIALIZATION =====================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Start counter
  updateCounter();
  setInterval(updateCounter, 1000);

  // 2. Next milestone
  updateNextMilestone();

  // 3. Floating hearts
  initParticles();

  // 4. Audio player
  const player = new MusicPlayer();
  renderPlaylist(player);
  setupPlaylistToggle();
  
  // Autoplay on first user interaction (browsers require user gesture)
  // We use a shared handler that tries to play, and only removes itself if successful.
  const tryAutoplay = async () => {
    if (player.isPlaying) {
        // Already playing, clean up
        document.removeEventListener('click', tryAutoplay);
        document.removeEventListener('touchstart', tryAutoplay);
        document.removeEventListener('keydown', tryAutoplay);
        return;
    }
    
    if (PLAYLIST.length > 0) {
      try {
        await player.play();
        // If success, remove listeners
        document.removeEventListener('click', tryAutoplay);
        document.removeEventListener('touchstart', tryAutoplay);
        document.removeEventListener('keydown', tryAutoplay);
      } catch (err) {
        // Autoplay failed (e.g. still no interaction or policy), keep listeners
        console.log('Autoplay deferred:', err);
      }
    }
  };
  
  document.addEventListener('click', tryAutoplay);
  // IOS often needs touchend or click, touchstart might be too early for audio context
  document.addEventListener('touchstart', tryAutoplay, { passive: true });
  document.addEventListener('keydown', tryAutoplay);

  // 5. Timeline
  renderTimeline();

  // 6. Navigation
  setupNavigation();

  // 7. Modal close events
  document.getElementById('modal-close').addEventListener('click', hideModal);
  document.getElementById('modal-backdrop').addEventListener('click', hideModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideModal();
      closeGallery();
      const panel = document.getElementById('playlist-panel');
      panel.classList.remove('open');
      document.getElementById('thank-you-modal').classList.remove('active');
    }
  });

  // 8. Rewind button
  setupRewindButton();

  // 9. Photo gallery lightbox
  setupGalleryEvents();

  // 10. Check today's milestone
  checkTodayMilestone();

  // 11. Love Question
  setupLoveQuestion();
});
