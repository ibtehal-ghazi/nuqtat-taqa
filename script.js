// script.js - ملف JavaScript النهائي المحسن مع التعديلات
// بيانات الفيديوهات الحقيقية من ملف الورد - جميع الفيديوهات الـ 61

const explanationVideos = [
    { id: '0nH445C13eg', title: '1- مدخل إلى علم الفيزياء', description: 'مقدمة شاملة لعلم الفيزياء وأهميته في حياتنا اليومية' },
    { id: '6xudJaDfzAk', title: '2- الإزاحة والسرعة', description: 'شرح مفاهيم الإزاحة والسرعة والفرق بينهما في الفيزياء' },
    { id: 'URFTz7slR8s', title: '3- التسارع والسقوط الحر', description: 'فهم التسارع وقوانين السقوط الحر وتطبيقاتها العملية' },
    { id: 'tNo_0zATSAk', title: '4- القوى والوزن وقوانين نيوتن', description: 'دراسة القوى والوزن مع شرح مفصل لقوانين نيوتن للحركة' },
    { id: 'B6vK-bxhW4A', title: '5- المتجهات والاحتكاك والحركة المائلة', description: 'شرح المتجهات وقوى الاحتكاك والحركة على المستويات المائلة' },
    { id: 'eq5vl6_oCBo', title: '6- المقذوفات والحركة الدائرية', description: 'تحليل حركة المقذوفات والحركة الدائرية وتطبيقاتها' },
    { id: '1bmRpDs7ftg', title: '7- الجاذبية', description: 'دراسة قوة الجاذبية وتأثيرها على الأجسام والحركة' },
    { id: 'iEfKDQayHAE', title: '8- الحركة الدورانية', description: 'شرح مفاهيم الحركة الدورانية والعزم والقصور الذاتي' },
    { id: 'lK-IdxuMh9s', title: '9- الاتزان والدفع والزخم', description: 'دراسة الاتزان الميكانيكي والدفع والزخم وحفظه' },
    { id: 'rxUIrUA4UjE', title: '10- الشغل والطاقة', description: 'شرح مفهوم الشغل والطاقة وتحولاتها في الأنظمة الفيزيائية' },
    { id: 'mrTOvBb3UcY', title: '11- القدرة والآلات', description: 'فهم القدرة والآلات البسيطة وكفاءة تحويل الطاقة' },
    { id: 'lWxgs34mqgk', title: '12- الحرارة', description: 'دراسة الحرارة وطرق انتقالها وتأثيرها على المواد' },
    { id: '0agRfsfe_YI', title: '13- تغيرات الحالة والديناميكا الحرارية', description: 'شرح تغيرات حالة المادة وقوانين الديناميكا الحرارية' },
    { id: 'IGwH5jHr-5M', title: '14- مبادئ وخصائص الموائع', description: 'دراسة خصائص الموائع وقوانين الضغط في السوائل والغازات' },
    { id: '-AuTIIDpty0', title: '15- الاهتزازات والموجات', description: 'شرح خصائص الاهتزازات والموجات وانتشارها في الوسط' },
    { id: '2lndXAQ8QPY', title: '16- دوبلر والرنين في الأعمدة الهوائية', description: 'تحليل ظاهرة دوبلر والرنين في الأعمدة الهوائية' },
    { id: 'RfCCPsl9Fq4', title: '17- الضوء والألوان', description: 'دراسة طبيعة الضوء وتكوين الألوان ورؤيتها' },
    { id: 'i84NaEcUG3U', title: '18- الانعكاس والمرايا', description: 'شرح قوانين الانعكاس وتطبيقاتها في المرايا المختلفة' },
    { id: 'BmdmV4tQP34', title: '19- الانكسار والعدسات', description: 'دراسة ظاهرة الانكسار وتطبيقاتها في العدسات البصرية' },
    { id: 'K7Sq3p-j0c0', title: '20- التداخل والحيود', description: 'شرح ظاهرتي التداخل والحيود في الأمواج الضوئية' },
    { id: 'SWlHOCMGYP8', title: '21- الكهرباء الساكنة', description: 'دراسة الكهرباء الساكنة والشحنات الكهربائية والمجال الكهربائي' },
    { id: 'xX_-RuazAGA', title: '22- الكهرباء التيارية', description: 'شرح التيار الكهربائي وقوانينه وتطبيقاته العملية' },
    { id: 'HqAJ7r0gm00', title: '23- الدوائر الكهربية', description: 'تحليل الدوائر الكهربية ومكوناتها وقوانينها الأساسية' },
    { id: '7gFgVZC7-IA', title: '24- المجالات والقوة المغناطيسية', description: 'دراسة المجالات المغناطيسية وتأثيرها على الشحنات المتحركة' },
    { id: 'Wk9Rt4XSKGk', title: '25- الحث الكهرومغناطيسي', description: 'شرح ظاهرة الحث الكهرومغناطيسي وقانون فاراداي' },
    { id: '8c4iYxL2Nzo', title: '26- الكهرومغناطيسية', description: 'دراسة العلاقة بين الكهرباء والمغناطيسية وتطبيقاتها' },
    { id: 'X9gFrVaBuaY', title: '27- نظرية الكم', description: 'مقدمة إلى نظرية الكم والمبادئ الأساسية للفيزياء الكمية' },
    { id: 'oZ84h1ThePs', title: '28- الذرة', description: 'دراسة تركيب الذرة ومكوناتها والنماذج الذرية المختلفة' },
    { id: 'Fd-wQR9Ud6o', title: '29- إلكترونيات الحالة الصلبة', description: 'شرح أساسيات إلكترونيات الحالة الصلبة وأشباه الموصلات' },
    { id: '4s9V6wSQfXw', title: '30- الفيزياء النووية', description: 'دراسة النواة الذرية والتفاعلات النووية وتطبيقاتها' }
];

const questionsVideos = [
    { id: 'ELEKjPT539M', title: '1- تجميعات مدخل علم الفيزياء', description: 'مجموعة شاملة من الأسئلة على أساسيات علم الفيزياء' },
    { id: 'NK7ltgiV6ZQ', title: '2- تجميعات الإزاحة والسرعة والتسارع - القسم الأول', description: 'أسئلة متنوعة على الإزاحة والسرعة والتسارع - الجزء الأول' },
    { id: 'Lhj6zBdvxII', title: '3- تجميعات الإزاحة والسرعة والتسارع - القسم الثاني', description: 'أسئلة متنوعة على الإزاحة والسرعة والتسارع - الجزء الثاني' },
    { id: 'NDn6Bf58rnA', title: '4- تجميعات السقوط الحر', description: 'مجموعة أسئلة تطبيقية على قوانين السقوط الحر' },
    { id: 'lgdcn-lLG18', title: '5- تجميعات قوانين نيوتن', description: 'أسئلة متنوعة على قوانين نيوتن للحركة وتطبيقاتها' },
    { id: 'yW0C0vO32q0', title: '6- تجميعات المتجهات والاحتكاك', description: 'مجموعة أسئلة على المتجهات وقوى الاحتكاك' },
    { id: '66BIhOQnoVE', title: '7- تجميعات المقذوفات والحركة الدائرية', description: 'أسئلة تطبيقية على حركة المقذوفات والحركة الدائرية' },
    { id: 'NSJWULpFUdE', title: '8- تجميعات الجاذبية', description: 'مجموعة أسئلة على قوانين الجاذبية وتطبيقاتها' },
    { id: 'ARMSOGhCyQI', title: '9- تجميعات الحركة الدورانية', description: 'أسئلة متنوعة على الحركة الدورانية والعزم' },
    { id: 'mWbrqKrO10s', title: '10- تجميعات الاتزان والدفع والزخم', description: 'مجموعة أسئلة على الاتزان والدفع وحفظ الزخم' },
    { id: '_5kBZ7g7jwE', title: '11- تجميعات الشغل والطاقة - القسم الأول', description: 'أسئلة متنوعة على الشغل والطاقة - الجزء الأول' },
    { id: 'a6lOExKHP2M', title: '12- تجميعات الشغل والطاقة - القسم الثاني', description: 'أسئلة متنوعة على الشغل والطاقة - الجزء الثاني' },
    { id: 'aICIliKhy2s', title: '13- تجميعات القدرة والآلات', description: 'مجموعة أسئلة على القدرة والآلات البسيطة' },
    { id: 'KH-Ttek14V0', title: '14- تجميعات الحرارة والديناميكا الحرارية', description: 'أسئلة متنوعة على الحرارة وقوانين الديناميكا الحرارية' },
    { id: 'dVk5BoVmXpA', title: '15- تجميعات الموائع', description: 'مجموعة أسئلة على خصائص الموائع وقوانينها' },
    { id: 'AByBbQwNiC8', title: '16- تجميعات الاهتزازات والأمواج', description: 'أسئلة تطبيقية على الاهتزازات وخصائص الأمواج' },
    { id: 'OlerD532ajU', title: '17- تجميعات دوبلر والأعمدة الهوائية', description: 'مجموعة أسئلة على ظاهرة دوبلر والرنين في الأعمدة الهوائية' },
    { id: 'wPkKgPDcZDs', title: '18- تجميعات الألوان والضوء', description: 'أسئلة متنوعة على طبيعة الضوء وتكوين الألوان' },
    { id: 'TOPMguDMZc4', title: '19- تجميعات الانعكاسات والمرايا', description: 'مجموعة أسئلة على قوانين الانعكاس وتطبيقات المرايا' },
    { id: 'qn1TfGZCqa0', title: '20- تجميعات الانكسار والعدسات', description: 'أسئلة تطبيقية على الانكسار وتطبيقات العدسات' },
    { id: 'ZTZu_VMOm5U', title: '21- تجميعات التداخل والحيود', description: 'مجموعة أسئلة على ظاهرتي التداخل والحيود' },
    { id: 'Ey-bSMIFLks', title: '22- تجميعات الكهرباء الساكنة', description: 'أسئلة متنوعة على الكهرباء الساكنة والمجال الكهربائي' },
    { id: 'wkd2r8TRBlU', title: '23- تجميعات الكهرباء التيارية', description: 'مجموعة أسئلة على التيار الكهربائي وقوانينه' },
    { id: 'RaAWAMUChpw', title: '24- تجميعات الدوائر الكهربية', description: 'أسئلة تطبيقية على تحليل الدوائر الكهربية' },
    { id: 'Gl78DTdLdhg', title: '25- تجميعات المجال المغناطيسي', description: 'مجموعة أسئلة على المجالات المغناطيسية وتأثيرها' },
    { id: 'Ed0utPqKvJs', title: '26- تجميعات قواعد اليد اليمنى', description: 'أسئلة متنوعة على تطبيق قواعد اليد اليمنى في المغناطيسية' },
    { id: 'KEHFcz4yOpQ', title: '27- تجميعات الحث الكهرومغناطيسي', description: 'مجموعة أسئلة على ظاهرة الحث الكهرومغناطيسي' },
    { id: '-Jm_y1_GRpA', title: '28- تجميعات الكهرومغناطيسية', description: 'أسئلة تطبيقية على الظواهر الكهرومغناطيسية' },
    { id: '72pzdGScoU8', title: '29- تجميعات الذرة', description: 'مجموعة أسئلة على تركيب الذرة والنماذج الذرية' },
    { id: '0PyYNQZy0pc', title: '30- تجميعات الإلكترونيات', description: 'أسئلة متنوعة على أساسيات الإلكترونيات وأشباه الموصلات' },
    { id: 'ZVZq_oQxBsE', title: '31- تجميعات الفيزياء النووية', description: 'مجموعة أسئلة على النواة الذرية والتفاعلات النووية' }
];

// بيانات الأسئلة والإجابات
const questionsData = {
    1: { // الميكانيكا (حالات المادة)
        answers: ['A', 'D', 'A', 'A', 'A', 'B', 'D', 'D', 'D', 'D', 'A', 'B', 'C', 'B', 'C', 'A', 'C', 'C', 'C', 'B', 'D', 'D', 'A', 'A', 'B', 'C', 'A', 'D', 'B', 'A', 'A', 'D', 'A', 'B', 'D', 'A', 'C', 'B', 'A', 'C', 'C', 'D', 'B', 'B', 'D'],
        questionsPerPage: 5
    },
    2: { // الاهتزازات والموجات
        answers: ['A', 'C', 'A', 'A', 'D', 'D', 'C', 'D', 'C', 'D', 'A', 'D'],
        questionsPerPage: 4
    },
    3: { // الصوت
        answers: ['A', 'A', 'A', 'C', 'B', 'C', 'D', 'A'],
        questionsPerPage: 4
    },
    4: { // الضوء
        answers: ['A', 'D', 'D', 'C', 'A', 'A', 'D', 'B', 'D', 'A', 'C', 'B', 'B', 'B'],
        questionsPerPage: 5
    }
};

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

    // تهيئة قسم الاختبارات
    initTestsSection();

    // تهيئة قسم الملخصات
    initSummariesSection();

    // إضافة تحسينات إضافية
    initEnhancements();
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

// تحسينات إضافية
function initEnhancements() {
    // تحسين تحميل الصور
    improveImageLoading();

    // إضافة تأثيرات للعناصر
    addElementEffects();
}

// تحسين تحميل الصور
function improveImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        // إضافة حدث عند تحميل الصورة
        img.addEventListener('load', function () {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });

        // إضافة حدث عند حدوث خطأ في تحميل الصورة
        img.addEventListener('error', function () {
            this.style.display = 'none';
            console.error('فشل في تحميل الصورة:', this.src);
        });

        // محاولة إعادة تحميل الصورة إذا لم تحمل
        if (!img.complete) {
            img.style.opacity = '0';
        } else {
            img.style.opacity = '1';
        }
    });
}

// إضافة تأثيرات للعناصر
function addElementEffects() {
    // تأثيرات لأزرار التبويب
    const tabBtns = document.querySelectorAll('.test-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });

        btn.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// تهيئة قسم الاختبارات
function initTestsSection() {
    // تهيئة أزرار التبويب
    initTestTabs();

    // لا نقوم بتحميل أي أسئلة في البداية
}

// تهيئة أزرار تبويب الاختبارات
function initTestTabs() {
    const testTabBtns = document.querySelectorAll('.test-tab-btn');
    const testTopicContents = document.querySelectorAll('.test-topic-content');
    const noTopicMessage = document.getElementById('no-topic-selected');

    // إخفاء جميع محتويات المواضيع وإظهار رسالة الاختيار
    testTopicContents.forEach(c => {
        c.style.display = 'none';
    });

    // إظهار رسالة اختيار الموضوع في البداية
    if (noTopicMessage) {
        noTopicMessage.style.display = 'block';
    }

    testTabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // إخفاء رسالة اختيار الموضوع
            if (noTopicMessage) {
                noTopicMessage.style.display = 'none';
            }

            // إزالة النشاط من جميع الأزرار وإخفاء جميع المحتويات
            testTabBtns.forEach(b => b.classList.remove('active'));
            testTopicContents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            // إضافة النشاط للزر المحدد
            this.classList.add('active');
            const topicId = this.getAttribute('data-topic');
            const topicContent = document.getElementById(`topic-${topicId}`);

            if (topicContent) {
                topicContent.classList.add('active');
                topicContent.style.display = 'block';

                // تحميل أسئلة الموضوع دائمًا عند النقر على التبويب
                loadTopicQuestions(parseInt(topicId));
            }
        });
    });
}

// تحميل أسئلة موضوع معين
function loadTopicQuestions(topicId) {
    const questionsContainer = document.getElementById(`questions-container-${topicId}`);
    if (!questionsContainer) return;

    // مسح المحتوى الحالي
    questionsContainer.innerHTML = '';

    // التحقق من وجود بيانات للموضوع
    if (!questionsData[topicId]) {
        console.error(`لا توجد بيانات للموضوع ${topicId}`);
        questionsContainer.innerHTML = '<p class="error-message">لا توجد أسئلة متاحة لهذا الموضوع حالياً</p>';
        return;
    }

    const answers = questionsData[topicId].answers;
    const questionsPerPage = questionsData[topicId].questionsPerPage;
    const totalPages = Math.ceil(answers.length / questionsPerPage);

    // تحديث معلومات الصفحة
    updatePageInfo(1, totalPages, topicId);

    // إنشاء صفحات الأسئلة
    for (let page = 0; page < totalPages; page++) {
        const questionPage = document.createElement('div');
        questionPage.className = `question-page ${page === 0 ? 'active' : ''}`;
        questionPage.id = `topic-${topicId}-page-${page + 1}`;

        // حساب نطاق الأسئلة في هذه الصفحة
        const startIndex = page * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, answers.length);

        // إضافة الأسئلة للصفحة
        for (let i = startIndex; i < endIndex; i++) {
            const questionNumber = i + 1;
            const questionCard = createQuestionCard(topicId, questionNumber, i);
            questionPage.appendChild(questionCard);
        }

        questionsContainer.appendChild(questionPage);
    }

    // تهيئة أزرار التنقل
    initNavigationButtons(topicId, totalPages);
}

// إنشاء بطاقة سؤال
function createQuestionCard(topicId, questionNumber, questionIndex) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.setAttribute('data-question-index', questionIndex);

    // مسار صورة السؤال - استخدام مسار نسبي
    const questionImagePath = `q/q${topicId}/${questionNumber}.png`;

    // مسار صورة شرح الإجابة - استخدام مسار نسبي
    const explanationImagePath = `ans/ans${topicId}/${questionNumber}.png`;

    card.innerHTML = `
        <div class="question-header">
            <div class="question-info">
                <h4 class="question-number">سؤال ${questionNumber}</h4>
                <div class="question-score">-/-</div>
            </div>
        </div>
        <div class="question-image">
            <img src="${questionImagePath}" alt="سؤال ${questionNumber}" loading="lazy" style="opacity: 0;">
        </div>
        <div class="question-options">
            <button class="option-btn" data-option="A">
                <span class="option-text">الخيار A</span>
                <span class="option-label">A</span>
            </button>
            <button class="option-btn" data-option="B">
                <span class="option-text">الخيار B</span>
                <span class="option-label">B</span>
            </button>
            <button class="option-btn" data-option="C">
                <span class="option-text">الخيار C</span>
                <span class="option-label">C</span>
            </button>
            <button class="option-btn" data-option="D">
                <span class="option-text">الخيار D</span>
                <span class="option-label">D</span>
            </button>
        </div>
        <div class="explanation" id="explanation-${topicId}-${questionNumber}">
            <h5>شرح الإجابة:</h5>
            <img src="${explanationImagePath}" alt="شرح الإجابة ${questionNumber}" loading="lazy" style="opacity: 0;">
        </div>
    `;

    // إضافة مستمعي الأحداث لأزرار الخيارات
    const optionBtns = card.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            handleAnswerSelection(this, topicId, questionIndex);
        });
    });

    // تحسين تحميل الصور
    const questionImage = card.querySelector('.question-image img');
    const explanationImage = card.querySelector('.explanation img');

    // إضافة حدث تحميل للصور
    if (questionImage) {
        questionImage.addEventListener('load', function () {
            this.style.opacity = '1';
        });
        questionImage.addEventListener('error', function () {
            this.style.display = 'none';
            console.error('فشل في تحميل صورة السؤال:', this.src);
        });
    }

    if (explanationImage) {
        explanationImage.addEventListener('load', function () {
            this.style.opacity = '1';
        });
        explanationImage.addEventListener('error', function () {
            this.style.display = 'none';
            console.error('فشل في تحميل صورة الشرح:', this.src);
        });
    }

    return card;
}

// التعامل مع اختيار الإجابة
function handleAnswerSelection(selectedBtn, topicId, questionIndex) {
    const questionCard = selectedBtn.closest('.question-card');
    const optionBtns = questionCard.querySelectorAll('.option-btn');
    const explanation = questionCard.querySelector('.explanation');
    const questionScore = questionCard.querySelector('.question-score');

    // الإجابة الصحيحة لهذا السؤال
    const correctAnswer = questionsData[topicId].answers[questionIndex];

    // الخيار الذي اختاره المستخدم
    const selectedOption = selectedBtn.getAttribute('data-option');

    // تعطيل جميع أزرار الخيارات بعد الاختيار
    optionBtns.forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });

    // إضافة class selected للزر المختار
    selectedBtn.classList.add('selected');

    // التحقق من الإجابة
    if (selectedOption === correctAnswer) {
        selectedBtn.classList.add('correct');
        // تحديث النقاط إلى 1/1
        if (questionScore) {
            questionScore.textContent = '1/1';
            questionScore.classList.add('correct');
            questionScore.classList.remove('incorrect');
        }
    } else {
        selectedBtn.classList.add('incorrect');
        // تحديث النقاط إلى 0/1
        if (questionScore) {
            questionScore.textContent = '0/1';
            questionScore.classList.add('incorrect');
            questionScore.classList.remove('correct');
        }
        // إظهار الإجابة الصحيحة
        optionBtns.forEach(btn => {
            if (btn.getAttribute('data-option') === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    // إظهار شرح الإجابة
    explanation.classList.add('show');

    // تحديث نتيجة الصفحة
    updatePageScore(topicId);
}

// تهيئة أزرار التنقل
function initNavigationButtons(topicId, totalPages) {
    const prevBtn = document.querySelector(`#topic-${topicId} .prev-btn`);
    const nextBtn = document.querySelector(`#topic-${topicId} .next-btn`);
    const currentPageSpan = document.querySelector(`#topic-${topicId} .current-page`);
    const totalPagesSpan = document.querySelector(`#topic-${topicId} .total-pages`);

    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;

    let currentPage = 1;

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (currentPage > 1) {
                showPage(topicId, currentPage - 1);
                currentPage--;
                updateNavigationButtons(topicId, currentPage, totalPages);

                // التمرير إلى أعلى الصفحة
                scrollToTop();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentPage < totalPages) {
                showPage(topicId, currentPage + 1);
                currentPage++;
                updateNavigationButtons(topicId, currentPage, totalPages);

                // التمرير إلى أعلى الصفحة
                scrollToTop();
            } else {
                // إذا كانت الصفحة الأخيرة، احسب النتيجة
                calculateScore(topicId);
            }
        });
    }

    // تحديث حالة الأزرار في البداية
    updateNavigationButtons(topicId, currentPage, totalPages);
}

// دالة التمرير إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({
        top: document.querySelector('.tests-section').offsetTop - 100,
        behavior: 'smooth'
    });
}

// إظهار صفحة محددة
function showPage(topicId, pageNumber) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll(`#topic-${topicId} .question-page`);
    pages.forEach(page => page.classList.remove('active'));

    // إظهار الصفحة المطلوبة
    const targetPage = document.getElementById(`topic-${topicId}-page-${pageNumber}`);
    if (targetPage) targetPage.classList.add('active');

    // تحديث معلومات الصفحة
    updatePageInfo(pageNumber, Math.ceil(questionsData[topicId].answers.length / questionsData[topicId].questionsPerPage), topicId);
}

// تحديث معلومات الصفحة
function updatePageInfo(currentPage, totalPages, topicId) {
    const currentPageSpan = document.querySelector(`#topic-${topicId} .current-page`);
    const totalPagesSpan = document.querySelector(`#topic-${topicId} .total-pages`);
    const nextBtn = document.querySelector(`#topic-${topicId} .next-btn`);

    if (currentPageSpan) currentPageSpan.textContent = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;

    // تحديث نص زر التالي
    if (nextBtn) {
        if (currentPage === totalPages) {
            nextBtn.textContent = 'إنهاء الاختبار';
        } else {
            nextBtn.textContent = 'التالي';
        }
    }
}

// تحديث أزرار التنقل
function updateNavigationButtons(topicId, currentPage, totalPages) {
    const prevBtn = document.querySelector(`#topic-${topicId} .prev-btn`);
    const nextBtn = document.querySelector(`#topic-${topicId} .next-btn`);

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }

    if (nextBtn) {
        nextBtn.textContent = currentPage === totalPages ? 'إنهاء الاختبار' : 'التالي';
    }
}

// دالة جديدة: تحديث نتيجة الصفحة
function updatePageScore(topicId) {
    const currentPage = document.querySelector(`#topic-${topicId} .question-page.active`);
    if (!currentPage) return;

    const questionCards = currentPage.querySelectorAll('.question-card');
    let correctAnswers = 0;
    const totalQuestions = questionCards.length;

    questionCards.forEach(card => {
        const questionScore = card.querySelector('.question-score');
        if (questionScore && questionScore.textContent === '1/1') {
            correctAnswers++;
        }
    });

    // تحديث عرض نتيجة الصفحة
    let pageScoreElement = currentPage.querySelector('.page-score');
    if (!pageScoreElement) {
        pageScoreElement = document.createElement('div');
        pageScoreElement.className = 'page-score';
        currentPage.appendChild(pageScoreElement);
    }

    pageScoreElement.textContent = `الإجابات الصحيحة: ${correctAnswers} من ${totalQuestions}`;

    // تحديث شريط التقدم
    updateProgressBar(currentPage, correctAnswers, totalQuestions);
}

// دالة جديدة: تحديث شريط التقدم
function updateProgressBar(container, correct, total) {
    let progressBar = container.querySelector('.progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressBar.appendChild(progressFill);
        container.querySelector('.page-score').after(progressBar);
    }

    const progressFill = progressBar.querySelector('.progress-fill');
    const percentage = (correct / total) * 100;
    progressFill.style.width = `${percentage}%`;
}

// حساب النتيجة
function calculateScore(topicId) {
    const topicContent = document.getElementById(`topic-${topicId}`);
    const questionCards = topicContent.querySelectorAll('.question-card');

    let correctAnswers = 0;
    const totalQuestions = questionsData[topicId].answers.length;

    questionCards.forEach(card => {
        const questionIndex = parseInt(card.getAttribute('data-question-index'));
        const correctAnswer = questionsData[topicId].answers[questionIndex];
        const selectedBtn = card.querySelector('.option-btn.selected');

        if (selectedBtn && selectedBtn.getAttribute('data-option') === correctAnswer) {
            correctAnswers++;
        }
    });

    // عرض النتيجة في نفس المكان دون التمرير
    showScore(topicId, correctAnswers, totalQuestions);

    // إضافة التمرير إلى النتائج بعد حسابها
    setTimeout(() => {
        scrollToTestResults();
    }, 300);
}

// التمرير إلى نتائج الاختبار
function scrollToTestResults() {
    const testResults = document.getElementById('test-results');
    if (testResults) {
        // حساب الموقع المناسب للتمرير
        const testsSection = document.querySelector('.tests-section');
        const sectionTop = testsSection.offsetTop;
        const navbarHeight = 80; // ارتفاع الشريط العلوي

        window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: 'smooth'
        });

        // إضافة تأثير مرئي للنتائج
        testResults.style.animation = 'bounceIn 0.8s ease';
    }
}

// عرض النتيجة
function showScore(topicId, correctAnswers, totalQuestions) {
    // إخفاء محتوى الأسئلة
    const topicContent = document.getElementById(`topic-${topicId}`);
    const questionsContainer = topicContent.querySelector('.questions-container');
    const testNavigation = topicContent.querySelector('.test-navigation');

    if (questionsContainer) questionsContainer.style.display = 'none';
    if (testNavigation) testNavigation.style.display = 'none';

    // إظهار نتائج الاختبار
    const testResults = document.getElementById('test-results');
    const scoreValue = testResults.querySelector('.score-value');
    const correctAnswersSpan = testResults.querySelector('.correct-answers');
    const totalQuestionsSpan = testResults.querySelector('.total-questions');
    const scoreCircle = testResults.querySelector('.score-circle');

    // حساب النسبة المئوية بناءً على العدد الحقيقي للأسئلة
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // ✅ التصحيح: عرض النسبة المئوية في scoreValue
    if (scoreValue) scoreValue.textContent = percentage;

    if (correctAnswersSpan) correctAnswersSpan.textContent = correctAnswers;
    if (totalQuestionsSpan) totalQuestionsSpan.textContent = totalQuestions;

    // تحديث دائرة النتيجة
    if (scoreCircle) {
        scoreCircle.style.background = `conic-gradient(var(--primary-color) ${percentage}%, #e9ecef ${percentage}%)`;
    }

    // إعداد أزرار الإجراءات
    const retryBtn = testResults.querySelector('.retry-btn');
    const reviewBtn = testResults.querySelector('.review-btn');

    if (retryBtn) {
        retryBtn.onclick = function () {
            location.reload();
        };
    }

    if (reviewBtn) {
        reviewBtn.onclick = function () {
            testResults.classList.remove('show');
            if (questionsContainer) questionsContainer.style.display = 'block';
            if (testNavigation) testNavigation.style.display = 'flex';
        };
    }

    testResults.classList.add('show');
}

// تهيئة قسم الملخصات
function initSummariesSection() {
    // إضافة مستمعي الأحداث لأزرار معاينة PDF
    const viewPdfBtns = document.querySelectorAll('.view-pdf-btn');
    const pdfModal = document.getElementById('pdfModal');
    const pdfDownloadLink = document.getElementById('pdfDownloadLink');
    const pdfTitle = document.getElementById('pdfTitle');
    const closePdfModal = pdfModal.querySelector('.close-modal');
    const closePdfModalBtn = pdfModal.querySelector('.close-modal-btn');

    viewPdfBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const pdfFile = this.getAttribute('data-pdf');
            const pdfName = this.closest('.summary-card').querySelector('h3').textContent;

            // تحديث عنوان PDF
            if (pdfTitle) {
                pdfTitle.innerHTML = `<i class="fas fa-file-pdf"></i> عرض الملف: <span class="filename">${pdfName}</span>`;
            }

            // إنشاء محتوى نافذة PDF الجديدة
            const pdfViewerContainer = pdfModal.querySelector('.pdf-viewer');
            pdfViewerContainer.innerHTML = `
                <div class="pdf-viewer-card">
                    <object id="pdfObject" data="${pdfFile}" type="application/pdf" class="pdf-object">
                        <div class="pdf-fallback">
                            <p>المتصفح لا يدعم عرض ملف PDF داخل الصفحة</p>
                            <p>يمكنك <a href="${pdfFile}" download class="fallback-link">تحميل الملف</a></p>
                        </div>
                    </object>
                </div>
            `;

            // تحديث رابط التحميل
            if (pdfDownloadLink) {
                pdfDownloadLink.href = pdfFile;
                pdfDownloadLink.download = pdfFile;
            }

            pdfModal.style.display = 'flex';
        });
    });

    // إغلاق نافذة PDF
    if (closePdfModal) {
        closePdfModal.addEventListener('click', function () {
            pdfModal.style.display = 'none';
        });
    }

    if (closePdfModalBtn) {
        closePdfModalBtn.addEventListener('click', function () {
            pdfModal.style.display = 'none';
        });
    }

    // إغلاق النافذة عند النقر خارجها
    window.addEventListener('click', function (event) {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
        }
    });
}
