import React from "react";
import { useEffect, useState } from "react";
const TableWork = () => {
  const [column, setColumn] = useState([
    "name",
    "describe",
    "project",
    "performer",
    "progress",
    " status",
    "date",
    "work information",
  ]);
  const [row, setRow] = useState([3]);

  return (
    <div className="table">
      <div className="column">
        <p>ID</p>
        <div className="row" id="row_1">
          1
        </div>
        <div className="row">2</div>
        <div className="row" id="row_1">
          3
        </div>
        <div className="row">4</div>
        <div className="row" id="row_1">
          5
        </div>
        <div className="row">6</div>
        <div className="row" id="row_1">
          7
        </div>
        <div className="row">8</div>
        <div className="row" id="row_1">
          9
        </div>
        <div className="row">10</div>
      </div>
      <div className="column">
        <p> Name Work </p>
        <div className="row" id="row_1">
          meeting Online : Cellphones ( 14h30 )
        </div>
        <div className="row">Chỉ tiêu Tuần 1 Tháng 6 </div>
        <div className="row" id="row_1">
          Tiềm năng : Vietcombank
        </div>
        <div className="row">Chỉ tiêu Tuần 2 Tháng 6 </div>
        <div className="row" id="row_1">
          Chỉ tiêu Tuần 3 Tháng 6
        </div>
        <div className="row">Chỉ tiêu Tuần 4 Tháng 6 </div>
        <div className="row" id="row_1">
          Chỉ tiêu Tuần 1 Tháng 7
        </div>
        <div className="row">Chỉ tiêu Tuần 2 Tháng 7</div>
        <div className="row" id="row_1">
          Chỉ tiêu Tuần 3 Tháng 7
        </div>
        <div className="row">Chỉ tiêu Tuần 4 Tháng 7 </div>
      </div>
      <div className="column">
        <p>Describe</p>
        <div className="row" id="row_1">
          none
        </div>
        <div className="row">none</div>
        <div className="row" id="row_1">
          none
        </div>
        <div className="row">none</div>
        <div className="row" id="row_1">
          none
        </div>
        <div className="row">none</div>
        <div className="row" id="row_1">
          none
        </div>
        <div className="row">none</div>
        <div className="row" id="row_1">
          none
        </div>
        <div className="row">none</div>
      </div>
      <div className="column">
        <p> Project</p>
        <div className="row" id="row_1">
          KD CLS HCM - 2021
        </div>
        <div className="row">KD CLS HCM - 2021</div>
        <div className="row" id="row_1">
          KD CLS HCM - 2021
        </div>
        <div className="row">KD CLS HCM - 2021</div>
        <div className="row" id="row_1">
          KD CLS HCM - 2021
        </div>
        <div className="row">KD CLS HCM - 2021</div>
        <div className="row" id="row_1">
          KD CLS HCM - 2021
        </div>
        <div className="row">KD CLS HCM - 2021</div>
        <div className="row" id="row_1">
          KD CLS HCM - 2021
        </div>
        <div className="row">KD CLS HCM - 2021</div>
      </div>
      <div className="column">
        <p>Performer</p>
        <div className="row" id="row_1">
          Ben Affleck
        </div>
        <div className="row">Ben Affleck </div>
        <div className="row" id="row_1">
          Ben Affleck
        </div>
        <div className="row">Ben Affleck </div>
        <div className="row" id="row_1">
          Ben Affleck
        </div>
        <div className="row">Ben Affleck </div>
        <div className="row" id="row_1">
          Ben Affleck
        </div>
        <div className="row">Ben Affleck </div>
        <div className="row" id="row_1">
          Ben Affleck
        </div>
        <div className="row">Ben Affleck </div>
      </div>
      <div className="column">
        <p> Progress</p>
        <div className="row" id="row_1">
          20%
        </div>
        <div className="row">40%</div>
        <div className="row" id="row_1">
          50%
        </div>
        <div className="row">10%</div>
        <div className="row" id="row_1">
          20%
        </div>
        <div className="row">50%</div>
        <div className="row" id="row_1">
          80%
        </div>
        <div className="row">60%</div>
        <div className="row" id="row_1">
          90%
        </div>
        <div className="row">100%</div>
      </div>
      <div className="column">
        <p>Status</p>
        <div className="row" id="row_1">
          in process
        </div>
        <div className="row"> in process</div>
        <div className="row" id="row_1">
          in process
        </div>
        <div className="row"> in process</div>
        <div className="row" id="row_1">
          in process
        </div>
        <div className="row"> in process</div>
        <div className="row" id="row_1">
          in process
        </div>
        <div className="row"> in process</div>
        <div className="row" id="row_1">
          in process
        </div>
        <div className="row">in process</div>
      </div>
      <div className="column">
        <p>Date</p>
        <div className="row" id="row_1">
          26/6/2021
        </div>
        <div className="row"> 3/6/2021</div>
        <div className="row" id="row_1">
          10/6/2021
        </div>
        <div className="row">13/6/2021</div>
        <div className="row" id="row_1">
          17/6/2021
        </div>
        <div className="row">24/6/2021</div>
        <div className="row" id="row_1">
          1/7/2021
        </div>
        <div className="row">9/7/2021</div>
        <div className="row" id="row_1">
          15/7/2021
        </div>
        <div className="row">22/7/2021</div>
      </div>

      <div className="column" id="work_info">
        <p>Work Information</p>
        <div className="row" id="row_1">
          Cơ hội kinh doanh: cty Forval
        </div>
        <div className="row">Cơ hội kinh doanh: cty Forval</div>
        <div className="row" id="row_1">
          Cơ hội kinh doanh: cty Forval
        </div>
        <div className="row">Cơ hội kinh doanh: cty Forval</div>
        <div className="row" id="row_1">
          Cơ hội kinh doanh: cty Forval
        </div>
        <div className="row">Cơ hội kinh doanh: cty Forval</div>
        <div className="row" id="row_1">
          Cơ hội kinh doanh: cty Forval
        </div>
        <div className="row">Cơ hội kinh doanh: cty Forval</div>
        <div className="row" id="row_1">
          Cơ hội kinh doanh: cty Forval
        </div>
        <div className="row">Cơ hội kinh doanh: cty Forval</div>
      </div>
    </div>
  );
};

export default TableWork;
