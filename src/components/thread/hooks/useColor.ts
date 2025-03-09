import { ThreadStatus } from "../../../types";
const backgroundColors: Record<ThreadStatus, string> = {
  [ThreadStatus.Runnable]: "#E5F5F5",
  [ThreadStatus.TimedWaiting]: "#c4daec",
  [ThreadStatus.Waiting]: "#F6E9DE",
  [ThreadStatus.Blocked]: "#F9DFDE",
  [ThreadStatus.New]: "#FFFFFF",
  [ThreadStatus.Terminated]: "#FFFFFF",
  [ThreadStatus.Unknown]: "#FFFFFF"
};

const foregroundColors: Record<ThreadStatus, string> = {
  [ThreadStatus.Runnable]: "#00A99D",
  [ThreadStatus.TimedWaiting]: "#337AB7",
  [ThreadStatus.Waiting]: "#F0AD4E",
  [ThreadStatus.Blocked]: "#D9534F",
  [ThreadStatus.New]: "#000000",
  [ThreadStatus.Terminated]: "#000000",
  [ThreadStatus.Unknown]: "#000000"
};

export default function () {
  
  function getBackground(status: ThreadStatus) {
    return backgroundColors[status]
  }

  function getForeground(status: ThreadStatus) {
    return foregroundColors[status]
  }
  return {
    getBackground,
    getForeground,
  };
}
