/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import SalesPage from './pages/SalesPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isThankYou = pathname.endsWith('/thank-you.html') || pathname.endsWith('/thank-you');

  return isThankYou ? <ThankYouPage /> : <SalesPage />;
}
