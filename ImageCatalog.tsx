import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Download, Share2, Eye } from 'lucide-react';

interface ImageData {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  resolution: string;
  size: string;
  format: string;
}

const ImageCatalog = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images: ImageData[] = [
    {
      id: 'mf14-main-view',
      title: 'MF14 - Vue principale avec filtre',
      description: 'Masque à gaz MF14 complet avec filtre haute efficacité, vue de face montrant la qualité de fabrication et les détails techniques.',
      category: 'product',
      tags: ['masque', 'filtre', 'protection', 'CBRN', 'vue-face'],
      resolution: '1920x1080',
      size: '2.4 MB',
      format: 'PNG'
    },
    {
      id: 'mf14-dimensions',
      title: 'MF14 - Spécifications et dimensions',
      description: 'Vue technique avec dimensions précises (18cm x 24cm), idéale pour les spécifications produit et documentation technique.',
      category: 'technical',
      tags: ['dimensions', 'technique', 'mesures', 'spécifications'],
      resolution: '1920x1080',
      size: '1.8 MB',
      format: 'PNG'
    },
    {
      id: 'mf14-profile-view',
      title: 'MF14 - Vue de profil avec filtre',
      description: 'Vue latérale du masque montrant l\'ergonomie et le système de fixation du filtre, parfait pour les présentations produit.',
      category: 'product',
      tags: ['profil', 'ergonomie', 'filtre', 'design'],
      resolution: '1920x1080',
      size: '2.1 MB',
      format: 'PNG'
    },
    {
      id: 'mf14-filter-detail',
      title: 'MF14 - Détail du système de filtration',
      description: 'Gros plan sur le mécanisme de connexion du filtre, montrant la qualité de l\'ingénierie et la robustesse du système.',
      category: 'detail',
      tags: ['filtre', 'détail', 'mécanisme', 'qualité', 'ingénierie'],
      resolution: '1920x1080',
      size: '1.9 MB',
      format: 'PNG'
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les images', count: images.length },
    { id: 'product', name: 'Vues produit', count: images.filter(img => img.category === 'product').length },
    { id: 'technical', name: 'Spécifications', count: images.filter(img => img.category === 'technical').length },
    { id: 'detail', name: 'Détails techniques', count: images.filter(img => img.category === 'detail').length }
  ];

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const getImagePlaceholder = (imageId: string) => {
    const placeholders = {
      'mf14-main-view': 'bg-gradient-to-br from-gray-700 to-gray-800',
      'mf14-dimensions': 'bg-gradient-to-br from-blue-700 to-blue-800',
      'mf14-profile-view': 'bg-gradient-to-br from-green-700 to-green-800',
      'mf14-filter-detail': 'bg-gradient-to-br from-purple-700 to-purple-800'
    };
    return placeholders[imageId as keyof typeof placeholders] || 'bg-gray-700';
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Catalogue <span className="text-green-400">Images</span> Professionnel
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Collection d'images haute résolution du masque MF14, optimisées pour usage commercial, 
            documentation technique et supports marketing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all group">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <div className={`w-full h-full ${getImagePlaceholder(image.id)} flex items-center justify-center relative`}>
                  {/* Image Placeholder with Professional Styling */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Eye className="h-12 w-12 text-white/70" />
                    </div>
                    <p className="text-white/90 font-semibold text-lg">{image.title}</p>
                    <p className="text-white/60 text-sm mt-2">{image.resolution}</p>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <button
                      onClick={() => openLightbox(image.id)}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === image.category)?.name.replace('Vues ', '').replace('Spécifications', 'Tech').replace('Détails techniques', 'Détail')}
                    </span>
                  </div>

                  {/* Quality Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      HD
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{image.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{image.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {image.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Technical Info */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Résolution</p>
                    <p className="text-white font-medium">{image.resolution}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Taille</p>
                    <p className="text-white font-medium">{image.size}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Format</p>
                    <p className="text-white font-medium">{image.format}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => openLightbox(image.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Aperçu</span>
                  </button>
                  <button className="flex-1 border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Rights */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Droits d'utilisation</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-green-400" />
              </div>
              <h4 className="font-semibold mb-2">Usage Commercial</h4>
              <p className="text-gray-400 text-sm">Autorisé pour sites web, brochures, publicités</p>
            </div>
            <div>
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2">Partage Autorisé</h4>
              <p className="text-gray-400 text-sm">Réseaux sociaux, présentations, documentation</p>
            </div>
            <div>
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2">Haute Qualité</h4>
              <p className="text-gray-400 text-sm">Images optimisées pour impression et web</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">✕</span>
            </button>
            
            <div className={`aspect-video w-full ${getImagePlaceholder(selectedImage)} rounded-xl flex items-center justify-center`}>
              <div className="text-center">
                <div className="w-32 h-32 bg-white/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-16 w-16 text-white/70" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {images.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {images.find(img => img.id === selectedImage)?.resolution} - Qualité professionnelle
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Télécharger HD</span>
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Share2 className="h-5 w-5" />
                <span>Partager</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCatalog;