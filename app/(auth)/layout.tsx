const AuthLayout = ({
  children
} : { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center mt-[120px] h-full">
      {children}
    </div>
  )
}

export default AuthLayout;