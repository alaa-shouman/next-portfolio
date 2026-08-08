import Profile from '@/components/UI/Profile'
import type { SiteSettings } from '@/types/content'

const Header = ({ site }: { site: SiteSettings }) => {
  return (
    <div className='w-full flex items-center justify-center md:justify-between '>
        <Profile site={site} />
    </div>
  )
}

export default Header
