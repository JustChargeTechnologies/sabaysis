import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, Trash2, Mail } from 'lucide-react';

interface Message {
  _id: string;
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.MESSAGES);
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`${API_ENDPOINTS.MESSAGES}/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete message', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) return <div className="flex h-full items-center justify-center"><Loader2 className="animate-spin text-emerald-600" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Messages ({messages.length})</h1>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Subject</th>
                <th className="px-6 py-4 font-semibold">Message</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {messages.map((msg) => (
                <tr key={msg._id} className="hover:bg-slate-50/50">
                  <td className="whitespace-nowrap px-6 py-4 text-xs">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                    {msg.firstName}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-0.5 text-xs">
                       <a href={`mailto:${msg.email}`} className="hover:text-emerald-600 hover:underline">{msg.email}</a>
                       <span>{msg.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">
                    {msg.subject || '-'}
                  </td>
                  <td className="px-6 py-4 min-w-[300px]">
                    <p className="line-clamp-2 md:line-clamp-3">{msg.message}</p>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                      title="Delete Message"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <a
                      href={`mailto:${msg.email}?subject=Re: ${msg.subject || 'Inquiry'}`}
                      className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-emerald-50 hover:text-emerald-500 transition-colors"
                      title="Reply via Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
