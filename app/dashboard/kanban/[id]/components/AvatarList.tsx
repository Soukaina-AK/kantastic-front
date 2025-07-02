import Image from "next/image"

export const AvatarList = () => {
  return (
    <div className="avatar-group -space-x-3">
  <div className="avatar">
    <div className="w-8">
      <Image width={8} height={8} alt="" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8">
      <Image width={8} height={8} alt="" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-8">
      <Image width={8} height={8} alt="" src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div className="avatar avatar-placeholder">
    <div className="bg-neutral text-neutral-content w-8">
      <span>+99</span>
    </div>
  </div>
</div>
  )
}
