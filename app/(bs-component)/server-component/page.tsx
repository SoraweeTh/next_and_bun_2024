export default function ServerComponent() {
    const items = ['java', 'python', 'c++', 'php'];
    return (
        <div>
            {items.map((item: string, index: number) => (
                <>
                    <div key={index}>{item}</div>
                </>
            ))}
        </div>
    );
}