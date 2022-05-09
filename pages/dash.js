import { useEffect } from "react"

export default function Dash() {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      console.log(data)
    }
    fetchPrices()
  }, []);

  return (
    <div className="Dash">
      Hello Codesandbox 
    </div>
  );
}