import {useState} from "react";
import {useEffect} from "react";
import CatFact, {ICatFact} from './CatFact';
interface IMeowResponse{
    data: string[]
}

export default function CatFactList(){

    const [catFacts, setCatFacts] = useState<ICatFact[]>([]);

    useEffect(() => {
        getCatFacts(2)
    }, [])

    async function getCatFacts(numFacts: number){
        fetch("https://meowfacts.herokuapp.com/?count=3")
        .then(response => response.json() as Promise<IMeowResponse>)
        .then(json => json.data)
        .then(entries => entries.map(entry => {return {fact: entry}}))
        .then(setCatFacts)
    }

    return(
        <>
        <h1>Cat-Fact List</h1>
        {catFacts.map(CatFact)}
        </>
    )
}