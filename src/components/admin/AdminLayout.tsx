import { useNavigate, Navigate, Outlet, useLocation } from 'react-router-dom';
import { MessageSquare, LogOut, Package } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
} from '@/components/ui/sidebar';

export function ProtectedRoute() {
  const admin = localStorage.getItem('admin');
  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
}

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin/login');
  };

  return (
    <SidebarProvider className="h-screen overflow-hidden">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-12 items-center px-2">
            <span className="text-xl font-bold text-slate-900 group-data-[collapsible=icon]:hidden">
              Admin Panel
            </span>
             <span className="text-xl font-bold text-slate-900 hidden group-data-[collapsible=icon]:block">
              A
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={location.pathname === '/admin/messages'}
                onClick={() => navigate('/admin/messages')}
                tooltip="Messages"
              >
                <MessageSquare />
                <span>Messages</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                 isActive={location.pathname === '/admin/products'}
                 onClick={() => navigate('/admin/products')}
                 tooltip="Products"
              >
                <Package />
                <span>Products</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:hidden">
             <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs shrink-0">
               A
             </div>
             <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-slate-900 truncate">Admin</p>
             </div>
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
               <SidebarMenuButton onClick={handleLogout} tooltip="Sign Out" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                  <LogOut />
                  <span>Sign Out</span>
               </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset className="overflow-y-auto">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-4 sticky top-0 z-10">
           <SidebarTrigger className="-ml-1" />
           <div className="h-4 w-px bg-slate-200 mx-2" />
           <h1 className="text-sm font-medium text-slate-500">Dashboard</h1>
        </header>
        <div className="flex-1 p-4 md:p-8 pt-6">
           <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
