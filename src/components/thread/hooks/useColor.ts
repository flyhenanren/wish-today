import { ThreadStatus } from "../../../types";
const backgroundColors: Record<ThreadStatus, string> = {
  [ThreadStatus.RUNNABLE]: "#E5F5F5",
  [ThreadStatus.TIMED_WAITING]: "#c4daec",
  [ThreadStatus.WAITING]: "#F6E9DE",
  [ThreadStatus.BLOCKED]: "#F9DFDE",
  [ThreadStatus.NEW]: "#FFFFFF",
  [ThreadStatus.TERMINATED]: "#FFFFFF",
  [ThreadStatus.UNKNOWN]: "#FFFFFF"
};

const foregroundColors: Record<ThreadStatus, string> = {
  [ThreadStatus.RUNNABLE]: "#00A99D",
  [ThreadStatus.TIMED_WAITING]: "#337AB7",
  [ThreadStatus.WAITING]: "#F0AD4E",
  [ThreadStatus.BLOCKED]: "#D9534F",
  [ThreadStatus.NEW]: "#000000",
  [ThreadStatus.TERMINATED]: "#000000",
  [ThreadStatus.UNKNOWN]: "#000000"
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
