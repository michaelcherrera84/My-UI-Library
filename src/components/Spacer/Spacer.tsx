import "./Spacer.css";

type Props = {
    /** The height of the spacer in pixels */
    h?: number;
    /** The width of the spacer in pixels */
    w?: number;
};

/**
 * This is a simple component that simply takes up space. It's helpful in
 * situations when there is a preexisting layout and you need to nudge an
 * an element without changing its styling.
 * 
 * *Note: This functionality is better handled by modern layout controls when
 * creating a new page.*
 */
export const Spacer = ({ h = 0, w = 0 }: Props) => {
    return <div className="spacer" style={{ height: h, width: w }} />;
};
