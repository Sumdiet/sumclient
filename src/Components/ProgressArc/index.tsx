import ArcProgress from 'react-arc-progress';
import ProgressProps from './type';

export default function ProgressArc(props: ProgressProps) {
    const state = {
        progress: Number(props.currentMacro.kcal) / Number(props.goalMacro.kcal),
        text: `${props.currentMacro.kcal} Kcal`,
      }
    return(
        <ArcProgress
            progress={state.progress}
            text={state.text}
        />
        )
}