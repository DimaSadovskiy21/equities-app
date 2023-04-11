export interface IButton {
    type: string;
    handler: () => void;
    isDisabled?: boolean;
}