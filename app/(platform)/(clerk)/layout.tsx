const ClerkLayout = ({children}: {
    children: React.ReactNode
}) =>{
    return (
        <div className="h-full items-center flex justify-center">
            {children}
        </div>
    )
}

export default ClerkLayout