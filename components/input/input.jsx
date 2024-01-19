import Paragraph from "../text/paragpraph";

export default function Input({ label, error, ...props }) {
  return (
    <div className="w-full">
      <Paragraph color="text-typ-gray" className="font-medium">
        {label}
      </Paragraph>
      <input
        {...props}
        className="outline outline-1 outline-box-input px-3 py-1.5 rounded-md text-sm w-full mt-0.5 focus:outline-2"
      />
      {error ? (
        <small className="text-red-400">This field is required!</small>
      ) : null}
    </div>
  );
}
