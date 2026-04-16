import { createHeading } from "../components/atoms/index.js"

const renderHeader = () => {
    const header = document.querySelector('#header')
    const h1 = createHeading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    header.append(h1)
}

export default renderHeader