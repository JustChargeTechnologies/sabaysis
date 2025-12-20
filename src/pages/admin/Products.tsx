import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, Trash2, Edit2, Plus, Image as ImageIcon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface Product {
  _id: string;
  slug: string;
  title: string;
  body: string;
  image?: string;
  updatedAt: string;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      const res = await fetch(`${API_ENDPOINTS.PRODUCTS}/${slug}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p.slug !== slug));
      }
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  const openSheet = (product: Product | null = null) => {
    setEditingProduct(product);
    setIsSheetOpen(true);
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
          <p className="text-slate-500">Manage your product catalog and offerings.</p>
        </div>
        <Button onClick={() => openSheet()} className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input 
            placeholder="Search products..." 
            className="pl-9 bg-white" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex flex-col space-y-3">
               <Skeleton className="h-[200px] w-full rounded-xl" />
               <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                 <Skeleton className="h-4 w-[200px]" />
               </div>
             </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product._id} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-emerald-100">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                 {product.image ? (
                   <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                 ) : (
                   <div className="flex h-full items-center justify-center text-slate-300">
                      <ImageIcon className="h-10 w-10" />
                   </div>
                 )}
                 <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100 flex gap-1">
                    <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white" onClick={() => openSheet(product)}>
                      <Edit2 className="h-4 w-4 text-slate-600" />
                    </Button>
                    <Button size="icon" variant="destructive" className="h-8 w-8" onClick={() => handleDelete(product.slug)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                 </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 truncate" title={product.title}>{product.title}</h3>
                <code className="mt-1 block text-xs text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded w-fit">{product.slug}</code>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2 min-h-[2.5rem]">{product.body}</p>
              </div>
            </div>
          ))}
          
          {filteredProducts.length === 0 && (
             <div className="col-span-full py-16 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                <div className="flex justify-center mb-4"><PackageIcon className="h-10 w-10 text-slate-300" /></div>
                <p className="font-medium text-lg">No products found</p>
                <p className="text-sm">Try adjusting your search or add a new product.</p>
             </div>
          )}
        </div>
      )}

      <ProductFormSheet 
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        product={editingProduct} 
        onSuccess={() => {
          setIsSheetOpen(false);
          fetchProducts();
        }} 
      />
    </div>
  );
}

function ProductFormSheet({ open, onOpenChange, product, onSuccess }: { open: boolean, onOpenChange: (open: boolean) => void, product: Product | null, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
      slug: '',
      title: '',
      body: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Initialize form when product changes or opens
  useEffect(() => {
    if (open) {
      setFormData({
        slug: product?.slug || '',
        title: product?.title || '',
        body: product?.body || '',
      });
      setImage(null);
    }
  }, [open, product]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setFormData(prev => ({
          ...prev,
          title: val,
          slug: !product && !prev.slug ? val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : prev.slug
      }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      
      const data = new FormData();
      data.append('slug', formData.slug);
      data.append('title', formData.title);
      data.append('body', formData.body);
      if (image) data.append('image', image);

      try {
          const res = await fetch(API_ENDPOINTS.PRODUCTS, {
              method: 'POST',
              body: data, 
          });
          
          if(res.ok) {
              onSuccess();
          } else {
              alert('Failed to save product');
          }
      } catch (e) {
          console.error(e);
          alert('Error saving product');
      } finally {
          setSubmitting(false);
      }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle>{product ? 'Edit Product' : 'Create Product'}</SheetTitle>
          <SheetDescription>
            {product ? 'Make changes to your product details here.' : 'Add a new product to your catalog.'} 
            Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Title</label>
                <Input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. Football Turf"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Slug</label>
                <Input 
                    type="text" 
                    required
                    value={formData.slug}
                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                    className="font-mono bg-slate-50"
                    placeholder="e.g. football-turf"
                />
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Description</label>
                <textarea 
                    required
                    rows={4}
                    value={formData.body}
                    onChange={e => setFormData({ ...formData, body: e.target.value })}
                    className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Brief description..."
                />
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Image</label>
                <div className="flex items-center gap-4">
                  <Input 
                      type="file" 
                      accept="image/*"
                      onChange={e => setImage(e.target.files?.[0] || null)}
                      className="cursor-pointer text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                  />
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                <Button 
                  type="submit" 
                  disabled={submitting}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {product ? 'Save Changes' : 'Create Product'}
                </Button>
            </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

