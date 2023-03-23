Search.setIndex({"docnames": ["excursion/entropy-analysis", "excursion/partload-analysis", "getting-started/5-minutes-into-solph", "getting-started/5-minutes-into-tespy", "getting-started/setup-python", "index", "model/linear", "model/mip", "model/solph-minimal-load", "model/solph-offset", "model/solph-simple", "model/solph-with-tespy", "model/tespy-partload-performance", "model/tespy-simple", "zliterature"], "filenames": ["excursion/entropy-analysis.ipynb", "excursion/partload-analysis.ipynb", "getting-started/5-minutes-into-solph.ipynb", "getting-started/5-minutes-into-tespy.ipynb", "getting-started/setup-python.md", "index.md", "model/linear.md", "model/mip.md", "model/solph-minimal-load.ipynb", "model/solph-offset.ipynb", "model/solph-simple.ipynb", "model/solph-with-tespy.ipynb", "model/tespy-partload-performance.ipynb", "model/tespy-simple.ipynb", "zliterature.md"], "titles": ["Entropy Analysis of the COP", "Disection of the partload efficiency", "5 minutes into oemof-solph", "5 minutes into TESPy", "Setup your Python environment", "oemof Workshop at the OSMSES 2023", "Introduction", "Introduction", "oemof-solph model with minimal load", "oemof-solph model with variable partload efficiency", "Linear oemof-solph heat pump model", "Combining oemof-solph and TESPy", "Part load performance in TESPy", "Simple TESPy heat pump model", "Literature References"], "terms": {"strictli": [0, 13], "speak": 0, "definit": [0, 10, 13], "heat": [0, 2, 4, 5, 6, 7, 8, 9, 11, 14], "pump": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14], "follow": [0, 4, 5, 10, 12, 13], "eq": [0, 10, 13], "3": [0, 1, 3, 4, 5, 8, 10, 11, 12, 13, 14], "onli": [0, 10, 12, 13], "valid": 0, "process": [0, 2, 3, 8, 9, 10, 11, 12], "consist": [0, 2, 3], "two": [0, 3, 5, 10, 12, 13], "isentrop": [0, 3, 12], "subprocess": 0, "compress": [0, 1, 3, 12], "expans": [0, 12, 13], "isotherm": 0, "evapor": [0, 3, 10, 12, 13], "condens": [0, 10, 12, 13], "For": [0, 1, 3, 4, 10, 12, 13], "thi": [0, 1, 3, 4, 5, 6, 8, 10, 11, 12, 13], "possibl": [0, 4, 5, 10, 12], "would": [0, 5, 10, 12], "need": [0, 4, 10, 13], "us": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13], "turbin": [0, 3, 14], "instead": [0, 3, 12], "an": [0, 1, 2, 3, 4, 5, 9, 10, 12, 13], "valv": [0, 3, 12, 13], "must": [0, 10], "phase": [0, 3], "region": [0, 3], "again": [0, 1, 7, 12], "after": [0, 3], "while": [0, 1, 5, 12, 13], "dry": 0, "reach": 0, "back": [0, 3, 12, 13], "satur": [0, 3, 13], "dome": 0, "higher": [0, 3, 10, 13], "pressur": [0, 1, 3, 12, 13], "technic": [0, 5, 14], "expand": 0, "liquid": [0, 13], "feasibl": 0, "still": [0, 1], "we": [0, 1, 3, 4, 6, 7, 8, 10, 12, 13], "can": [0, 1, 2, 3, 4, 5, 8, 10, 12, 13], "appli": [0, 1, 3, 5, 9, 12], "method": [0, 3, 12, 13], "our": [0, 3, 10, 12, 13], "cycl": [0, 1, 12, 13, 14], "from": [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13], "thermodynam": [0, 3, 5, 6, 10, 12, 13, 14], "have": [0, 1, 3, 4, 5, 8, 10, 12, 13], "make": [0, 1, 3, 4, 10, 11, 12, 13], "some": [0, 1, 3, 4, 12], "chang": [0, 3, 7, 10, 12, 13], "howev": [0, 5, 8, 10, 13], "even": [0, 1, 5], "allow": [0, 1, 12], "show": [0, 1, 2, 3, 6, 8, 10, 11, 12], "contribut": 0, "individu": [0, 1, 3], "compon": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "its": [0, 5, 10, 12], "non": [0, 5, 13], "optim": [0, 2, 4, 10, 12, 14], "1": [0, 1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14], "slightli": [0, 12], "adapt": 0, "replac": [0, 9], "temperatur": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 13], "level": [0, 1, 3, 10, 12, 13], "t_": [0, 10, 12], "text": [0, 10, 12, 13], "max": [0, 1, 10, 12], "min": [0, 8, 9, 10, 12], "mean": [0, 1, 12], "m": [0, 3, 12, 13], "prod": [0, 10], "consumpt": 0, "con": 0, "7": [0, 2, 3, 8, 9, 10, 11, 12, 13, 14], "The": [0, 1, 2, 3, 5, 6, 10, 12, 13], "defin": [0, 3, 12, 13], "8": [0, 2, 3, 8, 9, 10, 11, 12, 13, 14], "_": [0, 1, 10, 12, 13], "c": [0, 3, 5, 8, 9, 10, 11, 12, 13], "frac": [0, 10, 13], "mathrm": [0, 1, 12, 13], "q": [0, 1, 3, 12, 13], "dot": [0, 1, 10, 12, 13], "s_": 0, "With": [0, 3, 8, 9, 10, 13], "calcul": [0, 1, 3, 5, 10, 12, 13], "tespi": [0, 4, 5, 6, 7, 8, 9, 14], "model": [0, 1, 2, 4, 5, 6, 7, 11, 14], "call": [0, 3], "balanc": [0, 2, 13], "equat": [0, 3, 13], "obtain": [0, 5, 6, 10], "featur": 0, "complet": [0, 12], "If": [0, 1, 4, 5, 12], "anybodi": 0, "interest": 0, "topic": [0, 3], "pleas": [0, 3, 4], "out": [0, 4, 5, 6], "develop": [0, 5], "via": 0, "github": [0, 3, 4], "repositori": [0, 3, 4, 5], "your": [0, 3, 12], "highli": 0, "appreci": 0, "simple_heat_pump": 0, "function": [0, 1, 4, 5, 12, 13], "import": [0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13], "section": [0, 1, 4, 8, 12, 13], "li": [0, 1], "separ": [0, 1, 4, 13], "python": [0, 1, 5, 14], "document": [0, 1, 3, 4, 5, 12], "you": [0, 1, 3, 4, 5, 12], "download": [0, 1, 4], "heat_pump_model": [0, 1], "py": [0, 1, 4], "panda": [0, 1, 8, 9, 11, 12, 13], "pd": [0, 1, 8, 9, 11, 12, 13], "numpi": [0, 1, 8, 9, 10, 11, 12, 13, 14], "np": [0, 1, 8, 9, 10, 11, 12, 13], "matplotlib": [0, 1, 2, 8, 9, 10, 11, 12, 13], "pyplot": [0, 1, 2, 8, 9, 10, 11, 12, 13], "plt": [0, 1, 2, 8, 9, 10, 11, 12, 13], "def": [0, 8, 12], "carnot_cop_temperature_vari": 0, "nwk": [0, 1, 3, 12, 13], "temperature_rang": [0, 12, 13], "result": [0, 1, 2, 3, 8, 9, 10, 11, 12], "datafram": [0, 1, 12, 13], "index": [0, 1, 8, 9, 10, 11, 12, 13], "column": [0, 1, 12, 13], "cop_carnot": [0, 13], "cop_carnot_simpl": 0, "c2": [0, 3, 12, 13], "c4": [0, 3, 12, 13], "get_conn": [0, 1], "2": [0, 1, 2, 3, 5, 8, 9, 10, 12, 13, 14], "4": [0, 1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14], "ev": [0, 1, 12, 13], "cd": [0, 1, 4, 12, 13], "cp": [0, 1, 3, 12, 13], "va": [0, 12, 13], "get_comp": [0, 1], "compressor": [0, 6, 10, 12, 13], "t": [0, 1, 3, 8, 11, 12, 13, 14], "set_attr": [0, 1, 3, 12, 13], "solv": [0, 1, 2, 3, 8, 9, 10, 11, 12, 13, 14], "design": [0, 1, 3, 7, 13], "entropy_bal": 0, "loc": [0, 1, 12, 13], "ab": [0, 1, 12, 13], "val": [0, 1, 3, 12, 13], "p": [0, 1, 3, 12, 13, 14], "t_mq": 0, "val_si": [0, 13], "deviat": [0, 12], "return": [0, 8, 12], "r290": [0, 1, 3, 12, 13], "linspac": [0, 1, 12], "10": [0, 3, 4, 8, 9, 11, 12, 13, 14], "31": 0, "32": [0, 10, 11], "fig": [0, 1, 3, 10, 12, 13], "ax": [0, 1, 12, 13], "subplot": [0, 1, 12, 13], "sharex": [0, 1, 12, 13], "true": [0, 1, 12, 13], "label": [0, 1, 2, 3, 8, 9, 10, 11, 12, 13], "simpl": [0, 3, 5, 6, 8, 10, 11, 12], "0": [0, 1, 2, 3, 8, 9, 10, 11, 12, 13], "plot": [0, 1, 2, 8, 9, 10, 11, 12, 13], "set_ylabel": [0, 1, 12, 13], "legend": [0, 8, 9, 10, 11, 12, 13], "ratio": [0, 1, 3, 10, 12], "set_xlabel": [0, 1, 12, 13], "grid": [0, 2, 8, 9, 10, 11, 13], "set_axisbelow": [0, 13], "close": [0, 1, 12, 13], "observ": [0, 1], "differ": [0, 1, 3, 4, 5, 6, 10, 12, 13], "between": [0, 1, 3, 6, 8, 12, 13], "approach": [0, 3, 5, 7, 10, 11, 12], "14": [0, 14], "doe": [0, 1, 2, 3, 12, 13], "explain": 0, "sharp": 0, "increas": [0, 1, 12], "effici": [0, 3, 5, 6, 7, 8, 10, 12, 13], "factor": [0, 5, 6, 10, 12, 13], "seen": 0, "5": [0, 1, 8, 9, 10, 11, 12, 13, 14], "To": [0, 3, 4, 5, 10, 12, 13], "phenomenom": [0, 13], "disect": 0, "calculat": 0, "littl": [0, 1], "bit": [0, 1], "further": [0, 3], "comparison": [0, 12, 13], "calcualt": 0, "simplifi": [0, 4, 8, 10, 12], "exact": [0, 12], "do": [0, 4, 5, 10, 12, 13], "first": [0, 1, 3, 5, 6, 7, 10, 11, 12, 13], "reorder": [0, 13], "begin": 0, "align": [0, 12], "q_": [0, 10], "w": [0, 1, 8, 9, 10, 11, 12, 13], "end": [0, 11, 13], "Then": [0, 1, 4, 6, 7, 12, 13], "transfer": [0, 3, 5, 7, 8, 10, 12, 13], "cdot": [0, 10, 13], "final": [0, 1, 5, 12, 13], "second": [0, 3, 5, 6, 7, 12, 13], "law": 0, "system": [0, 2, 3, 5, 6, 10, 12, 13, 14], "consum": [0, 1, 12], "all": [0, 1, 3, 4, 5, 12, 13], "insid": [0, 1], "sum": [0, 8, 9, 10, 11, 13], "irr": 0, "i": [0, 3, 4, 5, 7, 10, 12, 13], "simplif": 0, "express": [0, 5], "below": [0, 1, 3, 8, 9, 11, 12, 13], "line": [0, 1, 12], "left": [0, 13], "right": [0, 5, 13], "formular": 0, "where": [0, 12, 13], "term": 0, "ident": 0, "invers": 0, "valu": [0, 3, 5, 10, 12, 13], "part": [0, 1, 5, 7, 8, 9, 13], "ar": [0, 1, 2, 3, 5, 6, 7, 10, 12, 13], "loss": [0, 3, 10, 13], "induc": 0, "see": [0, 1, 3, 10, 12, 13], "ineffici": 0, "lower": [0, 1, 2, 8, 9, 10, 11, 12, 13], "given": [0, 3, 10], "inform": [0, 5, 7, 12, 13], "extend": [0, 5, 7, 12], "accordingli": 0, "entropy_analysis_temperature_vari": 0, "component_list": 0, "t_m": 0, "f": [0, 4, 8, 9, 10, 11, 14], "s_irr": 0, "q_condens": 0, "depend": [0, 1, 2, 3, 4, 6, 12, 13], "relev": [0, 3, 4], "influenc": [0, 1], "x": [0, 1, 3, 12, 13], "total": [0, 3, 10], "retriev": [0, 5, 6, 12], "same": [0, 1, 10, 12, 13], "standard": [0, 5], "15": [0, 3, 8, 9, 10, 11, 12, 13, 14], "inspect": [0, 12], "irreverisbl": [0, 13], "element": [0, 5], "16": [0, 10, 12, 13], "here": [0, 3, 4, 8, 12, 13], "declin": 0, "steeper": 0, "That": [0, 12], "reason": [0, 1, 3, 12, 13], "when": [0, 3, 10, 12, 13], "rise": [0, 1], "s": [0, 1, 2, 3, 5, 12, 13, 14], "effect": [0, 12, 13, 14], "type": [0, 1, 2, 10], "also": [0, 4, 5, 12, 13], "itself": 0, "As": [0, 3], "exampl": [0, 2, 4, 5, 10, 12, 13], "assess": [0, 5, 10, 13], "classif": 0, "more": [0, 1, 2, 4, 5, 12, 13], "e": [0, 3, 4, 5, 7, 10, 12, 13, 14], "g": [0, 4, 5, 12, 14], "11": [0, 1, 12, 14], "12": [0, 1, 12, 14], "13": [0, 2, 3, 12, 14], "which": [0, 1, 3, 5, 6, 7, 10, 12, 13], "roughli": 0, "slope": [0, 9, 12], "dew": 0, "ts": 0, "diagram": 0, "wet": 0, "It": [0, 2, 4, 5, 12], "ha": [0, 1, 5, 12], "forward": 0, "face": 0, "vertic": 0, "parallel": 0, "backward": 0, "coolprop": [0, 3, 14], "propssi": [0, 3], "psi": [0, 3], "propan": [0, 3, 13], "color": [0, 12, 13], "tab": [0, 13], "blue": [0, 8, 10, 11], "pentan": 0, "red": [0, 8, 10, 11], "ammonia": 0, "green": [0, 13], "saturation_dom": 0, "data": [0, 1, 3, 5, 6, 8, 10, 13], "item": [0, 12], "pressure_rang": 0, "260": [0, 14], "pcrit": 0, "boiling_t": 0, "boiling_": 0, "dew_t": 0, "dew_": 0, "figur": [0, 2, 8, 9, 10, 11, 12, 13], "17": [0, 3, 14], "illustr": 0, "neopentan": 0, "each": [0, 13], "three": [0, 2, 3, 4, 5, 12], "displai": [0, 2, 10], "18": [0, 12], "decreas": [0, 1, 12], "There": [0, 12, 13], "anoth": 0, "well": [0, 3, 4, 5, 12, 13], "known": [0, 5], "exergi": 0, "been": [0, 5, 12], "implement": [0, 1, 5, 6, 7, 10, 12], "6": [0, 1, 3, 12, 13, 14], "sinc": [0, 1, 3, 5, 10, 12, 13], "want": [0, 3, 10, 12], "connect": [0, 3, 5, 12, 13], "excurs": [0, 12, 13], "In": [1, 3, 4, 5, 6, 7, 10, 12, 13, 14], "provid": [1, 3, 5, 10, 12, 13], "insight": 1, "load": [1, 5, 7, 9, 10, 11], "look": [1, 3, 12, 13], "characterist": [1, 12], "coeffici": [1, 9, 10, 12], "investig": [1, 7, 12, 13], "point": [1, 7, 10, 12], "ambient": [1, 3, 5, 6, 7, 8, 9, 10, 11, 13], "case": [1, 5, 10, 12, 13], "stronger": [1, 13], "than": [1, 2, 10, 12, 13], "partload_heat_pump": 1, "script": [1, 4, 11], "creat": [1, 2, 3, 4, 7, 12, 13], "network": [1, 3, 5, 12, 13], "ambient_temp_nomin": [1, 10], "heat_nomin": 1, "save": [1, 4, 12, 13], "state": [1, 3, 12, 13], "next": [1, 12, 13], "simulaiton": 1, "refer": [1, 10, 12, 13], "simul": [1, 3, 5, 6, 7, 13], "heat_rang": [1, 12], "results_heat": [1, 12], "power": [1, 2, 8, 9, 10, 11, 12, 13], "cop": [1, 5, 6, 8, 11, 12, 13], "c11": [1, 12], "c12": [1, 12], "pr": [1, 3, 12, 13], "now": [1, 3, 10, 12, 13], "oper": [1, 5, 7, 10, 12, 13], "set": [1, 3, 6, 10, 12, 13], "up": [1, 3, 5, 6, 12, 13], "assumpt": [1, 5, 6, 10, 12, 13], "test": 1, "eta_": [1, 3, 10, 12, 13], "offdesign": [1, 12], "eta_s_char": [1, 12], "char_func": [1, 12], "extrapol": [1, 12], "check": [1, 4, 12, 13], "run": [1, 3, 10, 12], "design_path": [1, 12], "loop": [1, 12, 13], "over": [1, 10, 12, 13], "rang": [1, 3, 5, 10, 12, 13], "respect": [1, 3, 4, 5, 8, 9, 12, 13], "results_heat_partload": [1, 12], "warn": 1, "root": [1, 3], "471": 1, "minimum": [1, 5, 10], "49": [1, 14], "drop": 1, "vari": [1, 5], "w_": [1, 12], "set_ylim": [1, 12], "05": [1, 3, 12, 13], "set_xlim": [1, 12], "demand": [1, 2, 8, 9, 10, 11, 12], "reset": [1, 12], "nomin": [1, 10], "unset": [1, 3], "constant": [1, 5, 6, 8, 10, 12, 13], "charactersit": 1, "none": [1, 2, 3, 8, 9, 10, 11, 12], "ttd_u": [1, 3, 12], "ka_char": [1, 12], "error": [1, 2, 3], "contain": [1, 3], "componentcharacterist": 1, "attribut": [1, 13], "is_var": 1, "reduc": [1, 12], "less": 1, "mass": [1, 3, 12, 13], "flow": [1, 2, 3, 8, 9, 10, 11, 12, 13], "remain": 1, "unchang": [1, 12], "avail": [1, 2, 5, 13], "surfac": 1, "fix": [1, 2, 3, 8, 9, 10, 11], "compar": [1, 8, 9, 10, 11, 12], "main": [1, 3], "last": [1, 12], "analog": 1, "setup": [1, 10, 12], "ttd_l": [1, 3, 12], "groupedcomponentcharacterist": 1, "relationship": 1, "therefor": [1, 5, 8, 10, 12], "tool": [2, 5, 12], "facilit": 2, "formul": [2, 5], "mix": [2, 5, 12, 14], "integ": [2, 5, 12, 14], "linear": [2, 3, 5, 6, 8, 12, 14], "problem": [2, 5], "dispatch": [2, 4], "unit": [2, 3, 13], "commit": 2, "investment": 2, "sector": [2, 5], "intregr": 2, "energi": [2, 5, 8, 9, 10, 11, 12, 13, 14], "so": [2, 3, 5], "compil": 2, "comprehens": 2, "graph": [2, 13], "base": [2, 3, 10, 12, 13], "descript": [2, 3, 13], "program": [2, 5, 14], "pyomo": [2, 14], "optimis": [2, 5, 14], "choic": 2, "entiti": 2, "bu": [2, 8, 9, 10, 11], "es": [2, 8, 9, 10, 11], "node": 2, "maintain": 2, "technolog": [2, 14], "direct": 2, "edg": 2, "time": [2, 3, 4, 10, 11], "transport": 2, "mini": [2, 5], "code": [2, 3, 4, 13], "buse": 2, "transform": [2, 8, 9, 10, 11, 12], "sourc": [2, 3, 5, 8, 9, 10, 11, 12, 13, 14], "sink": [2, 3, 5, 8, 9, 10, 11, 12], "energysystem": [2, 8, 9, 10, 11], "heat_demand": [2, 8, 9, 10, 11], "timeindex": [2, 8, 9, 10, 11], "create_time_index": 2, "2023": [2, 14], "number": [2, 12], "infer_last_interv": [2, 8, 9, 10, 11], "fals": [2, 3, 8, 9, 10, 11, 12, 13], "b_electr": [2, 8, 9, 10, 11], "electr": [2, 8, 9, 10, 11, 12], "b_heat_35c": [2, 8, 9, 10, 11], "35c": [2, 8, 9, 10, 11], "add": [2, 5, 8, 9, 10, 11, 13], "electricity_grid": [2, 8, 9, 10, 11], "output": [2, 8, 9, 10, 11, 12], "variable_cost": [2, 8, 9, 10, 11], "kwh": [2, 8, 9, 10, 11], "input": [2, 3, 8, 9, 10, 11, 12, 13], "nominal_valu": [2, 8, 9, 10, 11], "kw": [2, 8, 9, 10, 11, 13], "heating_rod": [2, 9, 10], "rod": [2, 8, 9, 10, 11], "name": [2, 4, 12, 13], "unknown": 2, "bound": 2, "upper": [2, 12], "object": [2, 12, 13], "constraint": [2, 3], "variabl": [2, 3, 5, 13], "nonzero": 2, "sens": 2, "minim": [2, 7, 9], "solver": [2, 3, 4, 12], "statu": 2, "ok": 2, "user": [2, 3], "wallclock": 2, "termin": [2, 12, 13], "condit": [2, 5, 12], "messag": 2, "wa": [2, 12], "subject": [2, 5], "toler": 2, "solut": [2, 3, 13], "statist": 2, "branch": 2, "subproblem": 2, "black": [2, 10], "box": [2, 10], "iter": [2, 3], "rc": 2, "018160343170166016": 2, "ordereddict": 2, "heat_suppli": [2, 8, 9, 10, 11], "sequenc": [2, 8, 9, 10, 11], "r": [2, 8, 9, 10, 11, 14], "suppli": [2, 8, 9, 10, 11, 12], "drawstyl": [2, 8, 9, 10, 11], "step": [2, 4, 5, 6, 8, 9, 10, 11, 12, 13], "post": [2, 8, 9, 10, 11], "open": [3, 4, 5, 13, 14], "framework": [3, 5], "convers": [3, 14], "softwar": [3, 5, 12, 13, 14], "predefin": 3, "exhcang": 3, "mani": [3, 5], "build": [3, 5, 6, 9, 12], "wai": [3, 6, 10, 12], "specifi": [3, 12, 13], "paramet": [3, 5, 12, 13], "perform": [3, 5, 7, 8, 10, 13], "steadi": 3, "orient": [3, 10], "eo": 3, "repres": [3, 12], "topolog": [3, 12], "compoent": 3, "specif": [3, 5, 6, 7, 10, 12, 13], "accomplish": 3, "enthalpi": [3, 12, 13], "everi": [3, 10, 12], "miss": [3, 13], "determin": [3, 10, 13], "let": [3, 8, 9, 11], "choos": 3, "instanc": [3, 12, 13], "meet": 3, "other": [3, 5, 8, 13], "block": 3, "class": [3, 12], "children": 3, "them": [3, 4, 8, 12, 13], "take": [3, 9, 12, 13], "place": 3, "principl": 3, "tutori": [3, 12], "recommend": [3, 5], "onlin": [3, 4, 10, 12], "fulli": 3, "steam": 3, "abstract": 3, "represent": [3, 5, 10], "tabl": [3, 12, 13], "summar": [3, 13], "go": [3, 12], "locat": [3, 13], "ga": [3, 13], "100": [3, 8, 12, 13], "kg": 3, "80": [3, 13], "fluid": [3, 10, 12, 13, 14], "p_unit": [3, 12, 13], "bar": [3, 12, 13], "t_unit": [3, 12, 13], "si": 3, "c1": [3, 12, 13], "out1": [3, 12, 13], "in1": [3, 12, 13], "add_conn": [3, 12, 13], "necessari": 3, "start": [3, 12, 13], "residu": 3, "massflow": 3, "82e": 3, "48e": [3, 13], "00": [3, 12, 13], "03e": 3, "06": [3, 12], "37e": 3, "04": 3, "00e": [3, 12, 13], "26e": [3, 12], "33e": 3, "44e": 3, "20e": 3, "50e": 3, "03": [3, 12, 13, 14], "18e": 3, "14e": 3, "32e": 3, "01": [3, 12, 13, 14], "09e": 3, "01e": 3, "29e": 3, "9": [3, 8, 9, 10, 11, 12, 13, 14], "42e": 3, "02": [3, 8, 9, 10, 11, 12, 13], "85e": [3, 12], "55e": 3, "41e": 3, "per": [3, 8, 9, 11, 12], "253": 3, "54": [3, 12], "overview": [3, 5, 13], "print_result": [3, 12, 13], "igva": [3, 12, 13], "94m8": [3, 13], "0m": [3, 13], "94m3": 3, "nan": [3, 12, 13], "h": [3, 12, 13, 14], "94m1": [3, 13], "000e": [3, 12, 13], "366e": 3, "857e": 3, "910e": 3, "494e": 3, "476e": 3, "work": [3, 8, 10, 12, 13, 14], "thing": [3, 13], "could": 3, "outlet": [3, 12, 13], "structur": [3, 12], "long": 3, "abl": 3, "find": [3, 8, 10, 12, 13], "One": [3, 10], "downsid": 3, "initi": [3, 12], "guess": 3, "requir": [3, 4, 5, 7, 10, 12, 13], "bad": 3, "often": 3, "lead": [3, 12], "being": 3, "unabl": 3, "detail": [3, 5, 12, 13], "best": [3, 10, 12], "practic": 3, "70": 3, "iterinfo": [3, 12, 13], "64e": 3, "67e": 3, "621e": 3, "94m7": 3, "invalid": 3, "inlet": [3, 12, 13], "overdetermin": 3, "try": 3, "singular": 3, "jacobian": 3, "matrix": 3, "abort": 3, "sure": [3, 4], "ani": [3, 5, 10, 12, 13], "parametris": 3, "might": [3, 12, 13], "accur": 3, "logarithm": 3, "ka": [3, 12, 13], "support": 3, "better": 3, "fuel": 3, "combust": 3, "chamber": 3, "small": [3, 14], "zero": 3, "shown": [3, 13], "air": [3, 10, 12, 13, 14], "list": 3, "similar": [3, 12], "heatexchang": [3, 12], "parametr": [3, 12], "accord": [3, 12, 13], "flowsheet": [3, 12, 13], "so_wf": 3, "si_wf": 3, "so_air": 3, "si_air": 3, "eva": 3, "c3": [3, 12, 13], "in2": [3, 12], "out2": [3, 12], "40": [3, 10, 12, 13], "273": [3, 10, 12], "pr1": [3, 12], "pr2": [3, 12], "25": 3, "td_log": [3, 12], "zeta1": [3, 12], "zeta2": [3, 12], "02e": 3, "63e": 3, "36e": 3, "063e": [3, 12], "033e": 3, "94m4": [3, 13], "073e": 3, "745e": 3, "937e": 3, "94m0": 3, "749e": 3, "simulaton": 3, "both": [3, 5, 10, 12], "hot": 3, "side": [3, 13], "cold": 3, "adjust": [3, 10, 13], "automat": 3, "9999999999998863": 3, "t_evapor": 3, "t_air": 3, "round": [3, 13], "reli": [3, 12], "properti": [3, 5, 13, 14], "larg": [3, 10], "varieti": 3, "extens": 3, "background": 3, "http": [3, 12, 14], "readthedoc": 3, "io": [3, 12], "oemof": [3, 4, 6, 7, 14], "forum": 3, "discuss": 3, "fraction": [3, 13], "mixtur": 3, "learn": [4, 5], "how": [4, 5, 7, 8, 12], "prepar": [4, 5, 8], "favorit": 4, "distribut": [4, 5], "editor": 4, "machin": 4, "A": [4, 5, 8, 9, 10, 11, 12, 14], "lightweight": 4, "miniforg": 4, "new": [4, 7, 12], "folder": 4, "yml": 4, "file": [4, 5, 13], "OR": [4, 5], "manual": 4, "copi": [4, 5], "content": [4, 8, 9, 10, 11], "workshop": [4, 13], "osms": 4, "channel": 4, "conda": 4, "forg": 4, "pip": 4, "solph": [4, 5, 6, 7, 14], "miniforge3": 4, "prompt": 4, "navig": 4, "path": 4, "mit": [4, 5, 10], "env": 4, "activ": 4, "usag": [4, 12], "instruct": 4, "person": [4, 5, 13], "edit": [4, 14], "vs": 4, "browser": 4, "about": [4, 8, 12, 13], "describ": [4, 13], "abov": [4, 5, 12], "NOT": [4, 5, 12], "cours": 4, "singl": [4, 10, 12, 13], "rudimentari": 4, "advanc": 4, "util": [4, 8, 9, 10, 11], "directori": 4, "welcom": 5, "session": 5, "2nd": 5, "intern": [5, 10, 14], "francesco": [5, 14], "witt": [5, 14], "patrik": [5, 14], "sch\u00f6nfeld": 5, "german": 5, "areospac": 5, "center": [5, 10], "dlr": 5, "institut": 5, "most": 5, "know": [5, 8, 10, 12], "librari": [5, 13, 14], "context": 5, "analysi": [5, 12], "like": 5, "pull": 5, "request": 5, "instal": 5, "introduct": 5, "partload": [5, 8, 12], "consid": [5, 10, 12], "one": [5, 10, 12, 13], "major": 5, "kei": [5, 12], "decarbon": 5, "usual": 5, "thu": 5, "becom": [5, 12], "task": 5, "variou": 5, "tempor": 5, "spatial": 5, "scope": 5, "integr": [5, 12], "curv": [5, 9, 12], "pre": [5, 13], "carnot": [5, 6, 13], "assum": [5, 6, 8, 9, 10, 11], "account": [5, 7, 12, 13], "Such": 5, "literatur": 5, "databas": 5, "hp_lib": 5, "good": [5, 12], "gener": [5, 8, 12, 14], "manufactur": [5, 12], "fall": 5, "short": [5, 10], "should": [5, 8, 9, 11, 12], "industri": [5, 14], "novel": 5, "research": [5, 10, 14], "applic": [5, 12], "dedic": [5, 12], "fill": 5, "gap": 5, "combin": [5, 6, 7, 12], "order": 5, "improv": [5, 13], "popular": 5, "conceptu": 5, "divid": [5, 13], "pick": 5, "broadli": 5, "built": [5, 6], "third": [5, 14], "modifi": [5, 12], "enabl": 5, "within": 5, "full": [5, 8], "emploi": 5, "piec": 5, "wise": 5, "basic": 5, "knowledg": 5, "furthermor": [5, 12], "understand": 5, "physic": 5, "self": 5, "numer": [5, 12], "websit": 5, "copyright": 5, "sch\u00f6nfeldt": 5, "permiss": 5, "herebi": 5, "grant": 5, "free": 5, "charg": 5, "associ": 5, "deal": 5, "without": [5, 9, 10, 12], "restrict": [5, 12], "includ": 5, "limit": [5, 12], "merg": 5, "publish": 5, "sublicens": 5, "sell": 5, "permit": 5, "whom": 5, "furnish": 5, "notic": 5, "shall": 5, "substanti": 5, "portion": 5, "THE": 5, "IS": 5, "AS": 5, "warranti": 5, "OF": 5, "kind": 5, "impli": 5, "BUT": [5, 8], "TO": 5, "merchant": 5, "fit": 5, "FOR": 5, "particular": 5, "purpos": 5, "AND": 5, "noninfring": 5, "IN": 5, "NO": 5, "event": 5, "author": 5, "holder": 5, "BE": 5, "liabl": 5, "claim": 5, "damag": 5, "liabil": 5, "whether": [5, 12], "action": 5, "contract": 5, "tort": 5, "otherwis": 5, "aris": 5, "WITH": 5, "chapter": [6, 7, 8, 12, 13], "done": [6, 12], "effic": 6, "sheet": 6, "real": 6, "world": 6, "four": 6, "match": [6, 12, 13], "exchang": [6, 10, 12, 13], "regim": [6, 12], "carri": 6, "simlat": 6, "introduc": [7, 13], "previou": [7, 8, 9, 12, 13], "simpli": [7, 13], "ad": [7, 8], "affect": [7, 12], "These": [7, 12], "transit": 8, "get": [8, 12], "peopl": 8, "bring": 8, "difficulti": 8, "version": [8, 9], "offset": [8, 9, 12], "what": [8, 10, 12], "load_temperature_data": [8, 9, 11], "input_data": [8, 9, 10, 11], "head": [8, 9, 10, 11], "24": [8, 9, 10, 11], "crude": [8, 9, 11], "enough": [8, 9, 11], "500": [8, 9, 11], "k": [8, 9, 10, 11, 14], "d": [8, 9, 11, 13, 14], "clip": [8, 9, 11], "load_tespy_cop": [8, 11], "df": 8, "read_csv": 8, "csv": [8, 12, 13], "index_col": 8, "hack": 8, "float": [8, 9, 10, 11, 12], "df2": 8, "reindex": 8, "arang": [8, 12, 13], "311": 8, "seri": [8, 11, 14], "interpol": [8, 9, 11], "tespy_cop": [8, 11], "map": [8, 9, 11], "b": [8, 9, 10, 11], "ylabel": [8, 9, 10, 11], "set_color": [8, 10, 11], "twinx": [8, 10, 11], "hp_thermal_pow": [8, 9, 10, 11], "50": [8, 12], "heat_pump": [8, 9, 10, 11], "nonconvex": [8, 9], "conversion_factor": [8, 10, 11], "thermal_storag": [8, 9, 10, 11], "genericstorag": [8, 9, 10, 11], "loss_rat": [8, 9, 10, 11], "nominal_storage_capac": [8, 9, 10, 11], "spread": [8, 9, 10, 11], "m\u00b3": [8, 9, 10, 11], "volum": [8, 9, 10, 11, 14], "storage_cont": [8, 9, 10, 11], "sort": [8, 9, 10, 11], "storag": [8, 9, 10, 11], "electricity_consumpt": [8, 9, 10, 11], "print": [8, 9, 10, 11, 13], "1f": [8, 9, 10, 11], "33": 8, "tail": 9, "load_tespy_coeffici": 9, "tespy_coeffici": 9, "offsettransform": [9, 12], "1e3": [9, 12, 13], "precalcul": 10, "befor": [10, 12], "made": [10, 13], "typic": 10, "produc": 10, "absolut": 10, "posit": 10, "sign": [10, 13], "convent": [10, 13], "impos": 10, "adequ": 10, "hp": [10, 13], "mai": [10, 12], "attempt": [10, 12], "profil": 10, "target": 10, "load_input_data": 10, "yield": 10, "rate": 10, "a7": 10, "w35": 10, "\u03b5": 10, "datasheet": [10, 13], "product": [10, 13, 14], "35": [10, 12], "actual": [10, 12, 13], "under": 10, "datasheet_cop": 10, "carnot_cop_7_35": 10, "cpf_7_35": 10, "carnot_cop_2_40": 10, "cpf_2_40": 10, "cpf": 10, "myst_nb": 10, "glue": 10, "ttd_heat_exchang": 10, "heating_system_feed_temp": 10, "ttd": 10, "howver": 10, "note": [10, 13], "maximum": 10, "water": [10, 12], "cannot": [10, 12], "happen": 10, "mea": 10, "hier": 10, "dann": 10, "der": [10, 14], "vergleich": 10, "beiden": 10, "varianten": 10, "kurzer": 10, "erkl\u00e4rung": 10, "warum": 10, "bei": 10, "bzw": 10, "passt": 10, "dar\u00fcber": 10, "und": 10, "darunt": 10, "aber": 10, "abweichungen": 10, "gibt": 10, "read": 11, "simultan": 12, "fed": 12, "modul": 12, "rtfd": 12, "predict": 12, "overal": [12, 13], "remian": 12, "lookup": 12, "degre": [12, 13], "freedom": [12, 13], "control": 12, "anymor": 12, "concern": 12, "outlin": 12, "goin": 12, "temperatud": 12, "etc": 12, "heatexchangersimpl": [12, 13], "feed": 12, "logger": 12, "define_log": 12, "screen_level": 12, "cycleclos": [12, 13], "ref": 12, "wf": [12, 13], "cc": [12, 13], "closer": [12, 13], "so1": 12, "si1": 12, "so2": 12, "si2": 12, "c0": [12, 13], "c21": 12, "21": 12, "c22": 12, "22": 12, "skip": 12, "due": [12, 13], "instabl": 12, "imposs": 12, "nativ": 12, "stabl": [12, 14], "converg": 12, "behavior": 12, "q_design": 12, "675": 12, "t_ambient_design": 12, "30": 12, "rerun": 12, "tmp": 12, "10e": [12, 13], "21e": 12, "12e": 12, "mass_devi": [12, 13], "fluid_devi": [12, 13], "zeta": [12, 13], "68e": [12, 13], "04e": 12, "24e": 12, "92e": 12, "39e": 12, "86e": 12, "75e": 12, "72e": [12, 13], "683e": 12, "041e": [12, 13], "071e": [12, 13], "771e": [12, 13], "369e": [12, 13], "463e": 12, "453e": 12, "601e": 12, "043e": 12, "355e": [12, 13], "260e": 12, "469e": 12, "500e": 12, "v": 12, "vol": 12, "td_bp": 12, "026834": 12, "040999": 12, "307147": 12, "999599": 12, "000000": 12, "000708": 12, "026391": 12, "1389": 12, "278120": 12, "745114e": 12, "577063": 12, "427393": 12, "002445": 12, "091112": 12, "2370": 12, "253689": 12, "000000e": 12, "694204": 12, "646266": 12, "316995": 12, "530607": 12, "000981": 12, "036554": 12, "2439": 12, "993233": 12, "000057": 12, "002139": 12, "1359": 12, "354602": 12, "060345e": 12, "600738": 12, "406330": 12, "818533": 12, "894125": 12, "803759": 12, "3821": 12, "630622": 12, "404319": 12, "289111": 12, "873397": 12, "798002": 12, "3814": 12, "424683": 12, "435516": 12, "126003": 12, "690095": 12, "000437": 12, "001004": 12, "436": 12, "664733": 12, "146898": 12, "420888": 12, "000438": 12, "001006": 12, "505": 12, "027895": 12, "taken": 12, "modif": 12, "stai": 12, "through": 12, "alreadi": 12, "repeat": 12, "results_temperatur": 12, "trend": 12, "saw": 12, "rel": 12, "span": 12, "minumum": 12, "scale": 12, "obviou": 12, "neither": 12, "nor": 12, "jmade": 12, "realli": 12, "alwai": 12, "hold": 12, "independet": 12, "construct": 12, "expect": 12, "access": [12, 14], "bsa": 12, "current": 12, "togeth": 12, "ont": 12, "he": 12, "default": 12, "veri": 12, "written": 12, "stone": 12, "thei": 12, "appropri": 12, "deriv": 12, "measur": 12, "custom": 12, "had": 12, "results_temperature_partload": 12, "those": [12, 13], "low": [12, 14], "high": 12, "nearli": 12, "correct": [12, 13], "someth": 12, "wrong": 12, "1857": 12, "010557": 12, "716565": 12, "900349": 12, "dtype": 12, "earlier": [12, 13], "against": 12, "simluaiton": 12, "quit": 12, "75": 12, "seem": 12, "odd": 12, "becaus": 12, "indic": [12, 13], "sought": 12, "faster": 12, "behaviour": 12, "equal": 12, "000": 12, "9100": 12, "init_path": 12, "els": [12, 13], "10th": 12, "ambienht": 12, "power_max": 12, "cop_max": 12, "temp": 12, "amb": 12, "str": [12, 13], "outcom": 12, "least": 12, "squar": 12, "packag": 12, "give": 12, "y": 12, "axi": 12, "least_squar": 12, "vstack": 12, "ones": 12, "len": 12, "linalg": [12, 14], "lstsq": [12, 14], "rcond": 12, "variant": 12, "especi": 12, "select": 12, "amount": 12, "astyp": 12, "yy_tespi": 12, "cop_c_simpl": 12, "eta_c_simpl": 12, "5945": 12, "yy_offset": 12, "extract": [12, 13], "arrai": [12, 14], "get_color": 12, "invert": 12, "export": [12, 13], "format": 12, "swap": 12, "export_df": 12, "to_csv": [12, 13], "temperatr": 13, "deliv": 13, "neg": 13, "boundari": 13, "h_2": 13, "h_1": 13, "wirst": 13, "postprocess": 13, "besid": 13, "stream": 13, "aspect": 13, "futur": 13, "l": [13, 14], "ks": 13, "tamb": 13, "94m": 13, "99e": 13, "74e": 13, "62e": 13, "772e": 13, "94m2": 13, "956e": 13, "either": 13, "1618": 13, "4579721423036": 13, "622635963759136": 13, "coulp": 13, "keep": 13, "screw": 13, "67": [13, 14], "binari": 13, "search": 13, "eta_s_max": 13, "eta_s_min": 13, "elif": 13, "break": 13, "found": 13, "900349094422487": 13, "On": 13, "wide": 13, "formula": 13, "t_for_eta": 13, "eta_const": 13, "eta": 13, "orang": 13, "easili": 13, "expectedli": 13, "minor": 13, "entropi": 13, "usabl": 13, "uw": 14, "krien": 14, "sch": 14, "\u00f6": 14, "nfeldt": 14, "jann": 14, "launer": 14, "simon": 14, "hilpert": 14, "cord": 14, "kaldemey": 14, "guido": 14, "ple": 14, "\u00df": 14, "mann": 14, "impact": 14, "100028": 14, "novemb": 14, "2020": 14, "doi": 14, "1016": 14, "j": 14, "simpa": 14, "ilja": 14, "tuschi": 14, "hermal": 14, "ngineer": 14, "ystem": 14, "ython": 14, "journal": 14, "2178": 14, "21105": 14, "joss": 14, "02178": 14, "hauk": 14, "hoop": 14, "tjarko": 14, "tjaden": 14, "kai": 14, "sken": 14, "re": 14, "lab": 14, "project": 14, "hplib": 14, "v1": 14, "2022": 14, "5281": 14, "zenodo": 14, "6792486": 14, "william": 14, "hart": 14, "jean": 14, "paul": 14, "watson": 14, "david": 14, "woodruff": 14, "mathemat": 14, "comput": 14, "219": 14, "2011": 14, "michael": 14, "bynum": 14, "gabriel": 14, "hackebeil": 14, "carl": 14, "laird": 14, "bethani": 14, "nicholson": 14, "john": 14, "siirola": 14, "springer": 14, "scienc": 14, "busi": 14, "media": 14, "2021": 14, "mathia": 14, "hofmann": 14, "juliu": 14, "meier": 14, "georg": 14, "tsatsaroni": 14, "ener": 14, "o": 14, "pen": 14, "ourc": 14, "xergi": 14, "nalysi": 14, "xtend": 14, "imul": 14, "ramework": 14, "4087": 14, "3390": 14, "en15114087": 14, "ian": 14, "bell": 14, "jorrit": 14, "wronski": 14, "sylvain": 14, "quoilin": 14, "vincent": 14, "lemort": 14, "pure": 14, "pseudo": 14, "thermophys": 14, "evalu": 14, "engin": 14, "chemistri": 14, "53": 14, "2498": 14, "2508": 14, "2014": 14, "1021": 14, "ie4033999": 14, "vitoc": 14, "150": 14, "url": 14, "www": 14, "viessmann": 14, "co": 14, "uk": 14, "en": 14, "150a": 14, "html": 14, "charl": 14, "harri": 14, "jarrod": 14, "millman": 14, "st": 14, "\u00e9": 14, "fan": 14, "van": 14, "walt": 14, "ralf": 14, "gommer": 14, "pauli": 14, "virtanen": 14, "cournapeau": 14, "eric": 14, "wieser": 14, "julian": 14, "taylor": 14, "sebastian": 14, "berg": 14, "nathaniel": 14, "smith": 14, "robert": 14, "kern": 14, "matti": 14, "picu": 14, "stephan": 14, "hoyer": 14, "marten": 14, "kerkwijk": 14, "matthew": 14, "brett": 14, "allan": 14, "haldan": 14, "jaim": 14, "fern": 14, "\u00e1": 14, "ndez": 14, "del": 14, "\u00ed": 14, "mark": 14, "wieb": 14, "pearu": 14, "peterson": 14, "pierr": 14, "rard": 14, "marchant": 14, "kevin": 14, "sheppard": 14, "tyler": 14, "reddi": 14, "warren": 14, "weckess": 14, "hameer": 14, "abbasi": 14, "christoph": 14, "gohlk": 14, "travi": 14, "oliph": 14, "natur": 14, "585": 14, "7825": 14, "357": 14, "362": 14, "septemb": 14, "1038": 14, "s41586": 14, "020": 14, "2649": 14, "20": 14, "org": 14, "doc": 14, "tabor": 14, "bronicki": 14, "establish": 14, "criteria": 14, "vapor": 14, "sae": 14, "paper": 14, "januari": 14, "1964": 14, "4271": 14, "640823": 14, "econom": 14, "survei": 14, "organ": 14, "rankin": 14, "european": 14, "confer": 14, "manag": 14, "april": 14, "2009": 14, "hdl": 14, "handl": 14, "net": 14, "2268": 14, "14609": 14, "huijuan": 14, "chen": 14, "yogi": 14, "goswami": 14, "elia": 14, "stefanako": 14, "review": 14, "grade": 14, "renew": 14, "sustain": 14, "3059": 14, "3067": 14, "decemb": 14, "2010": 14, "rser": 14, "07": 14, "006": 14, "bo": 14, "tau": 14, "liu": 14, "kuo": 14, "hsiang": 14, "chien": 14, "chi": 14, "chuan": 14, "wang": 14, "wast": 14, "recoveri": 14, "29": 14, "1207": 14, "1217": 14, "june": 14, "2004": 14, "004": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"entropi": 0, "analysi": 0, "cop": [0, 10], "introduct": [0, 6, 7, 10, 12, 13], "carnot": [0, 10], "irrevers": 0, "product": [0, 12], "investig": 0, "work": [0, 4], "fluid": 0, "disect": 1, "partload": [1, 9], "effici": [1, 9], "effect": 1, "compressor": [1, 3], "evapor": 1, "heat": [1, 3, 10, 12, 13], "transfer": 1, "coeffic": 1, "condens": 1, "5": [2, 3], "minut": [2, 3], "oemof": [2, 5, 8, 9, 10, 11, 12], "solph": [2, 8, 9, 10, 11, 12, 13], "gener": [2, 3], "inform": [2, 3], "tespi": [3, 11, 12, 13], "mini": 3, "exampl": 3, "model": [3, 8, 9, 10, 12, 13], "exchang": 3, "learn": 3, "more": 3, "setup": 4, "your": 4, "python": 4, "environ": 4, "instal": 4, "jupyt": 4, "notebook": 4, "workshop": 5, "osms": 5, "2023": 5, "tabl": 5, "content": 5, "abstract": 5, "structur": 5, "tutori": 5, "teach": 5, "method": [5, 10], "precondit": 5, "particip": 5, "licens": 5, "minim": 8, "load": [8, 12], "variabl": [9, 12], "linear": 10, "pump": [10, 13], "real": 10, "world": 10, "combin": 11, "part": 12, "perform": 12, "prepar": [12, 13], "design": 12, "mode": 12, "influenc": 12, "ambient": 12, "temperatur": 12, "simul": 12, "data": 12, "simpl": 13, "build": 13, "run": 13, "result": 13, "literatur": 14, "refer": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})