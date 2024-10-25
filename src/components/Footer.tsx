import Image from "next/image"

function Footer() {
    return (
    <footer>
        <div className="flex justify-between max-w-screen-xl pr-9"> 
            <Image src="/Vector.png" alt="" width={1500} height={350} />
        </div>
        
    </footer>
            
        
    )
}
export default Footer
