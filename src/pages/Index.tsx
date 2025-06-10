
import { useState } from 'react';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop', title: 'Woman with Laptop', description: 'Remote work setup' },
  { id: 2, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', title: 'Gray Laptop', description: 'Modern technology' },
  { id: 3, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', title: 'Circuit Board', description: 'Electronic components' },
  { id: 4, src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop', title: 'Java Programming', description: 'Code on monitor' },
  { id: 5, src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop', title: 'MacBook Pro', description: 'Apple workspace' },
  { id: 6, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', title: 'White Shirt Laptop', description: 'Professional setting' },
  { id: 7, src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop', title: 'White Robot', description: 'AI technology' },
  { id: 8, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop', title: 'Matrix Code', description: 'Digital matrix' },
  { id: 9, src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop', title: 'Laptop Surface', description: 'Minimal workspace' },
  { id: 10, src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop', title: 'Colorful Code', description: 'Web development' },
  { id: 11, src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop', title: 'Video Screens', description: 'Digital display' },
  { id: 12, src: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop', title: 'Stylus Pen', description: 'Digital design' },
  { id: 13, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', title: 'Laptop Computers', description: 'Team workspace' },
  { id: 14, src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', title: 'Glass Table Laptop', description: 'Modern office' },
  { id: 15, src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop', title: 'Blue Light Bulb', description: 'Innovation concept' },
  { id: 16, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop', title: 'MacBook Code', description: 'Programming session' },
  { id: 17, src: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop', title: 'Apple Watch', description: 'Smart technology' },
  { id: 18, src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop', title: 'Office Chair', description: 'Workspace comfort' },
  { id: 19, src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop', title: 'Silver iMac', description: 'Desktop setup' },
  { id: 20, src: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop', title: 'DJI Drone', description: 'Aerial technology' },
  { id: 21, src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop', title: 'Two Deer', description: 'Wildlife nature' },
  { id: 22, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop', title: 'Concrete Bridge', description: 'Waterfall landscape' },
  { id: 23, src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop', title: 'Orange Flowers', description: 'Beautiful blooms' },
  { id: 24, src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop', title: 'Mountain River', description: 'Natural scenery' },
  { id: 25, src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop', title: 'Pine Trees', description: 'Forest photography' },
  { id: 26, src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop', title: 'Trees Daytime', description: 'Low angle view' },
  { id: 27, src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop', title: 'Sunlight Tree', description: 'Light through leaves' },
  { id: 28, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop', title: 'Mountain Rays', description: 'Sunbeam landscape' },
  { id: 29, src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop', title: 'Starry Night', description: 'Night sky stars' },
  { id: 30, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', title: 'Foggy Summit', description: 'Mountain peak' },
  { id: 31, src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop', title: 'Ocean Wave', description: 'Beach shoreline' },
  { id: 32, src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&h=300&fit=crop', title: 'Mountain Alps', description: 'Alpine landscape' },
  { id: 33, src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop', title: 'Rock Formation', description: 'River rocks' },
  { id: 34, src: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=400&h=300&fit=crop', title: 'Desert Sand', description: 'Sand dunes' },
  { id: 35, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop', title: 'Rocky Mountain', description: 'Blue sky landmark' },
  { id: 36, src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop', title: 'Forest Sunbeam', description: 'Forest light' },
  { id: 37, src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop', title: 'Yellow Lights', description: 'Trees with lights' },
  { id: 38, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', title: 'Water Trees', description: 'Surrounded by nature' },
  { id: 39, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop', title: 'Green Mountains', description: 'Aerial view' },
  { id: 40, src: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop', title: 'Rocky Mountain', description: 'Grass and stone' },
  { id: 41, src: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop', title: 'Gray Building', description: 'Low angle architecture' },
  { id: 42, src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop', title: 'Modern Building', description: 'Contemporary design' },
  { id: 43, src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop', title: 'White Concrete', description: 'Minimal architecture' },
  { id: 44, src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop', title: 'Concrete Daytime', description: 'Urban structure' },
  { id: 45, src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop', title: 'Glass Building', description: 'Bottom view' },
  { id: 46, src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop', title: 'Worms Eye View', description: 'Looking up' },
  { id: 47, src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop', title: 'Building Architecture', description: 'Geometric design' },
  { id: 48, src: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop', title: 'White Structure', description: 'Clean lines' },
  { id: 49, src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop', title: 'Urban Building', description: 'City architecture' },
  { id: 50, src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop', title: 'Wavy Structure', description: 'Brown minimalist' },
  { id: 51, src: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=400&h=300&fit=crop', title: 'Glass Roof', description: 'Clear ceiling' },
  { id: 52, src: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=300&fit=crop', title: 'Glass Building', description: 'Worms eye perspective' },
  { id: 53, src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop', title: 'Cathedral Interior', description: 'Empty sacred space' },
  { id: 54, src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop', title: 'Black Red Building', description: 'Bold contrast' },
  { id: 55, src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop', title: 'Blue White Building', description: 'Sky architecture' }
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-foreground">
            Modern Photo Gallery
          </h1>
          <p className="text-center text-muted-foreground mt-2 text-lg">
            Discover beautiful moments captured in time
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

      <style jsx>{`
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
