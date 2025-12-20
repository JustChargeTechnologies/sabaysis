import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, ArrowRight, ImageIcon } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

interface Product {
  _id: string;
  slug: string;
  title: string;
  body: string;
  image?: string;
}

export function ProductCatalog() {
  usePageTitle('Products');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.PRODUCTS);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
            Our <span className="text-emerald-600">Products</span>
          </h1>
          <p className="text-slate-600 md:text-lg">
            Explore our comprehensive range of high-quality sports infrastructure solutions, from professional turfs to essential equipment.
          </p>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product._id} 
                to={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl border border-slate-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-300">
                      <ImageIcon className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {product.body}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600">
                    View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
             <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="h-8 w-8 text-slate-400" />
             </div>
             <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
             <p className="text-slate-500 mt-1">Please check back later as we update our catalog.</p>
          </div>
        )}
      </div>
    </div>
  );
}
