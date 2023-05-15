import ArcProgress from 'react-arc-progress';
import ProgressProps from './type';
import { useState } from 'react'
import { useEffect } from 'react'
export default function ProgressArc(props: ProgressProps) {
    const [progress, setProgress] = useState(props.currentMacro.kcal ? Number(props.currentMacro.kcal.replace(',','.')) / Number(props.goalMacro.kcal.replace(',','.')) : 0);
    const [text, setText] = useState(`${props.currentMacro.kcal} Kcal`);
    
    // useEffect(() => {
    //     setProgress(Number(props.currentMacro.kcal) / Number(props.goalMacro.kcal));
    //     setText(`${props.currentMacro.kcal} Kcal`)
    // },[text, progress]);

    return(
        <ArcProgress
            progress={progress}
            text={text}
        />
        )
}