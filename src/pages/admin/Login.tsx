import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import logo from '@/assets/ajarlogo.png';
import { Loader2, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.AUTH_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        localStorage.setItem('admin', JSON.stringify(data.admin));
        navigate('/admin/messages');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Connection failed. Please check your network.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100">
        <div className="flex flex-col items-center bg-white pt-10 pb-6 px-8 text-center">
           <img src={logo} alt="Sabaysis Logo" className="h-16 w-auto mb-4" />
           <h2 className="text-2xl font-bold text-slate-900">Admin Portal</h2>
           <p className="mt-2 text-sm text-slate-500">Sign in to manage products and messages</p>
        </div>

        <div className="px-8 pb-10">
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
               <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
               <div className="relative">
                 <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                 <Input 
                   type="email" 
                   className="pl-9 h-10 border-slate-200 focus-visible:ring-emerald-500" 
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)} 
                   placeholder="admin@sabaysis.com"
                   required 
                 />
               </div>
            </div>
            
            <div className="space-y-1.5">
               <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Password</label>
               <div className="relative">
                 <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                 <Input 
                   type="password" 
                   className="pl-9 h-10 border-slate-200 focus-visible:ring-emerald-500" 
                   value={password} 
                   onChange={(e) => setPassword(e.target.value)} 
                   placeholder="••••••••"
                   required 
                 />
               </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 h-10 font-medium text-white transition-all shadow-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Sabaysis Sports & Infra.<br/>All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
