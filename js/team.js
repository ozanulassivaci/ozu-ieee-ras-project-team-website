document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ISOTOPE FILTRELEME SİSTEMİ
    var grid = document.querySelector('.team-grid');
    
    if (grid) {
        // Isotope'u başlat
        var iso = new Isotope(grid, {
            itemSelector: '.team-member',
            layoutMode: 'fitRows',
            percentPosition: true,
            transitionDuration: '0.4s'
        });
        
        // Filtre Butonlarına Tıklama Olayı
        var filtersElem = document.querySelector('.filters-button-group');
        
        if (filtersElem) {
            filtersElem.addEventListener('click', function(event) {
                // Sadece butona tıklandıysa işlem yap
                if (!event.target.matches('button')) {
                    return;
                }
                
                var filterValue = event.target.getAttribute('data-filter');
                
                // Filtrelemeyi uygula
                iso.arrange({ filter: filterValue });
                
                // Aktif buton sınıfını güncelle
                var buttons = filtersElem.querySelectorAll('.button');
                buttons.forEach(function(btn) {
                    btn.classList.remove('is-checked');
                });
                event.target.classList.add('is-checked');
            });
        }
    }
    
    // 2. GÖRSEL HATA YÖNETİMİ
    // Eğer bir üyenin fotoğrafı bulunamazsa gri bir kutu göster
    const images = document.querySelectorAll('.member-card__image img');
    images.forEach(img => {
        img.onerror = function() {
            // Placehold.co servisini kullanarak geçici görsel oluşturur
            this.src = 'https://placehold.co/400x500/eee/999?text=Görsel+Yok';
        };
    });
});