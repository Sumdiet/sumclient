import ArcProgress from 'react-arc-progress';
import ProgressProps from './type';
export default function ProgressArc(props: ProgressProps) {
    
    
    // useEffect(() => {
    //     setProgress(Number(props.currentMacro.kcal) / Number(props.goalMacro.kcal));
    //     setText(`${props.currentMacro.kcal} Kcal`)
    // },[text, progress]);

    
    // if(parseFloat(props.currentMacro.kcal) > parseFloat(props.goalMacro.kcal)) {
    //     const teste = parseFloat(props.currentMacro.kcal) - 2800
    //     alert(`Você ultrapassou: ${teste} da sua meta diaria!`)
    // }

    return(
        <ArcProgress
            progress={props.currentMacro.kcal ? Number(props.currentMacro.kcal.replace(',','.')) / Number(props.goalMacro.kcal.replace(',','.')) : 0}
            text={props.currentMacro.kcal? `${parseFloat(props.currentMacro.kcal).toFixed(2)} Kcal`: '0 Kcal'}
            animation={false}
        />
        )
}