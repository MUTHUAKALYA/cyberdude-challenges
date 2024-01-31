import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-blue-500 flex justify-between items-center  p-5 text-white font-bold '>
        <div className='flex items-center justify-center space-x-1'>
            <h1 className='text-lg'>Akalya Blogs |</h1>
            <div className='flex gap-x-5 items-center justify-center'>
            {/* Instagram icon */}
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' title='Instagram'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="66" strokeDashoffset="66" d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;132"/></path><path strokeDasharray="26" strokeDashoffset="26" d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="26;0"/></path></g><circle cx="17" cy="7" r="1.5" fill="currentColor" fillOpacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></circle></svg></a>
            {/* Facebook Icon */}
            <a href="https://www.facebook.com/" target='_blank' title="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
            {/* twitter icon */}
            <a href="" target="_blank" title='Threads'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.692 11.124a8.547 8.547 0 0 0-.315-.143c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.873 0-3.431.8-4.39 2.255l1.722 1.181c.716-1.087 1.84-1.318 2.669-1.318h.028c1.031.006 1.81.306 2.313.89c.367.426.612 1.015.733 1.757a13.176 13.176 0 0 0-2.96-.143c-2.977.172-4.892 1.909-4.763 4.322c.065 1.223.675 2.277 1.717 2.964c.88.582 2.015.866 3.194.802c1.558-.085 2.78-.68 3.632-1.766c.647-.825 1.056-1.894 1.237-3.241c.742.448 1.292 1.037 1.596 1.745c.516 1.205.546 3.184-1.068 4.797c-1.415 1.414-3.116 2.025-5.686 2.044c-2.851-.02-5.008-.935-6.41-2.717c-1.313-1.67-1.991-4.08-2.016-7.165c.025-3.085.703-5.496 2.016-7.165c1.402-1.782 3.558-2.696 6.41-2.717c2.871.02 5.065.94 6.521 2.73c.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C18.38 1.2 15.65.024 12.134 0h-.014C8.61.024 5.912 1.205 4.099 3.51c-1.614 2.05-2.446 4.904-2.474 8.482v.016c.028 3.578.86 6.431 2.474 8.482c1.813 2.305 4.511 3.486 8.02 3.51h.015c3.12-.022 5.319-.838 7.13-2.649c2.371-2.368 2.3-5.336 1.518-7.158c-.56-1.307-1.629-2.368-3.09-3.07m-5.387 5.064c-1.305.074-2.66-.512-2.728-1.766c-.05-.93.662-1.969 2.808-2.092c.246-.015.487-.021.724-.021c.78 0 1.508.075 2.171.22c-.247 3.088-1.697 3.59-2.975 3.66"/></svg>
            </a>
            </div>
        </div>
       <div>
      <div>
      <ul className="flex gap-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
      </div>
       </div>
    </div>
  )
}

export default Footer