import * as Antd_v5_10_3 from 'antd-v5.10.3';
import * as Antd_v5_11_0 from 'antd-v5.11.0';
import * as Antd_v5_11_5 from 'antd-v5.11.5';
import * as Antd_v5_12_1 from 'antd-v5.12.1';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const ANTDS = [Antd_v5_10_3, Antd_v5_11_0, Antd_v5_11_5, Antd_v5_12_1] as any[];

const Links = () => (
  <div style={{
    display: 'flex',
    gap: '16px',
    fontSize: '1.5rem',
  }}>
    {ANTDS.map(({version}) => <Link to={'/' + version} key={version} reloadDocument>{version}</Link>)}
  </div>
);

const routes = ANTDS.map(({ App, FloatButton, version}) => ({
  path: version,
  element: (
    <App>
      <Links />
      <h1>Version: {version}</h1>
      <FloatButton.BackTop visibilityHeight={0} />
    </App>
  ),
}));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </StrictMode>,
);
