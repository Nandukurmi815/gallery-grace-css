import { useState } from 'react';

const photos = [
  { id: 1, src: '/lovable-uploads/fc71cdee-3041-49b5-8bc8-f9a06c23af0d.png', title: 'Rashmii', description: 'Beautiful young couple in traditional attire' },
  { id: 1, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop', title: 'Chihiro - Spirited Away', description: 'Young girl beginning her journey' },
  { id: 2, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop', title: 'Sophie - Howl\'s Moving Castle', description: 'Young woman with magical transformation' },
  { id: 3, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop', title: 'Kiki - Kiki\'s Delivery Service', description: 'Young witch in training' },
  { id: 4, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', title: 'Sheeta - Castle in the Sky', description: 'Sky princess with ancient power' },
  { id: 5, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop', title: 'San - Princess Mononoke', description: 'Wolf girl warrior princess' },
  { id: 6, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop', title: 'Satsuki - My Neighbor Totoro', description: 'Older sister with wonder' },
  { id: 7, src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop', title: 'Mei - My Neighbor Totoro', description: 'Little sister full of joy' },
  { id: 8, src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=300&fit=crop', title: 'Arrietty - The Secret World', description: 'Tiny girl with big dreams' },
  { id: 9, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop', title: 'Shizuku - Whisper of the Heart', description: 'Aspiring young writer' },
  { id: 10, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop', title: 'Fio - Porco Rosso', description: 'Young aircraft engineer' },
  { id: 11, src: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop', title: 'Nausicaä - Valley of Wind', description: 'Environmental princess warrior' },
  { id: 12, src: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=400&h=300&fit=crop', title: 'Umi - From Up on Poppy Hill', description: 'High school girl by the sea' },
  { id: 13, src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=300&fit=crop', title: 'Anna - When Marnie Was There', description: 'Lonely girl seeking friendship' },
  { id: 14, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop', title: 'Pazu - Castle in the Sky', description: 'Young boy mechanic dreamer' },
  { id: 15, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', title: 'Ashitaka - Princess Mononoke', description: 'Cursed prince seeking peace' },
  { id: 16, src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop', title: 'Howl - Young Form', description: 'Magical wizard in youth' },
  { id: 17, src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop', title: 'Seiji - Whisper of the Heart', description: 'Violin maker apprentice' },
  { id: 18, src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=300&fit=crop', title: 'Shun - From Up on Poppy Hill', description: 'Student council president' },
  { id: 19, src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop', title: 'Haru - The Cat Returns', description: 'Girl who saves cats' },
  { id: 20, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', title: 'Tombo - Kiki\'s Delivery Service', description: 'Aviation enthusiast boy' },
  { id: 21, src: 'https://images.unsplash.com/photo-1494790108755-2616c1e945e5?w=400&h=300&fit=crop', title: 'Marnie - When Marnie Was There', description: 'Mysterious blonde girl' },
  { id: 22, src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop', title: 'Therru - Tales from Earthsea', description: 'Scarred girl with hidden power' },
  { id: 23, src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop', title: 'Young Jiro - The Wind Rises', description: 'Dreaming airplane designer' },
  { id: 24, src: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=400&h=300&fit=crop', title: 'Taeko Child - Only Yesterday', description: 'Fifth grade memories' },
  { id: 25, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop', title: 'Young Sophie - Howl\'s Castle', description: 'Before the curse transformation' },
  { id: 26, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop', title: 'Chihiro & Haku', description: 'Young girl meets dragon boy' },
  { id: 27, src: 'https://images.unsplash.com/photo-1491349174775-bbe1c2828755?w=400&h=300&fit=crop', title: 'Kiki & Tombo', description: 'Witch and aviation dreamer' },
  { id: 28, src: 'https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=400&h=300&fit=crop', title: 'Sophie & Howl', description: 'Magical couple in love' },
  { id: 29, src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop', title: 'Sheeta & Pazu', description: 'Sky island adventurers' },
  { id: 30, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop', title: 'San & Ashitaka', description: 'Wolf princess and cursed prince' },
  { id: 31, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop', title: 'Shizuku & Seiji', description: 'Young writers in love' },
  { id: 32, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop', title: 'Umi & Shun', description: 'Harbor hill romance' },
  { id: 33, src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=300&fit=crop', title: 'Anna & Marnie', description: 'Mysterious friendship bond' },
  { id: 34, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop', title: 'Satsuki & Mei', description: 'Sisters exploring together' },
  { id: 35, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop', title: 'Chihiro Train Journey', description: 'Girl on spirit world train' },
  { id: 36, src: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop', title: 'Kiki Flying Practice', description: 'Young witch learning to fly' },
  { id: 37, src: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=400&h=300&fit=crop', title: 'Sophie Garden Work', description: 'Girl tending magical flowers' },
  { id: 38, src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=300&fit=crop', title: 'Sheeta Ancient Song', description: 'Princess singing crystal spell' },
  { id: 39, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop', title: 'San Forest Guardian', description: 'Wolf girl protecting nature' },
  { id: 40, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', title: 'Satsuki Bus Stop', description: 'Sister waiting in rain' },
  { id: 41, src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop', title: 'Mei Flower Path', description: 'Little girl following petals' },
  { id: 42, src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop', title: 'Arrietty Miniature World', description: 'Tiny girl big adventure' },
  { id: 43, src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=300&fit=crop', title: 'Shizuku Library Dreams', description: 'Girl discovering stories' },
  { id: 44, src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop', title: 'Fio Workshop Helper', description: 'Young engineer at work' },
  { id: 45, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', title: 'Nausicaä Wind Valley', description: 'Princess of wind kingdom' },
  { id: 46, src: 'https://images.unsplash.com/photo-1494790108755-2616c1e945e5?w=400&h=300&fit=crop', title: 'Umi Flag Signals', description: 'Girl sending harbor messages' },
  { id: 47, src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=300&fit=crop', title: 'Anna Lonely Artist', description: 'Girl painting by marsh' },
  { id: 48, src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop', title: 'Pazu Mining Town', description: 'Boy from sky mining village' },
  { id: 49, src: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=400&h=300&fit=crop', title: 'Ashitaka Forest Journey', description: 'Prince seeking cure' },
  { id: 50, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop', title: 'Howl Magical Hair', description: 'Wizard styling magical locks' }
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-foreground">
            Studio Ghibli Art Gallery
          </h1>
          <p className="text-center text-muted-foreground mt-2 text-lg">
            Magical moments and romantic scenes from beloved animated films
          </p>
        </div>
      </header>

      {/* Gallery */}
      <main className="container mx-auto px-4 py-8">
        <div className="photo-gallery">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="photo-card group cursor-pointer"
              onClick={() => setSelectedImage(photo.id)}
            >
              <div className="photo-container">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="photo-image"
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <span className="overlay-text">View</span>
                </div>
              </div>
              <div className="photo-info">
                <h3 className="photo-title">{photo.title}</h3>
                <p className="photo-description">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            {photos.find(p => p.id === selectedImage) && (
              <div className="modal-image-container">
                <img
                  src={photos.find(p => p.id === selectedImage)!.src.replace('w=400&h=300', 'w=800&h=600')}
                  alt={photos.find(p => p.id === selectedImage)!.title}
                  className="modal-image"
                />
                <div className="modal-info">
                  <h3 className="modal-title">{photos.find(p => p.id === selectedImage)!.title}</h3>
                  <p className="modal-description">{photos.find(p => p.id === selectedImage)!.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .photo-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .photo-card {
          background: hsl(var(--card));
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 1px solid hsl(var(--border));
        }

        .photo-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .photo-container {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .photo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .photo-card:hover .photo-image {
          transform: scale(1.1);
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .photo-card:hover .photo-overlay {
          opacity: 1;
        }

        .overlay-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border: 2px solid white;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .photo-info {
          padding: 1.5rem;
        }

        .photo-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-bottom: 0.5rem;
        }

        .photo-description {
          color: hsl(var(--muted-foreground));
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 1rem;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: hsl(var(--card));
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 3rem;
          height: 3rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .modal-image-container {
          position: relative;
        }

        .modal-image {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: contain;
        }

        .modal-info {
          padding: 1.5rem;
          border-top: 1px solid hsl(var(--border));
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-bottom: 0.5rem;
        }

        .modal-description {
          color: hsl(var(--muted-foreground));
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .photo-gallery {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 1rem;
          }

          .photo-card {
            margin: 0 0.5rem;
          }

          .modal-content {
            max-width: 95vw;
            max-height: 95vh;
          }

          .modal-image {
            max-height: 60vh;
          }
        }

        @media (max-width: 480px) {
          .photo-gallery {
            gap: 1rem;
          }

          .photo-info {
            padding: 1rem;
          }

          .photo-title {
            font-size: 1.125rem;
          }

          .modal-info {
            padding: 1rem;
          }

          .modal-title {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 768px) {
          .photo-gallery {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .photo-gallery {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .photo-gallery {
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
