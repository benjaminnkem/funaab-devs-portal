type UnformattedDataProp = {
  dateAsString: string;
};

const DateFormatter = ({ dateAsString }: UnformattedDataProp) => {
  const data = dateAsString;
  const splitted_ = data.split("/");

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
    parseInt(splitted_[0]) - 1
  ];
  const day = splitted_[1];
  const year = splitted_[2];

  return `${day} ${month}, ${year}`;
};

export default DateFormatter;
