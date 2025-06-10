
import { useState } from 'react';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', title: 'Spirited Away Bath House', description: 'Magical bath house scene' },
  { id: 2, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', title: 'Forest Spirits', description: 'Deer couple in mystical forest' },
  { id: 3, src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop', title: 'Princess Mononoke', description: 'Forest deer companions' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: 'Castle in the Sky', description: 'Floating island landscape' },
  { id: 5, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: 'Kiki\'s Delivery Service', description: 'Witch flying over forest' },
  { id: 6, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', title: 'Howl\'s Moving Castle', description: 'Floating castle in clouds' },
  { id: 7, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: 'My Neighbor Totoro', description: 'Totoro and friends' },
  { id: 8, src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop', title: 'The Wind Rises', description: 'Airplane in sky' },
  { id: 9, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', title: 'Nausicaä Valley', description: 'Wind valley landscape' },
  { id: 10, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop', title: 'Porco Rosso', description: 'Seaplane over ocean' },
  { id: 11, src: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop', title: 'Tales from Earthsea', description: 'Dragon flight scene' },
  { id: 12, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', title: 'The Cat Returns', description: 'Cat kingdom palace' },
  { id: 13, src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', title: 'Grave of Fireflies', description: 'Siblings under stars' },
  { id: 14, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: 'Only Yesterday', description: 'Countryside memories' },
  { id: 15, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop', title: 'Whisper of the Heart', description: 'Antique shop wonder' },
  { id: 16, src: 'https://images.unsplash.com/photo-1486591978090-58e4e37c8dde?w=400&h=300&fit=crop', title: 'Lovers in Forest', description: 'Romantic couple scene' },
  { id: 17, src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=300&fit=crop', title: 'Twin Spirits', description: 'Paired forest guardians' },
  { id: 18, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: 'Arrietty\'s World', description: 'Miniature garden home' },
  { id: 19, src: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&h=300&fit=crop', title: 'From Up on Poppy Hill', description: 'Harbor town view' },
  { id: 20, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: 'The Wind Rises Dreams', description: 'Paper airplane dreams' },
  { id: 21, src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop', title: 'When Marnie Was There', description: 'Marsh house mystery' },
  { id: 22, src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop', title: 'The Red Turtle', description: 'Island paradise' },
  { id: 23, src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', title: 'Your Name', description: 'Comet over town' },
  { id: 24, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop', title: 'Romance in Nature', description: 'Couple among wildlife' },
  { id: 25, src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop', title: 'Forest Companions', description: 'Deer pair in woods' },
  { id: 26, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: 'Totoro Tree', description: 'Giant camphor tree' },
  { id: 27, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: 'Cat Bus Journey', description: 'Magical forest ride' },
  { id: 28, src: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=300&fit=crop', title: 'Calcifer\'s Fire', description: 'Magical flame spirit' },
  { id: 29, src: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop', title: 'Sophie\'s Garden', description: 'Enchanted flower field' },
  { id: 30, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', title: 'Markl\'s Magic', description: 'Young wizard practice' },
  { id: 31, src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', title: 'Turnip Head', description: 'Scarecrow prince' },
  { id: 32, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', title: 'Nature\'s Love', description: 'Wildlife romance scene' },
  { id: 33, src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop', title: 'Spirit Guardians', description: 'Protective forest spirits' },
  { id: 34, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', title: 'Chihiro\'s Journey', description: 'Girl in spirit world' },
  { id: 35, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: 'Haku Dragon', description: 'River spirit transformation' },
  { id: 36, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: 'No Face', description: 'Lonely spirit seeking' },
  { id: 37, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', title: 'Radish Spirit', description: 'Gentle bath house worker' },
  { id: 38, src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop', title: 'Boiler Room', description: 'Kamaji\'s workplace' },
  { id: 39, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', title: 'Train to Swamp', description: 'Mysterious water journey' },
  { id: 40, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop', title: 'Eternal Bond', description: 'Lovers united in nature' },
  { id: 41, src: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop', title: 'Forest Romance', description: 'Deer couple in love' },
  { id: 42, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', title: 'San and Ashitaka', description: 'Warrior princess meeting' },
  { id: 43, src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop', title: 'Forest God', description: 'Ancient nature deity' },
  { id: 44, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop', title: 'Kodama Spirits', description: 'Tree spirit chorus' },
  { id: 45, src: 'https://images.unsplash.com/photo-1486591978090-58e4e37c8dde?w=400&h=300&fit=crop', title: 'Iron Town', description: 'Industrial settlement' },
  { id: 46, src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=300&fit=crop', title: 'Wolf Pack', description: 'Moro and cubs' },
  { id: 47, src: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&h=300&fit=crop', title: 'Boar Gods', description: 'Ancient forest rulers' },
  { id: 48, src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop', title: 'Mystical Partnership', description: 'Spiritual couple bond' },
  { id: 49, src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop', title: 'Twin Souls', description: 'Matching forest spirits' },
  { id: 50, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop', title: 'Sheeta and Pazu', description: 'Young adventurers' },
  { id: 51, src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop', title: 'Laputa Castle', description: 'Sky fortress ruins' },
  { id: 52, src: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&h=300&fit=crop', title: 'Robot Guardian', description: 'Ancient protector' },
  { id: 53, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', title: 'Flying Machine', description: 'Vintage aircraft' },
  { id: 54, src: 'https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop', title: 'Love in Wilderness', description: 'Romantic forest encounter' },
  { id: 55, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', title: 'Gentle Companions', description: 'Peaceful deer duo' }
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
