// script.js - ملف JavaScript النهائي المحسن
// بيانات الفيديوهات الحقيقية من ملف الورد - جميع الفيديوهات الـ 61

const explanationVideos = [
    { id: '0nH445C13eg', title: 'مدخل إلى علم الفيزياء', description: 'مقدمة شاملة لعلم الفيزياء وأهميته في حياتنا اليومية' },
    { id: '6xudJaDfzAk', title: 'الإزاحة والسرعة', description: 'شرح مفاهيم الإزاحة والسرعة والفرق بينهما في الفيزياء' },
    { id: 'URFTz7slR8s', title: 'التسارع والسقوط الحر', description: 'فهم التسارع وقوانين السقوط الحر وتطبيقاتها العملية' },
    { id: 'tNo_0zATSAk', title: 'القوى والوزن وقوانين نيوتن', description: 'دراسة القوى والوزن مع شرح مفصل لقوانين نيوتن للحركة' },
    { id: 'B6vK-bxhW4A', title: 'المتجهات والاحتكاك والحركة المائلة', description: 'شرح المتجهات وقوى الاحتكاك والحركة على المستويات المائلة' },
    { id: 'eq5vl6_oCBo', title: 'المقذوفات والحركة الدائرية', description: 'تحليل حركة المقذوفات والحركة الدائرية وتطبيقاتها' },
    { id: '1bmRpDs7ftg', title: 'الجاذبية', description: 'دراسة قوة الجاذبية وتأثيرها على الأجسام والحركة' },
    { id: 'iEfKDQayHAE', title: 'الحركة الدورانية', description: 'شرح مفاهيم الحركة الدورانية والعزم والقصور الذاتي' },
    { id: 'lK-IdxuMh9s', title: 'الاتزان والدفع والزخم', description: 'دراسة الاتزان الميكانيكي والدفع والزخم وحفظه' },
    { id: 'rxUIrUA4UjE', title: 'الشغل والطاقة', description: 'شرح مفهوم الشغل والطاقة وتحولاتها في الأنظمة الفيزيائية' },
    { id: 'mrTOvBb3UcY', title: 'القدرة والآلات', description: 'فهم القدرة والآلات البسيطة وكفاءة تحويل الطاقة' },
    { id: 'lWxgs34mqgk', title: 'الحرارة', description: 'دراسة الحرارة وطرق انتقالها وتأثيرها على المواد' },
    { id: '0agRfsfe_YI', title: 'تغيرات الحالة والديناميكا الحرارية', description: 'شرح تغيرات حالة المادة وقوانين الديناميكا الحرارية' },
    { id: 'IGwH5jHr-5M', title: 'مبادئ وخصائص الموائع', description: 'دراسة خصائص الموائع وقوانين الضغط في السوائل والغازات' },
    { id: '-AuTIIDpty0', title: 'الاهتزازات والموجات', description: 'شرح خصائص الاهتزازات والموجات وانتشارها في الوسط' },
    { id: '2lndXAQ8QPY', title: 'دوبلر والرنين في الأعمدة الهوائية', description: 'تحليل ظاهرة دوبلر والرنين في الأعمدة الهوائية' },
    { id: 'RfCCPsl9Fq4', title: 'الضوء والألوان', description: 'دراسة طبيعة الضوء وتكوين الألوان ورؤيتها' },
    { id: 'i84NaEcUG3U', title: 'الانعكاس والمرايا', description: 'شرح قوانين الانعكاس وتطبيقاتها في المرايا المختلفة' },
    { id: 'BmdmV4tQP34', title: 'الانكسار والعدسات', description: 'دراسة ظاهرة الانكسار وتطبيقاتها في العدسات البصرية' },
    { id: 'K7Sq3p-j0c0', title: 'التداخل والحيود', description: 'شرح ظاهرتي التداخل والحيود في الأمواج الضوئية' },
    { id: 'SWlHOCMGYP8', title: 'الكهرباء الساكنة', description: 'دراسة الكهرباء الساكنة والشحنات الكهربائية والمجال الكهربائي' },
    { id: 'xX_-RuazAGA', title: 'الكهرباء التيارية', description: 'شرح التيار الكهربائي وقوانينه وتطبيقاته العملية' },
    { id: 'HqAJ7r0gm00', title: 'الدوائر الكهربية', description: 'تحليل الدوائر الكهربية ومكوناتها وقوانينها الأساسية' },
    { id: '7gFgVZC7-IA', title: 'المجالات والقوة المغناطيسية', description: 'دراسة المجالات المغناطيسية وتأثيرها على الشحنات المتحركة' },
    { id: 'Wk9Rt4XSKGk', title: 'الحث الكهرومغناطيسي', description: 'شرح ظاهرة الحث الكهرومغناطيسي وقانون فاراداي' },
    { id: '8c4iYxL2Nzo', title: 'الكهرومغناطيسية', description: 'دراسة العلاقة بين الكهرباء والمغناطيسية وتطبيقاتها' },
    { id: 'X9gFrVaBuaY', title: 'نظرية الكم', description: 'مقدمة إلى نظرية الكم والمبادئ الأساسية للفيزياء الكمية' },
    { id: 'oZ84h1ThePs', title: 'الذرة', description: 'دراسة تركيب الذرة ومكوناتها والنماذج الذرية المختلفة' },
    { id: 'Fd-wQR9Ud6o', title: 'إلكترونيات الحالة الصلبة', description: 'شرح أساسيات إلكترونيات الحالة الصلبة وأشباه الموصلات' },
    { id: '4s9V6wSQfXw', title: 'الفيزياء النووية', description: 'دراسة النواة الذرية والتفاعلات النووية وتطبيقاتها' }
];

const questionsVideos = [
    { id: 'ELEKjPT539M', title: 'تجميعات مدخل علم الفيزياء', description: 'مجموعة شاملة من الأسئلة على أساسيات علم الفيزياء' },
    { id: 'NK7ltgiV6ZQ', title: 'تجميعات الإزاحة والسرعة والتسارع - القسم الأول', description: 'أسئلة متنوعة على الإزاحة والسرعة والتسارع - الجزء الأول' },
    { id: 'Lhj6zBdvxII', title: 'تجميعات الإزاحة والسرعة والتسارع - القسم الثاني', description: 'أسئلة متنوعة على الإزاحة والسرعة والتسارع - الجزء الثاني' },
    { id: 'NDn6Bf58rnA', title: 'تجميعات السقوط الحر', description: 'مجموعة أسئلة تطبيقية على قوانين السقوط الحر' },
    { id: 'lgdcn-lLG18', title: 'تجميعات قوانين نيوتن', description: 'أسئلة متنوعة على قوانين نيوتن للحركة وتطبيقاتها' },
    { id: 'yW0C0vO32q0', title: 'تجميعات المتجهات والاحتكاك', description: 'مجموعة أسئلة على المتجهات وقوى الاحتكاك' },
    { id: '66BIhOQnoVE', title: 'تجميعات المقذوفات والحركة الدائرية', description: 'أسئلة تطبيقية على حركة المقذوفات والحركة الدائرية' },
    { id: 'NSJWULpFUdE', title: 'تجميعات الجاذبية', description: 'مجموعة أسئلة على قوانين الجاذبية وتطبيقاتها' },
    { id: 'ARMSOGhCyQI', title: 'تجميعات الحركة الدورانية', description: 'أسئلة متنوعة على الحركة الدورانية والعزم' },
    { id: 'mWbrqKrO10s', title: 'تجميعات الاتزان والدفع والزخم', description: 'مجموعة أسئلة على الاتزان والدفع وحفظ الزخم' },
    { id: '_5kBZ7g7jwE', title: 'تجميعات الشغل والطاقة - القسم الأول', description: 'أسئلة متنوعة على الشغل والطاقة - الجزء الأول' },
    { id: 'a6lOExKHP2M', title: 'تجميعات الشغل والطاقة - القسم الثاني', description: 'أسئلة متنوعة على الشغل والطاقة - الجزء الثاني' },
    { id: 'aICIliKhy2s', title: 'تجميعات القدرة والآلات', description: 'مجموعة أسئلة على القدرة والآلات البسيطة' },
    { id: 'KH-Ttek14V0', title: 'تجميعات الحرارة والديناميكا الحرارية', description: 'أسئلة متنوعة على الحرارة وقوانين الديناميكا الحرارية' },
    { id: 'dVk5BoVmXpA', title: 'تجميعات الموائع', description: 'مجموعة أسئلة على خصائص الموائع وقوانينها' },
    { id: 'AByBbQwNiC8', title: 'تجميعات الاهتزازات والأمواج', description: 'أسئلة تطبيقية على الاهتزازات وخصائص الأمواج' },
    { id: 'OlerD532ajU', title: 'تجميعات دوبلر والأعمدة الهوائية', description: 'مجموعة أسئلة على ظاهرة دوبلر والرنين في الأعمدة الهوائية' },
    { id: 'wPkKgPDcZDs', title: 'تجميعات الألوان والضوء', description: 'أسئلة متنوعة على طبيعة الضوء وتكوين الألوان' },
    { id: 'TOPMguDMZc4', title: 'تجميعات الانعكاسات والمرايا', description: 'مجموعة أسئلة على قوانين الانعكاس وتطبيقات المرايا' },
    { id: 'qn1TfGZCqa0', title: 'تجميعات الانكسار والعدسات', description: 'أسئلة تطبيقية على الانكسار وتطبيقات العدسات' },
    { id: 'ZTZu_VMOm5U', title: 'تجميعات التداخل والحيود', description: 'مجموعة أسئلة على ظاهرتي التداخل والحيود' },
    { id: 'Ey-bSMIFLks', title: 'تجميعات الكهرباء الساكنة', description: 'أسئلة متنوعة على الكهرباء الساكنة والمجال الكهربائي' },
    { id: 'wkd2r8TRBlU', title: 'تجميعات الكهرباء التيارية', description: 'مجموعة أسئلة على التيار الكهربائي وقوانينه' },
    { id: 'RaAWAMUChpw', title: 'تجميعات الدوائر الكهربية', description: 'أسئلة تطبيقية على تحليل الدوائر الكهربية' },
    { id: 'Gl78DTdLdhg', title: 'تجميعات المجال المغناطيسي', description: 'مجموعة أسئلة على المجالات المغناطيسية وتأثيرها' },
    { id: 'Ed0utPqKvJs', title: 'تجميعات قواعد اليد اليمنى', description: 'أسئلة متنوعة على تطبيق قواعد اليد اليمنى في المغناطيسية' },
    { id: 'KEHFcz4yOpQ', title: 'تجميعات الحث الكهرومغناطيسي', description: 'مجموعة أسئلة على ظاهرة الحث الكهرومغناطيسي' },
    { id: '-Jm_y1_GRpA', title: 'تجميعات الكهرومغناطيسية', description: 'أسئلة تطبيقية على الظواهر الكهرومغناطيسية' },
    { id: '72pzdGScoU8', title: 'تجميعات الذرة', description: 'مجموعة أسئلة على تركيب الذرة والنماذج الذرية' },
    { id: '0PyYNQZy0pc', title: 'تجميعات الإلكترونيات', description: 'أسئلة متنوعة على أساسيات الإلكترونيات وأشباه الموصلات' },
    { id: 'ZVZq_oQxBsE', title: 'تجميعات الفيزياء النووية', description: 'مجموعة أسئلة على النواة الذرية والتفاعلات النووية' }
];

// باقي الكود يبقى كما هو بدون تغيير
// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function () {
    // تهيئة القائمة المتحركة
    initMobileMenu();

    // تهيئة أزرار التبويب
    initTabs();

    // تحميل الفيديوهات
    loadVideos();

    // تهيئة مشغل الفيديو
    initVideoPlayer();

    // إضافة تأثير التمرير السلس
    initSmoothScroll();

    // بدء تأثير الكتابة والمسح
    initTypingEffect();

    // إضافة تأثيرات للقسم "عن الموقع"
    initAboutAnimations();
});

// تأثير الكتابة والمسح
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const text = "نقطة طاقة";
    let isDeleting = false;
    let speed = 100;
    let i = 0;

    function type() {
        const currentText = text.substring(0, i);
        typingText.textContent = currentText;

        if (!isDeleting && i < text.length) {
            i++;
            setTimeout(type, speed);
        } else if (isDeleting && i > 0) {
            i--;
            setTimeout(type, speed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) i = 0;
            setTimeout(type, isDeleting ? 1000 : 500);
        }
    }

    setTimeout(type, 1000);
}

// تهيئة القائمة المتحركة للشاشات الصغيرة
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// تهيئة أزرار التبويب
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // إزالة النشاط من جميع الأزرار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // إضافة النشاط للزر والمحتوى المحدد
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// تحميل الفيديوهات في الشبكة
function loadVideos() {
    const explanationGrid = document.querySelector('#explanation .video-grid');
    const questionsGrid = document.querySelector('#questions .video-grid');

    // تحميل فيديوهات الشرح
    explanationVideos.forEach((video, index) => {
        const videoCard = createVideoCard(video, 'explanation', index);
        if (explanationGrid) explanationGrid.appendChild(videoCard);
    });

    // تحميل فيديوهات الأسئلة
    questionsVideos.forEach((video, index) => {
        const videoCard = createVideoCard(video, 'questions', index);
        if (questionsGrid) questionsGrid.appendChild(videoCard);
    });
}

// إنشاء بطاقة فيديو
function createVideoCard(video, type, index) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-video-id', video.id);
    card.setAttribute('data-video-type', type);
    card.setAttribute('data-video-index', index);

    // استخدام صورة مصغرة من يوتيوب
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">
            <div class="play-icon">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="video-info">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
        </div>
    `;

    return card;
}

// تهيئة مشغل الفيديو
function initVideoPlayer() {
    const modal = document.getElementById('videoModal');
    const closeModal = document.querySelector('.close-modal');
    const openYoutubeLink = document.getElementById('openYoutubeLink');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalDescription = document.getElementById('videoModalDescription');
    const videoModalThumbnail = document.getElementById('videoModalThumbnail');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    // فتح المشغل عند النقر على بطاقة فيديو
    document.addEventListener('click', function (e) {
        const videoCard = e.target.closest('.video-card');
        if (videoCard) {
            const videoId = videoCard.getAttribute('data-video-id');
            const videoTitle = videoCard.querySelector('.video-title').textContent;
            const videoDesc = videoCard.querySelector('.video-description').textContent;

            if (videoId) {
                openVideoModal(videoId, videoTitle, videoDesc);
            }
        }
    });

    // إغلاق المشغل
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    // إغلاق المشغل عند النقر خارج المحتوى
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// فتح نافذة الفيديو
function openVideoModal(videoId, videoTitle, videoDescription) {
    const modal = document.getElementById('videoModal');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalDescription = document.getElementById('videoModalDescription');
    const videoModalThumbnail = document.getElementById('videoModalThumbnail');
    const openYoutubeLink = document.getElementById('openYoutubeLink');

    if (modal) {
        // تحديث عنوان الفيديو
        if (videoModalTitle) {
            videoModalTitle.textContent = videoTitle;
        }

        // تحديث وصف الفيديو
        if (videoModalDescription) {
            videoModalDescription.textContent = videoDescription;
        }

        // تحديث صورة الفيديو
        if (videoModalThumbnail) {
            videoModalThumbnail.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            videoModalThumbnail.alt = videoTitle;
        }

        // تحديث رابط يوتيوب
        if (openYoutubeLink) {
            openYoutubeLink.href = `https://www.youtube.com/watch?v=${videoId}`;
        }

        // عرض النافذة المنبثقة
        modal.style.display = 'flex';
    }
}

// إضافة تأثير التمرير السلس
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // التأكد من أن الرابط يشير إلى قسم في الصفحة
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// تهيئة تأثيرات قسم "عن الموقع"
function initAboutAnimations() {
    // إضافة تأثيرات للعناصر عند التمرير
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إظهار النص تدريجياً
                const paragraphs = entry.target.querySelectorAll('.fade-in');
                paragraphs.forEach((p, index) => {
                    setTimeout(() => {
                        p.classList.add('fade-in');
                    }, index * 300);
                });

                // إظهار الميزات تدريجياً
                const features = entry.target.querySelectorAll('.feature');
                features.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.classList.add('feature-animate');
                    }, index * 200 + 600);
                });
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);
}