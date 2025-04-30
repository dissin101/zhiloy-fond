interface TagProps {
    value: string
}

const Tag = ({ value }: TagProps) => (
    <span
        className={
            'px-5 py-[5px] rounded-[100px] bg-secondary text-on-secondary h-[25px] flex items-center justify-center'
        }
    >
        {value}
    </span>
)

export default Tag
