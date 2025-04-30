interface SecondaryCardProps {
    children: React.ReactNode
}

const SecondaryCard = ({ children }: SecondaryCardProps) => (
    <div
        className={
            'flex flex-col gap-5 bg-secondary rounded-[30px] px-4 lg:px-10 py-10'
        }
    >
        {children}
    </div>
)

export default SecondaryCard
