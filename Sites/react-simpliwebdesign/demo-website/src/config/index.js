

// const url = window.location.href === 'http://localhost:3000/'
// ? 'http://localhost:64856'
// : 'https://simpliwebdesign.com/demo-website/backend/web'

const url = window.location.origin === 'http://localhost:3000' 
? 'http://localhost:3001' 
: 'https://simpliwebdesign.com/demo-website/backend/web'

export const baseurl = {
    URL: url
}