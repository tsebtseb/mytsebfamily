declare module 'react-wheel-of-prizes' {
    interface WheelProps {
      segments: string[];
      segColors?: string[];
      winningSegment?: string;
      onFinished?: (winner: string) => void;
      primaryColor?: string;
      contrastColor?: string;
      buttonText?: string;
      isOnlyOnce?: boolean;
      size?: number;
      upDuration?: number;
      downDuration?: number;
      fontFamily?: string;
    }
    
    const WheelComponent: React.FC<WheelProps>;
    export default WheelComponent;
  }