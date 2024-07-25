
import "./style.css";

const cities = [
  "Dha",
  "Bori",
  "Bog",
  "Chit",
  "Com",
  "Dina",
  "Fari",
  "Jess",
  "Khul",
  "Kush",
  "Mym",
  "Noa",
  "Pab",
  "Raj",
  "Ron",
  "Rang",
  "Syl",
  "Dhaka",
];

const distances = [
  [
    0, 277, 229, 264, 97, 414, 145, 274, 335, 277, 193, 192, 161, 270, 335, 340,
    346, 277,
  ],
  [
    277, 0, 438, 541, 373, 673, 132, 261, 322, 264, 470, 468, 280, 401, 594,
    616, 623, 277,
  ],
  [
    229, 438, 0, 492, 325, 185, 356, 320, 381, 224, 422, 420, 158, 264, 106,
    568, 575, 229,
  ],
  [
    264, 541, 492, 0, 167, 678, 409, 538, 599, 541, 457, 151, 425, 534, 599, 76,
    425, 264,
  ],
  [
    97, 373, 325, 167, 0, 510, 241, 370, 431, 373, 290, 95, 257, 367, 431, 243,
    275, 97,
  ],
  [
    414, 673, 185, 678, 510, 0, 541, 549, 566, 409, 607, 605, 343, 449, 79, 753,
    760, 414,
  ],
  [
    145, 132, 356, 409, 241, 541, 0, 129, 190, 132, 338, 336, 198, 269, 462,
    484, 491, 145,
  ],
  [
    274, 261, 320, 538, 370, 549, 129, 0, 61, 79, 467, 465, 163, 233, 426, 626,
    632, 274,
  ],
  [
    335, 322, 381, 599, 431, 566, 190, 61, 0, 158, 528, 526, 224, 295, 488, 687,
    694, 335,
  ],
  [
    277, 264, 224, 541, 373, 409, 132, 79, 158, 0, 470, 468, 66, 137, 330, 616,
    623, 277,
  ],
  [
    193, 470, 422, 457, 290, 607, 338, 467, 528, 470, 0, 385, 354, 464, 528,
    533, 539, 193,
  ],
  [
    192, 468, 420, 151, 95, 605, 336, 465, 526, 468, 385, 0, 352, 462, 526, 235,
    352, 192,
  ],
  [
    161, 280, 158, 425, 257, 343, 198, 163, 224, 66, 354, 352, 0, 109, 264, 500,
    507, 161,
  ],
  [
    270, 401, 264, 534, 367, 449, 269, 233, 295, 137, 464, 462, 109, 0, 370,
    610, 616, 270,
  ],
  [
    335, 594, 106, 599, 431, 79, 462, 426, 488, 330, 528, 526, 264, 370, 0, 675,
    681, 335,
  ],
  [
    340, 616, 568, 76, 243, 753, 484, 626, 687, 616, 533, 235, 500, 610, 675, 0,
    500, 340,
  ],
  [
    346, 623, 575, 425, 257, 760, 491, 632, 694, 623, 539, 352, 507, 616, 681,
    500, 0, 346,
  ],
  [
    277, 277, 229, 264, 97, 414, 145, 274, 335, 277, 193, 192, 161, 270, 335,
    340, 346, 0,
  ],
];

const DistanceTable = () => {
  return (
    <div className="distance-table">
      <table>
        <thead>
          <tr>
            <th>City</th>
            {cities.map((city, index) => (
              <th key={index}>{city}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cities.map((city, i) => (
            <tr key={i}>
              <td>{city}</td>
              {distances[i].map((distance, j) => (
                <td key={j}>{distance}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistanceTable;
