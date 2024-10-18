export default function Specifications() {
    const dimensions = [
        { label: 'Size', value: 'Medium' },
        { label: 'Chest (in)', value: '38-40' },
        { label: 'Waist (in)', value: '32-34' },
        { label: 'Length (in)', value: '29' },
    ]

    const details = [
        { label: 'Material', value: '100% Cotton' },
        { label: 'Care Instructions', value: 'Machine Wash Cold' },
        { label: 'Fit', value: 'Regular Fit' },
        { label: 'Color', value: 'Navy Blue' },
    ]

    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
                <h3 className="text-xl font-semibold mb-8">Dimension</h3>
                <table className="w-full">
                    <tbody className="flex flex-col gap-8">
                        {dimensions.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">{item.label}</td>
                                <td className="py-2 text-right">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-8">Details</h3>
                <table className="w-full">
                    <tbody className="flex flex-col gap-8">
                        {details.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-2">{item.label}</td>
                                <td className="py-2 text-right">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}