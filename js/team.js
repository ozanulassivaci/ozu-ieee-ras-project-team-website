document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------------------------------------
    // 1. DATA STRUCTURE (ÜYE VERİLERİ)
    // --------------------------------------------------------------------------
    const teamData = [
        {
            name: "Eren Veli Acar 👑",
            role: "Takım Lideri & Elektronik Lideri",
            image: "assets/images/team/eren-veli-acar.jpg",
            primary: "electronic",
            secondary: ["computer", "mechanical"],
            linkedin: "https://linkedin.com/in/erenveliacar",
            weight: { default: 1, electronic: 1, computer: 3, mechanical: 3 } 
        },
        {
            name: "Ozan Ulaş Sıvacı ⭐",
            role: "Yrd. Lider & Bilgisayar Lideri",
            image: "assets/images/team/ozan-ulas-sivaci.jpg",
            primary: "computer",
            secondary: ["electronic", "mechanical"],
            linkedin: "https://linkedin.com/in/ozanulas",
            weight: { default: 2, electronic: 3, computer: 1, mechanical: 3 }
        },
        {
            name: "Toprak Yıldız",
            role: "Makine Ekip Lideri",
            image: "assets/images/team/toprak-yildiz.jpg",
            primary: "mechanical",
            secondary: [],
            linkedin: "",
            weight: { default: 3, electronic: 4, computer: 4, mechanical: 1 }
        },
        // ... Diğer üyeler (Verilerin aynı kalabilir) ...
        {
            name: "Cevdet Döşeme",
            role: "Ekip Üyesi",
            image: "assets/images/team/cevdet-doseme.png",
            primary: "electronic",
            secondary: [],
            linkedin: "#",
            weight: { default: 4, electronic: 2, computer: 4, mechanical: 4 }
        },
        {
            name: "Fatih Eray",
            role: "Ekip Üyesi",
            image: "assets/images/team/fatih-eray.jpg",
            primary: "electronic",
            secondary: ["mechanical"],
            linkedin: "#",
            weight: { default: 4, electronic: 2, computer: 4, mechanical: 3 }
        },
        {
            name: "Fatih Sivaslıoğlu",
            role: "Ekip Üyesi",
            image: "assets/images/team/fatih-sivaslioglu.jpg",
            primary: "electronic",
            secondary: ["mechanical"],
            linkedin: "#",
            weight: { default: 4, electronic: 2, computer: 4, mechanical: 3 }
        },
        {
            name: "Erdem Karaboğa",
            role: "Ekip Üyesi",
            image: "assets/images/team/erdem-karaboga.jpg",
            primary: "electronic",
            secondary: [],
            linkedin: "#",
            weight: { default: 4, electronic: 2, computer: 4, mechanical: 4 }
        },
        {
            name: "Salih",
            role: "Ekip Üyesi",
            image: "assets/images/team/salih.jpg",
            primary: "electronic",
            secondary: ["mechanical"],
            linkedin: "#",
            weight: { default: 4, electronic: 2, computer: 4, mechanical: 3 }
        },
        {
            name: "Yusufcan Temel",
            role: "Ekip Üyesi",
            image: "assets/images/team/yusufcan-temel.jpg",
            primary: "computer",
            secondary: ["electronic"],
            linkedin: "#",
            weight: { default: 4, electronic: 3, computer: 2, mechanical: 4 }
        },
        {
            name: "Elif Sude",
            role: "Ekip Üyesi",
            image: "assets/images/team/elif-sude.jpg",
            primary: "computer",
            secondary: [],
            linkedin: "#",
            weight: { default: 4, electronic: 4, computer: 2, mechanical: 4 }
        },
        {
            name: "Arda Durma",
            role: "Ekip Üyesi",
            image: "assets/images/team/arda-durma.jpg",
            primary: "computer",
            secondary: [],
            linkedin: "#",
            weight: { default: 4, electronic: 4, computer: 2, mechanical: 4 }
        },
        {
            name: "Ege Yavuzerler",
            role: "Ekip Üyesi",
            image: "assets/images/team/ege-yavuzerler.png",
            primary: "mechanical",
            secondary: ["computer"],
            linkedin: "#",
            weight: { default: 4, electronic: 4, computer: 3, mechanical: 2 }
        }
    ];

    // --------------------------------------------------------------------------
    // 2. HTML RENDER
    // --------------------------------------------------------------------------
    const grid = document.querySelector('.team-grid');

    if (grid) {
        grid.innerHTML = ''; // Temizle

        const linkedinIcon = `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;

        teamData.forEach(member => {
            const classes = [member.primary, ...member.secondary].join(' ');
            
            const linkedinHtml = member.linkedin 
                ? `<a href="${member.linkedin}" target="_blank" class="linkedin-btn" aria-label="LinkedIn Profile">${linkedinIcon}</a>`
                : `<span class="linkedin-btn disabled">${linkedinIcon}</span>`;

            const primaryBadge = `<span class="badge badge--primary">${capitalize(translate(member.primary))}</span>`;
            const secondaryBadges = member.secondary.map(skill => 
                `<span class="badge badge--secondary">${capitalize(translate(skill))}</span>`
            ).join('');

            const cardHtml = `
                <div class="team-member ${classes}" 
                     data-weight-default="${member.weight.default}"
                     data-weight-electronic="${member.weight.electronic}"
                     data-weight-computer="${member.weight.computer}"
                     data-weight-mechanical="${member.weight.mechanical}">
                    <div class="member-card">
                        <div class="member-card__image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="member-card__content">
                            <h3 class="member-name">${member.name}</h3>
                            <p class="member-role">${member.role}</p>
                            
                            <div class="member-footer">
                                <div class="member-badges">
                                    ${primaryBadge}
                                    ${secondaryBadges}
                                </div>
                                ${linkedinHtml}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.insertAdjacentHTML('beforeend', cardHtml);
        });

        // --------------------------------------------------------------------------
        // 3. ISOTOPE BAŞLATMA (DÜZELTME BURADA)
        // --------------------------------------------------------------------------
        // imagesLoaded ile görsellerin yüklenmesini bekle
        
        var iso; // Isotope değişkeni

        // imagesLoaded kütüphanesini kullanıyoruz
        imagesLoaded( grid, function() {
            // Görseller yüklendikten sonra Isotope'u başlat
            iso = new Isotope(grid, {
                itemSelector: '.team-member',
                layoutMode: 'fitRows',
                percentPosition: true,
                transitionDuration: '0.6s',
                getSortData: {
                    defaultWeight: '[data-weight-default] parseInt',
                    electronicWeight: '[data-weight-electronic] parseInt',
                    computerWeight: '[data-weight-computer] parseInt',
                    mechanicalWeight: '[data-weight-mechanical] parseInt'
                },
                sortBy: 'defaultWeight'
            });
            
            // Görünümü güncelle (layout'u yeniden hesapla)
            iso.layout();
        });

        // Filtre Butonları
        var filtersElem = document.querySelector('.filters-button-group');
        if (filtersElem) {
            filtersElem.addEventListener('click', function(event) {
                if (!event.target.matches('button')) return;
                
                var filterValue = event.target.getAttribute('data-filter');
                var sortValue = 'defaultWeight'; 

                if (filterValue === '.electronic') sortValue = 'electronicWeight';
                if (filterValue === '.computer') sortValue = 'computerWeight';
                if (filterValue === '.mechanical') sortValue = 'mechanicalWeight';
                
                // Eğer isotope henüz yüklenmediyse hata vermesin
                if (iso) {
                    iso.arrange({ 
                        filter: filterValue,
                        sortBy: sortValue
                    });
                }
                
                filtersElem.querySelectorAll('.button').forEach(b => b.classList.remove('is-checked'));
                event.target.classList.add('is-checked');
            });
        }
    }
});

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function translate(skill) {
    const dict = { 'electronic': 'Elektronik', 'computer': 'Bilgisayar', 'mechanical': 'Makine' };
    return dict[skill] || skill;
}