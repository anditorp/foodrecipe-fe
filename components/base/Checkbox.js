import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-4">
        <input
          type="checkbox"
          className="checkbox border-yellow-400 checked:border-yellow-500 [--chkbg:theme(colors.yellow.400)] "
        />
        {label && <span className="label-text text-primary">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
