import { lazy } from 'react';
import Loader from '@/lib/Loader';

// TODO : Implement custom router that support this loading screen feature (or just scrap that idea)
const HomeLazy = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className='dark'>
      <Loader>
        <HomeLazy />
      </Loader>
    </div>
  )
}

export default App