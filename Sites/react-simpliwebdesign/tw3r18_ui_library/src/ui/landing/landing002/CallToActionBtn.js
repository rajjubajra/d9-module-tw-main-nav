import React from 'react'



function CallToActionBtn() {
  return (
    <div className="flex flex-wrap gap-5 z-50">
        <div className="w-40 py-2 bg-sky-700 shadow text-slate-50 text-center cursor-pointer">Private Lesson</div>
        <div className="w-40 py-2 bg-sky-700 shadow text-slate-50 text-center cursor-pointer">Group Lesson</div>
        <div className="w-40 py-2 bg-sky-700 shadow text-slate-50 text-center cursor-pointer">Online Lesson</div>
    </div>
  )
}

export default CallToActionBtn
