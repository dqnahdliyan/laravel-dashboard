
export default function Header({ children }) {
    return (
        <div className="w-full py-4 border-b shadow">
            <div className="container">
                <h2 className="font-semibold text-xl leading-tight">
                    {children}
                </h2>
            </div>
        </div>
    )
}
