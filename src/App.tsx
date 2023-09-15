import { useState } from "react";
import "./App.css";

function App() {
    const [firstList, setFirstList] = useState("");
    const [secondList, setSecondList] = useState("");

    const [onlyFirst, setOnlyFirst] = useState([""]);
    const [onlySecond, setOnlySecond] = useState([""]);
    const [both, setBoth] = useState([""]);

    function stringToNonEmptyLinesArray(inputString: string) {
        const lines = inputString.split("\n");

        const nonEmptyLines = lines
            .filter((line) => line.trim() !== "")
            .map((line) => line.trim());

        return nonEmptyLines;
    }

    const checkLists = () => {
        const first = stringToNonEmptyLinesArray(firstList);
        const second = stringToNonEmptyLinesArray(secondList);

        setOnlyFirst(first.filter((card) => !second.includes(card)));
        setOnlySecond(second.filter((card) => !first.includes(card)));
        setBoth(first.filter((card) => second.includes(card)));
    };

    return (
        <>
            <div className="title">
                <h1>Mtg list analyzer</h1>
                <button onClick={checkLists}>ANALYZE</button>
            </div>

            <div className="main">
                <div className="half lists-parent">
                    <textarea
                        rows={50}
                        cols={50}
                        value={firstList}
                        onChange={(e) => setFirstList(e.target.value)}
                    />

                    <textarea
                        rows={50}
                        cols={50}
                        value={secondList}
                        onChange={(e) => setSecondList(e.target.value)}
                    />
                </div>

                <div className="half result">
                    <div className="result-section">
                        <h3>Cards in both</h3>

                        <div className="result-list">
                            {both.map((card) => (
                                <div>{card}</div>
                            ))}
                        </div>
                    </div>

                    <div className="result-section">
                        <h3>Cards only in first</h3>

                        <div className="result-list">
                            {onlyFirst.map((card) => (
                                <div>{card}</div>
                            ))}
                        </div>
                    </div>

                    <div className="result-section">
                        <h3>Cards only in second</h3>

                        <div className="result-list">
                            {onlySecond.map((card) => (
                                <div>{card}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
