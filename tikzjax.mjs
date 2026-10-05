var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var PA = {}, _A = {}, UA = {}, Ut;
function Ue() {
  if (Ut) return UA;
  Ut = 1;
  var o = UA && UA.__extends || /* @__PURE__ */ function() {
    var a = function(Z, m) {
      return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(z, sA) {
        z.__proto__ = sA;
      } || function(z, sA) {
        for (var cA in sA) sA.hasOwnProperty(cA) && (z[cA] = sA[cA]);
      }, a(Z, m);
    };
    return function(Z, m) {
      a(Z, m);
      function z() {
        this.constructor = Z;
      }
      Z.prototype = m === null ? Object.create(m) : (z.prototype = m.prototype, new z());
    };
  }(), l = UA && UA.__awaiter || function(a, Z, m, z) {
    return new (m || (m = Promise))(function(sA, cA) {
      function QA(iA) {
        try {
          eA(z.next(iA));
        } catch (pA) {
          cA(pA);
        }
      }
      function P(iA) {
        try {
          eA(z.throw(iA));
        } catch (pA) {
          cA(pA);
        }
      }
      function eA(iA) {
        iA.done ? sA(iA.value) : new m(function(pA) {
          pA(iA.value);
        }).then(QA, P);
      }
      eA((z = z.apply(a, Z || [])).next());
    });
  }, y = UA && UA.__generator || function(a, Z) {
    var m = { label: 0, sent: function() {
      if (cA[0] & 1) throw cA[1];
      return cA[1];
    }, trys: [], ops: [] }, z, sA, cA, QA;
    return QA = { next: P(0), throw: P(1), return: P(2) }, typeof Symbol == "function" && (QA[Symbol.iterator] = function() {
      return this;
    }), QA;
    function P(iA) {
      return function(pA) {
        return eA([iA, pA]);
      };
    }
    function eA(iA) {
      if (z) throw new TypeError("Generator is already executing.");
      for (; m; ) try {
        if (z = 1, sA && (cA = iA[0] & 2 ? sA.return : iA[0] ? sA.throw || ((cA = sA.return) && cA.call(sA), 0) : sA.next) && !(cA = cA.call(sA, iA[1])).done) return cA;
        switch (sA = 0, cA && (iA = [iA[0] & 2, cA.value]), iA[0]) {
          case 0:
          case 1:
            cA = iA;
            break;
          case 4:
            return m.label++, { value: iA[1], done: !1 };
          case 5:
            m.label++, sA = iA[1], iA = [0];
            continue;
          case 7:
            iA = m.ops.pop(), m.trys.pop();
            continue;
          default:
            if (cA = m.trys, !(cA = cA.length > 0 && cA[cA.length - 1]) && (iA[0] === 6 || iA[0] === 2)) {
              m = 0;
              continue;
            }
            if (iA[0] === 3 && (!cA || iA[1] > cA[0] && iA[1] < cA[3])) {
              m.label = iA[1];
              break;
            }
            if (iA[0] === 6 && m.label < cA[1]) {
              m.label = cA[1], cA = iA;
              break;
            }
            if (cA && m.label < cA[2]) {
              m.label = cA[2], m.ops.push(iA);
              break;
            }
            cA[2] && m.ops.pop(), m.trys.pop();
            continue;
        }
        iA = Z.call(a, m);
      } catch (pA) {
        iA = [6, pA], sA = 0;
      } finally {
        z = cA = 0;
      }
      if (iA[0] & 5) throw iA[1];
      return { value: iA[0] ? iA[1] : void 0, done: !0 };
    }
  }, b = UA && UA.__asyncValues || function(a) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var Z = a[Symbol.asyncIterator], m;
    return Z ? Z.call(a) : (a = typeof n == "function" ? n(a) : a[Symbol.iterator](), m = {}, z("next"), z("throw"), z("return"), m[Symbol.asyncIterator] = function() {
      return this;
    }, m);
    function z(cA) {
      m[cA] = a[cA] && function(QA) {
        return new Promise(function(P, eA) {
          QA = a[cA](QA), sA(P, eA, QA.done, QA.value);
        });
      };
    }
    function sA(cA, QA, P, eA) {
      Promise.resolve(eA).then(function(iA) {
        cA({ value: iA, done: P });
      }, QA);
    }
  }, X = UA && UA.__await || function(a) {
    return this instanceof X ? (this.v = a, this) : new X(a);
  }, u = UA && UA.__asyncGenerator || function(a, Z, m) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var z = m.apply(a, Z || []), sA, cA = [];
    return sA = {}, QA("next"), QA("throw"), QA("return"), sA[Symbol.asyncIterator] = function() {
      return this;
    }, sA;
    function QA(S) {
      z[S] && (sA[S] = function(T) {
        return new Promise(function(nA, EA) {
          cA.push([S, T, nA, EA]) > 1 || P(S, T);
        });
      });
    }
    function P(S, T) {
      try {
        eA(z[S](T));
      } catch (nA) {
        dA(cA[0][3], nA);
      }
    }
    function eA(S) {
      S.value instanceof X ? Promise.resolve(S.value.v).then(iA, pA) : dA(cA[0][2], S);
    }
    function iA(S) {
      P("next", S);
    }
    function pA(S) {
      P("throw", S);
    }
    function dA(S, T) {
      S(T), cA.shift(), cA.length && P(cA[0][0], cA[0][1]);
    }
  }, H = UA && UA.__asyncDelegator || function(a) {
    var Z, m;
    return Z = {}, z("next"), z("throw", function(sA) {
      throw sA;
    }), z("return"), Z[Symbol.iterator] = function() {
      return this;
    }, Z;
    function z(sA, cA) {
      Z[sA] = a[sA] ? function(QA) {
        return (m = !m) ? { value: X(a[sA](QA)), done: sA === "return" } : cA ? cA(QA) : QA;
      } : cA;
    }
  }, n = UA && UA.__values || function(a) {
    var Z = typeof Symbol == "function" && a[Symbol.iterator], m = 0;
    return Z ? Z.call(a) : {
      next: function() {
        return a && m >= a.length && (a = void 0), { value: a && a[m++], done: !a };
      }
    };
  };
  Object.defineProperty(UA, "__esModule", { value: !0 });
  var i;
  (function(a) {
    a[a.set_char = 0] = "set_char", a[a.set1 = 128] = "set1", a[a.set2 = 129] = "set2", a[a.set3 = 130] = "set3", a[a.set4 = 131] = "set4", a[a.set_rule = 132] = "set_rule", a[a.put_char = 133] = "put_char", a[a.put2 = 134] = "put2", a[a.put3 = 135] = "put3", a[a.put4 = 136] = "put4", a[a.put_rule = 137] = "put_rule", a[a.nop = 138] = "nop", a[a.bop = 139] = "bop", a[a.eop = 140] = "eop", a[a.push = 141] = "push", a[a.pop = 142] = "pop", a[a.right = 143] = "right", a[a.right2 = 144] = "right2", a[a.right3 = 145] = "right3", a[a.right4 = 146] = "right4", a[a.w = 147] = "w", a[a.w1 = 148] = "w1", a[a.w2 = 149] = "w2", a[a.w3 = 150] = "w3", a[a.w4 = 151] = "w4", a[a.x = 152] = "x", a[a.x1 = 153] = "x1", a[a.x2 = 154] = "x2", a[a.x3 = 155] = "x3", a[a.x4 = 156] = "x4", a[a.down = 157] = "down", a[a.down2 = 158] = "down2", a[a.down3 = 159] = "down3", a[a.down4 = 160] = "down4", a[a.y = 161] = "y", a[a.y1 = 162] = "y1", a[a.y2 = 163] = "y2", a[a.y3 = 164] = "y3", a[a.y4 = 165] = "y4", a[a.z = 166] = "z", a[a.z1 = 167] = "z1", a[a.z2 = 168] = "z2", a[a.z3 = 169] = "z3", a[a.z4 = 170] = "z4", a[a.fnt = 171] = "fnt", a[a.fnt1 = 235] = "fnt1", a[a.fnt2 = 236] = "fnt2", a[a.fnt3 = 237] = "fnt3", a[a.fnt4 = 238] = "fnt4", a[a.xxx = 239] = "xxx", a[a.xxx2 = 240] = "xxx2", a[a.xxx3 = 241] = "xxx3", a[a.xxx4 = 242] = "xxx4", a[a.fnt_def = 243] = "fnt_def", a[a.fnt_def2 = 244] = "fnt_def2", a[a.fnt_def3 = 245] = "fnt_def3", a[a.fnt_def4 = 246] = "fnt_def4", a[a.pre = 247] = "pre", a[a.post = 248] = "post", a[a.post_post = 249] = "post_post";
  })(i || (i = {}));
  var p = (
    /** @class */
    function() {
      function a(Z) {
        this.special = !1, Object.assign(this, Z);
      }
      return a.prototype.execute = function(Z) {
      }, a.prototype.toString = function() {
        return "DviCommand { }";
      }, a;
    }()
  );
  UA.DviCommand = p;
  var D = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.put_char, z;
      }
      return Z.prototype.execute = function(m) {
        m.putText(Buffer.from([this.c]));
      }, Z.prototype.toString = function() {
        return "PutChar { c: '" + String.fromCharCode(this.c) + "' }";
      }, Z;
    }(p)
  ), f = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.set_char, z;
      }
      return Z.prototype.execute = function(m) {
        var z = Buffer.from([this.c]), sA = m.putText(z);
        m.moveRight(sA);
      }, Z.prototype.toString = function() {
        return "SetChar { c: '" + String.fromCharCode(this.c) + "' }";
      }, Z;
    }(p)
  ), Y = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        return a.call(this, m) || this;
      }
      return Z.prototype.execute = function(m) {
        var z = m.putText(this.t);
        m.moveRight(z);
      }, Z.prototype.toString = function() {
        return 'SetText { t: "' + this.t.toString() + '" }';
      }, Z;
    }(p)
  ), c = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.put_rule, z;
      }
      return Z.prototype.execute = function(m) {
        m.putRule(this);
      }, Z.prototype.toString = function() {
        return "PutRule { a: " + this.a + ", b: " + this.b + " }";
      }, Z;
    }(p)
  ), w = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.set_rule, z;
      }
      return Z.prototype.execute = function(m) {
        m.putRule(this), m.moveRight(this.b);
      }, Z.prototype.toString = function() {
        return "SetRule { a: " + this.a + ", b: " + this.b + " }";
      }, Z;
    }(p)
  ), V = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.nop, z;
      }
      return Z.prototype.toString = function() {
        return "Nop { }";
      }, Z;
    }(p)
  ), I = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.bop, z;
      }
      return Z.prototype.execute = function(m) {
        m.beginPage(this);
      }, Z.prototype.toString = function() {
        return "Bop { ... }";
      }, Z;
    }(p)
  ), s = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.eop, z;
      }
      return Z.prototype.execute = function(m) {
        if (m.stack.length)
          throw Error("Stack should be empty at the end of a page.");
        m.endPage();
      }, Z.prototype.toString = function() {
        return "Eop { }";
      }, Z;
    }(p)
  ), C = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.push, z;
      }
      return Z.prototype.execute = function(m) {
        m.push();
      }, Z.prototype.toString = function() {
        return "Push { }";
      }, Z;
    }(p)
  ), x = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.pop, z;
      }
      return Z.prototype.execute = function(m) {
        m.pop();
      }, Z.prototype.toString = function() {
        return "Pop { }";
      }, Z;
    }(p)
  ), U = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.right, z;
      }
      return Z.prototype.execute = function(m) {
        m.moveRight(this.b);
      }, Z.prototype.toString = function() {
        return "MoveRight { b: " + this.b + " }";
      }, Z;
    }(p)
  ), N = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.w, z;
      }
      return Z.prototype.execute = function(m) {
        this.length > 1 && (m.position.w = this.b), m.moveRight(m.position.w);
      }, Z.prototype.toString = function() {
        return this.length > 1 ? "MoveW { b: " + this.b + " }" : "MoveW0 { }";
      }, Z;
    }(p)
  ), q = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.x, z;
      }
      return Z.prototype.execute = function(m) {
        this.length > 1 && (m.position.x = this.b), m.moveRight(m.position.x);
      }, Z.prototype.toString = function() {
        return this.length > 1 ? "MoveX { b: " + this.b + " }" : "MoveX0 { }";
      }, Z;
    }(p)
  ), L = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.down, z;
      }
      return Z.prototype.execute = function(m) {
        m.moveDown(this.a);
      }, Z.prototype.toString = function() {
        return "MoveDown { a: " + this.a + " }";
      }, Z;
    }(p)
  ), $ = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.y, z;
      }
      return Z.prototype.execute = function(m) {
        this.length > 1 && (m.position.y = this.a), m.moveDown(m.position.y);
      }, Z.prototype.toString = function() {
        return this.length > 1 ? "MoveY { a: " + this.a + " }" : "MoveY0 { }";
      }, Z;
    }(p)
  ), GA = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.z, z;
      }
      return Z.prototype.execute = function(m) {
        this.length > 1 && (m.position.z = this.a), m.moveDown(m.position.z);
      }, Z.prototype.toString = function() {
        return this.length > 1 ? "MoveZ { a: " + this.a + " }" : "MoveZ0 { }";
      }, Z;
    }(p)
  ), _ = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.fnt, z;
      }
      return Z.prototype.execute = function(m) {
        if (m.fonts[this.k])
          m.setFont(m.fonts[this.k]);
        else
          throw "Could not find font " + this.k + ".";
      }, Z.prototype.toString = function() {
        return "SetFont { k: " + this.k + " }";
      }, Z;
    }(p)
  ), AA = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.xxx, z.special = !0, z;
      }
      return Z.prototype.toString = function() {
        return "Special { x: '" + this.x + "' }";
      }, Z;
    }(p)
  ), aA = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.fnt_def, z;
      }
      return Z.prototype.execute = function(m) {
        m.fonts[this.k] = m.loadFont({
          name: this.n,
          checksum: this.c,
          scaleFactor: this.s,
          designSize: this.d
        });
      }, Z.prototype.toString = function() {
        return "FontDefinition { k: " + this.k + ", n: '" + this.n + "', ... }";
      }, Z;
    }(p)
  ), K = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.pre, z;
      }
      return Z.prototype.execute = function(m) {
        if (this.num <= 0)
          throw Error("Invalid numerator (must be > 0)");
        if (this.den <= 0)
          throw Error("Invalid denominator (must be > 0)");
        if (this.i != 2)
          throw Error("DVI format must be 2.");
        m.preamble(this.num, this.den, this.mag, this.x);
      }, Z.prototype.toString = function() {
        return "Preamble { i: " + this.i + ", num: " + this.num + ", den: " + this.den + ", mag: " + this.mag + ", x: '" + this.x + "' }";
      }, Z;
    }(p)
  ), fA = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.post, z;
      }
      return Z.prototype.execute = function(m) {
        m.post(this);
      }, Z.prototype.toString = function() {
        return "Post { p: " + this.p + ", num: " + this.num + ", den: " + this.den + ", mag: " + this.mag + ", ... }";
      }, Z;
    }(p)
  ), bA = (
    /** @class */
    function(a) {
      o(Z, a);
      function Z(m) {
        var z = a.call(this, m) || this;
        return z.opcode = i.post_post, z;
      }
      return Z.prototype.execute = function(m) {
        m.postPost(this);
      }, Z.prototype.toString = function() {
        return "PostPost { q: " + this.q + ", i: " + this.i + " }";
      }, Z;
    }(p)
  );
  function xA(a, Z) {
    if (a >= i.set_char && a < i.set1)
      return new f({ c: a, length: 1 });
    if (a >= i.fnt && a < i.fnt1)
      return new _({ k: a - 171, length: 1 });
    if (a >= 250 && a <= 255)
      throw Error("Undefined opcode " + a);
    switch (a) {
      case i.set1:
      case i.set2:
      case i.set3:
      case i.set4:
        return Z.length < a - i.set1 + 1 ? void 0 : new f({
          c: Z.readUIntBE(0, a - i.set1 + 1),
          length: a - i.set1 + 1 + 1
        });
      case i.set_rule:
        return Z.length < 8 ? void 0 : new w({
          a: Z.readInt32BE(0),
          b: Z.readInt32BE(4),
          length: 9
        });
      case i.put_char:
      case i.put2:
      case i.put3:
      case i.put4:
        return Z.length < a - i.put_char + 1 ? void 0 : new D({
          c: Z.readIntBE(0, a - i.put_char + 1),
          length: a - i.put_char + 1 + 1
        });
      case i.put_rule:
        return Z.length < 8 ? void 0 : new c({
          a: Z.readInt32BE(0),
          b: Z.readInt32BE(4),
          length: 9
        });
      case i.nop:
        return new V({ length: 1 });
      case i.bop:
        return Z.length < 44 ? void 0 : new I({
          c_0: Z.readUInt32BE(0),
          c_1: Z.readUInt32BE(4),
          c_2: Z.readUInt32BE(8),
          c_3: Z.readUInt32BE(12),
          c_4: Z.readUInt32BE(16),
          c_5: Z.readUInt32BE(20),
          c_6: Z.readUInt32BE(24),
          c_7: Z.readUInt32BE(28),
          c_8: Z.readUInt32BE(32),
          c_9: Z.readUInt32BE(36),
          p: Z.readUInt32BE(40),
          length: 45
        });
      case i.eop:
        return new s({ length: 1 });
      case i.push:
        return new C({ length: 1 });
      case i.pop:
        return new x({ length: 1 });
      case i.right:
      case i.right2:
      case i.right3:
      case i.right4:
        return Z.length < a - i.right + 1 ? void 0 : new U({
          b: Z.readIntBE(0, a - i.right + 1),
          length: a - i.right + 1 + 1
        });
      case i.w:
        return new N({ b: 0, length: 1 });
      case i.w1:
      case i.w2:
      case i.w3:
      case i.w4:
        return Z.length < a - i.w ? void 0 : new N({
          b: Z.readIntBE(0, a - i.w),
          length: a - i.w + 1
        });
      case i.x:
        return new q({ b: 0, length: 1 });
      case i.x1:
      case i.x2:
      case i.x3:
      case i.x4:
        return Z.length < a - i.x ? void 0 : new q({
          b: Z.readIntBE(0, a - i.x),
          length: a - i.x + 1
        });
      case i.down:
      case i.down2:
      case i.down3:
      case i.down4:
        return Z.length < a - i.down + 1 ? void 0 : new L({
          a: Z.readIntBE(0, a - i.down + 1),
          length: a - i.down + 1 + 1
        });
      case i.y:
        return new $({ a: 0, length: 1 });
      case i.y1:
      case i.y2:
      case i.y3:
      case i.y4:
        return Z.length < a - i.y ? void 0 : new $({
          a: Z.readIntBE(0, a - i.y),
          length: a - i.y + 1
        });
      case i.z:
        return new GA({ a: 0, length: 1 });
      case i.z1:
      case i.z2:
      case i.z3:
      case i.z4:
        return Z.length < a - i.z ? void 0 : new GA({
          a: Z.readIntBE(0, a - i.z),
          length: a - i.z + 1
        });
      case i.fnt1:
      case i.fnt2:
      case i.fnt3:
      case i.fnt4:
        return Z.length < a - i.fnt1 + 1 ? void 0 : new _({
          k: Z.readIntBE(0, a - i.fnt1 + 1),
          length: a - i.fnt1 + 1 + 1
        });
      case i.xxx:
      case i.xxx2:
      case i.xxx3:
      case i.xxx4: {
        var m = a - i.xxx + 1;
        if (Z.length < m)
          return;
        var z = Z.readUIntBE(0, m);
        return Z.length < m + z ? void 0 : new AA({
          x: Z.slice(m, m + z).toString(),
          length: m + z + 1
        });
      }
      case i.fnt_def:
      case i.fnt_def2:
      case i.fnt_def3:
      case i.fnt_def4: {
        var m = a - i.fnt_def + 1;
        if (Z.length < m)
          return;
        var z = Z.readIntBE(0, m);
        if (Z.length < m + 14)
          return;
        var sA = Z.readUInt32BE(m + 0), cA = Z.readUInt32BE(m + 4), QA = Z.readUInt32BE(m + 8), P = Z.readUInt8(m + 12), eA = Z.readUInt8(m + 13);
        if (Z.length < m + 14 + P + eA)
          return;
        var iA = Z.slice(m + 14, m + 14 + P + eA).toString();
        return new aA({
          k: z,
          c: sA,
          s: cA,
          d: QA,
          a: P,
          l: eA,
          n: iA,
          length: m + 14 + P + eA + 1
        });
      }
      case i.pre: {
        if (Z.length < 14)
          return;
        var m = Z.readUInt8(0), pA = Z.readUInt32BE(1), dA = Z.readUInt32BE(5), S = Z.readUInt32BE(9), z = Z.readUInt8(13);
        return Z.length < 14 + z ? void 0 : new K({
          i: m,
          num: pA,
          den: dA,
          mag: S,
          x: Z.slice(14, 14 + z).toString(),
          length: 14 + z + 1
        });
      }
      case i.post:
        return Z.length < 28 ? void 0 : new fA({
          p: Z.readUInt32BE(0),
          num: Z.readUInt32BE(4),
          den: Z.readUInt32BE(8),
          mag: Z.readUInt32BE(12),
          l: Z.readUInt32BE(16),
          u: Z.readUInt32BE(20),
          s: Z.readUInt16BE(24),
          t: Z.readUInt16BE(26),
          length: 29
        });
      case i.post_post:
        return Z.length < 5 ? void 0 : new bA({
          q: Z.readUInt32BE(0),
          i: Z.readUInt8(4),
          length: 6
        });
    }
  }
  function HA(a) {
    return u(this, arguments, function() {
      var m, z, sA, cA, QA, P, eA, iA, pA, dA, S;
      return y(this, function(T) {
        switch (T.label) {
          case 0:
            sA = Buffer.alloc(0), cA = !1, T.label = 1;
          case 1:
            T.trys.push([1, 12, 13, 18]), QA = b(a), T.label = 2;
          case 2:
            return [4, X(QA.next())];
          case 3:
            if (P = T.sent(), !!P.done) return [3, 11];
            eA = P.value, sA = Buffer.concat([sA, eA]), iA = 0, T.label = 4;
          case 4:
            if (!(iA < sA.length)) return [3, 9];
            if (pA = sA.readUInt8(iA), cA) {
              if (pA == 223)
                return iA++, [3, 4];
              throw Error("Only 223 bytes are permitted after the post-postamble.");
            }
            return dA = xA(pA, sA.slice(iA + 1)), dA ? [4, X(dA)] : [3, 7];
          case 5:
            return [4, T.sent()];
          case 6:
            return T.sent(), iA += dA.length, dA.opcode == i.post_post && (cA = !0), [3, 8];
          case 7:
            return [3, 9];
          case 8:
            return [3, 4];
          case 9:
            sA = sA.slice(iA), T.label = 10;
          case 10:
            return [3, 2];
          case 11:
            return [3, 18];
          case 12:
            return S = T.sent(), m = { error: S }, [3, 18];
          case 13:
            return T.trys.push([13, , 16, 17]), P && !P.done && (z = QA.return) ? [4, X(z.call(QA))] : [3, 15];
          case 14:
            T.sent(), T.label = 15;
          case 15:
            return [3, 17];
          case 16:
            if (m) throw m.error;
            return [
              7
              /*endfinally*/
            ];
          case 17:
            return [
              7
              /*endfinally*/
            ];
          case 18:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  UA.dviParser = HA;
  function oA(a, Z) {
    var m, z;
    return l(this, void 0, void 0, function() {
      var sA, cA, QA, P;
      return y(this, function(eA) {
        switch (eA.label) {
          case 0:
            eA.trys.push([0, 5, 6, 11]), m = b(a), eA.label = 1;
          case 1:
            return [4, m.next()];
          case 2:
            if (z = eA.sent(), !!z.done) return [3, 4];
            QA = z.value, console.log(QA.toString()), QA.execute(Z), eA.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return P = eA.sent(), sA = { error: P }, [3, 11];
          case 6:
            return eA.trys.push([6, , 9, 10]), z && !z.done && (cA = m.return) ? [4, cA.call(m)] : [3, 8];
          case 7:
            eA.sent(), eA.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (sA) throw sA.error;
            return [
              7
              /*endfinally*/
            ];
          case 10:
            return [
              7
              /*endfinally*/
            ];
          case 11:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  UA.execute = oA;
  function FA(a, Z, m) {
    return u(this, arguments, function() {
      var sA, cA, QA, P, eA, iA, pA;
      return y(this, function(dA) {
        switch (dA.label) {
          case 0:
            QA = [], dA.label = 1;
          case 1:
            dA.trys.push([1, 12, 13, 18]), P = b(a), dA.label = 2;
          case 2:
            return [4, X(P.next())];
          case 3:
            return eA = dA.sent(), !eA.done ? (iA = eA.value, Z(iA) ? (QA.push(iA), [3, 10]) : [3, 4]) : [3, 11];
          case 4:
            return QA.length > 0 ? [5, n(H(b(m(QA))))] : [3, 7];
          case 5:
            return [4, X.apply(void 0, [dA.sent()])];
          case 6:
            dA.sent(), QA = [], dA.label = 7;
          case 7:
            return [4, X(iA)];
          case 8:
            return [4, dA.sent()];
          case 9:
            dA.sent(), dA.label = 10;
          case 10:
            return [3, 2];
          case 11:
            return [3, 18];
          case 12:
            return pA = dA.sent(), sA = { error: pA }, [3, 18];
          case 13:
            return dA.trys.push([13, , 16, 17]), eA && !eA.done && (cA = P.return) ? [4, X(cA.call(P))] : [3, 15];
          case 14:
            dA.sent(), dA.label = 15;
          case 15:
            return [3, 17];
          case 16:
            if (sA) throw sA.error;
            return [
              7
              /*endfinally*/
            ];
          case 17:
            return [
              7
              /*endfinally*/
            ];
          case 18:
            return QA.length > 0 ? [5, n(H(b(m(QA))))] : [3, 21];
          case 19:
            return [4, X.apply(void 0, [dA.sent()])];
          case 20:
            dA.sent(), dA.label = 21;
          case 21:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  UA.merge = FA;
  function v(a) {
    return FA(a, function(Z) {
      return Z instanceof f;
    }, function(Z) {
      var m;
      return y(this, function(z) {
        switch (z.label) {
          case 0:
            return m = Buffer.from(Z.map(function(sA) {
              return sA.c;
            })), [4, new Y({ t: m })];
          case 1:
            return z.sent(), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return UA.mergeText = v, UA;
}
var Rt;
function Ir() {
  if (Rt) return _A;
  Rt = 1;
  var o = _A && _A.__extends || /* @__PURE__ */ function() {
    var f = function(Y, c) {
      return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(w, V) {
        w.__proto__ = V;
      } || function(w, V) {
        for (var I in V) V.hasOwnProperty(I) && (w[I] = V[I]);
      }, f(Y, c);
    };
    return function(Y, c) {
      f(Y, c);
      function w() {
        this.constructor = Y;
      }
      Y.prototype = c === null ? Object.create(c) : (w.prototype = c.prototype, new w());
    };
  }(), l = _A && _A.__generator || function(f, Y) {
    var c = { label: 0, sent: function() {
      if (I[0] & 1) throw I[1];
      return I[1];
    }, trys: [], ops: [] }, w, V, I, s;
    return s = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
      return this;
    }), s;
    function C(U) {
      return function(N) {
        return x([U, N]);
      };
    }
    function x(U) {
      if (w) throw new TypeError("Generator is already executing.");
      for (; c; ) try {
        if (w = 1, V && (I = U[0] & 2 ? V.return : U[0] ? V.throw || ((I = V.return) && I.call(V), 0) : V.next) && !(I = I.call(V, U[1])).done) return I;
        switch (V = 0, I && (U = [U[0] & 2, I.value]), U[0]) {
          case 0:
          case 1:
            I = U;
            break;
          case 4:
            return c.label++, { value: U[1], done: !1 };
          case 5:
            c.label++, V = U[1], U = [0];
            continue;
          case 7:
            U = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (I = c.trys, !(I = I.length > 0 && I[I.length - 1]) && (U[0] === 6 || U[0] === 2)) {
              c = 0;
              continue;
            }
            if (U[0] === 3 && (!I || U[1] > I[0] && U[1] < I[3])) {
              c.label = U[1];
              break;
            }
            if (U[0] === 6 && c.label < I[1]) {
              c.label = I[1], I = U;
              break;
            }
            if (I && c.label < I[2]) {
              c.label = I[2], c.ops.push(U);
              break;
            }
            I[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        U = Y.call(f, c);
      } catch (N) {
        U = [6, N], V = 0;
      } finally {
        w = I = 0;
      }
      if (U[0] & 5) throw U[1];
      return { value: U[0] ? U[1] : void 0, done: !0 };
    }
  }, y = _A && _A.__asyncValues || function(f) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var Y = f[Symbol.asyncIterator], c;
    return Y ? Y.call(f) : (f = typeof __values == "function" ? __values(f) : f[Symbol.iterator](), c = {}, w("next"), w("throw"), w("return"), c[Symbol.asyncIterator] = function() {
      return this;
    }, c);
    function w(I) {
      c[I] = f[I] && function(s) {
        return new Promise(function(C, x) {
          s = f[I](s), V(C, x, s.done, s.value);
        });
      };
    }
    function V(I, s, C, x) {
      Promise.resolve(x).then(function(U) {
        I({ value: U, done: C });
      }, s);
    }
  }, b = _A && _A.__await || function(f) {
    return this instanceof b ? (this.v = f, this) : new b(f);
  }, X = _A && _A.__asyncGenerator || function(f, Y, c) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var w = c.apply(f, Y || []), V, I = [];
    return V = {}, s("next"), s("throw"), s("return"), V[Symbol.asyncIterator] = function() {
      return this;
    }, V;
    function s(L) {
      w[L] && (V[L] = function($) {
        return new Promise(function(GA, _) {
          I.push([L, $, GA, _]) > 1 || C(L, $);
        });
      });
    }
    function C(L, $) {
      try {
        x(w[L]($));
      } catch (GA) {
        q(I[0][3], GA);
      }
    }
    function x(L) {
      L.value instanceof b ? Promise.resolve(L.value.v).then(U, N) : q(I[0][2], L);
    }
    function U(L) {
      C("next", L);
    }
    function N(L) {
      C("throw", L);
    }
    function q(L, $) {
      L($), I.shift(), I.length && C(I[0][0], I[0][1]);
    }
  };
  Object.defineProperty(_A, "__esModule", { value: !0 });
  var u = Ue(), H = (
    /** @class */
    function(f) {
      o(Y, f);
      function Y(c) {
        var w = f.call(this, {}) || this;
        return w.color = c, w;
      }
      return Y.prototype.execute = function(c) {
        c.pushColor(this.color);
      }, Y.prototype.toString = function() {
        return "PushColor { color: '" + this.color + "' }";
      }, Y;
    }(u.DviCommand)
  ), n = (
    /** @class */
    function(f) {
      o(Y, f);
      function Y() {
        return f.call(this, {}) || this;
      }
      return Y.prototype.execute = function(c) {
        c.popColor();
      }, Y.prototype.toString = function() {
        return "PopColor { }";
      }, Y;
    }(u.DviCommand)
  );
  function i(f) {
    return ("00" + Math.round(f).toString(16)).substr(-2);
  }
  function p(f) {
    if (f == "gray 0")
      return "black";
    if (f == "gray 1")
      return "white";
    if (f.startsWith("rgb "))
      return "#" + f.split(" ").slice(1).map(function(c) {
        return i(parseFloat(c) * 255);
      }).join("");
    if (f.startsWith("gray ")) {
      var Y = f.split(" ")[1];
      return p("rgb " + Y + " " + Y + " " + Y);
    }
    return "black";
  }
  function D(f) {
    return X(this, arguments, function() {
      var Y, c, w, V, I, s, C;
      return l(this, function(x) {
        switch (x.label) {
          case 0:
            x.label = 1;
          case 1:
            x.trys.push([1, 17, 18, 23]), w = y(f), x.label = 2;
          case 2:
            return [4, b(w.next())];
          case 3:
            return V = x.sent(), !V.done ? (I = V.value, I.special ? [3, 6] : [4, b(I)]) : [3, 16];
          case 4:
            return [4, x.sent()];
          case 5:
            return x.sent(), [3, 15];
          case 6:
            return I.x.startsWith("color ") ? [3, 9] : [4, b(I)];
          case 7:
            return [4, x.sent()];
          case 8:
            return x.sent(), [3, 15];
          case 9:
            return I.x.startsWith("color push ") ? (s = p(I.x.replace(/^color push /, "")), [4, b(new H(s))]) : [3, 12];
          case 10:
            return [4, x.sent()];
          case 11:
            x.sent(), x.label = 12;
          case 12:
            return I.x.startsWith("color pop") ? [4, b(new n())] : [3, 15];
          case 13:
            return [4, x.sent()];
          case 14:
            x.sent(), x.label = 15;
          case 15:
            return [3, 2];
          case 16:
            return [3, 23];
          case 17:
            return C = x.sent(), Y = { error: C }, [3, 23];
          case 18:
            return x.trys.push([18, , 21, 22]), V && !V.done && (c = w.return) ? [4, b(c.call(w))] : [3, 20];
          case 19:
            x.sent(), x.label = 20;
          case 20:
            return [3, 22];
          case 21:
            if (Y) throw Y.error;
            return [
              7
              /*endfinally*/
            ];
          case 22:
            return [
              7
              /*endfinally*/
            ];
          case 23:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return _A.default = D, _A;
}
var OA = {}, Nt;
function Gr() {
  if (Nt) return OA;
  Nt = 1;
  var o = OA && OA.__extends || /* @__PURE__ */ function() {
    var p = function(D, f) {
      return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(Y, c) {
        Y.__proto__ = c;
      } || function(Y, c) {
        for (var w in c) c.hasOwnProperty(w) && (Y[w] = c[w]);
      }, p(D, f);
    };
    return function(D, f) {
      p(D, f);
      function Y() {
        this.constructor = D;
      }
      D.prototype = f === null ? Object.create(f) : (Y.prototype = f.prototype, new Y());
    };
  }(), l = OA && OA.__generator || function(p, D) {
    var f = { label: 0, sent: function() {
      if (w[0] & 1) throw w[1];
      return w[1];
    }, trys: [], ops: [] }, Y, c, w, V;
    return V = { next: I(0), throw: I(1), return: I(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
      return this;
    }), V;
    function I(C) {
      return function(x) {
        return s([C, x]);
      };
    }
    function s(C) {
      if (Y) throw new TypeError("Generator is already executing.");
      for (; f; ) try {
        if (Y = 1, c && (w = C[0] & 2 ? c.return : C[0] ? c.throw || ((w = c.return) && w.call(c), 0) : c.next) && !(w = w.call(c, C[1])).done) return w;
        switch (c = 0, w && (C = [C[0] & 2, w.value]), C[0]) {
          case 0:
          case 1:
            w = C;
            break;
          case 4:
            return f.label++, { value: C[1], done: !1 };
          case 5:
            f.label++, c = C[1], C = [0];
            continue;
          case 7:
            C = f.ops.pop(), f.trys.pop();
            continue;
          default:
            if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (C[0] === 6 || C[0] === 2)) {
              f = 0;
              continue;
            }
            if (C[0] === 3 && (!w || C[1] > w[0] && C[1] < w[3])) {
              f.label = C[1];
              break;
            }
            if (C[0] === 6 && f.label < w[1]) {
              f.label = w[1], w = C;
              break;
            }
            if (w && f.label < w[2]) {
              f.label = w[2], f.ops.push(C);
              break;
            }
            w[2] && f.ops.pop(), f.trys.pop();
            continue;
        }
        C = D.call(p, f);
      } catch (x) {
        C = [6, x], c = 0;
      } finally {
        Y = w = 0;
      }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  }, y = OA && OA.__asyncValues || function(p) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var D = p[Symbol.asyncIterator], f;
    return D ? D.call(p) : (p = typeof __values == "function" ? __values(p) : p[Symbol.iterator](), f = {}, Y("next"), Y("throw"), Y("return"), f[Symbol.asyncIterator] = function() {
      return this;
    }, f);
    function Y(w) {
      f[w] = p[w] && function(V) {
        return new Promise(function(I, s) {
          V = p[w](V), c(I, s, V.done, V.value);
        });
      };
    }
    function c(w, V, I, s) {
      Promise.resolve(s).then(function(C) {
        w({ value: C, done: I });
      }, V);
    }
  }, b = OA && OA.__await || function(p) {
    return this instanceof b ? (this.v = p, this) : new b(p);
  }, X = OA && OA.__asyncGenerator || function(p, D, f) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var Y = f.apply(p, D || []), c, w = [];
    return c = {}, V("next"), V("throw"), V("return"), c[Symbol.asyncIterator] = function() {
      return this;
    }, c;
    function V(N) {
      Y[N] && (c[N] = function(q) {
        return new Promise(function(L, $) {
          w.push([N, q, L, $]) > 1 || I(N, q);
        });
      });
    }
    function I(N, q) {
      try {
        s(Y[N](q));
      } catch (L) {
        U(w[0][3], L);
      }
    }
    function s(N) {
      N.value instanceof b ? Promise.resolve(N.value.v).then(C, x) : U(w[0][2], N);
    }
    function C(N) {
      I("next", N);
    }
    function x(N) {
      I("throw", N);
    }
    function U(N, q) {
      N(q), w.shift(), w.length && I(w[0][0], w[0][1]);
    }
  };
  Object.defineProperty(OA, "__esModule", { value: !0 });
  var u = Ue(), H = (
    /** @class */
    function(p) {
      o(D, p);
      function D(f) {
        var Y = p.call(this, {}) || this;
        return Y.svg = f, Y;
      }
      return D.prototype.execute = function(f) {
        f.putSVG(this.svg);
      }, D;
    }(u.DviCommand)
  );
  function n(p) {
    return X(this, arguments, function() {
      var f, Y, c, w, V, I, s;
      return l(this, function(C) {
        switch (C.label) {
          case 0:
            C.trys.push([0, 13, 14, 19]), c = y(p), C.label = 1;
          case 1:
            return [4, b(c.next())];
          case 2:
            return w = C.sent(), !w.done ? (V = w.value, V.special ? [3, 5] : [4, b(V)]) : [3, 12];
          case 3:
            return [4, C.sent()];
          case 4:
            return C.sent(), [3, 11];
          case 5:
            return V.x.startsWith("dvisvgm:raw ") ? [3, 8] : [4, b(V)];
          case 6:
            return [4, C.sent()];
          case 7:
            return C.sent(), [3, 11];
          case 8:
            return I = V.x.replace(/^dvisvgm:raw /, ""), [4, b(new H(I))];
          case 9:
            return [4, C.sent()];
          case 10:
            C.sent(), C.label = 11;
          case 11:
            return [3, 1];
          case 12:
            return [3, 19];
          case 13:
            return s = C.sent(), f = { error: s }, [3, 19];
          case 14:
            return C.trys.push([14, , 17, 18]), w && !w.done && (Y = c.return) ? [4, b(Y.call(c))] : [3, 16];
          case 15:
            C.sent(), C.label = 16;
          case 16:
            return [3, 18];
          case 17:
            if (f) throw f.error;
            return [
              7
              /*endfinally*/
            ];
          case 18:
            return [
              7
              /*endfinally*/
            ];
          case 19:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  function i(p) {
    return u.merge(n(p), function(D) {
      return D.svg;
    }, function(D) {
      var f;
      return l(this, function(Y) {
        switch (Y.label) {
          case 0:
            return f = D.map(function(c) {
              return c.svg;
            }).join("").replace(/{\?nl}/g, `
`), [4, new H(f)];
          case 1:
            return Y.sent(), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return OA.default = i, OA;
}
var LA = {}, Xt;
function Er() {
  if (Xt) return LA;
  Xt = 1;
  var o = LA && LA.__extends || /* @__PURE__ */ function() {
    var i = function(p, D) {
      return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, Y) {
        f.__proto__ = Y;
      } || function(f, Y) {
        for (var c in Y) Y.hasOwnProperty(c) && (f[c] = Y[c]);
      }, i(p, D);
    };
    return function(p, D) {
      i(p, D);
      function f() {
        this.constructor = p;
      }
      p.prototype = D === null ? Object.create(D) : (f.prototype = D.prototype, new f());
    };
  }(), l = LA && LA.__generator || function(i, p) {
    var D = { label: 0, sent: function() {
      if (c[0] & 1) throw c[1];
      return c[1];
    }, trys: [], ops: [] }, f, Y, c, w;
    return w = { next: V(0), throw: V(1), return: V(2) }, typeof Symbol == "function" && (w[Symbol.iterator] = function() {
      return this;
    }), w;
    function V(s) {
      return function(C) {
        return I([s, C]);
      };
    }
    function I(s) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; D; ) try {
        if (f = 1, Y && (c = s[0] & 2 ? Y.return : s[0] ? Y.throw || ((c = Y.return) && c.call(Y), 0) : Y.next) && !(c = c.call(Y, s[1])).done) return c;
        switch (Y = 0, c && (s = [s[0] & 2, c.value]), s[0]) {
          case 0:
          case 1:
            c = s;
            break;
          case 4:
            return D.label++, { value: s[1], done: !1 };
          case 5:
            D.label++, Y = s[1], s = [0];
            continue;
          case 7:
            s = D.ops.pop(), D.trys.pop();
            continue;
          default:
            if (c = D.trys, !(c = c.length > 0 && c[c.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              D = 0;
              continue;
            }
            if (s[0] === 3 && (!c || s[1] > c[0] && s[1] < c[3])) {
              D.label = s[1];
              break;
            }
            if (s[0] === 6 && D.label < c[1]) {
              D.label = c[1], c = s;
              break;
            }
            if (c && D.label < c[2]) {
              D.label = c[2], D.ops.push(s);
              break;
            }
            c[2] && D.ops.pop(), D.trys.pop();
            continue;
        }
        s = p.call(i, D);
      } catch (C) {
        s = [6, C], Y = 0;
      } finally {
        f = c = 0;
      }
      if (s[0] & 5) throw s[1];
      return { value: s[0] ? s[1] : void 0, done: !0 };
    }
  }, y = LA && LA.__asyncValues || function(i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var p = i[Symbol.asyncIterator], D;
    return p ? p.call(i) : (i = typeof __values == "function" ? __values(i) : i[Symbol.iterator](), D = {}, f("next"), f("throw"), f("return"), D[Symbol.asyncIterator] = function() {
      return this;
    }, D);
    function f(c) {
      D[c] = i[c] && function(w) {
        return new Promise(function(V, I) {
          w = i[c](w), Y(V, I, w.done, w.value);
        });
      };
    }
    function Y(c, w, V, I) {
      Promise.resolve(I).then(function(s) {
        c({ value: s, done: V });
      }, w);
    }
  }, b = LA && LA.__await || function(i) {
    return this instanceof b ? (this.v = i, this) : new b(i);
  }, X = LA && LA.__asyncGenerator || function(i, p, D) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var f = D.apply(i, p || []), Y, c = [];
    return Y = {}, w("next"), w("throw"), w("return"), Y[Symbol.asyncIterator] = function() {
      return this;
    }, Y;
    function w(U) {
      f[U] && (Y[U] = function(N) {
        return new Promise(function(q, L) {
          c.push([U, N, q, L]) > 1 || V(U, N);
        });
      });
    }
    function V(U, N) {
      try {
        I(f[U](N));
      } catch (q) {
        x(c[0][3], q);
      }
    }
    function I(U) {
      U.value instanceof b ? Promise.resolve(U.value.v).then(s, C) : x(c[0][2], U);
    }
    function s(U) {
      V("next", U);
    }
    function C(U) {
      V("throw", U);
    }
    function x(U, N) {
      U(N), c.shift(), c.length && V(c[0][0], c[0][1]);
    }
  };
  Object.defineProperty(LA, "__esModule", { value: !0 });
  var u = Ue(), H = (
    /** @class */
    function(i) {
      o(p, i);
      function p(D, f) {
        var Y = i.call(this, {}) || this;
        return Y.width = D, Y.height = f, Y;
      }
      return p.prototype.toString = function() {
        return "Papersize { width: " + this.width + ", height: " + this.height + " }";
      }, p;
    }(u.DviCommand)
  );
  function n(i) {
    return X(this, arguments, function() {
      var p, D, f, Y, c, w, V, I, s;
      return l(this, function(C) {
        switch (C.label) {
          case 0:
            C.trys.push([0, 13, 14, 19]), f = y(i), C.label = 1;
          case 1:
            return [4, b(f.next())];
          case 2:
            return Y = C.sent(), !Y.done ? (c = Y.value, c.special ? [3, 5] : [4, b(c)]) : [3, 12];
          case 3:
            return [4, C.sent()];
          case 4:
            return C.sent(), [3, 11];
          case 5:
            return c.x.startsWith("papersize=") ? [3, 8] : [4, b(c)];
          case 6:
            return [4, C.sent()];
          case 7:
            return C.sent(), [3, 11];
          case 8:
            if (w = c.x.replace(/^papersize=/, "").split(","), w.length != 2)
              throw Error("Papersize special requires two arguments.");
            if (!w[0].endsWith("pt"))
              throw Error("Papersize special width must be in points.");
            if (!w[1].endsWith("pt"))
              throw Error("Papersize special height must be in points.");
            return V = parseFloat(w[0].replace(/pt$/, "")), I = parseFloat(w[1].replace(/pt$/, "")), [4, b(new H(V, I))];
          case 9:
            return [4, C.sent()];
          case 10:
            C.sent(), C.label = 11;
          case 11:
            return [3, 1];
          case 12:
            return [3, 19];
          case 13:
            return s = C.sent(), p = { error: s }, [3, 19];
          case 14:
            return C.trys.push([14, , 17, 18]), Y && !Y.done && (D = f.return) ? [4, b(D.call(f))] : [3, 16];
          case 15:
            C.sent(), C.label = 16;
          case 16:
            return [3, 18];
          case 17:
            if (p) throw p.error;
            return [
              7
              /*endfinally*/
            ];
          case 18:
            return [
              7
              /*endfinally*/
            ];
          case 19:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return LA.default = n, LA;
}
var he = {}, be = {}, ge = {}, $A = {}, kt;
function br() {
  if (kt) return $A;
  kt = 1;
  var o = $A && $A.__extends || /* @__PURE__ */ function() {
    var n = function(i, p) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(D, f) {
        D.__proto__ = f;
      } || function(D, f) {
        for (var Y in f) f.hasOwnProperty(Y) && (D[Y] = f[Y]);
      }, n(i, p);
    };
    return function(i, p) {
      n(i, p);
      function D() {
        this.constructor = i;
      }
      i.prototype = p === null ? Object.create(p) : (D.prototype = p.prototype, new D());
    };
  }();
  Object.defineProperty($A, "__esModule", { value: !0 });
  var l = (
    /** @class */
    function() {
      function n(i, p, D, f, Y, c, w, V) {
        this.tfm = i, i.set_char(p, this), this.char_code = p, this.width = D, this.height = f, this.depth = Y, this.italic_correction = c, this.lig_kern_program_index = w, this.next_larger_char = V;
      }
      return n.prototype.scaled_width = function(i) {
        return this.width * i;
      }, n.prototype.scaled_height = function(i) {
        return this.height * i;
      }, n.prototype.scaled_depth = function(i) {
        return Number(this.depth * i);
      }, n.prototype.scaled_dimensions = function(i) {
        return [this.width, this.height, this.depth].map(function(p) {
          return p * i;
        });
      }, n.prototype.next_larger_tfm_char = function() {
        return this.next_larger_char !== null ? this.tfm.get_char(this.next_larger_char) : null;
      }, n.prototype.get_lig_kern_program = function(i) {
        return this.lig_kern_program_index !== null ? this.tfm.get_lig_kern_program(this.lig_kern_program_index) : null;
      }, n;
    }()
  );
  $A.TfmChar = l;
  var y = (
    /** @class */
    function(n) {
      o(i, n);
      function i(p, D, f, Y, c, w, V, I, s) {
        var C = n.call(this, p, D, f, Y, c, w, I, s) || this;
        return C.top, C.mid, C.bot, C.rep = V, C;
      }
      return i;
    }(l)
  );
  $A.TfmExtensibleChar = y;
  var b = (
    /** @class */
    /* @__PURE__ */ function() {
      function n(i, p, D, f) {
        this.tfm = i, this.stop = D, this.index = p, this.next_char = f, this.tfm.add_lig_kern(this);
      }
      return n;
    }()
  );
  $A.TfmLigKern = b;
  var X = (
    /** @class */
    function(n) {
      o(i, n);
      function i(p, D, f, Y, c) {
        var w = n.call(this, p, D, f, Y) || this;
        return w.kern = c, w;
      }
      return i;
    }(b)
  );
  $A.TfmKern = X;
  var u = (
    /** @class */
    function(n) {
      o(i, n);
      function i(p, D, f, Y, c, w, V, I) {
        var s = n.call(this, p, D, f, Y) || this;
        return s.ligature_char_code = c, s.number_of_chars_to_pass_over = w, s.current_char_is_deleted = V, s.next_char_is_deleted = I, s;
      }
      return i;
    }(b)
  );
  $A.TfmLigature = u;
  var H = (
    /** @class */
    function() {
      function n(i, p, D, f, Y, c) {
        this.smallest_character_code = i, this.largest_character_code = p, this.checksum = D, this.designSize = f, this.character_coding_scheme = Y, this.family = c, this._lig_kerns = [], this.characters = {};
      }
      return n.prototype.get_char = function(i) {
        return this.characters[i];
      }, n.prototype.set_char = function(i, p) {
        this.characters[i] = p;
      }, n.prototype.set_font_parameters = function(i) {
        this.slant = i[0], this.spacing = i[1], this.space_stretch = i[2], this.space_shrink = i[3], this.x_height = i[4], this.quad = i[5], this.extra_space = i[6];
      }, n.prototype.set_math_symbols_parameters = function(i) {
        this.num1 = i[0], this.num2 = i[1], this.num3 = i[2], this.denom1 = i[3], this.denom2 = i[4], this.sup1 = i[5], this.sup2 = i[6], this.sup3 = i[7], this.sub1 = i[8], this.sub2 = i[9], this.supdrop = i[10], this.subdrop = i[11], this.delim1 = i[12], this.delim2 = i[13], this.axis_height = i[14];
      }, n.prototype.set_math_extension_parameters = function(i) {
        this.default_rule_thickness = i[0], this.big_op_spacing = i.slice(1);
      }, n.prototype.add_lig_kern = function(i) {
        this._lig_kerns.push(i);
      }, n.prototype.get_lig_kern_program = function(i) {
        return this._lig_kerns[i];
      }, n;
    }()
  );
  return $A.Tfm = H, $A;
}
const Hr = "AU4AEgAAAH8AMAAPAAoABQBYAAkAAAAH0gueJgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNQgAAAAAAAAAAAAAAAAAAAAAAAADqF7AAACqwAAAmsAAAHrAAABuwAAAnsAAAILAAACawAAAgsAAAJrAAACCwAAAWwBEKFMAAABTAAAAqwAAAKsAAAAEwAAAEOAAAD8AAAA/AAAAPgAAAD8AAAA9wAAAiwAAACwYAABXAAAAgMAAAJjAAAA9VAAArsAAALrAAACbSAAABMAEAA8ABFxPAAAAqxwAAD+MAACrjAAAmwAAAAcABEgbpAAAG6QAAD+AAACZkAAABGAAABTABFQEQAAAP6QAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAAEwAAABOAAAA0gAACYhAAANSAAADcABGCbAAAAisAFMH7AAACCwAAAksAE1GrAAABmwASQpsAAAJ7AAAAmwAVcQsAAAKLABKhewAVIssAAAJ7AAACGwATUcsAEeIbgAACOwAUwUsAAAHbABLiWwAAAisAUkL7AFJCKwASoisAkvGLAAAALpAAATwAAAAukAAA/AAAABwAAAAcABEQ4wAUgUwAFCCzABQBTAAAAMMAAABMARAg84BVYUwAE6AcAAAATIAAASwAEZAcAAACowAToUMAE6DzABQhQ4AUIROAAACjAAAAgwAAAHkAFKFDABSxIwBRkgMAUaEjAAABI4BR8LMAAADzANFi0wDAAPwAAAD8AAAA/AAAAAAAAAAARxyAAEeuMABOOOAATjkAAFVVYABjjlAAY+lQAGT6YABlsIAAbYMAAHHHMAB3d4AAeOOwAHxx4ACAACAAhERgAIccgACHHKAAi2DQAI45AACPSgAAlVWAAJmZ0ACcceAAoLZQAKfSsACqqtAAru8gALHHUACzM2AAtgugALjjsADAADAAwWxQAMJ9UADERIAAxPqAAMccoADIiLAAyIjQAMk+0ADVVYAA59KwAPMzYAEAADABBESAAQiI0AAAAAAAJ9KAAGQf4ABxxyAAgAAAAIqqsACVVWAAmJqgAKHHIACiijAApPpQAK+lAACxxyAAvBbQAMAAAAAAAA//5B/gAAxx0AAOOOAAFVVgABjjoAArjjAAMccAADHHIABAAAAAAAAAAAOOMAAGZmAABxyAABxx0AbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AAoAhgAKALQB7gC0AfIBgADyAYAA+AGGAAwBlgAQAYYAEAG+ABIBjgAQAQYAFAG+ABABlgAQAYYAEAC6ABYAsgAUAb4AFAGWABQB1gAUAcoAFAGGABQBBgAYAT4AEAEOABABHgASAUYAEAHmABABlgAUAb4AFAHKABQBhgAUAQYAFgHWABQBYgAQAV4AEAEGABABWgASAWYAEAHSABAB1gAQAYoAEAHmABAB2gASAd4AEAGiABIBrgAQAZYAHAG+ABwB4gAQAZIAHAGOABwBxgAcAdoAEAGqACAB5gASAd4AEAHSABABDgAQAT4AEAEeABABVgAQAUYAEAFSABQBZgAUAVoAGgFeABoBqgAeASYAH//uOOP/6mZYAAccd//8ccv//jjj//qqq//444wAAccgAAOOOAAAAAAAFVVYAAqqrAAHHHQAHHHIAEAADAAHHHQ==", Fr = "ARcAEgAAAH8ALAAPABAAEAAHAAcAAAAW4MmMDACgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNQlNZAAAAAAAAAAAAAAAAAAAAAADqH6oAAAJTAAAfqgAACEIAAB+qAAAIUwAAH6oAAB+qAAAfqgAAH6oAAB+qAAAfqgAAH6oAACnMAAAIUwAACFMAAB9kAAAfZAAAH90AAB/dAAAf3QAAH90AAB/dAAAf3QAAHyEAAB91AAAflwAAH5cAACmXAAAplwAAH5cAAB+XAAApIQAAKSEAAAjLAAAIywAAKSEAACnLAAApywAAH2QAACkhAAApIQAAEMsAABDLAAApIQAAKcsAACnLAAAfMAAAA4AAACkwAAAVlwAAFZcAACjMAAAozAAAAcsAAAEhAAALwAAAC8AAABUwAAAI5gAAHMAAABzAAAAfwAAAH8AAABDAAAAisAEGE7AFBAqwDQQesAkCCbAhAxmwKQMOuBEDJrABAwywHQAWuDkFHbABARewAQQrsAEEI7A1AiGwCQMYsCUCJLgBAyewAQIPsBUEDbA9ABGwKQISsCUAKrAlAhqwMQQUuCUCG7AZBBWAAAAVgAAAFYAAABWAAAAVgAAAEMAAABDAAAAF7gAABe4AAAXuAAAF7gAACO4AAAjuAAAE7gAABO4AAALuAAAI7gAACO4AABDuAAAI7gAAAssAACUfAAAgsAAAJbAAAAfMLAAVgAAAFYAAAB/dAAAf3QAABswAAAXMAAAFzAAAEMwAAB/JAAAfyQAAH8kAAB/JAAAAAAAAAAAAAAAFHHAABYLWAAcn0AAILYAACGwVAAkZmgAJMzAACbYIAAnOxgAKOOAACkc7AApOaAAK59AACyRlAAs+kAALb3gAC8w4AAv3KwAMI0MADERAAAx4lgAMnG0ADPUtAA0GggANEUsADRh1AA1J8AAN8KMADkX1AA5PoAAOZmIADn0jAA67TQAO/0UADwbOAA9VUAAPzFgAD9VOABBbAAASZmAAErKbABYLkwAAAAAAAPXDAAZB/gAHHHIAB446AAeT6AAICRsACGQgAAjjkAAJXnAACiIgAAr6UAALHHIACyWNAAwAAAAAAAD//kH+//+OOv//k+gAAAkbAABkIAAA444AAV5wAAGOOgACEvYAAiIgAAMccAADHHIAAyWNAAQAAAAPCj0AAAAAAABcMwAAgtgAAMEbAADkSwABJAAAAU1dAAFNegABU54AAVpzAAGgtgACC2AAAlo2AAJupgADAAIABEcdgDCAAIAwgAGAMIACgDCAA4AwgASAMIAFgDCABgAAgtgAAQWwAAGIiAACC2AAAo44AAMREAADk+gABAAAAAAAAAAAAAAAAAAAAAcccgASZmAAAAAAAAvyiAAGyG4AB5U7AAwZNgAGAC0ABps1AAXOaAAEn0oAAmZmAATykAAGLYAAAMzNACY9cAAQKPYABAAA", Yr = "ARkAEgAAAH8ALQAPABAAEQAHAAcAAAAWIa9YWABgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkNNQlNZIFYyLjIAAAAAAAAAAAAAAADyH8wAAAJTAAAfzAAACEIAAB/MAAAIUwAAH8wAAB/MAAAfzAAAH8wAAB/MAAAfzAAAH8wAACq7AAAIUwAACFMAAB9kAAAfZAAAH+4AAB/uAAAf7gAAH+4AAB/uAAAf7gAAHyEAAB+GAAAfmQAAH5kAACqZAAAqmQAAH5kAAB+ZAAAqIQAAKiEAAAi6QAAIugAAKiEAACq6AAAqugAAH2QAACohAAAqIQAAELoAABC6AAAqIQAAKroAACq6AAAfMAAAA3AAACowAAAVmQAAFZkAACm7AAApuwAAAboAAAEhAAALsAAAC7AAABUwAAAI1QAAHLAAABywAAAfsAAAH7AAABCwAAAioAEGEqAFBAqgCQQhoA0CCaAdAxigKQMOpxEDJ6ABAwygFQAWpzkFHaABARegAQQsoAEEI6A1AiCgDQMboCUCJKcBAyigAQIPoBkEDaA9ABGgKQIToCUAK6AlAhqgLQQUpyUCGaAhBBVwAAAVcAAAFXAAABVwAAAVcAAAELAAABCwAAAF3QAABd0AAAXdAAAF3QAACN0AAAjdAAAE3QAABN0AAALdAAAI3QAACN0AABDdAAAI3QAAAroAACUfAAAeoAAAJqAAAAe7MAAVcAAAFXAAAB/uAAAf7gAABrsAAAW7AAAFuwAAELsAAB+4AAAfuAAAH7gAAB+4AAAAAAAAAAAAAAAGl7MABtv1AAj+GAAKMUsACmSAAArv4AALZH0AC/4bAAw/ywAMl7AADPf7AA0IPQANWNUADawtAA3K4wAN3LAADn71AA6kZQAOpnsADv4VAA87iAAPTSsAD6ULAA+t4wAP3VUAD/6oABAxSAAQ3IsAEVVQABFkewARaQgAEXGTABHvGwASFCMAEjuIABJL0wASl60AE3LYABN3QAATyuAAFjFFABa9+wAaR6UAAAAAAAFA2wAGsF0ABxxzAAeOOwAIMzMACMBLAAjjkAAJKeMACjoIAAr6UAALHHMACzMwAAwAAAAMSfgAAAAA//6wXf//jjsAADMzAADASwAA440AASnjAAGOOwACEvgAAjoIAAMccAADHHMAAzMwAAQAAAAESfgADr8lAAAAAAAALyMAAIDwAACZmwAAzuUAAQmDAAENdQABLPAAAVZ4AAFl1QABrBgAAlo4AAJmZQAChWgAAwtjAASLYwAMIiOAMIAAgDCAAYAwgAKAMIADgDCABIAwgAWAMIAGAACZmwABMzUAAczQAAJmawADAAUAA5mgAAQzOwAEAAAAAAAAAAAAAAAAAAAABxxzABbI+wAAAAAADQDQAAZG/QAHwkAADdFlAAberQAIDCgABrbTAASXtQACqqsABVVVAAaXsAABVVUAH7u7ABWZmwAEAAA=", pr = "ARgAEgAAAH8ALQAPAA8AEQAHAAcAAAAW0ZKjnwBwAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkNNQlNZIFYyLjIAAAAAAAAAAAAAAADwH6oAAAJTAAAfqgAACEIAAB+qAAAIUwAAH6oAAB+qAAAfqgAAH6oAAB+qAAAfqgAAH6oAACrLAAAIUwAACFMAAB9kAAAfZAAAH9wAAB/cAAAf3AAAH9wAAB/cAAAf3AAAHyEAAB+GAAAfmAAAH5gAACqYAAAqmAAAH5gAAB+YAAAqIQAAKiEAAAjLQAAIywAAKiEAACrLAAAqywAAH2QAACohAAAqIQAAEMsAABDLAAAqIQAAKssAACrLAAAfMAAAA3AAACowAAAVmAAAFZgAACnLAAApywAAAcsAAAEhAAALwAAAC8AAABUwAAAI5QAAHMAAABzAAAAfwAAAH8AAABDAAAAisAEGErAFBAqwDQQgsAkCCbAdAxiwKQMOtxEDJ7ABAwywGQAWtzkFHbABARewAQQssAEEI7A1AiGwCQMbsCUCJLcBAyiwAQIPsBUEDbA9ABGwKQITsCUAK7AlAhqwMQQUtyUCGbAhBBVwAAAVcAAAFXAAABVwAAAVcAAAEMAAABDAAAAF7QAABe0AAAXtAAAF7QAACO0AAAjtAAAE7QAABO0AAALtAAAI7QAACO0AABDtAAAI7QAAAssAACUeAAAesAAAJrAAAAfLLAAVcAAAFXAAAB/cAAAf3AAABssAAAXLAAAFywAAEMsAAB/JAAAfyQAAH8kAAB/JAAAAAAAAAAAAAAAF78AABjQCAAg1pQAJWJcACZwLAAo7vgAKe4kACw0CAAtAFQALnnsAC+GCAAvuiQAMWSAADKRVAAzBbgAM4ZcADXcbAA2D6QANoEcADeRgAA4ekAAONrUADpUSAA6hKwAOvR4ADsiAAA8HUgAPsPUAECilABAqRQAQLzsAED1yABCp1wAQ2ekAEPXuABEstQARTTcAEgSeABIKqQAScCkAFLYOABUvywAYrisAAAAAAAEqawAGkvAABxxyAAeOOQAH+lAACJCrAAjjkAAI9p4ACgFOAArRrgAK+lAACxxyAAv/CQAMAAAAAAAA//6S8P//jjn///pQAACQqwAA444AAPaeAAGOOQACAU4AAhL3AALRrgADHHIAA/8JAAQAAAAO1ZUAAAAAAAA/OwAAkXkAAJfZAADWiQABFYUAASXXAAE6vgABUzcAAWHFAAGoBwACReUAAlo3AAJ9RwADB1IABHMAAAtvV4AwgACAMIABgDCAAoAwgAOAMIAEgDCABYAwgAYAAJF5AAEi8gABtGsAAkXlAALXXgADaNcAA/pQAAQAAAAAAAAAAAAAAAAAAAAHHHIAFPcSAAAAAAALt44ABiR3AAeKDgAMCM4ABYHnAAgKawAG5dkABJJJAAJJJQAEkkkABaaXAAEkkgAbMzIAEoOpAAQAAA==", Zr = "ARgAEgAAAH8ALAAPABAAEQAHAAcAAAAWecSZzACAAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkNNQlNZIFYyLjIAAAAAAAAAAAAAAADuH6oAAAJTAAAfqgAACEIAAB+qAAAIUwAAH6oAAB+qAAAfqgAAH6oAAB+qAAAfqgAAH6oAACnMAAAIUwAACFMAAB9kAAAfZAAAH90AAB/dAAAf3QAAH90AAB/dAAAf3QAAHyEAAB91AAAfmAAAH5gAACmYAAApmAAAH5gAAB+YAAApIQAAKSEAAAjLQAAIywAAKSEAACnLAAApywAAH2QAACkhAAApIQAAEMsAABDLAAApIQAAKcsAACnLAAAfMAAAA4AAACkwAAAVmAAAFZgAACjMAAAozAAAAcsAAAEhAAALwAAAC8AAABUwAAAI5gAAHMAAABzAAAAfwAAAH8AAABDAAAAisAEGE7AFBAqwDQQesAkCCbAdAxiwKQMOtxEDJrABAwywGQAWtzkFHbABARewAQQrsAEEI7A1AiGwCQMasCUCJLcBAyewAQIPsBUEDbA9ABGwKQISsCUAKrAlAhuwMQQUtyUCGbAhBBWAAAAVgAAAFYAAABWAAAAVgAAAEMAAABDAAAAF7gAABe4AAAXuAAAF7gAACO4AAAjuAAAE7gAABO4AAALuAAAI7gAACO4AABDuAAAI7gAAAssAACUfAAAgsAAAJbAAAAfMLAAVgAAAFYAAAB/dAAAf3QAABswAAAXMAAAFzAAAEMwAAB/JAAAfyQAAH8kAAB/JAAAAAAAAAAAAAAAFccoABdKAAAefTgAIthAACPd8AAmmaAAJzNIAClg2AAqAUAAK45QACxCsAAsbQAALmVgAC954AAv6VgAMJUgADKuOAAyxPgAM26AADREYAA1I2gANZd4ADckeAA3XpAAN3+YADeT4AA4n2gAO0EQADz18AA8+nAAPRyIAD1zEAA+15AAP7kIAEAHAABBVXgAQ8fYAEPk4ABFsIAATmaQAFAUsABd7EAAAAAAAARR6AAZ1xAAHHHIAB446AAfPqAAIYUoACMOWAAjjkAAJyNIACoiMAAr6UAALHHIAC7RYAAwAAAAAAAD//nXE//+OOv//z6gAAGFKAADDlgAA444AAY46AAHI0gACEvYAAoiMAAMccAADHHIAA7RYAAQAAAAO64YAAAAAAABLTgAAi2IAAKkIAADcRAABG44AATsWAAFFGgABUMgAAV64AAGk+gACLYQAAlo2AAJ3MAADBEQABGC4AArpPoAwgACAMIABgDCAAoAwgAOAMIAEgDCABYAwgAYAAItiAAEWxAABoiYAAi2IAAK46gADREwAA8+uAAQAAAAAAAAAAAAAAAAAAAAHHHIAE5mkAAAAAAALJCwABoqUAAdRsAAL/FoABkZQAAaljAAFpYwABI44AAIAAAAEAAAABlVWAAEAAAAXzMwAEjM0AAQAAA==", Dr = "ARYAEgAAAH8ALAAPAA8AEAAHAAcAAAAWZyQtUgCQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkNNQlNZIFYyLjIAAAAAAAAAAAAAAADsH6oAAAJTAAAfqgAACEIAAB+qAAAIUwAAH6oAAB+qAAAfqgAAH6oAAB+qAAAfqgAAH6oAACnLAAAIUwAACFMAAB9kAAAfZAAAH9wAAB/cAAAf3AAAH9wAAB/cAAAf3AAAHyEAAB91AAAfmAAAH5gAACmYAAApmAAAH5gAAB+YAAApIQAAKSEAAAjLAAAIywAAKSEAACnLAAApywAAH2QAACkhAAApIQAAEMsAABDLAAApIQAAKcsAACnLAAAfMAAAA4AAACkwAAAVmAAAFZgAACjLAAAoywAAAcsAAAEhAAALwAAAC8AAABUwAAAI5gAAHMAAABzAAAAfwAAAH8AAABDAAAAisAEGE7AFBAqwDQQesAkCCbAdAxiwKQMOtxEDJrABAwywGQAWtzkFHbABARewAQQrsAEEI7A1AiGwCQMZsCUCJLcBAyewAQIPsBUEDbA9ABGwKQISsCUAKrAlAhuwMQQUtyUCGrAhBBWAAAAVgAAAFYAAABWAAAAVgAAAEMAAABDAAAAF7QAABe0AAAXtAAAF7QAACO0AAAjtAAAE7QAABO0AAALtAAAI7QAACO0AABDtAAAI7QAAAssAACUeAAAgsAAAJbAAAAfLLAAVgAAAFYAAAB/cAAAf3AAABssAAAXLAAAFywAAEMsAAB/JAAAfyQAAH8kAAB/JAAAAAAAAAAAAAAAFQlsABbk1AAdc5QAIaisACKoEAAlk0AAJd3AACf4VAAodpQAKhLUACqC5AAqpaQALNrAAC3cOAAuR+wALwDwADDXEAAxJ1QAMdSkADJ9AAAzVGwAM9esADVz3AA1ddAANbWQADW9VAA2shQAOU/wADrPrAA65ywAOyjwADuB7AA8qoAAPaXIAD3ZJAA/HEAAQTskAEFb8ABDUVQAS7uAAE09XABa+pQAAAAAAAQNrAAZbBwAHHHIAB445AAeudAAINFcACJMCAAjjkAAJkscACk+gAAr6UAALHHIAC2wXAAwAAAAAAAD//lsH//+OOf//rnQAADRXAACTAgAA444AAY45AAGSxwACEvcAAk+gAAMccgADbBcABAAAAA78lQAAAAAAAFSwAACGpAAAtmcAAOC5AAEgPgABS6AAAU0rAAFO4gABXFkAAaKbAAIaiwACWjUAAnJwAAMB5QAEUnyAMIAAgDCAAYAwgAKAMIADgDCABIAwgAWAMIAGAACGpAABDUcAAZPrAAIajgACoTIAAyfVAAOueQAEAAAAAAAAAAAAAAAAAAAABxxyABLu4AAAAAAAClkLAAaOJAAHMnwACtoAAAVt6wAHr5UABswHAASXtAABxxwAAtCeAAWhNAAA444AKn0nABAthAAEAAA=", xr = "AUwAEgAAAH8ALQAPAAoABQBYAAoAAAAHGvIiVgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADqFLAAACewAAAjsAAAG7AAABiwAAAksAAAHbAAACOwAAAdsAAAI7AAAB2wAAATwBEKEsAAABLAAAAnwAAAJ8AAAAEwAAADOAAADcAAAA3AAAANcAAADcAAAA1gAAAgwAAACQYAAA/AAAAdMAAAIzAAAA1UAAAosAAAK7AAACPSAAABMAEAAsABFxDAAAAnxwAADeMAACfjAAAjwAAAAcABEgbpAAAG6QAADeAAACOFAAABGAAABDABFQEQAAAN6QAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAAEwAAABOAAAAkgAACMhAAALSAAAC8ABGCPAAAAgsAFMHLAAAB2wAAAhsAE1F7AAABawASQmsAAAJLAAAAWwAVcOsAAAJbABKhSwAVIpsAAAJLAAAB+wATUZsAEeH7gAAB6wAUwSsAAAGrABLiKwAAAgsAUkLLAFJCCwASogsAkvFbAAAAHpAAAQwAAAAekAAA3AAAABwAAAAcABEQwwAUgSwAFCCTABQBLAAAAKMAAAA8ARAg04BVYSwAE6AcAAAAPIAAARwAEZAcAAACcwAToSMAE6DTABQhI4AUIROAAACDAAAAcwAAAGkAFKEjABSxEwBRkdMAUaETAAABE4BR8JMAAADTANFiowDAANwAAADcAAAA3AAAAAAAAAAAUccAAFmZgABZ9IAAYiIAAG+k4AByfQAAdB+wAHk+gACC2AAAhu7QAIsFgACPHDAAkzMAAJgtUACY42AAmk+AAJtggACjjgAAq7uAALEQ0ACz6QAAuT5QAMFr0ADERAAAyT5QAMzMgADOOKAA0WvQANSfAADczIAA3SeAAN6ToADhxtAA4nzgAOT6AADmZiAA5sEgAOd3MAD1VQABCqpQARd3IAEmZgABK2BQATBaoAAAAAAAJ9KAAGQf4ABxxyAAgAAAAIqqsACYmqAAoccgAKIiAACiijAApPpQAK+lAACxxyAAvBbQAMAAAAAAAA//5B/gAAxx0AAOOOAAGOOgACIiAAArjjAAMccAADHHIABAAAAAAAAAAAQW0AAHXCAACC2AABvpMAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//rjkP/59KAAAb6TAAILYP/++lD//30o//53eP/99KAAAILYAAEFsAAAAAAABiIgAAMREAACC2AABxxyABJmYAACC2A=", mr = "AUsAEgAAAH8ALAAPAAoABQBYAAoAAAAHwtZOoADAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADmE7AAACawAAAisAAAGrAAABewAAAjsAAAHLAAACKwAAAcsAAAIrAAABywAAASwBEKEcAAABHAAAAmwAAAJsAAAAEwAAADOAAADcAAAA3AAAANgAAADcAAAA1gAAAfwAAACQYAAA7AAAAcMAAAIjAAAA1UAAAnsAAAKrAAACLSAAABMAEAAsABFw/AAAAmxwAADeMAACbjAAAiwAAAAcABEgbpAAAG6QAADeAAACJ1AAABGAAABDABFQEQAAAN6QAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAAEwAAABOAAAAkgAACIhAAALSAAAC8ABGCLAAAAfsAFMG7AAABywAAAgsAE1FrAAABWwASQlsAAAI7AAAAWwAVcPsAAAJLABKhOwAVIosAAAI7AAAB6wATUYsAEeHrgAAB2wAUwRsAAAGbABLiGwAAAfsAUkK7AFJB+wASofsAkvFLAAAAHpAAAPwAAAAekAAA3AAAABwAAAAcABEQwwAUgRwAFCCTABQBHAAAAKMAAAA8ARAg04BVYRwAE6AcAAAAPIAAAQwAEZAcAAACYwAToRMAE6DTABQhE4AUIQOAAACDAAAAcwAAAGkAFKETABSxAwBRkcMAUaEDAAABA4BR8JMAAADTANFikwDAANwAAADcAAAA3AAAAAAAAAAAUAAAAFe0MABYAAAAYAAAAGtCcABwAAAAcZmwAHWhQACAAAAAg2hQAIgAAACMAAAAkAAAAJL2kACUvbAAmAAAAKAAAACoAAAArQmAALAAAAC1CYAAvQmAAMAAAADEvbAAyEvQAMl7UADMvbAA0AAAANbQsADYS9AA2XtQANy9sADdVXAA4AAAAOEvgADhe1AA4l7QAPAAAAEEvbABES+AASAAAAEkvbABKXtQAAAAAAAkvbAAYupwAHHHEACAAAAAiqqwAJe6EACgAAAAoccQAKKKMACk+lAAr6UAALHHEAC8FsAAwAAAAAAAD//i6nAADHHAAA448AAY45AAIAAAACuOMAAxxwAAMccQAEAAAAAAAAAABAAAAAczMAAIAAAAGjjwBsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+wAA//ol7AABo48AAgAA//8AAP//gAD//oAA//4AAAAAgAAAAQAAAAAAAAAGAAAAAwAAAAIAAAAHHHEAEgAAAAIAAA==", yr = "AU0AEgAAAH8ALwAPAAkABQBYAAoAAAAHqy2MaABQAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAAD0FaAAACmgAAAnoAAAHKAAABqgAAAloAAAH6AAACegAAAfoAAAJ6AAAB+gAAAWsBEKFLAAABSwAAAqsAAAKrAAAAEwAAAENgAADrAAAA6wAAAOcAAADrAAAA5gAAAhsAAACgUAAA+wAAAfMAAAJzAAAA5UAAAroAAALaAAACfSAAABMAEAA7ABFxCwAAAptgAADuMAACnjAAAnsAAAAbABEgfoAAAH6AAADuAAACfHAAABFgAABTABFQEQAAAO6AAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAAEwAAABNgAAA0YAACchAAAMRgAADLABGCewAAAhoAFMHqAAAB+gAAAkoAE1GaAAABigASQooAAAJaAAAAagAVcRoAAAJqABKhWgAVIsoAAAJaAAACKgATUboAEeIqYAACCgAUwToAAAHaABLiOgAAAhoAUkLqAFJCGgASohoAkvF6AAAALoAAAQsAAAAugAAA6wAAABsAAAAbABEQ0wAUgTsAFCCjABQBOwAAALMAAABLARAg42BVYTsAE6AbAAAAS2AAASsAEZAbAAACkwAToTMAE6DjABQhM2AUISNgAACTAAAAgwAAAHgAFKEzABSxIwBRkfMAUaEjAAABI2BR8KMAAADjANFi4wDAAOsAAADrAAAA6wAAAAAAAAAAb6RgAHBW0AB5mQAAefQAAIRDoACMzAAAmOLQAJry0ACfSWAArYIAALE90AC30aAAvPlgAMIhMADDMtAAxPmgAMZlYADMcNAA1sBgAN9I0ADlrzAA6ZhgAOtfoADv/tAA+k5gAP/+0AEEQwABCIcwAQqpYAEOkqABFJ4AARpOYAEdJmABH0igASIg0AEjMdABJxsAASd2AAEpPTABK19gAT3cYAFO7TABVr/QAWT4oAF//jABhEJgAAAAAAAsFtAAbSQwAHHHMACAAAAAiqrQAJ2VAAChxzAAoopgAKT6YACvpQAAsccwALu7MAC8FtAAwAAAAAAAD//tJDAADHHQAA440AAY46AAK45gADHHMAA7uzAAQAAAAAAAAAAFJ9AACUegAApPoAAhPqAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/5Bbr/+Bx9AAIT6gACk+b//rYN//9bBv/+ERP//WwaAACk+gABSfMAAAAAAAhEOgAD3doAApPmAAcccwAYRCYAApPm", Vr = "AVAAEgAAAH8AMQAPAAoABQBYAAoAAAAHgEXAdABgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADyF6AAACqgAAAooAAAHaAAABugAAAmoAAAIKAAACigAAAgoAAAKKAAACCgAAAWsBEKFbAAABWwAAArsAAAK7AAAAEwAAAENwAADrAAAA6wAAAOcAAADrAAAA5gAAAisAAACgUAAA+wAAAgMAAAKDAAAA5UAAAsoAAALqAAACjSAAABMAEAA7ABFxCwAAAqtgAADuMAACrjAAAosAAAAbABEgfpAAAH6QAADuAAACjIAAABFwAABTABFQEQAAAO6QAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAAEwAAABNwAAA0cAACghAAAMRwAADLABGCiwAAAioAFMH6AAACCgAAAloAE1GqAAABmgASQpoAAAJqAAAAagAVcRoAAAJ6ABKhegAVItoAAAJqAAACOgATUcoAEeI6cAACGgAUwUoAAAHqABLiSgAAAioAUkMKAFJCKgASoioAkvGKAAAALpAAAQsAAAAukAAA6wAAABsAAAAbABEQ0wAUgUsAFCCjABQBSwAAALMAAABLARAg43BVYUsAE6AbAAAAS3AAATsAEZAbAAACowAToUMAE6DjABQhQ3AUISNwAACTAAAAgwAAAHgAFKFDABSxMwBRkgMAUaEzAAABM3BR8KMAAADjANFi8wDAAOsAAADrAAAA6wAAAAAAAAAAZL2AAGUq0ABt/AAAblcwAHfwsACBqNAAiyPQAI0PUACSMVAAnlcAAKJPgACn8LAArL1QALGKMAC1NwAAtc6AALYLMAC7I7AAuyPQAMS9UADJewAA0xSwANMzAADX8IAA3MywAOZmMADrI7AA76SwAPQlsAD1GFAA+T5QAP5W0AEE+gABB1jQAQhLgAEL+DABDHGAARCXUAEQ8oABEYoAARPKgAEkvTABLjiAATxxUAFKMNABYtewAWMUUAFnWLAAAAAAACqqsABrBdAAcccwAIAAAACKqtAAnHGwAKHHMACiilAApPpQAK+lAACxxzAAszMAALwW0ADAAAAAAAAP/+sF0AAMcdAADjjQABjjsAArjlAAMccAADHHMAAzMwAAQAAAAAAAAAAEzNAACKPQAAmZsAAf8NAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/5tCj/+MzLAAH/DQACZmX//szN//9mZf/+MzP//ZmbAACZmwABMzMAAAAAAAd/CwADmZgAAmZlAAcccwAWMUUAAmZl", Mr = "AU4AEgAAAH8AMAAPAAkABQBYAAoAAAAHZhck2ABwAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADwFrAAACmwAAAmsAAAHLAAABqwAAAlsAAAH7AAACawAAAfsAAAJrAAAB+wAAAVwBEKFMAAABTAAAAqwAAAKsAAAAEwAAAENwAADsAAAA7AAAAOcAAADsAAAA5gAAAhwAAACgUAABHAAAAfMAAAJjAAAA5UAAArsAAALrAAACbSAAABMAEAA8ABFxDAAAApxwAADuMAACnjAAAmwAAAAcABEgfoAAAH6AAADuAAACamAAABFwAABTABFQEQAAAO6AAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAA6QAAAOkAAADpAAAAEwAAABNwAAA0cAACYhAAAMRwAADMABGCbAAAAhsAFMHrAAAB+wAAAksAE1GbAAABiwASQosAAAJbAAAAawAVcPsAAAJ7ABKhawAVIssAAAJbAAACKwATUbsAEeIrcAACCwAUwTsAAAHbABLiOwAAAhsAUkL7AFJCGwASohsAkvF7AAAALoAAAQwAAAAugAAA7AAAABwAAAAcABEQ0wAUgTwAFCCjABQBPAAAALMAAABMARAg43BVYTwAE6AcAAAATHAAASwAEZAcAAACkwAToTMAE6DjABQhM3AUISNwAACTAAAAgwAAAHgAFKEzABSxIwBRkfMAUaEjAAABI3BR8KMAAADjANFi0wDAAOwAAADsAAAA7AAAAAAAAAAAXPOwAF0vkABlsFAAZgtQAG8i4AB6t5AAgVIAAIMjkACI1pAAk4EgAJelAACcmLAAoSRwAKWwUACqXJAAqviQAKs5sACux+AAt99wALnncADC/wAAxf5QAMoOkADPFeAA2C1wANw9sADg6gAA5ZZQAOWwUADqAZAA7mzgAPW9UAD3xXAA999wAPwjsAD8MLABAIIAAQCcAAEA3QABAvIgARLLIAEW2yABKaaQATcPcAFLYJABTgTgAVKxIAAAAAAAKaaQAGkvAABxxyAAgAAAAIqqsACbObAAoccgAKKKUACk+lAArRrgAK+lAACxxyAAvBbgAMAAAAAAAA//6S8AAAxx4AAOOOAAGOOQACuOUAAtGuAAMccgAEAAAAAAAAAABIvgAAgu4AAJF5AAHwJwBsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+jDF//lCpQAB8CcAAkXl//7dDv//bof//kuV//26GwAAkXkAASLyAAAAAAAG8i4AA2jXAAJF5QAHHHIAFLYJAAJF5Q==", Wr = "AU0AEgAAAH8ALgAPAAoABQBYAAoAAAAHMsdAyQCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADuFbAAACiwAAAksAAAHLAAABmwAAAlsAAAHrAAACSwAAAesAAAJLAAAB6wAAAUwBEKE8AAABPAAAAowAAAKMAAAAEwAAADOAAADcAAAA3AAAANcAAADcAAAA1gAAAhwAAACQYAABDAAAAeMAAAJDAAAA1UAAApsAAALLAAACTSAAABMAEAAsABFw/AAAAoxwAADeMAACjjAAAkwAAAAcABEgbpAAAG6QAADeAAACSlAAABGAAABDABFQEQAAAN6QAADZAAAA2QAAANkAAADZAAAA2QAAANkAAADZAAAA2QAAANkAAADZAAAAEwAAABOAAAAkgAACQhAAALSAAAC8ABGCTAAAAhsAFMHbAAAB6wAAAisAE1GLAAABewASQnsAAAJbAAAAWwAVcOsAAAJrABKhWwAVIqsAAAJbAAACCwATUasAEeILgAAB+wAUwTsAAAG7ABLiOwAAAhsAUkLbAFJCGwASohsAkvFrAAAAHpAAAPwAAAAekAAA3AAAABwAAAAcABEQwwAUgTwAFCCTABQBPAAAAKMAAAA8ARAg04BVYTwAE6AcAAAAPIAAASwAEZAcAAACgwAToTMAE6DTABQhM4AUIROAAACDAAAAcwAAAGgAFKEzABSxIwBRkeMAUaEjAAABI4BR8JMAAADTANFiswDAANwAAADcAAAA3AAAAAAAAAAAVxygAF93oABf0sAAaIjAAHWC4AB59OAAe7LgAIGZ4ACLYQAAj6VAAJQXIACYciAAnM0gAKGZ4ACi2GAAo0ogAKWDIAClg0AArjlAALbvYAC8FyAAv6VgAMTNQADNg0AA0RGAANXeQADaIqAA2qsAAN6UYADifaAA6lAAAOuOwADsFyAA8ACAAPBEoADz6cAA9HIgAPTNQAD2UCABBVXgARuOwAEotoABOZpAAT5nAAFDM8AAAAAAACjjgABnXEAAcccgAIAAAACKqsAAmiIAAKHHIACiikAApPpgAKiIwACvpQAAsccgALwWwADAAAAAAAAP/+dcQAAMccAADjjgABjjoAAoiMAAK45AADHHAAAxxyAAQAAAAAAAAAAEWwAAB9cAAAi2IAAeT6AGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/6jjb/+ZsCAAHk+gACLYT//uk+//90nv/+Xdz//dJ8AACLYgABFsIAAAAAAAaIjAADREYAAi2EAAcccgATmaQAAi2E", Ur = "AUwAEgAAAH8ALgAPAAkABQBYAAoAAAAHdAyJOgCQAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNQlgAAAAAAAAAAAAAAAAAAAAAAADsFbAAACiwAAAksAAAHLAAABmwAAAlsAAAHrAAACSwAAAesAAAJLAAAB6wAAAUwBEKE8AAABPAAAAowAAAKMAAAAEwAAADNwAADcAAAA3AAAANcAAADcAAAA1gAAAhwAAACQYAAA/AAAAeMAAAJDAAAA1UAAApsAAALLAAACTSAAABMAEAAsABFxDAAAAoxwAADeMAACjjAAAkwAAAAcABEgboAAAG6AAADeAAACSVAAABFwAABDABFQEQAAAN6AAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAAEwAAABNwAAAkcAACQhAAALRwAAC8ABGCTAAAAhsAFMHbAAAB6wAAAisAE1GLAAABewASQnsAAAJbAAAAWwAVcOsAAAJrABKhWwAVIqsAAAJbAAACCwATUasAEeILcAAB+wAUwTsAAAG7ABLiOwAAAhsAUkLbAFJCGwASohsAkvFrAAAAHoAAAQwAAAAegAAA3AAAABwAAAAcABEQwwAUgTwAFCCTABQBPAAAAKMAAAA8ARAg03BVYTwAE6AcAAAAPHAAASwAEZAcAAACgwAToTMAE6DTABQhM3AUIRNwAACDAAAAcwAAAGgAFKEzABSxIwBRkeMAUaEjAAABI3BR8JMAAADTANFiswDAANwAAADcAAAA3AAAAAAAAAAAVCWwAFw04ABcj+AAZPoAAHJAUAB1zlAAd31AAHz1IACGorAAiwBQAI8M4ACTQeAAl3cAAJxdIACd5+AAnhpAAJ/hIACf4UAAqEtQALC1kAC19pAAuR+wAL5gwADGyuAAyfQAAM7aIADSuSAA08BAANdEUADayFAA4wAgAOONcADklJAA6BiwAOicQADrnLAA7KPAAOz+wADuD8AA/HEAARIrcAEfIMABLu4AATPUIAE4ukAAAAAAAChL4ABlsHAAcccgAIAAAACKqrAAmUiwAKHHIACiikAApPoAAKT6UACvpQAAsccgALwWwADAAAAAAAAP/+WwcAAMccAADjjgABjjkAAk+gAAK45AADHHIABAAAAAAAAAAAQ1IAAHksAACGpAABz6UAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//q9pf/5zM4AAc+lAAIai//+8rv//3lc//5sF//95XUAAIakAAENRQAAAAAABk+gAAMn0AACGosABxxyABLu4AACGos=", Rr = "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", Nr = "AX8AEgAAAH8ANgAQAAoAOgBNAAkAAAAHRg1DlgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNQlhUSQAAAAAAAAAAAAAAAAAAAADqF7CkAC2wAAApsEgAILAAAB2wwAAssNQAIrCQACmweAAisBgAKbB4ACKwZAAb2OUIFth8ABjYfAAw2HwAMdh8AAIwUAAEOBAAENAAABDQRAAQgDwAENBsABBgcAAu0AAADQYAABXYXAAiMEAAIjBAABBUVAAvsJAAM7CQACniSAABMAEPBdCNFxPQNAAt1ygAJtAAAC3zoAAp0EQAAtCpEgn5yAAJ+QwAEPC4ACl1DAACGAAABzAJFQIQAAAQ+cgAEKCsABCgrAAQoKwAEKCsABCorAAQoKwAEKCsABCorAAQoKwAEKCsAAIwIAACOCAABUgcACkhKAAQSAAAENCVGCnQTAAlsAEwIbBkACKwtAAnsEkrHLCQABqwpRorsCwALLDUAAiwxAARsLwAKrC1IBewAUEysNQALLDUACOwSSsesGUqI7hIACSwBTAUsIQAH7ClJCiw1AAlsNkaNLDZKiWwxSAlsOElGbC0AAP53AAT0NAAA/loABDQJAAC0KgAAtCpERAwUAAN0DFFDTAVRRDQfRkNMEFFBtjlAA04dAAQ0FAAAsCIAALIzAAN0IAAAdB9GS0wUAAUMFFMEDAxRRA4MUUNOHQADDCBRQowOAAEkFgAEjBQAA0wgAAdMIEZDjCcAA84dAALMLAAEDBhFjUwYAAQ0JQAENCUABDQmAAAAAAAAAS/IwAFsFgABbKgAAYo8wAGLYAABmZoAAahjQAHi/AAB5LCAAfKgwAH2U4ACAbSAAiD9gAI+AYACPySAAl1KwAJxNAACe3GAAntyAAKZmAACqPWAArKhQALKhIAC0MeAAtXlQALoq0ADBbAAAwbRgAMSMoADJhuAAy81gAM6BMADREKAA05/gANrgsADcBCAA3ZSAAN5YMADgI+AA4X3QAOKzMADlHjAA5TBgAOVnAADxxoAA8unQAQXUIAELcqABDzdgARKg4AEj+rABKPUAAS6lYAAAAAAAJbBgAGQf4ABxxyAAgAAAAIqqsACYLWAAmnPQAKHHIACiijAApPpQAK+lAACxeTAAsccgALwW0ADAAAAAAAAP/+Qf4AAMcdAADjjgABjjoAAac9AAK44wADHHAAAxxyAAQAAAAAAAAAAGjTAABq8wAAh2UAALziAADV6AAA5q4AAQyFAAESNgABEsgAARflAAEs8gABQf4AAUUwAAFOggABUsgAAVwrAAFdTQABczMAAXkrAAGCGAABg2sAAYrQAAGOygABkeAAAZZVAAGYeAABp0IAAavOAAGuFgABuXUAAbziAAHHHQABzWAAAdJrAAHTogAB1DMAAdXoAAHV6gACA2oAAg7LAAIQggACEjYAAhtOAAI45QACRfoAAksYAAJR7QACaigAAoJIAAKHZQACrN4AAq79AALA2wAC+uIAAwAAAAMrIAADfAUAaQAMAGYACwBsAA0AJ4AAAD+AAAAhgAAAKYAAgF2AAABpAA4AbAAPACeAAAA/gAAAIYAAACmAAIBdgAAAbIABgEyAAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+gGyABABvgAUAZYAFAHWABQBygAUAYYAFAEGABgBPgAcAQ4AHAEeAB4BRgAcAeYAFAGWABQBvgAUAcoAFAGGABQB1gAWAQYAFAFiABwBXgAcAQYAHAFaAB4BZgAcAboAHAGyABwBygAcAdYAHAG2ABwB0gAcAaYAHAEOABwBPgAcAR4AHAGiABwBigAcAVYAHAGuABwB2gAcAd4AHAFGABwBUgAUAWYAFAFaABgBXgAYAZYAIAGGACABvgAgAZIAIAGOACABngAiAcYAIgCeABgABtOj/+0Dd//nadgAB4moAAPE1//6WMP/+HZb//4dl//8OywAEAAAABqGNAALTngAB4moABxxyABLqVgAB4mo=", Xr = "AUUAEgAAAH8AMQAQAAsABgBJAAsAAAAHjC34FACgAAAcVGVYIHRleHQgd2l0aG91dCBmLWxpZ2F0dXJlcwAAAAAAAAAAAAAABUNNQ1NDAAAAAAAAAAAAAAAAAAAAAADqGsAAACvAAAApwAAAIMAAABzAAAAkwAAAIsAAACnAAAAiwAAAKcAAACLAAAAN2AAADdgAAALQAAACSQAAC0kAAAFQAAAFUAAADdAAAA3QAAANkAAADdAAAA1wAAAk0AAACAcAACxQAAAdUAAAJVAAABZzAAAtwAAAL8AAACnjAAACMAEAAtABCA3QAAAr2AAADfQAACv0AAAp0AAAAtABAwb6AAAG+gAADfAAACmFAAACGQAAAzABBgIQAAAN+gAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAAIwAAACOQAAKWIAACkhAAApYgAAC9ABCSnQAAAkwAEgIcAAACLAAAAmwAEWHsAAABvAAQwqwAAAJMAAAATAATIPwAAAKMABDhrAASouwAAAJMAAACnAARYewAEKKckAACPAASATwAAAIsABCiTAAAAkwAkMMMAJDCTAAQ4kwBEKGcAAAAL6AAAN0AAAAvoAAA3QAAACsAAAAtABAhRQAT4QUAAAEVAAABVQATkOUAAADFABNBhQAAAUUAAAAVABSAVQAAAXUAE1ClABQx9QAAAUUAAAFlABOQ5QATMWVgAAElABPgdQAAARUAEzFFAAABRQBTQnUAU0FFABNRRQDTMJUAAADTAVBzAwFAAN0AAADbAAAA2wAAAAAAAAAATV5gAFHG4ABgtdAAZ9IwAGyoUABvpLAAdTDQAH6ToACAkYAAg2mwAIYLIACJGiAAjYKAAI7KYACRELAAlHrQAJdS4ACaKyAAnHFgAJ0DUACf24AAorOgAKKzsACkH7AAq2BQAK7ugAC2ZgAAuk8wALxNMAC93WAAvyVgAMFroADFVOAAyT4gAMzMUADQWoAA0w6gANRD0ADV5tAA19IAANgtAADZ9CAA5xvgAOphoAD5mQAA/ScwARd20AEbBQAAAAAAABsFsABd64AAbjjgAIAAAACDjjAAigJQAJCs4ACZmWAAoOOgAKT6UACq+NAAru7gALHHIAC7YLAAwAAAAAAAD//d64AACgJQAAxx0AAOOOAAGZlgACT6UAArjjAAMccAADHHIABAAAAAAAAAAALYMAADu7AABR6wAAa4UAAHd4AGyAAIBMgAGAYABcACcAIgA/gAKAIYACgC0Ae4AtAHyAYAAOgGAADwBhgAOAQYADAGGABABBgAQAb4AFAE+ABQBjgAUAQ4AFAGeABQBHgAUAcYAFgFGABQB4gAUAWIAFAHeABQBXgAUAYYAFAEGABQB2gAUAVoAFAHmABYBZgAUAY4AFAEOABQBvgAUAT4AFAGeABQBHgAUAdYAFAFWABQBxgAUAUYAFAFSAAwB0gAMAWYADAHmAAwBWgAQAdoAEAFeABIB3gASASYAGgGGABwBhgAgAb4AJAGOACQBngAmAcYAJAHiACQB3gAkAYYAJAHaACYB5gAkAY4AJAG+ACQBngAkAdYAJAHGACQAngAcAdIAHAHmABwB2gAiAd4AIgGmACv/645L/+jM2AAHd3f/+mZr//iIj//+IiAAAd3j//u7u//6T6v//pPoAAFsGAAAAAAAGC10AAszLAAHd3QAG444AEbBQAAHd3Q==", kr = "AUYAEgAAAH8AMgAQAAsABgBJAAsAAAAHoWaF5QCAAAAcVGVYIHRleHQgd2l0aG91dCBmLWxpZ2F0dXJlcwAAAAAAAAAAAAAACkNNQ1NDIFYyLjIAAAAAAAAAAAAAAADuGsAAACvAAAApwAAAIMAAAB3AAAAlwAAAIsAAACnAAAAiwAAAKcAAACLAAAAO2AAADtgAAALQAAACSQAAC0kAAAFQAAAFUAAADtAAAA7QAAAOkAAADtAAAA6AAAAl0AAACAcAACxQAAAcUAAAJFAAABdiAAAtwAAAL8AAACniAAACMAEAAtABCA7QAAAr2AAADvMAACvzAAAp0AAAAtABAwb6AAAG+gAADvAAACmVAAACGQAAAzABBgIQAAAO+gAADqAAAA6gAAAOoAAADqAAAA6gAAAOoAAADqAAAA6gAAAOoAAADqAAAAIwAAACOQAAKXQAACkhAAApdAAAC9ABCSnQAAAlwAEgIcAAACLAAAAnwAEWH8AAABvAAQwqwAAAJcAAAATAATIPwAAAKMABDhrAASouwAAAJcAAACnAARYfwAEKKckAACPAASAUwAAAIsABCiXAAAAlwAkMMcAJDCXAAQ4lwBEKGcAAAAL6AAAO0AAAAvoAAA7QAAACsAAAAtABAhNQAT4QUAAAEVAAABVQATkNUAAADFABNBhQAAATUAAAAVABSAVQAAAWUAE1ClABQx5QAAATUAAAF1ABOQ1QATMXVgAAElABPgdQAAARUAEzE1AAABNQBTQmUAU0E1ABNRNQDTMJUAAADjAVBzAwFAAO0AAADrAAAA6wAAAAAAAAAAUT7AAFRxwABkccAAa7vAAHGDIAB0ccAAeqsAAIRxwACGOUAAiJ+gAIxxwACOZsAAlC3gAJRxwACYFsAAmfUAAJ1VwACfvCAAoiKAAKRxwAClg0AAp+mgAKjkAACqF0AAtHHAALgWwADAFsAAwmbgAMRxwADEzUAAyBbAAMu7wADQFsAA1HHAANgWwADZg2AA27vAANvpwADgFsAA47vAAORxwADmREAA9HHAAPVWAAEIFsABC7vAASgWwAEo44ABK7vAAAAAAAAcccAAYMPAAG444ACAAAAAgZmgAI4LYACQKQAAktggAKBxwACk+mAAq67AAK7u4ACxxyAAu2CgAMAAAAAAAA//4MPAAAxxwAAOOOAAECkAACAAAAAhxyAAK45AADHHAAAxxyAAQAAAAAAAAAAC46AABAAAAAUzQAAHM0AACAAABsgACATIABgGAAXAAnACIAP4ACgCGAAoAtAHuALQB8gGAADoBgAA8AYYADgEGAAwBhgAQAQYAEAG+ABQBPgAUAY4AFAEOABQBngAUAR4AFAHGABYBRgAUAeIAFAFiABQB3gAUAV4AFAGGABQBBgAUAdoAFAFaABQB5gAWAWYAFAGOABQBDgAUAb4AFAE+ABQBngAUAR4AFAHWABQBVgAUAcYAFAFGABQBUgAMAdIADAFmAAwB5gAMAVoAEAHaABABXgASAd4AEgEmABoBhgAcAYYAIAG+ACQBjgAkAZ4AJgHGACQB4gAkAd4AJAGGACQB2gAmAeYAJAGOACQBvgAkAZ4AJAHWACQBxgAkAJ4AHAHSABwB5gAcAdoAIgHeACIBpgAr/+rjk//n+lAACAAD//oAA//4AAP//gAAAAIAA//7qqv/+jjj//6OOAABccgAAAAAABkccAAMAAAACAAAABuOOABKOOAACAAA=", vr = "AUUAEgAAAH8AMgAQAAoABgBJAAsAAAAH0AkarQCQAAAcVGVYIHRleHQgd2l0aG91dCBmLWxpZ2F0dXJlcwAAAAAAAAAAAAAACkNNQ1NDIFYyLjIAAAAAAAAAAAAAAADsGsAAACvAAAAowAAAH8AAABzAAAAkwAAAIsAAACjAAAAiwAAAKMAAACLAAAAN2AAADdgAAALQAAACSAAACkgAAAFQAAAGUAAADdAAAA3QAAANkAAADdAAAA1wAAAk0AAACAcAACxQAAAeUAAAJlAAABdyAAAtwAAAL8AAACjiAAACMAEAAtABCA3QAAAr2AAADfQAACv0AAAo0AAAAtABAwX5AAAF+QAADfAAACiFAAACGAAAAzABBgIQAAAN+QAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAA2gAAANoAAADaAAAAIwAAACOAAAKGMAACghAAAoYwAACtABCSjQAAAkwAEgIcAAACLAAAAlwAEWHcAAABvAAQwqwAAAJMAAAATAATIOwAAAJ8ABDhrAASouwAAAJMAAACjAARYdwAEKKMgAACPAASASwAAAIsABCiTAAAAkwAkMMcAJDCTAAQ4kwBEKGcAAAAL5AAAN0AAAAvkAAA3QAAACsAAAAtABAhRQAT4QUAAAEVAAABVQATkPUAAADFABNBhQAAAUUAAAAVABSAZQAAAWUAE1C1ABQyBQAAAUUAAAF1ABOQ9QATMXVgAAE1ABPgdQAAARUAEzFFAAABRQBTQpUAU0FFABNRRQDTMJUAAADTAVBzAwFAAN0AAADbAAAA2wAAAAAAAAAAT6TgAFCXkABfmrAAZt+QAG6dwABvU8AAeBjgAH2g4ACDjcAAhSJwAIY9kACL+AAAjKQAAJBGcACRsnAAl2zgAJp3kACbpyAAnSdQAJ/XIACi4cAApZGQAKXscACnRFAAqqpAAK5MsAC1zkAAua1QAL1PwAC/hgAAwPJAAMI1wADE0VAAyLBwAMxS4ADP9VAA09RwANZvwADXduAA17OQANkfkADZhMAA5rawAPAxwAD5XEAA/P6wARdicAEZSAABGwTgAAAAAAAbp5AAX06QAG444ACAAAAAhqMgAI0MkACSllAAmhKwAKDjkACk+lAAq0mwAK7u4ACxxyAAu2CwAMAAAAAAAA//306QAAxxwAANDJAADjjgABoSsAAjjkAAK45AADHHIABAAAAAAAAAAALdQAADwMAABSfAAAbBUAAHgZAGyAAIBMgAGAYABcACcAIgA/gAKAIYACgC0Ae4AtAHyAYAAOgGAADwBhgAOAQYADAGGABABBgAQAb4AFAE+ABQBjgAUAQ4AFAGeABQBHgAUAcYAFgFGABQB4gAUAWIAFAHeABQBXgAUAYYAFAEGABQB2gAUAVoAFAHmABYBZgAUAY4AFAEOABQBvgAUAT4AFAGeABQBHgAUAdYAFAFWABQBxgAUAUYAFAFSAAwB0gAMAWYADAHmAAwBWgAQAdoAEAFeABIB3gASASYAGgGGABwBhgAgAb4AJAGOACQBngAmAcYAJAHiACQB3gAkAYYAJAHaACYB5gAkAY4AJAG+ACQBngAkAdYAJAHGACQAngAcAdIAHAHmABwB2gAiAd4AIgGmACv/69of/+kRHAAHgZP/+l7X//h+c//+H5wAAeBn//u0L//6RZP//pFkAAFunAAAAAAAF+asAAtCVAAHgZAAG444AEZSAAAHgZA==", Sr = "AUQAEgAAAH8AJAAQAAoABQBYAAoAAAAHS/FgeQCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNRFVOSAAAAAAAAAAAAAAAAAAAAADqEsAAAB7AAAAcwAAAFsAAABTAAAAawAAAGMAAABzAAAAYwAAAHMAAABjAAAAQ0BEKD9AAAA/QAAAe0AAAHtAAAAEwAAACNwAACqAAAAqgAAAKgAAACqAAAApwAAAa0AAACAYAAAvQAAAYMAAAHDAAAApFAAAfwAAAIsAAABziAAABMAEAAdABFwrQAAAe2AAACvMAAB7zAAAc0AAAAdABEgX5AAAF+QAACvAAABxUAAABFwAAAzABFQEQAAAK+QAACrAAAAqwAAAKsAAACrAAAAqwAAAKsAAACrAAAAqwAAAKsAAACrAAAAEwAAABNwAAAZcAABwhAAAJlwAACdABGBzQAAAawAFMF8AAABjAAAAbwAE1FcAAABPAASQdwAAAGsAAAATAAVcMwAAAHMABKhLAAVIgwAAAGsAAABzAATUVwAEeHMcAABnAAUwPwAAAGMABLhrAAAAawAUkI8AFJBrAASoawAkvEcAAAAH5AAAK0AAAAfkAAAqgAAABcAAAAdABEQowAUgP0AFCCDABQA/QAAAIMAAAAtARAgo3BVYP0AE6AXAAAAJ3AAAO0AEZAdAAAB4wAToPMAE6CjABQg83AUINNwAABjAAAAcwAAAFYAFKDzABSw4wBRkYMAUaDjAAAA43BR8IMAAACjANFiEwDAAKoAAACnAAAApwAAAAAAAAAARxyAAE45AABVVWAAXHHQAGOOUABkRGAAZPpgAHHHMAB447AAgAAgAIAAMACDjlAAhxyAAIccoACOOQAAlVWAAJxx4ACgACAApxygAKqq0ACuOQAAsccwALVVgAC447AAvHHgAMAAIADDjmAAxxygAMjjsADVVYAA5xygAOqq0AEAADABA45gAQccoAAAAAAAGwWwAF3rgABuOOAAhxyAAJVVYACddeAArGIgAMDjoADHHIAA3HHQAOwW0AD2C2AA+OOgAQJ9MAEHHGAAAAAP/93rgAAMcdAADjjQABVVYAAY46AAK44wADHHIAB446AAhxxgAAAAAAADjjAABmZgAAccgAAT6VAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/7jjj/+uONAAE+lQABxx3//xxy//+OOP/+qqr//jjjAABxyAAA444AAAAAAAVVVgACqqsAAccdAAbjjgAQAAMAAccd", Jr = "APgAEgAAAH8AIAAGAA4AAwAAAAAAHAAN+rF1EgCgAAASVGVYIG1hdGggZXh0ZW5zaW9uAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNRVgAAAAAAAAAAAAAAAAAAAAAAADqBBcCEAQXAhECFwJoAhcCaQYXAmoGFwJrBhcCbAYXAm0KFwJuChcCbwYXAkQGFwJFAQMDAAgDAwEJFwIuCRcCLwsZAhILGQITDxwCIA8cAiEHHAIiBxwCIwocAiQKHAIlChwCJgocAicQHAIoEBwCKRAcAioQHAIrGhwCLBocAi0SHQIwEh0CMQodAjIKHQIzDR0CNA0dAjUNHQI2DR0CNxMdAjgTHQI5Ex0AABMdAAAdHQAAHR0AABQZAh4UGQIfFhkDAhYZAwMOGQMEDhkDBQ4ZAwYOGQMHDgMDCA4DAwkXBAMKFwQDCxcEAwwXBAMNFwoDDhcKAw8XAQMQDgMDERYZAxIWGQMTFgMDFBYDAxUMGQIcDBkCHRUFAkccKAAABQYGSQgLCAAcBQJLHygAABwFAk0fKAAAHAUCTx8oAAAbBQJYGAUCWQUGBloVBQJbFQUCXBUFAl0VBQJeFQUCXx4oAAAdKAAACAsIABwoAAAcKAAAHCgAABwoAAAcKAAAGAUCYR0oAAAIQAJjGVACZB5QAAAIQAJmGVACZx5QAAAGGQIUBhkCFQcZAhYHGQIXBxkCGAcZAhkOGQIaDhkCGxkXAnEZGQJyGRwCcxkdAnQbCgMWGwMAABsSAAARAwMXDgMDGA4DAxkDMAAAAzAAAAMwAAADMAAAEQMDGhEDAxsAAAAAAAVVVgAGqq0ABzM4AAdVWAAHjjoAB447AAhxygAI45AACT6VAAlVWAAJjjsACcceAAo45gAKqq0AC8cgAAwAAgAMccoADKquAAzjkwAM+lMADVVYAA4AAwAOOOYADxx1ABAAAwAQtg4AEOOSABHHIAAUccsAFxx2ABgtiAAAAAAAAKPWAAGZmwAB64MAC446AAwAAAAAAAAABMzQAAj1ygAJmaAADmZwABAADgARxygAEo9qABgADQAcKQoAHMzgACOOUgAlwqoAL1xKAAAAAAADHHMABxxzAAAADAAAAA0wAEBCMQBBQzIANDYzADU3AAA0NgAANTcyAAA2MwAANzg8Oj45PTs+OAA6PjkAOz4AAAA/AAAAdwAAAD54AHk/OAA7PjkAOj4AAABCAAAAQ3YAdHV+AH93eAAAPwAAeT9+AAB3AAB/dwAAAAAAAAAAAAAAAAAAAAAABuOOABAAAwAAAAAAAKPWAAHHHQACqqsAAzMzAAmZmgABmZo=", Kr = "APsAEgAAAH8AIwAGAA4AAwAAAAAAHAANFyOwrQBwAAASVGVYIG1hdGggZXh0ZW5zaW9uAAAAAAAAAAAAAAAAAAAAAAAAAAAACUNNRVggVjIuMgAAAAAAAAAAAAAAAADwBBcCEAQXAhEDFwJoAxcCaQYXAmoGFwJrBhcCbAYXAm0KFwJuChcCbwYXAkQGFwJFAQMDAAkDAwEIFwIuCBcCLwsZAhILGQITDxwCIA8cAiEHHAIiBxwCIwocAiQKHAIlChwCJgocAicQHAIoEBwCKRAcAioQHAIrGxwCLBscAi0THQIwEx0CMQodAjIKHQIzDR0CNA0dAjUNHQI2DR0CNxQdAjgUHQI5FB0AABQdAAAfHQAAHx0AABIZAh4SGQIfFhkDAhYZAwMOGQMEDhkDBQ4ZAwYOGQMHDgMDCA4DAwkXBAMKFwQDCxcEAwwXBAMNFwoDDhcKAw8XAQMQDgMDERYZAxIWGQMTFgMDFBYDAxUMGQIcDBkCHRUFAkceKAAABQYGSQkLCAAeBQJLIigAAB4FAk0iKAAAHgUCTyIoAAAdBQJYGAUCWQUGBloVBQJbFQUCXBUFAl0VBQJeFQUCXyEoAAAgKAAACQsIAB4oAAAeKAAAHigAAB4oAAAeKAAAGAUCYSAoAAAJQAJjGlACZCFQAAAJQAJmGlACZyFQAAAGGQIUBhkCFQcZAhYHGQIXBxkCGAcZAhkOGQIaDhkCGxkXAnEZGQJyGRwCcxkdAnQcCgMWHAMAABwSAAARAwMXDgMDGA4DAxkCMAAAAjAAAAIwAAACMAAAEQMDGhEDAxsAAAAAAAZpqQAHtUIAB+OSAAighwAI34AACN+CAAnbcgAKPCcACllpAArXYgALFl4AC1VZAAvTUgAMUUkADYw3AA3LMAAOSSkADl5JAA6IJwAOxyUAD0UZABACDgAQQQkAETz5ABH35QASOOkAEoBuABLz1QATNNkAFDDJABaikAAXJJkAGhhpABtGuwAAAAAAAMbyAAGZmwACVNcAC445AAwAAAAAAAAABMzQAAjSrgAJmaAADmZwABAADgARxykAEmxOABgADgAcBe4AHMzgACOOUgAln44ALzkuAAAAAAADcckAB9+AAAAADAAAAA0wAEBCMQBBQzIANDYzADU3AAA0NgAANTcyAAA2MwAANzg8Oj45PTs+OAA6PjkAOz4AAAA/AAAAdwAAAD54AHk/OAA7PjkAOj4AAABCAAAAQ3YAdHV+AH93eAAAPwAAeT9+AAB3AAB/dwAAAAAAAAAAAAAAAAAAAAAABuOOABK68gAAAAAAAMbyAAHHGwACqqsAAzMyAAnHGwACSSU=", jr = "APcAEgAAAH8AHwAGAA4AAwAAAAAAHAANAQFhNgCAAAASVGVYIG1hdGggZXh0ZW5zaW9uAAAAAAAAAAAAAAAAAAAAAAAAAAAACUNNRVggVjIuMgAAAAAAAAAAAAAAAADuBBcCEAQXAhECFwJoAhcCaQUXAmoFFwJrBRcCbAUXAm0JFwJuCRcCbwUXAkQFFwJFAQMDAAcDAwEIFwIuCBcCLwoZAhIKGQITDhwCIA4cAiEGHAIiBhwCIwkcAiQJHAIlCRwCJgkcAicPHAIoDxwCKQ8cAioPHAIrGRwCLBkcAi0RHQIwER0CMQkdAjIJHQIzDB0CNAwdAjUMHQI2DB0CNxIdAjgSHQI5Eh0AABIdAAAcHQAAHB0AABMZAh4TGQIfFRkDAhUZAwMNGQMEDRkDBQ0ZAwYNGQMHDQMDCA0DAwkWBAMKFgQDCxYEAwwWBAMNFgoDDhYKAw8WAQMQDQMDERUZAxIVGQMTFQMDFBUDAxULGQIcCxkCHRQFAkcbKAAABQYGSQcLCAAbBQJLHigAABsFAk0eKAAAGwUCTx4oAAAaBQJYFwUCWQUGBloUBQJbFAUCXBQFAl0UBQJeFAUCXx0oAAAcKAAABwsIABsoAAAbKAAAGygAABsoAAAbKAAAFwUCYRwoAAAHQAJjGFACZB1QAAAHQAJmGFACZx1QAAAFGQIUBRkCFQYZAhYGGQIXBhkCGAYZAhkNGQIaDRkCGxgXAnEYGQJyGBwCcxgdAnQaCgMWGgMAABoSAAAQAwMXDQMDGA0DAxkDMAAAAzAAAAMwAAADMAAAEAMDGhADAxsAAAAAAAWqsAAHFVwABzM4AAfKsgAIByQACPjsAAlx0AAJ0oYACeq0AAonJgAKY5gACtx8AAtVYAAMg5oADMAMAA048AANdWIADbHUAA3KAgAOKrgADuAOAA8cgAAQDkgAEQAQABHBfAAR8dgAEuOgABW4+AAYjlAAGbB0AAAAAAAAuFIAAZmaAAIo9gALjjoADAAAAAAAAAAEzNAACOFOAAmZoAAOZnAAEAAOABHHKAASeu4AGAAMABwUjgAczOAAI45SACWuLgAvR84AAAAAAANOPAAHjkAAAAAMAAAADTAAQEIxAEFDMgA0NjMANTcAADQ2AAA1NzIAADYzAAA3ODw6Pjk9Oz44ADo+OQA7PgAAAD8AAAB3AAAAPngAeT84ADs+OQA6PgAAAEIAAABDdgB0dX4Af3d4AAA/AAB5P34AAHcAAH93AAAAAAAAAAAAAAAAAAAAAAAG444AEQAQAAAAAAAAuFIAAcccAAKqqgADMzQACbjkAAIAAA==", _r = "APkAEgAAAH8AIQAGAA4AAwAAAAAAHAANesDTaQCQAAASVGVYIG1hdGggZXh0ZW5zaW9uAAAAAAAAAAAAAAAAAAAAAAAAAAAACUNNRVggVjIuMgAAAAAAAAAAAAAAAADsBBcCEAQXAhECFwJoAhcCaQUXAmoFFwJrBRcCbAUXAm0LFwJuCxcCbwYXAkQGFwJFAQMDAAgDAwEJFwIuCRcCLwwZAhIMGQITEBwCIBAcAiEHHAIiBxwCIwocAiQKHAIlChwCJgocAicRHAIoERwCKREcAioRHAIrGxwCLBscAi0THQIwEx0CMQodAjIKHQIzDh0CNA4dAjUOHQI2Dh0CNxQdAjgUHQI5FB0AABQdAAAeHQAAHh0AABUZAh4VGQIfFxkDAhcZAwMPGQMEDxkDBQ8ZAwYPGQMHDwMDCA8DAwkYBAMKGAQDCxgEAwwYBAMNGAoDDhgKAw8YAQMQDwMDERcZAxIXGQMTFwMDFBcDAxUNGQIcDRkCHRYFAkcdKAAABQYGSQgLCAAdBQJLICgAAB0FAk0gKAAAHQUCTyAoAAAcBQJYGQUCWQUGBloWBQJbFgUCXBYFAl0WBQJeFgUCXx8oAAAeKAAACAsIAB0oAAAdKAAAHSgAAB0oAAAdKAAAGQUCYR4oAAAIQAJjGlACZB9QAAAIQAJmGlACZx9QAAAFGQIUBRkCFQcZAhYHGQIXBxkCGAcZAhkPGQIaDxkCGxoXAnEaGQJyGhwCcxodAnQcCgMWHAMAABwSAAASAwMXDwMDGA8DAxkDMAAAAzAAAAMwAAADMAAAEgMDGhIDAxsAAAAAAAV7QAAG2hAABzM5AAeJdwAHw/AAB8PyAAit0AAJIsAACYBMAAmXsAAJl7IACdInAAoMoAAKgZAACvaAAAwa1wAMVVIADMpAAA0EtwANPzAADVaUAA20IAAOY4cADp4AAA+H4AAQccAAESzbABFboAASRYAAFQMgABfAwAAY2WUAAAAAAACs8gABmZsAAgbVAAuOOQAMAAAAAAAAAATM0AAI7K4ACZmgAA5mcAAQAA4AEccpABKGTgAYAAwAHB/uABzM4AAjjlIAJbmOAC9TLgAAAAAAAzKQAAdPAAAAAAwAAAANMABAQjEAQUMyADQ2MwA1NwAANDYAADU3MgAANjMAADc4PDo+OT07PjgAOj45ADs+AAAAPwAAAHcAAAA+eAB5PzgAOz45ADo+AAAAQgAAAEN2AHR1fgB/d3gAAD8AAHk/fgAAdwAAf3cAAAAAAAAAAAAAAAAAAAAAAAbjjgAQccAAAAAAAACs8gABxxwAAqqrAAMzNAAJrdQAAccc", Or = "AUsAEgAAAH8AMAAOAAsAAQBYAAoAAAAHjRUb6wCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNRkYAAAAAAAAAAAAAAAAAAAAAAADqG6AAACqgAAAnoAAAGqAAAB2gAAAaoAAAI6AAACegAAAjoAAAJ6AAACOgAAAYkAEKF5AAABeQAAArkAAAK5AAAAJQAAAFWAAAEpAAABKQAAAScAAAEpAAABKAAAAekAAADQcAABGQAAAjUAAAJ1AAABK1AAAsoAAALqAAACfTAAACUAEAAZABFxKQAAAqmQAAEsIAACrCAAAlkAAAA5ABEgrKAAAKygAAEsAAACdEAAADFgAACFABFQMQAAASygAAEmAAABJgAAASYAAAEmAAABJgAAASYAAAEmAAABJgAAASYAAAEmAAAANQAAADVgAAATgAACchAAAOOAAADpABGCeQAAAgoAFMH6AAACOgAAAkoAE1IqAAAB+gASQmoAAAGqAAAAagAVcPoAAAI6ABKhugAVIooAAAGqAAACqgATUboAEeKqYAACKgAUwWoAAAJ6ABLhygAAAgoAEkLaABJCCgASogoAEvGaAAAATKAAASkAAABMoAABKQAAADkAAAA5ABERBQAUgVkAFCDVABQBWQAAANUAAAB5ABAhJYAVYVkAE6ApAAAAWYAAAUkAEZApAAAClQAToVUAE6ElABQhVYAUITWAAACVAAAAtQAAAKkAFKFVABSxRQARkhUAEaFFAAABRYAR8MUAAAElABFi9QAAASkAAAEpAAABKQAAAAAAAAAAMFsAADd3gAA7u7AAPHHQAD0n4ABBbAAAQWwgAEccYABQWwAAUn0gAFOgYABczLAAXd3QAGOOMABmZlAAZxxgAGccgABpPoAAaqqgAGqqsABwWwAAdJ8wAHVVUAB9J9AAf//gAIWwMACIiGAAi2CAAItgoACOOLAAjjjQAJEQ4ACSfSAAk+kgAJbBUACZmYAAn//gAKC14ACiIgAAp9JQAKk+gACtgrAAsREAALYLMADJ9GAAzMygANJ9AAAAAAAAEn0wAE9J4ABVVWAAa2CgAIccYACVVVAAlxyAAJniUACccdAAoAAAAKqqoACqqrAAsccgAAAAAAABESAADjjgABHHIAAdJ9AAI44wADHHIAA+OOAARxxgAE45AABccdAAAAAABsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj//IiI//w44wAA444AAWwW//9J9f//pPr//u7u//6T6gAAWwYAALYL//5mYAAEccYAAiIiAAFsFgAIccYADSfQAAFsFg==", Lr = "AWQAEgAAAH8AMgAOAAsAJABNAAkAAAAHEwuEjgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNRkkAAAAAAAAAAAAAAAAAAAAAAADqF6CAAC2gAAAooCQAGKAAABugWAAaoAAAI6BoACigOAAjoAgAKKA4ACOgMAAVmI0IEJhwABOYcAApmHAALJhwAANQcAAFWAAAD5AAAA+QAAAPcAAAD5AAAA+AKAAikAAACwcAABKYAAAjUCwAI1AsAA+0TAAuoGgAMKBoACjTJAABUAEPApARFw+QAAAtmQQAHpAAAC3CHAAokAAAA5ABEgjKVAAIygAAD8A8AChGAAADFQAAB1ABFQMQAAAPylQAD2BIAA9gSAAPYEgAD2BIAA9oSAAPYEgAD2BIAA9oSAAPYEgAD2BIAANQAAADVQAAAjgAACghBAAPOAAAD5ANGCiQIAAhoAEwH6AwACOgUAAloCUrIKBoAByggRonoAAAGqAAAAagXAAOoAAAJKBRIBegAUEroAAAGqAAACqgJSsZoDEqKqUkACKgATAUoBQAJqCBJB2gAAAhoIUaL6CFKiGgXSAhoIklFqBQAAPKdAAPkGQAA8oAAA+QAAADkAAAA5ABEQ9QcAALkBlFC1ABRQ+QcRkLUC1FBJiNAAtYNAAPkHAAA5BwAAOYRAALkGAAAZBxGS1QcAAUUHFMD1AZRQ9YGUULWDQAClBhRQhQQAAFkHAAEVBwAAtQYAAbUGEZDFB4AA1YNAAJUHwAD1BtFjFQbAAPkAwAD5AMAA+QAAAAAAAAAAPpPQAEIiAABNgrAATYLQAFT6MABWwTAAXHGgAGtggABrYKAAbxxQAHpPYAB6T4AAgcbgAIZmIACJPlAAjBagAJC10ACQteAAk44AAJgtMACbBYAApxwgAK+koACwWqAAszLQALPo0AC2CwAAtxwgALmZIAC6T2AAuqpQAL6TgAC/SYAAwiGwAMT54ADGwQAAyZkwANBaoADSfLAA0+jQAN1VAADfSYAA4LWAAOEQsADi17AA7u5gAQn0AAEMzDABEnygAAAAAAASfTAAT0ngAFVVYACAtdAAhxxgAJVVUACXHIAAmphgAJxx0ACgAAAAqqqgAKqqsACxxyAAAAAAAAERIAAOOOAAEccgACOOMAAxxyAAMn0AAD444ABHHGAATjkAAFxx0AAAAAAAAHZgAACIoAAAtlAAALZgAAERYAAB/eAAAiJgAAN8IAADu+AABEKwAASBAAAEiLAABJ+gAAVVgAAF3iAABgugAAbBsAAHd7AAB3fQAAiI0AAJmdAACsZQAAxEoAANgyAADibgAA45MAAP0VAAD+HQABERUAARPtAAEWxgABH1AAATvAAAFrigABrYYAaQAMAGYACwBsAA0AJ4AAAD+AAAAhgAAAKYAAgF2AAABpAA4AbAAPACeAAAA/gAAAIYAAACmAAIBdgAAAbIABgEyAAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+gGyABABvgAUAZYAFAHWABQBygAUAYYAFAEGABgBPgAcAQ4AHAEeAB4BRgAcAeYAFAGWABQBvgAUAcoAFAGGABQB1gAWAQYAFAFiABwBXgAcAQYAHAFaAB4BZgAcAboAHAGyABwBygAcAdYAHAG2ABwB0gAcAaYAHAEOABwBPgAcAR4AHAGiABwBigAcAVYAHAGuABwB2gAcAd4AHAFGABwBUgAUAWYAFAFaABgBXgAYAZYAIAGGACABvgAgAZIAIAGOACABngAiAcYAIgCeABgAA1Vb//BbD//tVWAAB3d0AAO7u//6Zmv/+IiP//4iI//8REgABmaAABccaAALMywAB3d0ACHHGABEnygAB3d0=", Tr = "AUAAEgAAAH8AJQAOAAcABQBYAAoAAAAHza9mPQCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNRklCAAAAAAAAAAAAAAAAAAAAAADuF8AAACLAAAAfwAAAGcAAABnAAAAcwAAAHMAAAB/AAAAcwAAAH8AAABzAAAAWwBEKFMAAABTAAAAhwAAAIcAAAAEwAAAENgAAEMAAABDAAAAQgAAAEMAAABBgAAAcwAAACwUAAA/AAAAcMAAAHzAAABBDAAAjwAAAJMAAAB/SAAABMAEAAsABFxDAAAAixgAAEMAAACLAAAAewAAAAsABEgfGAAAHxgAAEMAAAB+UAAACFgAABjABFQIQAAAQxgAAEMAAABDAAAAQwAAAEMAAABDAAAAQwAAAEMAAABDAAAAQwAAAEMAAAAIwAAACNgAAAlYAAB8hAAANVgAADcABGB/AAAAcwAFMGsAAABzAAAAdwAE1GcAAABjAASQfwAAAHMAAAAbAAVcQwAAAHcABKhfAAVIjwAAAHMAAAB/AATUZwAEeH8YAABzAAUwVwAAAHMABLhzAAAAcwAUkJMAFJBzAASocwAkvF8AAAAPGAAAQwAAAA8YAABDAAAACsAAAAsABEQ4wAUgTwAFCCzABQBPAAAAMMAAABcARAhA2BVYTwAE6AbAAAAS2AAASwAEZAcAAACAwAToTMAE6EDABQhM2AUIRNgAACDAAAAkwAAAHcAFKEzABSxIwBRkbMAUaEjAAABI2BR8KMAAAEDANFiQwDAAQwAAAEKAAABCwAAAAAAAAAAWcbgAF1VIABdVUAAYxxAAGaqgABv/8AAgqpgAIMcQACEiEAAlHFgAJVVAACYqmAAnqpgAKGN4ACmOKAAp/+gAK3GoACtxsAAtxwAALjjIAC6qkAAw/+gAM1U4ADWqkAA3/+AAOlU4ADvG+AA8qogAPv/gAEDjaABBVTAARRxIAEWOEABF/9gASqqAAFP/0AAAAAAAB444AB3pQAAgAAAAJhxwACeOQAAru7gALbbgAC7VWAAvxxAAMX4AADIMOAAzxyAANtVYAAAAA//2WwAAAw44AAYccAAIONAACrHIAAw44AAAAAAAASqoAAIZmAACVVgABmOQAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//pjkv/5scoAAZjkAAJVVP/+1Vb//2qq//5AAP/9qqwAAJVWAAEqqgAAAAAABv/8AAN//gACVVQACAAAABT/9AACVVQ=", zr = "AHsAEgAwAFoAEQACAAIAAwAVAAQAAAAH3j5hywaBGaAVQVNDSUkgY2FwcyBhbmQgZGlnaXRzAAAAAAAAAAAAAAAAAAAAAAAABkNNSU5DSAAAAAAAAAAAAAAAAAAAAAAuAxAAAAMQAAADEAAAAxAAAAMQAAADEAAAAxAAAAMQAAADEAAAAxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAELCxAAAAkQAAAOEAEGBhAAAAUQAQELEAAADRAAAAEQARQCEAAADBABAgQQARAPEAAADRAAAA4QAQYIEAEADhEAAAgQAAAFEAAACxABAAwQAAAKEAUBEBAFAQoQAQIKEAkABxAAAAAAAAAABUn1AAhPpQAIzM0ACUn0AAnHHAAKREQACsFsAAs+lAALPpQAC7u7AAu7vAAMOOMADLYLAAy2CwAPpPoAEJ9KAAAAAAALHHIAAAAAAAGwWwAAAAAAAD6UAABwpIBBgAAAQYAAAE+AAQBDgAEAR4ABgFGAAQBYgAEAV4ABAEGAAQBWgAGAWYABAEOAAQBPgAEAR4ABAFWAAQBRgAEAVIAAAFmAAgBWgACAV4ACgEmAA//+iIj//4LY//4LYQAAfSgAAAAAAAXd3gAC7u8AAfSfAAdVVQARmZkAAfSf", Pr = "AMAAEgAAAH8AAgAPAAwAAgACAAAAAAAH3+o8eACgAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNSVRUAAAAAAAAAAAAAAAAAAAAAADqAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABOwQAATsEAAFQBAABWwQAAcAEAAHABAABsAQAAcAEAAGgBAABwAQAAQoEAAHLBAABUAQAAVAEAAGIBAABwAQAAcAEAAHUBAABKAQAAcAFAAHABAABwAQAAcAEAAHmBAABwAQAAcAEAAHlBAAB5QQAAWAEAAFyBAABGQQAAXIEAAEQBAAB5QQAAcAEAAHABAABwAQAAcAEAAHLBAABwAQAAcAEAAHLBAABwAQAAcAEAAFQBAABWQQAAZMEAAFBBAABkwQAAcAFAQHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAckEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHABAABwAQAAcAEAAHlBAAB5QQAAeUEAAHABAABBwQAAcAEAAFQBAABwAQAAVAEAAHABAABUAQAAcsEAAFbBAABwAQAAcAEAAHLBAABwAQAAcAEAAFQBAABUAQAAVAEAAFbBAABWwQAAVAEAAFQBAABwAQAAVAEAAFQBAABUAQAAVAEAAFbBAABUAQAAeUEAAHlBAAB5QQAAcAEAAHABAAAAAAAAAhmYgAAAAAAAgAAAAOC2AAGOOMABqZlAAbjjgAIVVYACH0mAAiqqwAI444ACQyDAAkOOgAJxx0ACqqrAAsccgAAAAD//N9I//62Cv//HHIAAOOOAAFVUwABVVUAAYWtAAHHHQACOOMAAxxzAAOOOgAAAAAAAscdgGAADoBgAA8ABAAAAAhmYgAAAAAAAAAAAAbjjgAQzMMACGZi", qr = "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", $r = "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", Ag = "AXkAEgAAAH8AYAAPAAkAHgA6AAsAAAAGTw3aXABQAAAPVGVYIG1hdGggaXRhbGljAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNTUkAAAAAAAAAAAAAAAAAAAAAAAD0MrBtHVuwASdPsBkYR7ABJ0uwSRhXsE0QUrAtGDOwbQxFsAEYP7BlCFCwJRhAQAEDKcctGCRHPAAPwBUJC0ABCxHHMRgjRx0LFsAZGARAAQsuQAAAM8AAADZHAQMcQEEBEccNITBAHAAeRwEYLEAdLxdAXQErQB0DNMcBGDlHAQtCxx0hPUAcABRAARg3wAEYWkAYAB5HARgHRUUYQUcBGF8yAABfMgAAXzIAAF8yAAABZAAAAWQAACBTAAAgUwAAIEAAACBAAAAgQAAAIEcAACBHAAAgRwAAIJAAACBHAAAgkAAAIEcAAAEQAAABFwAAVXYAACDoATRVdgAAIFMAACXAPRhNsAEiTrAlGEiwORVWsBkLSbAtGDqwbR1RsAEYV7BNEAywUSEnsFUrWbA5CEawAQNesFkZU7BZFE+wGRg7sG0dVLcBGEywBRg4sCkZMbBtFUSwWQQvsHExXbBtMViwURQtsHExQ7A5GQrgAAAKxwAACscAAF8hAABfIQAACcABIShAAAANwAAADkABCyHAASMVQAELGMdhKBpHHQMuwAEAA6AAAAinNS8mwAgAAsABGFxAAAA8QAAAG0ABCyJHARgQRx0YE0AZCRJAAQsGgAEYNUABAx1AHQNKQBEYKkABAx9HHQsZQCELA0ABAwVHARg+RwEhINBoAAHAdAAAAAAAAAdVWgAHr20ACImDAAjL4AAI2woACQTGAAlABgAJaUMACY49AAmOQAAJ0RYACgcjAAoiJgAKZA0ACnd9AAqK7QAKqrMACrjqAAq9qgAKy2YACtUQAArVWgAK590ACvHNAAsExgALNZoACz6aAAtkigALjkMAC53mAAuwZgALxyYAC9XWAAvV2gAL5nMAC/NTAAv7wAAMIToADF3mAAxkEAAMpnAADKqzAAyqtgANCvAADTBmAA09rQANPqAADUxgAA1RHQANUoYADXHTAA13gAANiYoADZizAA2vdgANs0AADdVgAA3gwAAOAXYADhfDAA4ugwAOOl0ADku2AA6c9gAOsGYADuOdAA8W0AAPGjYADxyAAA9KAwAPd4YAD++QABAcgAAQJM0AEEiWABB6ugAQk/oAEJeGABDCnQAQ+D0AEQZQABELcAARNhoAEVDWABFVZgARwg0AEcRTABHOSgASOPYAElEjABJx2gATpgMAFHeNABSLcwAVxzMAAAAAAAH0oAAFuOMABletAAbjjQAHccYACDymAAmdWgAJ110ACk+mAAqp2gAK7vAACxxzAAuPIwAMAAAAAAAA//244//+V63//3HGAAA8pgABjjoAAZ1aAAMccwAEAAAAAAAAAAAGwAAAQl0AAEqqAABuOgAAhEMAAI46AACS9gAAl7MAAL9KAADPowAA0n0AANjjAADxkwABFsAAARxzAAEhMAABKqoAASwWAAEwWgABOlAAAYWwAAG+kwAB2wYAAeOQAAHtPQACdg0AAscgAARxzQAJTXOAf4AAADuAAQA6gAGAf4ACADuAAwA6gAMAPYABgH+AAgA9gAEAO4ABADqAAYB/gAQAPYABADuAAwA6gAOAf4AEAD2AAQA7gAEAOoABgH+ABAA9gAUAPYAAADuAAQA6gAGAf4AGAD2AAQA7gAEAOoABgH+ABgA9gAEAO4ADADqAA4B/gAaAf4AHgH+ACABZgAQAWoABAGqAAwBmgAmAf4AKADuAAQA6gAGAf4AKAD2AAQA7gAMAOoADgH+ACgA7gAGAOoABADuACQA6gAmAPYADAAGAAQBBgAEATYABAE6AAQBZgASAWoAB//9xxv/+440AAI46//3HGgABHHP//lVTAAGqrQACOOYAAscg//yqpgADVVoABAAAAAAAAAAAAAAAAAAAAAbjjQAXjk0=", eg = "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", tg = "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", ng = "AXwAEgAAAH8AYQAPAAkAIAA6AAsAAAAG1wEXMgCAAAAPVGVYIG1hdGggaXRhbGljAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNTUkAAAAAAAAAAAAAAAAAAAAAAADuOLBxHVuwASdQsBUYSLABJ0ywTRhYsFEQUrA1GDSwcQxEsAEYO7BpCFGwKRhBQAEDK8ctGCVHPAARwB0JCkABCxDHRRghRxkLGcAVGAVAAQsvQAAANMAAADdHAQMeQEEBEMchIS5AGAAjRwEYLUAZLxJAbQEpQBkDNccBGDxHAQtDxxkhPUAYABVAARg2wAEYWkAUACNHARgHRlkYQkcBGGAyAABgMgAAYDIAAGAyAAABZAAAAWQAACBTAAAgUwAAIEAAACBAAAAgQAAAIEcAACBHAAAgRwAAIJAAACBHAAAgkAAAIEcAAAEQAAABFwAAU3UAACDoATRTdQAAIFMAACfAPRhNsAEiT7ApGEmwSRVXsBULS7A1GD6wcR1UsAEYWLBREA+wVSEqsF0rXLBJCEewAQNfsGEZVrBhFFCwFRhAsHEdVbcBGE6wBRg6sDEZMrBxFUWwYQQzsHkxXrBxMVmwVRQxsHkxRrBJGQngAAAJxwAACccAAGAhAABgIQAADMABIShAAAANwAAADkABCyTAASMXQAELG8dlKBpHGQMvwAEABKAAAAunOS8mwAwAAsAJGF1AAAA5QAAAHEABCyJHARgTRxkYFEAVCRZAAQsGgAEYMEABAx1AGQNKQBEYLEABAx9HGQsYQCULA0ABAwhHARg/RwEhINB0AAHAfAAAAAAAAAS46AAFEvoABZe4AAXJtAAGBMIABiOUAAY46gAGZyAABpx4AAbfUAAG4AQABvHMAAdFuAAHXPIAB172AAd47AAHhbgAB4toAAeXBgAHq+AAB9mgAAfceAAH4uAAB+hSAAfuPgAIFwYACCqwAAg3gAAIRyQACFtKAAhnJAAIgAgACIfaAAiOugAItKYACL9QAAjBjAAI2hoACPSmAAkHngAJOOwACUlGAAmJ/AAJkc4ACbcIAAnDHgAJy+IACde8AAnaWgAJ5boACeZwAAnqtAAKGxAAChz0AAo6GgAKSUYAClCgAApWygAKeewACo5AAAqSDgAKwioACsZwAArHJAAK6y4ACxP0AAscfAALVWAAC4BAAAuFBAALj7AAC8oAAAwdxAAMMwIADHVgAAyI7gAMu8gADM26AAzSiAAM5igADREcAA0s2AANOPAADT8wAA1fDAANfkQADfJkAA33KAAN+24ADh00AA4quAAOVhgADwmIABAKBAAQU5wAEQAQAAAAAAABxxwABbjkAAYMPAAG444AB3HIAAe8TgAJApAACddeAApPpgAKk9AACu7uAAsccgALeJwADAAAAAAAAP/9uOT//gw8//9xyP//vE4AAQKQAAGOOgADHHIABAAAAAAAAAAAGWwAADCWAABtCgAAbjgAAHjkAACS9gAAmZgAAJ/+AACtCgAAyfQAANJ8AADk+gAA5bAAAOwQAADxyAABC9oAARjiAAEhbAABM44AATtgAAE/pAABQAAAAYC2AAG0RAABw44AAc08AAHY5AACXHQAAnYMAAPHIAAGsQCAf4AAADuAAQA6gAGAf4ACADuAAwA6gAMAPYABgH+AAgA9gAEAO4ABADqAAYB/gAQAPYABADuAAwA6gAOAf4AEAD2AAQA7gAEAOoABgH+ABAA9gAUAPYAAADuAAQA6gAGAf4AGAD2AAQA7gAEAOoABgH+ABgA9gAEAO4ADADqAA4B/gAaAf4AHgH+ACABZgAQAWoABAGqAAwBmgAmAf4AKADuAAQA6gAGAf4AKAD2AAQA7gAMAOoADgH+ACgA7gAGAOoABADuACQA6gAmAPYADAAGAAQBBgAEATYABAE6AAQBZgASAWoAB//+HHP//DjgAAHjk//4ccAAA8cj//pVUAAFqrAAB45AAAlx0//0qqAAC1VgABAAAAAAAAAAAAAAAAAAAAAbjjgARABA=", rg = "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", gg = "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", ig = "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", Bg = "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", og = "AX4AEgAAAH8AYwAOAAkAIAA6AAwAAAAGojUtLgCAAAAPVGVYIG1hdGggaXRhbGljAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkNNTUlCIFYyLjIAAAAAAAAAAAAAAADuLKB1HVugASdQoB0YSaABJ06gTRhdoFkQVqA1GDCgdQxGoAEYP6BpCFSgLRhFQAEDLbcZGCBHQAARsCUJDEABCw63ORglRyELGrAdGAVAAQsvQAAAMbAAADpHAQMdQEkBDrcRITZAIAAkRwEYNUAhLxRAbQEpQCEDO7cBGD1HAQtEtyEhPkAgABJAARg5sAEYXkAcACRHARgHRVEYQkcBGGIyAABiMgAAYjIAAGIyAAABZAAAAWQAAB5TAAAeUwAAHkAAAB5AAAAeQAAAHkcAAB5HAAAeRwAAHpAAAB5HAAAekAAAHkcAAAEQAAABFwAAV3YAAB7YATRXdgAAHlMAACiwQRhToAEiT6AtGEugRRVYoB0LSqA1GDSgdR1VoAEYXaBZEA2gVSEnoF0rXKBFCEOgAQNhoGEZWaBhFEygHRg8oHUdUacBGFKgCRg3oDEZKqB1FUigYQQzoHkxYKB1MVqgVRQyoHkxR6BFGQnQAAAJtwAACbcAAGIhAABiIQAAC7ABIStAAAAQsAAAD0ABCyKwASMYQAELG7dlKBdHIQMvsAEABLAAAAq3PS8msAwAArAFGF9AAABAQAAAH0ABCyNHARgWRyEYFUAdCRNAAQsGgAEYOEABAxxAIQNNQBUYLkABAyFHIQsZQCkLA0ABAwhHARhBRwEhHsBwAAGwfAAAAAAAAAVxygAF8VAABtdCAAbhrAAHCBQAByjMAAdHIAAHT6gAB59OAAfbCAAH7BoACDHKAAiGaAAIszgACLyyAAjPqAAI2DAACO9MAAkBbAAJAXIACRZMAAkvbAAJQHwACWHcAAl3BAAJe74ACaT4AAm0pgAJwH4ACczSAAnmagAKAdoAChsOAApGqAAKRqoACkiMAApLagAKTFoACpYOAAqZnAAKy2gACs2IAArSCgAK+8AACyZsAAsu8gALYxwAC27yAAtu9gALbzwAC30sAAuHIgALoqAAC64EAAu3fgALvawAC9dkAAwFPgAME+4ADCiMAAwqrgAMO4QADD3AAAxJDAAMiI4ADLBgAAzYNAAM+OwADP+OAA0RFgANE/AADX+8AA2qsAANrvYADeNMAA4vzgAONZwADj+aAA6rDgAOtX4ADrswAA67OgAOwXIADumiAA785AAO/pwADz6cAA/VEgAP+OgAD/3kABBVXgAQZm4AEIRKABCgwAARutYAEpEYABM9LgATmaQAAAAAAAKOOAAFxx4ABnXEAAcccgAHjjoACGFKAAnI0gAKKKQACk+mAAr6UAALHHIAC6awAAwAAAAAAAD//cce//51xP//jjoAAGFKAAGOOgAByNIAAxxyAAQAAAAAAAAAAAACAAAJxgAAMNIAAFmYAABxxgAAhbAAAItiAACXtAAAnd4AAKQGAADBxgAA0+gAANbAAADk+AABAAAAARbCAAEZmAABIxYAAS6AAAE7ugABPHIAAT0mAAGTNAAByIgAAdESAAHqGAACLYQAAnpQAAK45gAEWwgAB5KCgH+AAAA7gAEAOoABgH+AAgA7gAMAOoADAD2AAYB/gAIAPYABADuAAQA6gAGAf4AEAD2AAQA7gAMAOoADgH+ABAA9gAEAO4ABADqAAYB/gAQAPYAFAD2AAAA7gAEAOoABgH+ABgA9gAEAO4ABADqAAYB/gAYAPYABADuAAwA6gAOAf4AGgH+AB4B/gAgAWYAJAFqAAQBqgAMAZoAKgH+ACwA7gAEAOoABgH+ACwA9gAEAO4ADADqAA4B/gAsAO4ABgDqAAQA7gAoAOoAKgD2AAwABgAEAQYABAE2AAQBOgAEAWYAJgFqAAf//dJ7//uk+AACLYv/90nwAARbE//5d3AABoiYAAi2IAAK46gABFsL//Lu6AANETAAEAAAAAAAAAAAAAAAAAAAABxxyABOZpA==", ag = "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", lg = "AUQAEgAAAH8AJAAQAAoABQBYAAoAAAAHS/FgeQCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADqEsAAAB7AAAAcwAAAFsAAABTAAAAawAAAGMAAABzAAAAYwAAAHMAAABjAAAAQ0BEKD9AAAA/QAAAe0AAAHtAAAAEwAAACOAAACtAAAArQAAAKkAAACtAAAApgAAAa0AAACAYAAAvQAAAYMAAAHDAAAApVAAAfwAAAIsAAABziAAABMAEAAdABFwrQAAAe1wAACvMAAB7zAAAc0AAAAdABEgX5AAAF+QAACvAAABx0AAABGAAAAzABFQEQAAAK+QAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAEwAAABOAAAAUgAABwhAAAJSAAACdABGBzQAAAawAFMF8AAABjAAAAbwAE1FcAAABPAASQdwAAAGsAAAATAAVcMwAAAHMABKhLAAVIgwAAAGsAAABzAATUVwAEeHMgAABnAAUwPwAAAGMABLhrAAAAawAUkI8AFJBrAASoawAkvEcAAAAH5AAAK0AAAAfkAAArQAAABsAAAAdABEQowAUgP0AFCCDABQA/QAAAIMAAAAtARAgo4BVYP0AE6AbAAAAK4AAAO0AEZAdAAAB4wAToPMAE6CjABQg84AUINOAAABjAAAAcwAAAFgAFKDzABSw4wBRkYMAUaDjAAAA44BR8IMAAACjANFiEwDAAK0AAACrAAAAqwAAAAAAAAAARxyAAE45AABVVWAAXHHQAGOOUABkRGAAZPpgAHHHMAB447AAgAAgAIAAMACDjlAAhxyAAIccoACOOQAAlVWAAJxx4ACgACAApxygAKqq0ACuOQAAsccwALVVgAC447AAvHHgAMAAIADDjmAAxxygAMjjsADVVYAA5xygAOqq0AEAADABA45gAQccoAAAAAAAGwWwAF3rgABuOOAAgAAAAIccgACRWdAAlVVgAJ114ACg46AApPpQAKr40ACu7uAAsccgALtgsADAAAAAAAAP/93rgAAMcdAADjjgABVVYAAY46AAK44wADHHAAAxxyAAQAAAAAAAAAADjjAABmZgAAccgAAT6VAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/7jjj/+uONAAE+lQABxx3//xxy//+OOP/+qqr//jjjAABxyAAA444AAAAAAAVVVgACqqsAAccdAAbjjgAQAAMAAccd", cg = "AUIAEgAAAH8AIgAQAAoABQBYAAoAAAAHWKtRCwDAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADmD8AAABzAAAAawAAAE8AAABHAAAAXwAAAFcAAABrAAAAVwAAAGsAAABXAAAAN0BEKDNAAAAzQAAAc0AAAHNAAAAEwAAACOAAACdAAAAnQAAAJkAAACdAAAAlgAAAX0AAABwYAAAnQAAAVMAAAGjAAAAlVAAAdwAAAIMAAABriAAABMAEAAdABFwnQAAAc1wAACfMAABzzAAAa0AAAAdABEgX5AAAF+QAACfAAABp0AAABGAAAAzABFQEQAAAJ+QAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAEwAAABOAAAAUgAABohAAAISAAACNABGBrQAAAXwAFMFMAAABXAAAAYwAE1EsAAABDAASQbwAAAF8AAAATAAVcKwAAAGcABKg/AAVIewAAAF8AAABrAATUSwAEeGsgAABbAAUwMwAAAFcABLhfAAAAXwAUkIcAFJBfAASoXwAkvDsAAAAH5AAAJ0AAAAfkAAAnQAAABsAAAAdABEQkwAUgM0AFCBzABQAzQAAAHMAAAAtARAgk4BVYM0AE6AbAAAAK4AAAL0AEZAdAAABwwAToMMAE6CTABQgw4AUILOAAABTAAAAYwAAAFgAFKDDABSwswBRkVMAUaCzAAAAs4BR8HMAAACTANFh8wDAAJ0AAACbAAAAmwAAAAAAAAAARaEAAEyXgABTjgAAWm3QAGF7AABi34AAb2gAAHZegAB9VQAAgMTwAIRLgACLQgAAkjiAAJkvAACcnvAAo5VwAKccAACqi/AArfvQALGCcAC1CQAAuHjwALvo0AC/b3AAwt9QAML2AADErgAA0OMAAOI/8ADlr9AA+qoAAP4Z8AEBidAAAAAAABjjkABcZBAAbjjwAIAAAACHHIAAkJeQAJOOAACddfAAoOOQAKT6UACp58AAru7wALHHEAC7YLAAwAAAAAAAD//cZBAADHHAAA448AATjgAAGOOQACuOMAAxxwAAMccQAEAAAAAAAAAAA3tAAAZEQAAG9oAAEdoQBsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+6Xw//r/iQABHaEAAb2g//8hMP//kJj//rHI//5CYAAAb2gAAN7QAAAAAAAFOOAAApxwAAG9oAAG448AD6qgAAG9oA==", sg = "AUMAEgAAAH8AJAAQAAkABQBYAAoAAAAHRNPtdAEUeuAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADbEMAAAB7AAAAbwAAAFMAAABLAAAAYwAAAFsAAABvAAAAWwAAAG8AAABbAAAAO0BEKDNAAAAzQAAAd0AAAHdAAAAEwAAACNwAACdAAAAnQAAAJkAAACdAAAAlgAAAY0AAABwYAAAnQAAAWMAAAGzAAAAlVAAAfwAAAIsAAABviAAABMAEAAdABFwnQAAAe1wAACfMAAB7zAAAb0AAAAdABEgX4AAAF+AAACfAAABt0AAABFwAAAzABFQEQAAAJ+AAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAEwAAABNwAAAUcAABshAAAIRwAACNABGBvQAAAYwAFMFcAAABbAAAAZwAE1E8AAABHAASQcwAAAGMAAAATAAVcKwAAAGsABKhDAAVIgwAAAGMAAABvAATUTwAEeG8cAABfAAUwNwAAAFsABLhjAAAAYwAUkI8AFJBjAASoYwAkvD8AAAAH4AAAJ0AAAAfgAAAnQAAABsAAAAdABEQkwAUgN0AFCBzABQA3QAAAHMAAAAtARAgk3BVYN0AE6AbAAAAK3AAAL0AEZAdAAAB4wAToNMAE6CTABQg03AUILNwAABTAAAAYwAAAFgAFKDTABSwswBRkWMAUaCzAAAAs3BR8HMAAACTANFiEwDAAJ0AAACbAAAAmwAAAAAAAAAAP+igAEaYkABNSIAAU94gAFqoUABb/sAAaAgwAG64IAB1aAAAeLLgAHwX8AB/0VAAgsfgAIaBQACQJ7AAk3KAAJoicACdh5AAoNJgAKQdMACnglAAqudgAK4yMACxfRAAtOIgALgs8AC4R0AAueygAL+58ADFpxAA1lHAANmckADq0BAA8RFwAPRcQAAAAAAAFPzgAFsHMABuNLAAf/vAAIcaYACPPgAAkDzwAJ1v4ACg4oAApQVAAKfuUACu5bAAsccgALtYkAC/xQAAAAAP/9sLcAAMcuAADf3gABBBMAAY5bAAK5HwADHLUAA/yTAAAAAAAANX8AAGBMAABq/wAA8swAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//wBdv/7YcoAAPLMAAGr+///KgP//5UB//6/BP/+VAUAAGr/AADV/QAAAAAABNSIAAKB+AABq/sABuNLAA6tAQABq/s=", ug = "ATEAEgAAAH8AIQAQAAoABQBJAAkAAAAHhgObWgBQAAAcVGVYIHRleHQgd2l0aG91dCBmLWxpZ2F0dXJlcwAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAAD0DsAAABvAAAAZwAAAEsAAABDAAAAWwAAAFMAAABnAAAAUwAAAGcAAABTAAAAJ2AAACdgAAAHQAAABSAAACEgAAAEwAAACOAAACdAAAAnQAAAJkAAACdAAAAlgAAAW0AAABwcAAAnQAAAUMAAAGTAAAAlUAAAcwAAAHsAAABniAAABMAEAAdABCAnQAAAb2AAACfMAABvzAAAZ0AAAAdABAwX5AAAF+QAACfAAABm2AAABGAAAAzABBgEQAAAJ+QAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAEwAAABOAAAGXUAABkhAAAZdQAACNABCRnQAAAWwAE9E8AAABTAAAAXwAEmEcAAAA/AARUawAAAFsAAAATAAUgKwAAAGMABGw7AAUMdwAAAFsAAABnAASYRwAEPGcgAABXAAT0MwAAAFMABHxbAAAAWwAUVH8AFFRbAARsWwAkgDcAAAAH5AAAJ0AAAAfkAAAnQAAABwAAAAdABAgkwATkM0AEzBzABMQzQAAAHMAAAAtAQAAk4BUcM0AErAcAAAALIAAAL0AEKAdAAABswASsMMAErCTABMww4ATMLOAAABTAAAAYwAAAFgAE7DDABPAswBQoUMAULCzAAAAs4BRAHMAAACTANByAwDAAJ0AAACcAAAAnAAAAAAAAAAAZxzQAHAAYAB45AAAfpRgAIqrMACMcmAAnHJgAKVWAACuOaAAsRHQALcdMADAANAA0cgAANSgMADdg9AA448wAOZnYADpP6AA70sAAPVWYAD4LqAA+wbQAQESMAED6mABBx2gAQiJ0AEY5NABLYQwATBcYAFREqABU+rQAVxzMAAAAAAAH0oAAGV60ABuONAAgAAAAIccYACUnzAAmdWgAJ110ACg46AApPpgAKqrMACuBNAAsccwALtg0ADAAAAAAAAP/+V60AAMcdAADjjQABjjoAAZ1aAAKqswACuOYAAxxzAAQAAAAAAAAAAEcdAACAAAAAjjoAAWk9AGyAAIBMgAGAYABcACcAIgA/gAKAIYACgC0Ae4AtAHyAYAAOgGAADwBhgAMAZYAEAGGABABvgASAY4AEAEGABQBvgAQAZYAEAGGABAAugAWALIAFAG+ABQBlgAUAdYAFAHKABQBhgAUAQYAGAE+ABABDgAQAR4AEgFGABAB5gAQAZYAFAG+ABQBygAUAYYAFAEGABYB1gAUAWIAEAFeABABBgAQAVoAEgFmABAB0gAQAdYAEAGKABAB5gAQAdoAEgHeABABogASAa4AEAGWABwBvgAcAeIAEAGSABwBjgAcAcYAHAHaABABqgAgAeYAEgHeABAB0gAQAQ4AEAE+ABABHgAQAVYAEAFGABABUgAUAWYAFAFaABoBXgAaAaoAHgEmAB//5jjP/+NJ2AAI45v/+443//3HG//5VU//9xxoAAI46AAEccwAAAAAAB45AAANVWgACOOYABuONABXHMwACOOY=", Cg = "AUUAEgAAAH8AJQAQAAoABQBYAAoAAAAHuUFhqABgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADyEcAAAB7AAAAcwAAAFcAAABPAAAAZwAAAF8AAABzAAAAXwAAAHMAAABfAAAAP0BEKDtAAAA7QAAAf0AAAH9AAAAEwAAACOAAACtAAAArQAAAKgAAACtAAAApgAAAZ0AAABwYAAArQAAAXMAAAHDAAAApUAAAgwAAAIsAAABziAAABMAEAAdABFwrQAAAe1wAACvMAAB7zAAAc0AAAAdABEgX5AAAF+QAACvAAAByVAAABGAAAAzABFQEQAAAK+QAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAEwAAABOAAAAUgAABwhAAAJSAAACdABGBzQAAAZwAFMFsAAABfAAAAawAE1FMAAABLAASQdwAAAGcAAAATAAVcLwAAAG8ABKhHAAVIhwAAAGcAAABzAATUUwAEeHMgAABjAAUwNwAAAF8ABLhnAAAAZwAUkI8AFJBnAASoZwAkvEMAAAAH5AAAK0AAAAfkAAArQAAABsAAAAdABEQowAUgN0AFCBzABQA3QAAAIMAAAAtARAgo4BVYN0AE6AbAAAAK4AAAM0AEZAdAAAB4wAToNMAE6CjABQg04AUIMOAAABTAAAAYwAAAFcAFKDTABSwwwBRkXMAUaDDAAAAw4BR8HMAAACjANFiQwDAAK0AAACrAAAAqwAAAAAAAAAAWhKwAGJegABqqlAAcU1QAHtCAAB86tAAi9mwAIvZ0ACUJYAAnHFQAJ/C0ACkvTAArQkAALQlUAC8cTAAvaCwAMDyMADJPgAAzjhQANGJ0ADU21AA2dWwAN7QAADiIYAA5XMAAOptUADtvtAA72ewAPEQgAD//1ABDjgAARPogAEXOgABNRfQAThpUAE44rAAAAAAAB7QsABj0oAAbjjQAIAAAACHHIAAlCXQAJ110ACg47AAo44AAKT6UACs3jAAru8AALHHMAC7YNAAwAAAAAAAD//j0oAADHHQAA440AAY47AAI44AACuOUAAxxwAAMccwAEAAAAAAAAAABCYAAAd3gAAIS9AAFL2ABsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+l7V//mlAAABS9gAAhL1//72hf//e0P//nHI//3tCwAAhL0AAQl7AAAAAAAGqqUAAxxwAAIS9QAG440AE44rAAIS9Q==", dg = "AUUAEgAAAH8AJgAQAAkABQBYAAoAAAAH2ZOgUgBwAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADwEsAAAB/AAAAdwAAAFsAAABTAAAAawAAAGMAAAB3AAAAYwAAAHcAAABjAAAAQ0BEKD9AAAA/QAAAg0AAAINAAAAEwAAACNwAACdAAAAnQAAAJkAAACdAAAAlgAAAa0AAABwYAAArQAAAYMAAAHTAAAAlUAAAhwAAAI8AAAB3iAAABMAEAAdABFwnQAAAf1wAACfMAAB/zAAAd0AAAAdABEgX4AAAF+AAACfAAAB2FAAABFwAAAzABFQEQAAAJ+AAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAmgAAAJoAAACaAAAAEwAAABNwAAAUcAAB0hAAAIRwAACNABGB3QAAAawAFMF8AAABjAAAAbwAE1FcAAABPAASQewAAAGsAAAATAAVcLwAAAHMABKhLAAVIiwAAAGsAAAB3AATUVwAEeHccAABnAAUwOwAAAGMABLhrAAAAawAUkJcAFJBrAASoawAkvEcAAAAH4AAAJ0AAAAfgAAAnQAAABsAAAAdABEQkwAUgO0AFCBzABQA7QAAAHMAAAAtARAgk3BVYO0AE6AbAAAAK3AAAN0AEZAdAAAB8wAToOMAE6CTABQg43AUIMNwAABTAAAAYwAAAFcAFKDjABSw0wBRkYMAUaDTAAAA03BR8HMAAACTANFiQwDAAJ0AAACbAAAAmwAAAAAAAAAAUstQAFqq4ABiilAAaabgAHJJUABz3HAAgghQAInn4ACRx1AAkcdwAJVVkACZprAAmabgAKGGUACllpAArXYgALFFUAC005AAvLMgAMEEUADEkpAAyCDgAMxyIADQw1AA1FGQANff4ADcMSAA379wAOCCUADiSXAA8EFQAPhh4AEDjpABBxzgASMMkAEjjpABJprgAAAAAAAddeAAYlMAAG444ACAAAAAhxxwAJL/AACddeAAnnoAAKDjkACk+lAArDDgAK7vAACxxyAAu2DgAMAAAAAAAA//4lMAAAxx4AAOOOAAGOOQAB56AAArjlAAMccgAEAAAAAAAAAAA++wAAcWAAAH35AAFHHgBsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+tNL//ocbgABRx4AAffg//8EEP//ggf//oYX//4IIAAAffkAAPvwAAAAAAAGKKUAAvPQAAH34AAG444AEjjpAAH34A==", wg = "AUMAEgAAAH8AIwAQAAoABQBYAAoAAAAHfHtZBwCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADuEMAAAB3AAAAbwAAAFMAAABLAAAAYwAAAFsAAABvAAAAWwAAAG8AAABbAAAAO0BEKDdAAAA3QAAAd0AAAHdAAAAEwAAACOAAACtAAAArQAAAKkAAACtAAAApgAAAY0AAACAYAAArQAAAWMAAAGzAAAApUAAAewAAAIcAAABviAAABMAEAAdABFwrQAAAd1wAACvMAAB3zAAAb0AAAAdABEgX5AAAF+QAACvAAABt1AAABGAAAAzABFQEQAAAK+QAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAEwAAABOAAAAUgAABshAAAJSAAACdABGBvQAAAYwAFMFcAAABbAAAAZwAE1E8AAABHAASQcwAAAGMAAAATAAVcLwAAAGsABKhDAAVIfwAAAGMAAABvAATUTwAEeG8gAABfAAUwNwAAAFsABLhjAAAAYwAUkIsAFJBjAASoYwAkvD8AAAAH5AAAK0AAAAfkAAArQAAABsAAAAdABEQowAUgN0AFCCDABQA3QAAAIMAAAAtARAgo4BVYN0AE6AbAAAAK4AAAM0AEZAdAAAB0wAToNMAE6CjABQg04AUIMOAAABjAAAAcwAAAFgAFKDTABSwwwBRkWMAUaDDAAAAw4BR8IMAAACjANFiAwDAAK0AAACrAAAAqwAAAAAAAAAAS46AAFMcwABaqwAAYfUAAGnHgABqAGAAa0pgAHjkAACAckAAiACAAIulgACPjsAAlx0AAJ6rQACmOYAAqd6AALFswAC1VgAAuPsAALygAADAiUAAxHKAAMgXgADLvIAAz6XAANNKwADTjwAA1WGAAOKrgAD1bQAA+RIAARABAAETpgABF0sAAAAAAAAcccAAYMPAAG444ACAAAAAhxyAAJLYIACaqwAAnXXgAKDjoACk+mAAq67AAK7u4ACxxyAAu2CgAMAAAAAAAA//4MPAAAxxwAAOOOAAGOOgABqrAAArjkAAMccAADHHIABAAAAAAAAAAAPHIAAGzOAAB45AABQ44AbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//tHGP/6k+QAAUOOAAHjkP//Djj//4cc//6VVP/+HHAAAHjkAADxyAAAAAAABaqwAALVWAAB45AABuOOABEAEAAB45A=", Qg = "AUMAEgAAAH8AJAAQAAkABQBYAAoAAAAHb7SLxwCQAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNUgAAAAAAAAAAAAAAAAAAAAAAAADsEcAAAB7AAAAcwAAAFcAAABPAAAAZwAAAF8AAABzAAAAXwAAAHMAAABfAAAAP0BEKDtAAAA7QAAAe0AAAHtAAAAEwAAACNwAAC9AAAAvQAAALkAAAC9AAAAtgAAAZ0AAACAYAAAvQAAAXMAAAHDAAAAtVAAAfwAAAIsAAABziAAABMAEAAdABFwvQAAAe1wAAC/MAAB7zAAAc0AAAAdABEgX4AAAF+AAAC/AAABx0AAABFwAAAzABFQEQAAAL+AAAC6AAAAugAAALoAAAC6AAAAugAAALoAAAC6AAAAugAAALoAAAC6AAAAEwAAABNwAAAUcAABwhAAAKRwAACtABGBzQAAAZwAFMFsAAABfAAAAawAE1FMAAABLAASQdwAAAGcAAAATAAVcMwAAAG8ABKhHAAVIgwAAAGcAAABzAATUUwAEeHMcAABjAAUwOwAAAF8ABLhnAAAAZwAUkI8AFJBnAASoZwAkvEMAAAAH4AAAL0AAAAfgAAAvQAAABsAAAAdABEQswAUgO0AFCCDABQA7QAAAJMAAAAtARAgs3BVYO0AE6AbAAAAK3AAAN0AEZAdAAAB4wAToOMAE6CzABQg43AUINNwAABjAAAAcwAAAFgAFKDjABSw0wBRkXMAUaDTAAAA03BR8IMAAACzANFiEwDAAL0AAAC7AAAAuwAAAAAAAAAASRYAAFBlAABXtAAAXvjgAGZSAABm6cAAZ8hAAHTwAAB1CVAAfD8AAIOOAACHMHAAit0AAJIsAACZewAAoMoAAKRscACru3AAr2gAALMKcAC2rOAAullwAL4GAADBqHAAxUrgAMj3cADMmeAAzKQAAM51QADbQgAA7YJwAPEk4AEHHAABCr5wAQ5g4AAAAAAAG6eQAF9OkABuOOAAgAAAAIcccACSF+AAl7QAAJ114ACg45AApPpQAKtJsACu7uAAsccgALtgsADAAAAAAAAP/99OkAAMccAADjjgABe0AAAY45AAK45AADHHIABAAAAAAAAAAAOnkAAGk+AAB08AABQMkAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGGABABlgAUAYYAFAG+ABYBjgAUAQYAGAG+ABQBlgAUAYYAFAC6ABoAsgAYAb4AGAGWABgB1gAYAcoAGAGGABgBBgAcAT4AFAEOABQBHgAWAUYAFAHmABQBlgAYAb4AGAHKABgBhgAYAQYAGgHWABgBYgAUAV4AFAEGABQBWgAWAWYAFAHSABQB1gAUAYoAFAHmABQB2gAWAd4AFAGiABYBrgAUAZYAIAG+ACAB4gAUAZIAIAGOACABxgAgAdoAFAGqACQB5gAWAd4AFAHSABQBDgAUAT4AFAEeABQBVgAUAUYAFAFSABgBZgAYAVoAHgFeAB4BqgAiASYAI//tuoP/6v4kAAUDJAAHTwP//FiD//4sQ//6hMP/+LEAAAHTwAADp4AAAAAAABXtAAAK9oAAB08AABuOOABBxwAAB08A=", hg = "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", fg = "AXgAEgAAAH8AIwAQAAoAOgBYAAoAAAAHfWgh0wDAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU0wAAAAAAAAAAAAAAAAAAAAAAADmD8CoAB3AAAAawGQAE8AAABHAxAAXwMwAFcCIABrAlAAVwDQAGsCUABXAgAAN0OUKDNBMAAzQTAAd0EwAHdBMAAEwAAACOAAACdAAAAnQPAAJkBwACdBUAAlgaAAc0AAABwYAAAnQkAAVMGwAGjBsAAlVBAAewIgAIcCIABriZAABMAEAAdB5FwnQAAAd1zgACfOwAB3znAAa0FgAAdB5EgX5yAAF+RQACfC0ABp0FAABGAAAAzAJFQEQAAAJ+cgACaCwAAmgsAAJoLAACaCwAAmgsAAJoLAACaCwAAmgsAAJoLAACaCwAAEwEAABOBAAAUgoABohOAAISAAACNDBGBrQcAAXwAFMFMCAABXAvAAYwGU1EsCIABDAqSQbwCwAF8DMAATA0VcKwKwAGcC9Kg/AAVIfwMwAF8DMABrAZTUSwIEeGshkABbAAUwMwIQAFcCpLhfAzAAXwN0kIsDdJBfA0SoXwOEvDsC8AAH52AAJ0NQAAflEAAnQDAABsGAAAdB5EQkwAUgM0BlCBzCNQAzQTAAHMGwAAtDlAgk4uVYM0AE6AbBgAAK4QAAL0I0ZAdBMAB0wAToMMAE6CTBdQgw4MUILOCAABTCkAAYwUAAFgCVKDDABSwswuRkVMLkaCzCYAAs4uR8HMHQACTChFiAwoAAJ0JAACbB8AAmwSAAAAAAAAARaEAAEyXgABTjgAAWm3QAGF7AABi34AAb2gAAHZegAB9VQAAgMTwAIRLgACLQgAAkjiAAJkvAACcnvAAo5VwAKccAACqi/AArfvQALGCcAC1CQAAuHjwALvo0AC/b3AAwt9QAML2AADErgAAyuwQANDjAADiP/AA5a/QAPqqAAD+GfABAYnQAAAAAAAY45AAXGQQAG448ACAAAAAhxyAAJCXkACTjgAAnXXwAKDjkACk+lAAqefAAK7u8ACxxxAAu2CwAMAAAAAAAA//3GQQAAxxwAAOOPAAE44AABjjkAArjjAAMccAADHHEABAAAAAAAAAAACq8AACOQAAAnIAAAL20AADtEAABQmwAAVCsAAFx1AABdaAAAXtUAAGjJAAByBwAAedgAAIb7AACL3wAAjDUAAI18AACW4QAAoTQAAKtkAAC0KwAAzNAAAM3BAADOlQAA1yUAANp7AADaywAA3HQAAOMYAADjlAAA5kgAAO54AADzsQAA9wMAAPlgAAD7RwABBcwAARrMAAEhNAABJREAASXwAAEutwABN/cAAUiMAAFY6AABXaQAAWMZAAF7RQABhIUAAZCcAAGZJQABms0AAcPPAAIABAACCjUAAjbFAAL3uABsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AYYAEAGWABQBhgAUAb4AFgGOABQBBgAYAb4AFAGWABQBhgAUALoAGgCyABgBvgAYAZYAGAHWABgBygAYAYYAGAEGABwBPgAUAQ4AFAEeABYBRgAUAeYAFAGWABgBvgAYAcoAGAGGABgBBgAaAdYAGAFiABQBXgAUAQYAFAFaABYBZgAUAdIAFAHWABQBigAUAeYAFAHaABYB3gAUAaIAFgGuABQBlgAgAb4AIAHiABQBkgAgAY4AIAHGACAB2gAUAaoAJAHmABYB3gAUAdIAFAEOABQBPgAUAR4AFAFWABQBRgAUAVIAGAFmABgBWgAeAV4AHgGqACIBJgAj/+6Xw//r/iQABHaEAAb2g//8hMP//kJj//rHI//5CYAAAb2gAAN7QAAKqsAAFOOAAApxwAAG9oAAG448AD6qgAAG9oA==", Ig = "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", Gg = "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", Eg = "AMEAEgAAAH8AAgAQAAwAAgACAAAAAAAH3+o8eACgAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNU0xUVAAAAAAAAAAAAAAAAAAAAADqAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAABOwQAATsEAAFQBAABWwQAAdAEAAHQBAABwAQAAdAEAAGwBAAB0AQAAQoEAAHQBAABUAQAAVAEAAGIBAAB0AQAAdAEAAHkBAABKAQAAdAFAAHQBAAB0AQAAfYEAAH2BAAB0AQAAdAEAAH1BAAB9QQAAWAEAAFyBAABGQQAAXIEAAEQBAAB9QQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAFQBAABWQQAAaMEAAFBBAABowQAAdAFAQHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdkEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAHQBAAB0AQAAdAEAAH1BAAB9QQAAfUEAAHQBAABBwQAAdAEAAFQBAAB0AQAAVAEAAHQBAABUAQAAdAEAAFbBAAB0AQAAdAEAAHbBAAB0AQAAdAEAAFQBAABUAQAAVAEAAFbBAABWwQAAVAEAAFQBAABkAQAAVAEAAFQBAABUAQAAVAEAAFbBAABUAQAAfUEAAH1BAAB9QQAAdAEAAHQBAAAAAAAAAhmYgAAAAAAAgAAAAOC2AAGOOMABqZlAAbjjgAIVVYACH0mAAiqqwAI23IACOOOAAkMgwAJDjoACccdAAqqqwALHHIAAAAA//zfSP/+tgr//xxyAADjjgABVVMAAVVVAAGFrQABxx0AAjjjAAMccwADjjoAAAAAAAHaFoBgAA6AYAAPAAKqsAAIZmIAAAAAAAAAAAAG444AEMzDAAhmYg==", bg = "AUkAEgAAAH8ANAAQAAsABQBOAAgAAAAHbSO9UgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1MAAAAAAAAAAAAAAAAAAAAAAADqF9AAAC7QAAAr0AAAHdAAACDQAAAm0AAAJ9AAACvQAAAn0AAAK9AAACfQAAAa0BEKFtAAABbQAAAt0AAALdAAAAEwAAACOQAAFNAAABTQAAAUkAAAFNAAABSAAAAh0AAADgcAABLQAAAnMAAAKzAAABRVAAAv0AAAMtAAACviAAABMAEAB9ABFxTQAAAu2AAAFPMAAC7zAAAq0AAAA9ABEgz6AAAM+gAAFPAAACt0AAADFgAACDABFQMQAAAU+gAAFKAAABSgAAAUoAAAFKAAABSgAAAUoAAAFKAAABSgAAAUoAAAFKAAAAMwAAADNgAAB0kAACshAAAQSQAAENABGCDQAAAh0AFCIdAAAB7QAAAo0AE0G9AAABnQASMg0AAAJtAAAATQAU0Q0AAAJdABKRfQAUgw0AAAJtAAACnQATQe0AEdKdYAAB/QAAAY0AAAItABLSTQAAAh0AUjMdAFIyHQASkh0AkuHNAAAAX6AAAU0AAABfoAABTQAAADwAAAA9ABEREwAT8V0AE5DjAAABXQAAAOMAAABtARAhQ5BUwV0AAAAcAAAALJAAAT0AEZAdAAACwwAAAVMAAAFDABORU5ATkVOQAACTAEAAswAAAKYAFAFTABQQ8wBAAjMAUZDzAAAA85BR4NMAAAFDANFjMwDAAU0AAAFLAAABTAAAAAAAAAAAPSfgAEREYABHHIAARxygAEn0sABOOQAAUccwAFVVYABXd6AAXHHQAGIiMABjjlAAb0oAAHHHMAB2C4AAeOOwAHsF0AB7BeAAfSgAAIAAIACERGAAiT6wAIqq0ACOOQAAkcdQAJVVgACY47AAnHHgAJxyAACjjmAApVWAAKqq0ACqquAArjkAAK7vIACwAFAAscdgALVVoAC447AAuOPQALxx4ADCIlAAxxygAMtg4ADQWzAA1VWAANxyAADgAFAA8cdgAPjj0AEAADAAAAAAABVVUABeuFAAcccgAIAAAACKqrAAkklQAJVVYACb4AAAoccgAKfSgACtNOAArergALHHIAC+OOAAwAAAAAAAD//euFAADHHQAA444AAVVWAAGOOgACAAAAArjjAAMccAADHHIABAAAAAAAAAAAOOMAAGZmAABxyAABHHIAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGWABABhgAQAb4AEgGOABABBgAUAb4AEAGWABABhgAQALoAFgCyABQBvgAQAZYAEAHWABABygAQAYYAEAEGABQBPgAQAQ4AEAEeABIBRgAQAeYAFAGWABQBvgAUAcoAFAGGABQBBgAWAdYAFAFiABABXgAQAQYAEAFaABIBZgAQAZYAGAG+ABgB4gAQAZIAGAGOABgBxgAYAcoAEAHmABIB3gAQAdIAEAEOABABPgAQAR4AEAFWABABRgAQAVIAFAFmABQBWgAeAV4AHgGqABoBJgAb//C2C//vd2wABHHIAAccd//+OOP/+qqoAAHHI//444wAAAAAABVVWAAKqqwABxx0ABxxyABAAAwABxx0=", Hg = "AUsAEgAAAH8ANgAQAAsABQBOAAgAAAAHgs5SNgDAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1MAAAAAAAAAAAAAAAAAAAAAAADmF9AAADDQAAAt0AAAHNAAACPQAAAo0AAAKtAAAC3QAAAq0AAALdAAACrQAAAa0BEKFtAAABbQAAAv0AAAL9AAAAEwAAACOQAAFNAAABTQAAAUkAAAFNAAABSAAAAh0AAADgcAABLQAAAqMAAALTAAABRVAAAx0AAANNAAAC3iAAABMAEAB9ABFxTQAAAw2AAAFPMAADDzAAAs0AAABNABEgz6AAAM+gAAFPAAAC10AAAEFgAACDABFQQQAAAU+gAAFKAAABSgAAAUoAAAFKAAABSgAAAUoAAAFKAAABSgAAAUoAAAFKAAAAQwAAAENgAAB0kAAC0hAAARSQAAEdABGCPQAAAh0AFCItAAAB/QAAAp0AE0G9AAABnQASMj0AAAKNAAAAPQAU0Q0AAAJ9ABKRfQAUgy0AAAKNAAACvQATQe0AEdK9YAACDQAAAY0AAAJtABLSXQAAAh0AUjM9AFIyHQASkh0AkuHdAAAAX6AAAU0AAABfoAABTQAAAEwAAABNABERIwAT8V0AE5DjAAABXQAAAOMAAABtARAhQ5BUwV0AAAAcAAAALJAAAT0AEZAdAAAC4wAAAVMAAAFDABORU5ATkVOQAACTAEAAswAAAKYAFAFTABQQ8wBAAkMAUZDzAAAA85BR4NMAAAFDANFjUwDAAU0AAAFLAAABTAAAAAAAAAAAOvZQAEHs0ABEJbAARaEAAEhxsABMl4AAT7QAAFOOAABVLzAAWoSAAGAWgABhewAAbL1QAG9oAAByqlAAdaDQAHZegAB3/7AAeaDQAH1VAACAl1AAheywAIdn0ACLQgAAjl5QAJI4gACVVNAAl7OwAJkvAACfZ9AAoCWAAKFU0ACloLAApl5QAKccAACqXlAAqqowAKr2AACslzAAr7OwALRLUAC1CQAAuOMAAL2gsADC9gAAxjhQAMuNsADQ4wAA1xvQANl6sADrQbAA8vXQAPqqAAAAAAAAFL2wAF0nwABxxxAAgAAAAIqqsACSSVAAk44AAJudUAChxxAAp7QwAKzpAACtgLAAsccQAL440ADAAAAAAAAP/90nwAAMccAADjjwABOOAAAY45AAIAAAACuOMAAxxwAAMccQAEAAAAAAAAAAA3tAAAZEQAAG9oAAEWhABsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AZYAEAGGABABvgASAY4AEAEGABQBvgAQAZYAEAGGABAAugAWALIAFAG+ABABlgAQAdYAEAHKABABhgAQAQYAFAE+ABABDgAQAR4AEgFGABAB5gAUAZYAFAG+ABQBygAUAYYAFAEGABYB1gAUAWIAEAFeABABBgAQAVoAEgFmABABlgAYAb4AGAHiABABkgAYAY4AGAHGABgBygAQAeYAEgHeABAB0gAQAQ4AEAE+ABABHgAQAVYAEAFGABABUgAUAWYAFAFaAB4BXgAeAaoAGgEmABv/8UJv//AcgAAEWhAABvaD//5CY//6xyAAAb2j//kJgAAAAAAAFOOAAApxwAAG9oAAHHHEAD6qgAAG9oA==", Fg = "AUoAEgAAAH8ANgAQAAoABQBOAAgAAAAHBdbGHwEUeuAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1MAAAAAAAAAAAAAAAAAAAAAAADbF9AAADDQAAAt0AAAHNAAACPQAAAo0AAAKtAAAC3QAAAq0AAALdAAACrQAAAa0BEKFtAAABbQAAAv0AAAL9AAAAEwAAACOAAAFNAAABTQAAAUkAAAFNAAABSAAAAh0AAADgcAABLQAAAqMAAALTAAABRVAAAx0AAANNAAAC3iAAABMAEAB9ABFxTQAAAw2AAAFPMAADDzAAAs0AAABNABEgz5AAAM+QAAFPAAAC10AAAEFgAACDABFQQQAAAU+QAAFLAAABSwAAAUsAAAFLAAABSwAAAUsAAAFLAAABSwAAAUsAAAFLAAAAQwAAAENgAAB0gAAC0hAAARSAAAEdABGCPQAAAh0AFCItAAAB/QAAAp0AE0G9AAABnQASMj0AAAKNAAAAPQAU0Q0AAAJ9ABKRfQAUgy0AAAKNAAACvQATQe0AEdK9YAACDQAAAY0AAAJNABLSbQAAAh0AUjM9AFIyHQASkh0AkuHdAAAAX5AAAU0AAABfkAABTQAAAEwAAABNABERIwAT8V0AE5DjAAABXQAAAOMAAABtARAhQ4BUwV0AAAAcAAAALIAAAT0AEZAdAAAC4wAAAVMAAAFDABORU4ATkVOAAACTAEAAswAAAKYAFAFTABQQ8wBAAlMAUZDzAAAA84BR4NMAAAFDANFjUwDAAU0AAAFKAAABTAAAAAAAAAAAOP7gAD+uwABCQSAAQt8wAEXbEABJjyAATL+gAFA/EABR/tAAVu8AAFxIkABdnuAAaIagAGr+wABufkAAcV+gAHGusABzbnAAdS4gAHhekAB73hAAgM5AAII+4ACFvnAAiO7QAIxuYACPnsAAkoAwAJMeQACZfyAAmc4wAJs+0ACf4AAAoC8QAKB+IACj/ZAAo/2gAKTQQACmj/AAqcBwAK2O4ACt3fAAsV1gALZNoAC7PdAAvr1QAMOtcADInaAAzv6AANHf8ADiv0AA6b4wAPC9MAAAAAAAFJOAAFsHMABuNLAAf/vAAIcaYACNsaAAkDzwAJmc4ACg4oAAp7mgAKfmsACoIwAAsccgAL46AAC/xQAAAAAP/9sLcAAMcuAADf3gABBBMAAY5bAAIBlQACuR8AAxy1AAP8kwAAAAAAADV/AABgTAAAav8AAQt9AGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBlgAQAYYAEAG+ABIBjgAQAQYAFAG+ABABlgAQAYYAEAC6ABYAsgAUAb4AEAGWABAB1gAQAcoAEAGGABABBgAUAT4AEAEOABABHgASAUYAEAHmABQBlgAUAb4AFAHKABQBhgAUAQYAFgHWABQBYgAQAV4AEAEGABABWgASAWYAEAGWABgBvgAYAeIAEAGSABgBjgAYAcYAGAHKABAB5gASAd4AEAHSABABDgAQAT4AEAEeABABVgAQAUYAEAFSABQBZgAUAVoAHgFeAB4BqgAaASYAG//xwEv/8JgAAAQt9AAGr+///lQH//r8EAABq///+VAUAAAAAAAUD8QACgfgAAav7AAbjSwAPC9MAAav7", Yg = "AUQAEgAAAH8ALwAQAAsABQBOAAgAAAAHxnM2kQCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1MAAAAAAAAAAAAAAAAAAAAAAADuFdAAACnQAAAm0AAAGtAAAB3QAAAi0AAAI9AAACbQAAAj0AAAJtAAACPQAAAY0BEKFNAAABTQAAAo0AAAKNAAAAEwAAACOQAAEtAAABLQAAASkAAAEtAAABKAAAAd0AAADQcAABDQAAAjMAAAJjAAABJUAAAq0AAALdAAACbiAAABMAEABtABFxLQAAAp2AAAEvMAACnzAAAl0AAAA9ABEgv6AAAL+gAAEvAAACZ1AAADFgAABzABFQMQAAAS+gAAEqAAABKgAAASoAAAEqAAABKgAAASoAAAEqAAABKgAAASoAAAEqAAAAMwAAADNgAABkkAACYhAAAPSQAAD9ABGB3QAAAd0AFCHdAAABvQAAAj0AE0GdAAABfQASMd0AAAItAAAAPQAU0P0AAAIdABKRXQAUgr0AAAItAAACTQATQb0AEdJNYAABzQAAAW0AAAH9ABLSDQAAAd0AUjLNAFIx3QASkd0AkuGtAAAAT6AAAS0AAABPoAABLQAAADwAAAA9ABERAwAT8T0AE5DTAAABPQAAANMAAABdARAhI5BUwT0AAAAcAAAALJAAAR0AEZAdAAACcwAAATMAAAEjABORM5ATkTOQAACDAEAAowAAAJYAFAEzABQQ4wBAAeMAUZDjAAAA45BR4MMAAAEjANFi4wDAAS0AAAErAAABLAAAAAAAAAAAQOPAAEhyAABLjoAATxzAAFMcwABWOSAAWqsAAFzj4ABiOUAAaESgAGnHgAB2OUAAeOQAAH1VwACAckAAgqsgAITkAACIAIAAjHJAAJHHoACUAKAAlx0AAJuO4ACeq0AAox0gAKY5gACtx8AAsACgALVWAAC5x8AAucfgALqrYAC85EAAwACgAMRygADI5GAAzjmgANOPAADYAMAA3VYgAOKrgADqOcAA7VYgAQDkgAEIcsABEAEAAAAAAAAXHIAAYaLAAHHHIACAAAAAiqrAAJJJYACaqwAAnVVAAKHHIACoAAAArhiAAK9t4ACxxyAAvjjgAMAAAAAAAA//4aLAAAxxwAAOOOAAGOOgABqrAAAg44AAK45AADHHAAAxxyAAQAAAAAAAAAADxyAABszgAAeOQAAS46AGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBlgAQAYYAEAG+ABIBjgAQAQYAFAG+ABABlgAQAYYAEAC6ABYAsgAUAb4AEAGWABAB1gAQAcoAEAGGABABBgAUAT4AEAEOABABHgASAUYAEAHmABQBlgAUAb4AFAHKABQBhgAUAQYAFgHWABQBYgAQAV4AEAEGABABWgASAWYAEAGWABgBvgAYAeIAEAGSABgBjgAYAcYAGAHKABAB5gASAd4AEAHSABABDgAQAT4AEAEeABABVgAQAUYAEAFSABQBZgAUAVoAHgFeAB4BqgAaASYAG//vxxP/7nG4AAS46AAHjkP//hxz//pVUAAB45P/+HHAAAAAAAAWqsAAC1VgAAeOQAAcccgARABAAAeOQ", pg = "AUoAEgAAAH8ANgAQAAoABQBOAAgAAAAH0m/HdwCQAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1MAAAAAAAAAAAAAAAAAAAAAAADsGNAAADDQAAAt0AAAHtAAACLQAAAo0AAAKdAAAC3QAAAp0AAALdAAACnQAAAb0BEKF9AAABfQAAAv0AAAL9AAAAEwAAACOAAAFdAAABXQAAAVkAAAFdAAABWAAAAk0AAADgcAABPQAAApMAAALTAAABVVAAAx0AAANNAAAC3iAAABMAEAB9ABFxXQAAAw2AAAFfMAADDzAAAs0AAAA9ABEgz5AAAM+QAAFfAAAC10AAADFgAACDABFQMQAAAV+QAAFaAAABWgAAAVoAAAFaAAABWgAAAVoAAAFaAAABWgAAAVoAAAFaAAAAMwAAADNgAAB0gAAC0hAAARSAAAEdABGCLQAAAk0AFCI9AAAB/QAAAq0AE0HNAAABrQASMi0AAAKNAAAATQAU0S0AAAJ9ABKRjQAUgy0AAAKNAAACvQATQg0AEdK9YAACHQAAAZ0AAAJdABLSbQAAAk0AUjM9AFIyTQASkk0AkuHdAAAAX5AAAV0AAABfkAABXQAAADwAAAA9ABERMwAT8W0AE5DjAAABbQAAAPMAAABtARAhU4BUwW0AAAAcAAAALIAAAU0AEZAdAAAC4wAAAWMAAAFTABORY4ATkWOAAACTAEAAswAAAKYAFAFjABQRAwBAAlMAUZEDAAABA4BR4NMAAAFTANFjUwDAAV0AAAFbAAABXAAAAAAAAAAAPtBwAEYfcABJFgAASXsgAExxsABQZQAAU1uQAFe0AABZ4EAAXwMAAGTb4ABmUgAAcl6QAHTwAAB08CAAeUhwAHw/AAB8cZAAfmtAAICXcACDjgAAh+ZwAI0JQACPaAAAkiwAAJa3AACZewAAngYAAKDKAAChLyAAqBkAAKhLkACqd8AAr2gAAK+akACvzSAAs8BwALTv4AC3HCAAuhKwAL4GAAC+OJAAwl5wAMeBQADMpAAA0PxwANYfQADbQgAA4sOQAOXssAD44yAA//+QAQccAAAAAAAAFh+QAGAkcABxxyAAgAAAAIqqsACSSVAAl7QAAJzrIAChxyAAp4GQAK2aAACuyXAAsccgAL444ADAAAAAAAAP/+AkcAAMccAADjjgABe0AAAY45AAIGUgACuOQAAxxyAAQAAAAAAAAAADp5AABpPgAAdPAAASRZAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBlgAQAYYAEAG+ABIBjgAQAQYAFAG+ABABlgAQAYYAEAC6ABYAsgAUAb4AEAGWABAB1gAQAcoAEAGGABABBgAUAT4AEAEOABABHgASAUYAEAHmABQBlgAUAb4AFAHKABQBhgAUAQYAFgHWABQBYgAQAV4AEAEGABABWgASAWYAEAGWABgBvgAYAeIAEAGSABgBjgAYAcYAGAHKABAB5gASAd4AEAHSABABDgAQAT4AEAEeABABVgAQAUYAEAFSABQBZgAUAVoAHgFeAB4BqgAaASYAG//wS+f/7vaQAASRZAAHTwP//ixD//qEwAAB08P/+LEAAAAAAAAV7QAACvaAAAdPAAAcccgAQccAAAdPA", Zg = "AT4AEgAAAH8ALAANAAsABQBOAAgAAAAH8WtBSACgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNU1NCWAAAAAAAAAAAAAAAAAAAAADqF6AAACWgAAAioAAAG6AAAB2gAAAgoAAAIKAAACKgAAAgoAAAIqAAACCgAAAaoBEKGKAAABigAAAkoAAAJKAAAAEwAAACOQAAE6AAABOgAAATgAAAE6AAABOQAAAdoAAADQcAABagAAAgMAAAIjAAABNUAAAmoAAAKqAAACKyAAABMAEAB6ABFxSgAAAlqAAAE8MAACjDAAAhoAAAA6ABEgvKAAALygAAE8AAACJ2AAADFQAABzABFQMQAAATygAAE6AAABOgAAAToAAAE6AAABOgAAAToAAAE6AAABOgAAAToAAAE6AAAAMwAAADNQAAB0kAACIhAAAQSQAAEKABGB2gAAAdoAFCHaAAABygAAAgoAE0GqAAABmgASMdoAAAIKAAAASgAU0QoAAAH6ABKRegAUgnoAAAIKAAACCgATQcoAEdIKUAABygAAAZoAAAHaABLR+gAAAdoAUjKaAFIx2gASkdoAkuG6AAAAbKAAAUoAAABsoAABOgAAADoAAAA6ABEREwAT8VoAE5DTAAABWgAAAPMAAABaARAhM5BUwVoAAAAaAAAAKpAAASoAEZAaAAACMwAAAVMAAAEzABORU5ATkVOQAACDAEAAowAAAJYAFAFTABQQ4wBAAeMAUZDjAAAA45BR4MMAAAEzANFiswDAAToAAAE6AAABOgAAAAAAAAAAQWwwAEk+sABOOQAAVJ9gAFYLgABX0qAAXd4AAF9KIABnd6AAa/KAAG2DAAB59NAAfSgAAIAAMACC2GAAhPqAAIZmoACH0rAAjM0AAI7vIACPpTAAkLYwAJSfgACWC6AAnHIAAKREgACsFwAAs+mAALu8AAC+lDAAw46AAMthAADUn6AA2wYAAN3eMADkRKAA6qsAAPJ9gAD6UAABB3RQAQn1AAERx4ABGZoAAAAAAAAhbCAAaAAAAHVVUACAAAAAjjjgAJbboACd3gAAoqqwAKNFUACxxyAAvjjgAMAAAAAAAA//6AAAAAxx0AAOOOAAGOOgABsFsAAd3gAAK44wADHHAAAxxyAAQAAAAAAAAAAD6VAABwowAAfSgAATjlAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBlgAQAYYAEAG+ABIBjgAQAQYAFAG+ABABlgAQAYYAEAC6ABYAsgAUAb4AEAGWABAB1gAQAcoAEAGGABABBgAUAT4AEAEOABABHgASAUYAEAHmABQBlgAUAb4AFAHKABQBhgAUAQYAFgHWABQBYgAQAV4AEAEGABABWgASAWYAEAGWABgBvgAYAeIAEAGSABgBjgAYAcYAGAHKABAB5gASAd4AEAHSABABDgAQAT4AEAEeABABVgAQAUYAEAFSABQBZgAUAVoAHgFeAB4BqgAaASYAG//vpPf/7T6MAATjlAAH0oP//gtj//oiIAAB9KP/+C2AAAAAAAAXd4AAC7vAAAfSgAAdVVQARmaAAAfSg", Dg = "AUwAEgAAAH8AOgANAAsABQBOAAgAAAAHcNrjaQCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNU1NEQwAAAAAAAAAAAAAAAAAAAADqGqAAADOgAAAwoAAAIKAAACSgAAAroAAALKAAADCgAAAsoAAAMKAAACygAAAdoBEKGaAAABmgAAAyoAAAMqAAAAEwAAACOQAAFqAAABagAAAWkAAAFqAAABaAAAAmoAAADgcAABWgAAAsMAAAMDAAABZVAAA0oAAAOKAAADCyAAABMAEAB6ABFxegAAAzqAAAFsQAADbEAAAvoAAAA6ABEgzKAAAMygAAFsAAADBjAAADFgAACDABFQMQAAAWygAAFqAAABagAAAWoAAAFqAAABagAAAWoAAAFqAAABagAAAWoAAAFqAAAAMwAAADNgAAB0kAADAhAAARSQAAEaABGCSgAAAmoAFCJaAAACGgAAAtoAE0HqAAABygASMkoAAAK6AAAASgAU0SoAAAKqABKRqgAUg1oAAAK6AAAC6gATQioAEdLqYAACOgAAAboAAAKKABLSmgAAAmoAUjN6AFIyagASkmoAkuH6AAAAbKAAAXoAAABsoAABagAAADoAAAA6ABERMwAT8YoAE5DjAAABigAAAQMAAABaARAhg5AUwYoAAAAaAAAAKpAAAUoAEZAaAAADEwAAAYMAAAFjABORg5ATkYOQAACTAEAAswAAAKcAFAGDABQQ8wBAAnMAUZDzAAAA85BR4NMAAAFjANFjkwDAAWoAAAFqAAABagAAAAAAAAAAOC0wAD7uoABDjgAASIhgAEpPYABLBYAATjiwAFEQ0ABSIdAAWIhQAF050ABek6AAaT4wAGwWYABuOGAAcC0wAHLX0ABzMtAAc+jQAHT50AB30lAAeZkwAHmZUAB7uzAAgWugAIONsACHHAAAik8gAI3dYACREIAAlJ7QAJVU0ACbYDAAm7swAJ0nMACiIaAAonygAKLXoACkQ6AApPmwAKgtAACpmQAArYJQAK+kYACv/2AAsnyAALd20AC9JzAAv0kwAMT5oADKqgAA0cZgANYKsADhIyAA5mWgAOzMAADzMmAAAAAAABsFsABpdTAAeOOgAIccYACOOQAAlJ8AAJtuAACiauAAo44wALHHIAC8cdAAwAAAAAAAD//iWNAACqqwAA2CoAAOOOAAFVVgABxx0AAlVWAAKqqgACqqsAA446AAAAAAAANgsAAGFGAABsFgABDjgAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGWABABhgAQAb4AEgGOABABBgAUAb4AEAGWABABhgAQALoAFgCyABQBvgAQAZYAEAHWABABygAQAYYAEAEGABQBPgAQAQ4AEAEeABIBRgAQAeYAFAGWABQBvgAUAcoAFAGGABQBBgAWAdYAFAFiABABXgAQAQYAEAFaABIBZgAQAZYAGAG+ABgB4gAQAZIAGAGOABgBxgAYAcoAEAHmABIB3gAQAdIAEAEOABABPgAQAR4AEAFWABABRgAQAVIAFAFmABQBWgAeAV4AHgGqABoBJgAb//H0t//v6UwABDjgAAbBa//+T6v/+u70AAGwW//5PpgAAAAAABRENAAKIhgABsFoAB446AA8zJgABsFo=", xg = "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", mg = "AX8AEgAAAH8ANwAQAAsAOABOAAgAAAAH2gMizQDAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNU1NJAAAAAAAAAAAAAAAAAAAAAADmF9DIADHQAAAu0FQAHNAAACPQwAAo0HAAKtC8AC7QjAAq0DQALtCMACrQaAAa0N0KFtCoABbQoAAw0KgAMNCgAAEwMAACOTAAFNAAABTQlAAUkHQAFNCcABSAfAAr0AAADgcAABLQlAAqMEwALjBMABRVOAAy0LwANdC8AC7iVAABMAEAB9BBFxTQBAAx2DwAFPOwADHzJAAt0CgABNBhEgz6xAAM+hgAFPC4AC50GAAEFgAACDARFQQQAAAU+sQAFKCwABSgsAAUoLAAFKCwABSgsAAUoLAAFKCwABSgsAAUoLAAFKCwAAQwHAAENhwAB0kMAC4hPAARSQAAEdC1GCPQVAAh0AFCItBoAB/QvAAp0FU0G9C8ABnQySMj0LwAKNBwAAPQyU0Q0HAAJ9C9KRfQAUgz0HAAKNBwACzQVTQe0GkdLNZUACDQaAAY0JQAJtDJLSXQcAAh0NUjNNDVIyHQySkh0NkuHdC8AAX60AAU0MwABfqEABTQZAAEwFgABNBhERIwCT8V0CE5DjBsABXQoAAOMEwABtDdAhQ5rUwV0BQAAcCkAALJmAAT0G0ZAdCgAC8wFAAVMBQAFDBJORU5LTkVOTAACTCsAAswXAAKYFFAFTAxQQ8wrAAkMK0ZDzCQAA85rR4NMIAAFDB5FjYweAAU0JQAFLCIABTARAAAAAAAAAOvZQAEHs0ABEJbAARaEAAEhxsABMl4AAT7QAAFOOAABVLzAAWoSAAGAWgABhewAAbL1QAG9oAAByqlAAdaDQAHZegAB3/7AAeaDQAH1VAACAl1AAheywAIdn0ACLQgAAjl5QAJI4gACVVNAAl7OwAJkvAACfZ9AAoCWAAKFU0ACloLAApl5QAKccAACqXlAAqqowAKr2AACslzAAr7OwALRLUAC1CQAAt8QAALjjAAC9oLAAwvYAAMY4UADLjbAA0OMAANcb0ADZerAA60GwAPL10AD6qgAAAAAAABS9sABdJ8AAcccQAIAAAACKqrAAkklQAJOOAACbnVAAoccQAKe0MACs6QAArYCwALHHEAC+ONAAwAAAAAAAD//dJ8AADHHAAA448AATjgAAGOOQACAAAAArjjAAMccAADHHEABAAAAAAAAAAAFuwAADd3AABLBQAAUhEAAFdfAABqQAAAaz8AAH8cAACCbwAAig8AAKCIAAC3GQAAvuUAAMztAADNZwAA9E8AAQgkAAEO3AABGIwAASnRAAE30AABP9gAAUAZAAFE5wABS8AAAVYMAAFWYQABWjwAAV3kAAFejAABah0AAWrEAAFrywABbTwAAXRHAAF3zQABfckAAYI4AAGJpAABkMEAAZUtAAGaPAABuqUAAcrvAAHjrwAB5dwAAe0xAAIOnQACHZAAAiTlAAJGUQACjPgAApRNAALA3QADcx0AbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGWABABhgAQAb4AEgGOABABBgAUAb4AEAGWABABhgAQALoAFgCyABQBvgAQAZYAEAHWABABygAQAYYAEAEGABQBPgAQAQ4AEAEeABIBRgAQAeYAFAGWABQBvgAUAcoAFAGGABQBBgAWAdYAFAFiABABXgAQAQYAEAFaABIBZgAQAZYAGAG+ABgB4gAQAZIAGAGOABgBxgAYAcoAEAHmABIB3gAQAdIAEAEOABABPgAQAR4AEAFWABABRgAQAVIAFAFmABQBWgAeAV4AHgGqABoBJgAb//FCb//wHIAABFoQAAb2g//+QmP/+scgAAG9o//5CYAADZqAABTjgAAKccAABvaAABxxxAA+qoAABvaA=", yg = "AX4AEgAAAH8ANwAQAAoAOABOAAgAAAAHoI/udQEUeuAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNU1NJAAAAAAAAAAAAAAAAAAAAAADbF9DIADHQAAAu0FwAHNAAACPQwAAo0HgAKtC8AC7QjAAq0DQALtCMACrQcAAa0N0KFtCoABbQpAAw0KgAMNCkAAEwMAACODAAFNAAABTQmAAUkIAAFNCgABSAhAAs0AAADgcAABLQmAAqMEwALjBMABRVPAAy0LwANdC8AC7iXAABMAEAB9BFFxTQBAAx2DgAFPOwADHzKAAt0CQABNBtEgz5xAAM+RgAFPC4AC50GAAEFgAACDANFQQQAAAU+cQAFLCwABSwsAAUsLAAFLCwABSwsAAUsLAAFLCwABSwsAAUsLAAFLCwAAQwHAAENhwAB0gUAC4hOAARSAAAEdC1GCPQXAAh0AFCItBwAB/QvAAp0F00G9C8ABnQySMj0LwAKNB4AAPQyU0Q0HgAJ9C9KRfQAUgz0HgAKNB4ACvQXTQe0HEdK9ZcACDQcAAY0JgAJNDJLSbQeAAh0NUjNNDVIyHQySkh0NkuHdC8AAX50AAU0MwABfmUABTQZAAEwFgABNBtERIwCT8V0CE5DjBgABXQpAAOMEwABtDdAhQ4rUwV0BAAAcCcAALIkAAT0GEZAdCkAC8wEAAVMBAAFDBJORU4LTkVODAACTCsAAswVAAKYFFAFTAxQQ8wrAAlMK0ZDzCIAA84rR4NMHQAFDBpFjYwaAAU0JgAFKB8ABTAQAAAAAAAAAOP7gAD+uwABCQSAAQt8wAEXbEABJjyAATL+gAFA/EABR/tAAVu8AAFxIkABdnuAAaIagAGr+wABufkAAcV+gAHGusABzbnAAdS4gAHhekAB73hAAgM5AAII+4ACFvnAAiO7QAIxuYACPnsAAkoAwAJMeQACZfyAAmc4wAJs+0ACf4AAAoC8QAKB+IACj/ZAAo/2gAKTQQACmj/AAqcBwAK2O4ACt3fAAsV1gALMGgAC2TaAAuz3QAL69UADDrXAAyJ2gAM7+gADR3/AA4r9AAOm+MADwvTAAAAAAABSTgABbBzAAbjSwAH/7wACHGmAAjbGgAJA88ACZnOAAoOKAAKe5oACn5rAAqCMAALHHIAC+OgAAv8UAAAAAD//bC3AADHLgAA394AAQQTAAGOWwACAZUAArkfAAMctQAD/JMAAAAAAAA4dQAAOZcAAFBnAABYVQAAXN8AAG6iAABvbQAAgCUAAITTAACG1wAAoD0AALSQAADDTgAAypQAANIXAAEFiAABBjcAAQZbAAEUzgABITQAATaaAAE7BwABPDkAAUwAAAFR4QABUqEAAVU7AAFadQABXhwAAWDCAAFkbAABZQcAAWntAAFsGQABeLAAAXmUAAF68AABhpwAAYoKAAGYuAABml4AAaQ9AAGsTAAB0AQAAeOvAAHrsQAB8ZsAAhG0AAIhMQACJxoAAkczAAKMLwACkhkAArzmAANoFwBsgACATIABAGkADABmAAsAbAANACeAAgA/gAIAIYACACmAAoBdgAIAaQAOAGwADwAngAIAP4ACACGAAgApgAKAXYACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD4AZYAEAGGABABvgASAY4AEAEGABQBvgAQAZYAEAGGABAAugAWALIAFAG+ABABlgAQAdYAEAHKABABhgAQAQYAFAE+ABABDgAQAR4AEgFGABAB5gAUAZYAFAG+ABQBygAUAYYAFAEGABYB1gAUAWIAEAFeABABBgAQAVoAEgFmABABlgAYAb4AGAHiABABkgAYAY4AGAHGABgBygAQAeYAEgHeABAB0gAQAQ4AEAE+ABABHgAQAVYAEAFGABABUgAUAWYAFAFaAB4BXgAeAaoAGgEmABv/8cBL//CYAAAELfQABq/v//5UB//6/BAAAav///lQFAANmoAAFA/EAAoH4AAGr+wAG40sADwvTAAGr+w==", Vg = "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", Mg = "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", Wg = "AUYAEgAAAH8ANQAPAAgABQBOAAgAAAAHS3RFbwCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNU1NRAAAAAAAAAAAAAAAAAAAAAADuF6AAADCgAAAsoAAAGaAAACSgAAAhoAAAKaAAACygAAApoAAALKAAACmgAAAYsBEKFbAAABWwAAAusAAALrAAAAEwAAACNgAAE7AAABOwAAATYAAAE7AAABNwAAAfsAAADgQAABKwAAApMAAALDAAABNTAAAxoAAAM6AAACzSAAABMAEABrABFxOwAAAwtQAAE+MAADDjAAAqsAAABLABEgznAAAM5wAAE+AAACzGAAAEFgAACDABFQQQAAAT5wAAE4AAABOAAAATgAAAE4AAABOAAAATgAAAE4AAABOAAAATgAAAE4AAAAQwAAAENgAABkYAACwhAAARRgAAEbABGCSwAAAfoAFCI6AAAB6gAAAnoAE0HKAAABqgASMkoAAAIaAAAAOgAU0QoAAAJqABKRegAUgvoAAAIaAAACugATQdoAEdK6YAACKgAAAWoAAAKKABLSCgAAAfoAUjMqAFIx+gASkfoAkuG6AAAAXnAAATsAAABecAABOwAAAEsAAABLABEREwAT8UsAE5DjAAABSwAAAOMAAAB7ARAhQ2AUwUsAAAAbAAAAK2AAASsAEZAbAAAC0wAAAUMAAAEzABORQ2ATkUNgAACTAEAAswAAAKkAFAFDABQQ8wBAAlMAUZDzAAAA82BR4NMAAAEzANFjQwDAATsAAAE7AAABOwAAAAAAAAAARxygAFAAQABRx0AAWOOgAFo5AABaqsAAYcdAAGqqwABqquAAc45AAHqqwAB8ceAAicdAAI45AACOOSAAk45gAJccoACXHMAAoAAgAKAAQACo48AAscdAALVVgAC6quAAvHIAAL45IADDjmAAxxygAMjjwADMcgAAzjkgAM8cwADQAEAA0OPAANHHYADVVYAA1VWgANccwADjjoAA5VWAAOccoADwAEAA9xygAPjjwAD44+ABAcdgAQVVoAEKquABEABAASccwAEzjoABQABAAAAAAAAY44AAbgAAAIVVYACOOOAAlxyAAKaqwACn/+AAqOOAAKtuAACvHIAAsccgALHHQAC4ACAAw45AAAAAD//fxwAACOOgABHHIAAfHIAAI44AACOOQAA1VUAAAAAAAARxwAAIAAAACOOgABY44AbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGWABABhgAQAb4AEgGOABABBgAUAb4AEAGWABABhgAQALoAFgCyABQBvgAQAZYAEAHWABABygAQAYYAEAEGABQBPgAQAQ4AEAEeABIBRgAQAeYAFAGWABQBvgAUAcoAFAGGABQBBgAWAdYAFAFiABABXgAQAQYAEAFaABIBZgAQAZYAGAG+ABgB4gAQAZIAGAGOABgBxgAYAcoAEAHmABIB3gAQAdIAEAEOABABPgAQAR4AEAFWABABRgAQAVIAFAFmABQBWgAeAV4AHgGqABoBJgAb/+442//s44AABY44AAjjk//9xxv/+VVQAAI46//3HHAAAAAAABqqsAANVVgACOOQACFVWABQABAACOOQ=", Ug = "AXYAEgAAAH8ANgAPAAgANABOAAgAAAAHnQUCAQCAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNU1NRSQAAAAAAAAAAAAAAAAAAAADuF6C0ADGgAAAtoEwAGaAAACSgrAAhoFAAKqCkAC2geAAqoCwALaB4ACqgXAAYsM0KFbCMABWwgAAvsIwAL7CAAAEwOAACNjgAE7AAABOwdAATYHAAE7BkABNwhAAnsAAADgQAABKwdAAqMFgALTBYABNTJAAyoKQANKCkAC3STAABMAEABrA9FxOwAAAxtUAAE+OYADHjFAArsDQABLBFEgznsAAM5xgAE+CgAC3GGAAEFgAACDANFQQQAAAT57AAE4CYABOAmAATgJgAE4CYABOAmAATgJgAE4CYABOAmAATgJgAE4CYAAQwCAAENggABkYcAC0hQAARRgAAEbCpGCSwVAAfoAFCI6BcAB6gpAAooE00HKCkABqgtSMkoKQAIaBQAAOgtU0QoFAAJqClKRegAUgwoFAAIaBQACygTTQdoF0dLKZMACKgXAAWoGgAKaC1LSCgUAAfoMUjM6DFIx+gtSkfoMkuG6CkAAXnwAATsLwABedIABOwYAAEsEQABLBFEREwBT8UsCE5DjCQABSwgAAOMFgAB7DNAhQ2OUwUsBAAAbCMAAK2gAASsJEZAbCAAC4wEAAUMBAAEzBtORQ2KTkUNjgACTC4AAswiAAKkH1AFDA5QQ8wuAAlMLkZDzCcAA82uR4NMJwAEzCVFjUwlAATsHQAE7B0ABOwMAAAAAAAAARxygAFAAQABRx0AAWOOgAFo5AABaqsAAYcdAAGqqwABqquAAc45AAHqqwAB8ceAAicdAAI45AACOOSAAk45gAJccoACXHMAAoAAgAKAAQACo48AAscdAALVVgAC6quAAvHIAAL45IADDjmAAxxygAMjjwADMcgAAzjkgAM8cwADQAEAA0OPAANHHYADVVYAA1VWgANccwADa0aAA446AAOVVgADnHKAA8ABAAPccoAD448AA+OPgAQHHYAEFVaABCqrgARAAQAEnHMABM46AAUAAQAAAAAAAGOOAAG4AAACFVWAAjjjgAJccgACmqsAAp//gAKjjgACrbgAArxyAALHHIACxx0AAuAAgAMOOQAAAAA//38cAAAjjoAARxyAAHxyAACOOAAAjjkAANVVAAAAAAAADFCAABTrAAAVIAAAFSIAABjnAAAY54AAGOsAABp1gAAkCIAAJSAAACbigAAo7YAAKkAAAC+VgAA3JgAAOfeAADq0gABA7oAARKmAAEThgABGP4AASneAAEwbAABMVQAATHuAAE3FgABPWoAAT3sAAFAKAABTjQAAVOuAAFVfAABZgIAAXAeAAF5CgABjJAAAaZ4AAGwJAABtzoAAcO6AAHFTgAB464AAe/6AAIK1gACDGwAAgyQAAJAKAACmRAAApqkAALTiAADwCgAbIAAgEyAAQBpAAwAZgALAGwADQAngAIAP4ACACGAAgApgAKAXYACAGkADgBsAA8AJ4ACAD+AAgAhgAIAKYACgF2AAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+AGWABABhgAQAb4AEgGOABABBgAUAb4AEAGWABABhgAQALoAFgCyABQBvgAQAZYAEAHWABABygAQAYYAEAEGABQBPgAQAQ4AEAEeABIBRgAQAeYAFAGWABQBvgAUAcoAFAGGABQBBgAWAdYAFAFiABABXgAQAQYAEAFaABIBZgAQAZYAGAG+ABgB4gAQAZIAGAGOABgBxgAYAcoAEAHmABIB3gAQAdIAEAEOABABPgAQAR4AEAFWABABRgAQAVIAFAFmABQBWgAeAV4AHgGqABoBJgAb/+442//s44AABY44AAjjk//9xxv/+VVQAAI46//3HHAADZqAABqqsAANVVgACOOQACFVWABQABAACOOQ=", Rg = "ARkAEgAAAH8ALAAPABAAEgAHAAcAAAAWISIsmgCgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAADqIKgAAANCAAAgqAAACGQAACCoAAAIQgAAIKgAACCoAAAgqAAAIKgAACCoAAAgqAAAIKgAACrdAAAIQgAACEIAACBTAAAgUwAAILsAACC7AAAguwAAILsAACC7AAAguwAAICEAACB1AAAghgAAIIYAACqGAAAqhgAAIIYAACCGAAAqIQAAKiEAAAjcAAAI3AAAKiEAACrcAAAq3AAAIFMAACohAAAqIQAAENwAABDcAAAqIQAAKtwAACrcAAAgMAAAApAAACowAAAUhgAAFIYAACjdAAAo3QAAAdwAAAEhAAAN0AAADdAAABQwAAAI5wAAG9AAABvQAAAg0AAAINAAABDQAAAiwAEGE8ARBAnAFQQfwA0CCsAtAxrAMQMOyRkDJsAFAwvAHQAWyUEFHsAJARfAAQQrwAEEJMA9AiHADQMYwCkCI8kBAyfAAQIPwCEEDMBFABLAMQIRwCkAKcApAhnAOQQVySkCHMAlBBSQAAAUkAAAFJAAABSQAAAUkAAAENAAABDQAAAG7gAABu4AAAbuAAAG7gAACO4AAAjuAAAE7gAABO4AAAPuAAAI7gAACO4AABDuAAAI7gAAA9wAACUfAAAdwAAAJcAAAAXdNAAUkAAAFJAAACC7AAAguwAAB90AAAbdAAAG3QAAEN0AACDaAAAg2gAAINoAACDaAAAAAAAAAAAAAAAEZmYABHHIAAY45QAGqq0ABxxzAAccdQAIAAIACGyqAAhxywAItlYACLbdAAjjkAAJhJIACbBeAAnHHgAJzfUACgNoAAqCSwAKqq0ACrGCAArYMAALCR0ACyEDAAtpqgALf/4AC447AAuYegAMAAIADDDzAAxXoAAMccoADLziAAzGigANERUADSC7AA1VWAANgyUADY9gAA445gAPzfYAEAADABM24wAAAAAAAKPWAAXeuAAG444ABxxzAAdrgwAHccgAB7reAAigJQAI45AACVVWAAos8AAK7u4ACxxyAAwAAAAAAAD//d64//8cc///a4P//3HI//+63gAAoCUAAOOOAAFVVgABjjoAAhL2AAIs8AADHHAAAxxyAAQAAAAPXCoAAAAAAAAniwAAOysAAHHIAAB8kgAA7vIAAPLoAAEuYAABMy4AAUVmAAFQyAABbloAAZbCAAHHHQACV8UAAluWAAL0ngAEERKAMIAAgDCAAYAwgAKAMIADgDCABIAwgAWAMIAGAABxyAAA45AAAVVYAAHHIAACOOgAAqqwAAMceAAEAAAAAAAAAAAAAAAAAAAABuOOABAAAwAAAAAACtL6AAZMugAHGYYACvmoAAWEeAAGmzUABc5oAASfSgACZmYAA/SaAAYtgAAAzM0AJj1wABAo9gAEAAA=", Ng = "ARYAEgAAAH8ALAAPAA8AEAAHAAcAAAAWsNwwbgBQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAAD0HqoAAANTAAAeqgAAB0IAAB6qAAAHUwAAHqoAAB6qAAAeqgAAHqoAAB6qAAAeqgAAHqoAACnLAAAHUwAAB1MAAB5kAAAeZAAAHtwAAB7cAAAe3AAAHtwAAB7cAAAe3AAAHiEAAB51AAAemAAAHpgAACmYAAApmAAAHpgAAB6YAAApIQAAKSEAAAfLAAAHywAAKSEAACnLAAApywAAHmQAACkhAAApIQAAEMsAABDLAAApIQAAKcsAACnLAAAeMAAAAoAAACkwAAAUmAAAFJgAACjLAAAoywAAAcsAAAEhAAAKwAAACsAAABQwAAAH5gAAG8AAABvAAAAewAAAHsAAABDAAAAisAEGErAFBAmwDQQfsAkCCLAdAxewKQMNtxUDJrABAwuwEQAVtzkFHbABARawAQQrsAEEI7A1AiCwCQMasCUCJLcBAyewAQIOsBkEDLA9AA+wKQIRsCUAKrAlAhmwMQQTtyUCGLAhBBSAAAAUgAAAFIAAABSAAAAUgAAAEMAAABDAAAAG7QAABu0AAAbtAAAG7QAAB+0AAAftAAAE7QAABO0AAAPtAAAH7QAAB+0AABDtAAAH7QAAA8sAACEeAAAcsAAAJbAAAAXLLAAUgAAAFIAAAB7cAAAe3AAABssAAAbLAAAGywAAEMsAAB7JAAAeyQAAHskAAB7JAAAAAAAAAAAAAAAHDj0AB1VaAAmOQAAKHHoACqqzAAvHJgAMVWAADINzAAzjmgANHMoADSiwAA2bXQAN45oADfrqAA4ADQAOYeoADrWGAA7fEAAPHIAAD1VjAA9vkAAPz7AAD9zKAA/yPQAP9mYAEDjzABCT+gAQ4V0AEVVmABFXsAARbUoAEY5NABHQ1gASBFYAEhyDABJx2gATHNAAEyNdABOOTQAVxzMAFeHzABkV9gAAAAAAAOVgAAZXrQAG440AB3HGAAfjkwAIPKYACJ2mAAjjkAAJnVoACqqzAAru8AALHHMAC4JWAAwAAAAAAAD//let//9xxv//45MAADymAACdpgAA440AAY46AAGdWgACEvYAAqqzAAMccwADglYABAAAAA8aoAAAAAAAAEQ9AACOOgAAnroAANWgAADYKgABFwYAAT39AAFQxgABXwAAAaT6AAI45gACV8YAAngKAAMC2gAEZmqAMIAAgDCAAYAwgAKAMIADgDCABIAwgAWAMIAGAACOOgABHHMAAaqtAAI45gACxyAAA1VaAAPjkwAEAAAAAAAAAAAAAAAAAAAABuONABeOTQAAAAAADs3KAAYzDQAIEO0AEGdjAAiCswAIDpAABnT2AAS2DQADMzMABmZmAAfpQAABmZoAH64TABa4UwAEAAA=", Xg = "ARcAEgAAAH8ALAAPABAAEAAHAAcAAAAWcaElCwBgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAADyH6oAAANTAAAfqgAAB0IAAB+qAAAHUwAAH6oAAB+qAAAfqgAAH6oAAB+qAAAfqgAAH6oAACnMAAAHUwAAB1MAAB9kAAAfZAAAH90AAB/dAAAf3QAAH90AAB/dAAAf3QAAHyEAAB91AAAflwAAH5cAACmXAAAplwAAH5cAAB+XAAApIQAAKSEAAAfLAAAHywAAKSEAACnLAAApywAAH2QAACkhAAApIQAAD8sAAA/LAAApIQAAKcsAACnLAAAfMAAAAoAAACkwAAAUlwAAFJcAACjMAAAozAAAAcsAAAEhAAAKwAAACsAAABQwAAAH5gAAG8AAABvAAAAfwAAAH8AAAA/AAAAhsAEGErAFBAmwDQQesAkCCLAhAxiwKQMNuBEDJrABAwuwFQAVuDkFHbABARawAQQrsAEEI7A1AiCwCQMXsCUCJLgBAyewAQIOsBkEDLA9ABCwKQIRsCUAKrAlAhmwMQQTuCUCGrAdBBSAAAAUgAAAFIAAABSAAAAUgAAAD8AAAA/AAAAG7gAABu4AAAbuAAAG7gAAB+4AAAfuAAAE7gAABO4AAAPuAAAH7gAAB+4AAA/uAAAH7gAAA8sAACIfAAAcsAAAJbAAAAXMLAAUgAAAFIAAAB/dAAAf3QAABswAAAbMAAAGzAAAD8wAAB/JAAAfyQAAH8kAAB/JAAAAAAAAAAAAAAAF2hMABhL1AAgl6wAIqqsACS9lAAo44AAKvZ0ACtqgAAtCWwALWWMAC2GAAAvygwAMMUgADEvVAAxkFQAMkEsADQM1AA0upQANVVAADYpoAA2sKwAODgMADhPgAA4jdQAOJMUADl7LAA7I+wAPBU0AD2EQAA9oRQAPkTsAD9bNAA//+AAQFzUAECIbABBxwAAQ8vgAEPtrABF7OwATjjAAE5BFABbV8AAAAAAAANOgAAY9KAAG440AB3HIAAehLQAIEIAACG34AAjjkAAJaGUACjjgAAru8AALHHMACzu9AAwAAAAAAAD//j0o//9xyP//oS0AABCAAABt+AAA440AAWhlAAGOOwACEvgAAjjgAAMccAADHHMAAzu9AAQAAAAPLGAAAAAAAABXBQAAhL0AALl7AADhGAAA9CsAASBrAAFM/QABTiAAAVpDAAGgPQACEvUAAlfIAAJujQAC/h0ABEn1gDCAAIAwgAGAMIACgDCAA4AwgASAMIAFgDCABgAAhL0AAQl7AAGOOAACEvUAApezAAMccAADoS0ABAAAAAAAAAAAAAAAAAAAAAbjjQAUccAAAAAAAA0A0AAGRv0AB8JAAA3RZQAG3q0ACAwoAAa20wAEl7UAAqqrAAVVVQAGl7AAAVVVAB+7uwAVmZsABAAA", kg = "ARgAEgAAAH8ALQAPAA8AEQAHAAcAAAAWTyHihQBwAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAADwIKkAAANTAAAgqQAACEIAACCpAAAIUwAAIKkAACCpAAAgqQAAIKkAACCpAAAgqQAAIKkAACvcAAAIUwAACFMAACBkAAAgZAAAIMsAACDLAAAgywAAIMsAACDLAAAgywAAICEAACB1AAAglwAAIJcAACuXAAArlwAAIJcAACCXAAArIQAAKyEAAAjcAAAI3AAAKyEAACvcAAAr3AAAIGQAACshAAArIQAAENwAABDcAAArIQAAK9wAACvcAAAgMAAAAoAAACswAAAVlwAAFZcAACncAAAp3AAAAdwAAAEhAAAM0AAADNAAABUwAAAI5gAAHNAAABzQAAAg0AAAINAAABDQAAAisAEGE7AJBAqwEQQfsA0CCbApAxmwLQMOuBUDJ7ABAwuwGQAWuD0FHrAFARewAQQssAEEI7A5AiGwDQMYsCUCJLgBAyiwAQIPsB0EDbBBABGwLQISsCUAKrAlAhqwNQQUuCUCG7AhBBWAAAAVgAAAFYAAABWAAAAVgAAAENAAABDQAAAG7QAABu0AAAbtAAAG7QAACO0AAAjtAAAE7QAABO0AAAPtAAAI7QAACO0AABDtAAAI7QAAA9wAACUeAAAdsAAAJrAAAAXcMAAVgAAAFYAAACDLAAAgywAAB9wAAAbcAAAG3AAAENwAACDaAAAg2gAAINoAACDaAAAAAAAAAAAAAAAFRRUABW25AAdlmQAH5ZsACGGJAAhhiwAJXXkACdt1AAnsRwAKWBIACllpAApdeQALBCsACzwpAAtVWQALfBsAC4TSAAwOFQAMOt4ADFFJAAyDrgAMqtsADPJJAA0X+wANGgkADSuXAA1NOQANvwIADfJlAA47MAAOSSkADn5QAA6ugAAO+BkADvmHAA8EFQAPRRkAD6iHAA+yUgAQQQkAEilnABI46QAVe6cAAAAAAADG8gAGJTAABuOOAAdxxwAHcckAB+blAAhA1QAI45AACTX3AAnnoAAK7vAACveuAAsccgAMAAAAAAAA//4lMP//ccf//3HJ///m5QAAQNUAAOOOAAE19wABjjkAAeegAAIS9wAC964AAxxyAAQAAAAPOQ4AAAAAAAAFiQAAZHAAAH35AADMkgAA53IAAQn3AAEnIAABSkcAAVbiAAFZoAABnNkAAffgAAJXxQACZ8kAAvq3AAQ1pYAwgACAMIABgDCAAoAwgAOAMIAEgDCABYAwgAYAAH35AAD78gABeesAAfflAAJ13gAC89cAA3HQAAQAAAAAAAAAAAAAAAAAAAAG444AErryAAAAAAALt44ABiR3AAeKDgAMCM4ABYHnAAgKawAG5dkABJJJAAJJJQAEkkkABaaXAAEkkgAbMzIAEoOpAAQAAA==", vg = "ARgAEgAAAH8AKwAPABAAEgAHAAcAAAAWvkvICwCAAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAADuH6kAAANCAAAfqQAAB1MAAB+pAAAHQgAAH6kAAB+pAAAfqQAAH6kAAB+pAAAfqQAAH6kAACndAAAHQgAAB0IAAB9kAAAfZAAAH7sAAB+7AAAfuwAAH7sAAB+7AAAfuwAAHyEAAB91AAAflwAAH5cAACmXAAAplwAAH5cAAB+XAAApIQAAKSEAAAfcAAAH3AAAKSEAACncAAAp3AAAH2QAACkhAAApIQAAD9wAAA/cAAApIQAAKdwAACncAAAfMAAAAoAAACkwAAAUlwAAFJcAACfdAAAn3QAAAdwAAAEhAAAM0AAADNAAABQwAAAH5gAAG9AAABvQAAAf0AAAH9AAAA/QAAAhwAEGEsANBAnAFQQewBECCMAtAxnAMQMNyBkDJcAFAwrAHQAVyEEFHcAJARbAAQQqwAEEI8A9AiDAEQMXwCkCIsgBAybAAQIOwCEEC8BFABHAMQIQwCkAKMApAhjAOQQTyCkCGsAlBBSAAAAUgAAAFIAAABSAAAAUgAAAD9AAAA/QAAAG7gAABu4AAAbuAAAG7gAAB+4AAAfuAAAE7gAABO4AAAPuAAAH7gAAB+4AAA/uAAAH7gAAA9wAACQfAAAcwAAAJMAAAAXdNAAUgAAAFIAAAB+7AAAfuwAABt0AAAbdAAAG3QAAD90AAB/aAAAf2gAAH9oAAB/aAAAAAAAAAAAAAAAEnHIABLjoAAaceAAHGOoAB45AAAiACAAI+OwACQCaAAleLgAJYZAACXHQAAoYgAAKS2oACmOYAAp/xAAKmuYACx1WAAtLIgALVWAAC4W8AAuw9gAL5JoADBoMAAwiKAAMN8wADEcoAAy7yAAM60wADSXiAA048AANdzoADZdcAA3iMAAN594ADiq4AA53zgAOgp4ADxyAABDfygARABAAFDt6AAAAAAAAuFIABgw8AAbjjgAHTjwAB3HIAAe8TgAIErYACOOQAAkCkAAJqrAACrKiAAru7gALHHIADAAAAAAAAP/+DDz//048//9xyP//vE4AABK2AADjjgABApAAAY46AAGqsAACEvYAArKiAAMccAADHHIABAAAAA9HrgAAAAAAAATYAAAb4AAAbn4AAHjkAADa5AAA7DoAARbEAAEsJgABSD4AAVRWAAFiRAABmlAAAeOQAAJXxgACYrQAAvguAAQmaIAwgACAMIABgDCAAoAwgAOAMIAEgDCABYAwgAYAAHjkAADxyAABaqwAAeOQAAJcdAAC1VgAA048AAQAAAAAAAAAAAAAAAAAAAAG444AEQAQAAAAAAALJCwABoqUAAdRsAAL/FoABkZQAAaljAAFpYwABI44AAIAAAAEAAAABlVWAAEAAAAXzMwAEjM0AAQAAA==", Sg = "ARcAEgAAAH8AKwAPAA8AEgAHAAcAAAAWqbGQygCQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNU1kAAAAAAAAAAAAAAAAAAAAAAADsH6gAAANCAAAfqAAAB1MAAB+oAAAHQgAAH6gAAB+oAAAfqAAAH6gAAB+oAAAfqAAAH6gAACncAAAHQgAAB0IAAB9kAAAfZAAAH7sAAB+7AAAfuwAAH7sAAB+7AAAfuwAAHyEAAB91AAAfhgAAH4YAACmGAAAphgAAH4YAAB+GAAApIQAAKSEAAAfcAAAH3AAAKSEAACncAAAp3AAAH2QAACkhAAApIQAAD9wAAA/cAAApIQAAKdwAACncAAAfMAAAApAAACkwAAAUhgAAFIYAACfcAAAn3AAAAdwAAAEhAAAM0AAADNAAABQwAAAH5wAAG9AAABvQAAAf0AAAH9AAAA/QAAAhwAEGEsARBAnAFQQewA0CCMAtAxnAMQMNyRkDJcAFAwrAHQAVyUEFHcAJARbAAQQqwAEEI8A9AiDADQMXwCkCIskBAybAAQIOwCEEC8BFABHAMQIQwCkAKMApAhjAOQQTySkCGsAlBBSQAAAUkAAAFJAAABSQAAAUkAAAD9AAAA/QAAAG7QAABu0AAAbtAAAG7QAAB+0AAAftAAAE7QAABO0AAAPtAAAH7QAAB+0AAA/tAAAH7QAAA9wAACQeAAAcwAAAJMAAAAXcNAAUkAAAFJAAAB+7AAAfuwAABtwAAAbcAAAG3AAAD9wAAB/aAAAf2gAAH9oAAB/aAAAAAAAAAAAAAAAEeBkABJFgAAZlIAAG2hIAB08AAAg44AAIrdAACK5gAAkA5QAJArAACSLAAAnGRwAJ9TwACgygAAoc8AAKRrQACscpAAr1wgAK9oAACyVFAAtTrAALd+QAC7gEAAvIBwAL3z4AC+BgAAxUrgAMg7kADLM+AAzKQAAND6cADSNLAA1t9QANeS4ADbQgAA3v0AAN+2sADp4AABBHlwAQccAAE6qkAAAAAAAArPIABfTpAAbjjgAHMpAAB3HHAAeTVwAH5jkACNDJAAjjkAAJe0AACm83AAru7gALHHIADAAAAAAAAP/99On//zKQ//9xx///k1f//+Y5AADQyQAA444AAXtAAAGOOQACEvcAAm83AAMccgAEAAAAD1MOAAAAAAAAGCIAAC1HAAB08AAAdlIAAOYLAADv8AABI+QAATAOAAFGqwABUlwAAWj8AAGYVQAB08AAAlfFAAJewAAC9jUABBqMgDCAAIAwgAGAMIACgDCAA4AwgASAMIAFgDCABgAAdPAAAOngAAFe0AAB08AAAkiwAAK9oAADMpAABAAAAAAAAAAAAAAAAAAAAAbjjgAQccAAAAAAAApZCwAGjiQABzJ8AAraAAAFbesAB6+VAAbMBwAEl7QAAcccAALQngAFoTQAAOOOACp9JwAQLYQABAAA", Jg = "AMIAEgAAAH8AAwAQAA0AAQACAAAAAAAH0zcZrQCgAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABkNNVENTQwAAAAAAAAAAAAAAAAAAAADqAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAABPAAAATwAAAFgAAABYAAAAdAAAAHQAAABwAAAAdAAAAGwAAAB0AAAAQsAAAJgAAABYAAAAWAAAAGEAAAB0AAAAdAAAAHkAAABKQAAAdABAAHQAAAB0AAAAfYAAAH2AAAB0AAAAdAAAAH1AAAB9QAAAXAAAAGSAAABGgAAAZIAAAEQAAAB9QAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAFQAAABWgAAAaMAAAFBAAABowAAAdABAQHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdoAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAH1AAAB9QAAAfUAAAHQAAABBwAAAdAAAAFgAAABYAAAAWAAAAFgAAABYAAAAWAAAAFgAAABYAAAAWAAAAFgAAABYAAAAWAAAAFgAAABYAAAAWAAAAFgAAABaAAAAWAAAAFgAAABYAAAAWAAAAFgAAABYAAAAWAAAAFgAAABYAAAAfUAAAH1AAAB9QAAAdAAAAHQAAAAAAAAAAhmYgAQzMMAAAAAAAIAAAADgtgABjjjAAamZQAG444AB446AAhVVgAIccgACH0mAAjjjgAJDIMACQ46AAnHHQAKqqsACxxyAAAAAP/830j//rYK//8ccgAA444AAVVTAAFVVQABha0AAbBbAAHHHQACOOMAAxxzAAOOOgAAAACAYAAOgGAADwAAAAAACGZiAAAAAAAAAAAABuOOABDMwwAIZmI=", Kg = "AMAAEgAAAH8AAgAQAA4AAQAAAAAAAAAH3+o8eACgAAASVGVYIGV4dGVuZGVkIEFTQ0lJAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNVEVYAAAAAAAAAAAAAAAAAAAAAADqAWMAAAHAAAABMAAAAc0AAAFAAAABMAAAAaUAAAEwAAABwAAAAT0AAAHAAAABwAAAAYQAAAGEAAABMAAAAcAAAAGlAAABpQAAAUAAAAFAAAABwAAAAcAAAAGEAAABtgAAASEAAAEhAAAB6AAAAWMAAAHXAAAB1wAAAVIAAAFAAAABAAAAAcAAAAHAAAABwAAAAfoAAAH6AAABwAAAAcAAAAH5AAAB+QAAAXAAAAGEAAABHAAAAYQAAAEQAAAB+QAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAEwAAABPAAAAaUAAAEhAAABpQAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcwAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAH5AAAB+QAAAfkAAAHAAAABCwAAAcAAAAEwAAABwAAAATAAAAHAAAABMAAAAcAAAAE9AAABwAAAAcAAAAHNAAABwAAAAcAAAAEwAAABMAAAATAAAAE9AAABPQAAATAAAAEwAAABkAAAATAAAAEwAAABMAAAATAAAAE9AAABMAAAAfkAAAH5AAAB+QAAAcAAAAHNAAAAAAAAAAhmYgAAAAAAAgAAAAamZQAG444AB9KAAAfbAgAIJ9IACFVWAAh9JgAI23IACOOOAAmVVQAJxx0AChgrAApEOwALHHIAAAAA//zfSP/+E+X//mC1//62Cv//HHL//844AABRDgAAfR4AAVVTAAFVVQABha0AAjjjAAOOOgAAAAAAAAAAAAhmYgAAAAAAAAAAAAbjjgAQzMMACGZi", jg = "AMAAEgAAAH8AAgAQAA4AAQAAAAAAAAAH30PKcwCAAAASVGVYIGV4dGVuZGVkIEFTQ0lJAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNVEVYAAAAAAAAAAAAAAAAAAAAAADuAWMAAAHAAAABMAAAAc0AAAFAAAABMAAAAaUAAAEwAAABwAAAAT0AAAHAAAABwAAAAYQAAAGEAAABMAAAAcAAAAGlAAABpQAAAUAAAAFAAAABwAAAAcAAAAGEAAABtgAAASEAAAEhAAAB6AAAAWMAAAHXAAAB1wAAAVIAAAFAAAABAAAAAcAAAAHAAAABwAAAAfoAAAH6AAABwAAAAcAAAAH5AAAB+QAAAXAAAAGEAAABHAAAAYQAAAEQAAAB+QAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAEwAAABPAAAAaUAAAEhAAABpQAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcwAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAH5AAAB+QAAAfkAAAHAAAABCwAAAcAAAAEwAAABwAAAATAAAAHAAAABMAAAAcAAAAE9AAABwAAAAcAAAAHNAAABwAAAAcAAAAEwAAABMAAAATAAAAE9AAABPQAAATAAAAEwAAABkAAAATAAAAEwAAABMAAAATAAAAE9AAABMAAAAfkAAAH5AAAB+QAAAcAAAAHNAAAAAAAAAAiACAAAAAAAAiceAAa0ngAG444AB9J+AAfpOgAIMcoACFVWAAiIJAAI23AACPHIAAmjjgAJxxwACiZkAApSdAALHHIAAAAA//ztgv/+Ih7//mqu//7BCP//Kqz//9xyAABfSAAAi1gAAVVUAAFVVgABk+QAAjjkAAOOOAAAAAAAAAAAAAiACAAAAAAAAAAAAAbjjgARABAACIAI", _g = "AL8AEgAAAH8AAgAQAA0AAQAAAAAAAAAH36ROAACQAAASVGVYIGV4dGVuZGVkIEFTQ0lJAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNVEVYAAAAAAAAAAAAAAAAAAAAAADsAWMAAAHAAAABMAAAAcwAAAFAAAABMAAAAaUAAAEwAAABwAAAATwAAAHAAAABwAAAAYQAAAGEAAABMAAAAcAAAAGlAAABpQAAAUAAAAFAAAABwAAAAcAAAAGEAAABtgAAASEAAAEhAAAB6AAAAWMAAAHXAAAB1wAAAVIAAAFAAAABAAAAAcAAAAHAAAABwAAAAfkAAAH5AAABwAAAAcAAAAH5AAAB+QAAAXAAAAGEAAABGwAAAYQAAAEQAAAB+QAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAEwAAABOwAAAaUAAAEhAAABpQAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcsAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAH5AAAB+QAAAfkAAAHAAAABCgAAAcAAAAEwAAABwAAAATAAAAHAAAABMAAAAcAAAAE8AAABwAAAAcAAAAHMAAABwAAAAcAAAAEwAAABMAAAATAAAAE8AAABPAAAATAAAAEwAAABkAAAATAAAAEwAAABMAAAATAAAAE8AAABMAAAAfkAAAH5AAAB+QAAAcAAAAHMAAAAAAAAAAhmYAAAAAAAAgl8AAav4gAG444AB9KAAAfkgAAIJ9AACFVVAAh9JQAI23AACO0LAAme0gAJxxwACiGpAApNvAALHHIAAAAA//zoxf/+HWT//mC0//62Cf//Je7//9e1AABajAAAhqAAAVVVAAGPKwACOOQAA445AAAAAAAAAAAACGZgAAAAAAAAAAAABuOOABDMwAAIZmA=", Og = "AXIAEgAAAH8AKQAQAAoAOgBNAAkAAAAH/QAnOgCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVEkAAAAAAAAAAAAAAAAAAAAAAADqEsCoACDAAAAcwFQAFsAAABTAxAAawNAAGMCUABzAhAAYwBwAHMCEABjAaAAR2OUID9hsABDYbAAi2GwAJNhsAAIwOAADOAwAC9AAAAvQYAALgEAAC9CAAAtgbAAh0AAACAYAAA7YdAAYMDAAGDAwAAtVTAAjwJQAJsCUABziVAABMAEPAtClFwzQLAAg1yQAHtAAACDzsAAc0GAAAtClEgb5zAAG+QgAC/DAABxkCAACGAAABDAFFQIQAAAL+cwAC5CsAAuQrAALkKwAC5CsAAuYrAALkKwAC5CsAAuYrAALkKwAC5CsAAIwGAACOBgAAkg0ABwhJAALSAAAC9CdGBzQXAAawAEwF8BoABjAvAAbwFUrFcCUABPAqRofwEQAGsDQAAXAyAANwLQAHcC9IBLAAUElwNAAGsDQABzAVSsVwGkqHMhUABnAETAPwJAAGMCpJBrA0AAawNkaJ8DZKhrAySAawOElEcC8AAL53AAM0NQAAvl4AAvQKAACsIwAAtClEQswOAAI0CFFCDAVRQvQbRkIMDFFAtjlAAg4SAAL0DgAAqBkAAKouAAI0HwAAdBtGSAwOAAPMDlMCzAhRQs4IUUIOEgABzB9RQYwPAADcFgADjA4AAgwfAAUMH0ZCTCYAAo4SAAGMKAACzBRFigwUAAL0JwAC7CIAAuwcAAAAAAAAAQWwAAE6BoABVDGAAW5cwAGKzoABorNAAa/IwAHXCYAB2wVAAfE0wAILYAACDsoAAhmYwAIli0ACP7aAAlnhgAJ0DMACgkWAApxwwAKoY0ACtpwAAsTUwALQx0AC3LmAAurygAL5K0ADBR2AAxEQAAMTVoADE41AAxgsgANFZoADUz4AA4bSgAOH9YADk+gAA5YugAPwooAD/ttABBbAAAAAAAAAbBbAAXeuAAG444ACAAAAAhxyAAI/JUACddeAAoOOgAKT6UACnxaAAqvjQAK7u4ACxxyAAu2CwAMAAAAAAAA//3euAAAxx0AAOOOAADoGgABjjoAArjjAAMccAADHHIABAAAAAAAAAAAc8UAAJdTAACZCAAAnnAAAOeKAADuXgAA9TIAAQKOAAEPAgABEDgAAR0iAAEzxQABNXsAATo4AAFQNgABU8YAAWVDAAFqYgABeJsAAXkoAAGBIwABhI0AAYkaAAGNFgABoV4AAaQgAAGnQgABrQgAAa6lAAGvOAABuOMAAbqaAAHHHQAB2ooAAeFeAAHqYgAB7KgAAe06AAH1wwAB93gAAfyYAAIg/gACKz0AAi6mAAI+lQACUJUAAlMOAAJi/QACcnUAAodlAAKXUwACn0sAArItAALwEgADAAAAAxnwAANkIABpAAwAZgALAGwADQAngAAAP4AAACGAAAApgACAXYAAAGkADgBsAA8AJ4AAAD+AAAAhgAAAKYAAgF2AAABsgAGATIACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD6AbIAEAG+ABQBlgAUAdYAFAHKABQBhgAUAQYAGAE+ABwBDgAcAR4AHgFGABwB5gAUAZYAFAG+ABQBygAUAYYAFAHWABYBBgAUAWIAHAFeABwBBgAcAVoAHgFmABwBugAcAbIAHAHKABwB1gAcAbYAHAHSABwBpgAcAQ4AHAE+ABwBHgAcAaIAHAGKABwBVgAcAa4AHAHaABwB3gAcAUYAHAFSABQBZgAUAVoAGAFeABgBlgAgAYYAIAG+ACABkgAgAY4AIAGeACIBxgAiAJ4AGAAGrPf/76UD/+t8DAAGiswAA0Vr//sX6//5dTf//l1P//y6mAAQAAAAFuXMAAnQNAAGiswAG444AEFsAAAGisw==", Lg = "AXMAEgAAAH8AKQAQAAoAOwBNAAkAAAAHm7uIQADAAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVEkAAAAAAAAAAAAAAAAAAAAAAADmEsCsACDAAAAcwFQAFsAAABTAyAAawMwAGMCgABzAiAAYwBwAHMCIABjAbAAR2OkID9h0ABDYdAAi2HQAJNh0AAIwOAADOAwAC9AAAAvQYAALkEAAC9CEAAtwcAAh0AAACQYAAA3YfAAYMDQAGDA0AAtVUAAjwKAAJsCgABziVAABMAEPAtClFwvQKAAg1yQAHtAAACD0uAAc0GAAAtClEgb51AAG+QgAC/DEABxjCAACGAAABDAFFQIQAAAL+dQAC6C0AAugtAALoLQAC6C0AAuotAALoLQAC6C0AAuotAALoLQAC6C0AAIwFAACOBQAAkgwABwhJAALSAAAC9CpGBzQXAAawAEwF8BsABjAwAAbwFUrFcCgABPArRofwEgAGsDMAAXA0AAMwLAAHcDBIBLAAUElwMwAGsDMABzAVSsVwG0qHMhUABnAETAOwJgAGMCtJBrAzAAawN0aJ8DdKhrA0SAawOUlEcDAAAL54AAL0NgAAvl4AAvQLAACsIwAAtClEQswOAAJ0CFFCTAZRQvQdRkJMDVFAtjpAAk4RAAL0DgAAqBkAAKovAAJ0IAAAdB1GSAwOAAOMDlMCzAhRQs4IUUJOEQACDCBRQcwPAADgFgADTA4AAkwgAAUMIEZCTCUAAo4RAAGMJwACzBNFigwTAAL0KgAC7CQAAuwaAAAAAAAAAQAAwAEzNAABTM3AAWZnQAGB5sABmZrAAZmbAAGmZ8ABzM4AAeZnwAIAAUACDcEAAhmbAAIzNMACMzUAAkzOwAJmaAACdCfAAo3BQAKZm0ACp1sAArUawALA9MACzM7AAtqOQALoTgAC9CgAAwACAAMB58ADBVcAAwbiAAMzNUADQmEAA3M2AAN0KEADgALAA4HoAAPajwAD6E7ABAACwAAAAAAAY45AAXGQQAG448ACAAAAAhxyAAIzNAACQWwAAnXXwAKDjkACl9cAAqefAAK7u8ACxxxAAu2CwAMAAAAAAAA//3GQQAAxxwAAMzQAADjjwABjjkAArjjAAMccAADHHEABAAAAAAAAAAAdgwAAJmZAACajAAApmUAAOZnAADsFwAA93gAAPrIAAELKQABDaUAARJ8AAEtgwABMkAAATJBAAFSfQABVgsAAWdZAAFtCAABduMAAXfxAAGDaQABhbAAAYtgAAGT6AABmd8AAaHtAAGmZwABp9EAAajEAAGxfQABszEAAbjkAAG8NAAByWQAAdUhAAHa0QAB7BgAAe7vAAHxyAAB8rkAAfSfAAH6TwACJewAAiqpAAItgwACMzMAAko7AAJVVQACZmUAAnQNAAKEvAACiIgAApmZAAKyoQAC7vAAAwAAAAMX5QADYLcAaQAMAGYACwBsAA0AJ4AAAD+AAAAhgAAAKYAAgF2AAABpAA4AbAAPACeAAAA/gAAAIYAAACmAAIBdgAAAbIABgEyAAoBgAFwAJwAiAD+AA4AhgAOALQB7gC0AfIBgADyAYAA+gGyABABvgAUAZYAFAHWABQBygAUAYYAFAEGABgBPgAcAQ4AHAEeAB4BRgAcAeYAFAGWABQBvgAUAcoAFAGGABQB1gAWAQYAFAFiABwBXgAcAQYAHAFaAB4BZgAcAboAHAGyABwBygAcAdYAHAG2ABwB0gAcAaYAHAEOABwBPgAcAR4AHAGiABwBigAcAVYAHAGuABwB2gAcAd4AHAFGABwBUgAUAWYAFAFaABgBXgAYAZYAIAGGACABvgAgAZIAIAGOACABngAiAcYAIgCeABgABp9T/+//9//r8MQABmZsAAMzN//7MzP/+ZmX//5mZ//8zMwAEAAAABZmdAAJmaAABmZsABuOPABAACwABmZs=", Tg = "AXUAEgAAAH8ALQAQAAkAOgBNAAkAAAAHdH1cygBwAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVEkAAAAAAAAAAAAAAAAAAAAAAADwFcCoACXAAAAiwFgAGsAAABjAyAAewMQAHMCUACLAhAAcwCAAIsCEABzAeAAW1+UIEtdgABPXYAAo12AAKddgAAIwTAAENwwADdAAAA3QRAANkDgADdCAAA1gfAAk0AAACgYAABDXdAAcMDQAHDA0AA1UUAAmwJQAKsCUACLiWAABMAEPAtCZFw3QGAAl1zAAH9AAACXzsAAi0EQAAtCZEgf40AAH+BAADfDAACJ1EAACFwAABTAFFQIQAAAN+NAADaC0AA2gtAANoLQADaC0AA2ntAANoLQADaC0AA2ntAANoLQADaC0AAIwFAACNxQAAkcsACIhMAANRwAADdCdGCLQXAAewAEwG8B4ABzAuAAgwFkrGcCUABfAqRojwDwAHsDEAAbAzAAOwKQAIcC5IBXAAUEnwMQAHsDEACLAWSsZwHkqIsdYAB3ACTARwJQAHMCpJB7AxAAewNkaK8DZKh7AzSAewOElFMC4AAL43AAN0NQAAvhsAA3QJAACwIwAAtCZEQ0wTAAK0ClFCjAdRQ3QYRkKMDVFA9flAAo3SAAN0EwAArBUAAK3vAAK0IgAAdBhGSUwTAARME1MDTApRQ03KUUKN0gACTCJRQcwQAAEgGQADzBMAAowiAAYMIkZCzCgAAw3SAAIMKwADTBxFiwwcAAN0JwADcCQAA3AaAAAAAAAAATz0gAF5GIABeRlAAZcqwAG1PIAB0a7AAfFggAHxYUACAGnAAi2EgAIthUACS5bAAmmogAJ34cACh7rAAoe7gAKlzIACtg5AAtQgAALh8IAC8CnAAvIxwAMOPAADHhSAAyxNwAM6hsADSmAAA1o4gANoccADdqrAA4VYAAOGhAADlL1AA5ZcgAOdeUAD0L3AA9KAgAQc3cAEKxbABD4vgARNOIAElSXABKNewATTUUAAAAAAAHXXgAGJTAABuOOAAgAAAAIcccACSsQAAmjYAAJ114ACg45AApPpQAKggkACtj+AAsccgALtg4ADAAAAAAAAP/+JTAAAMceAADjjgABjjkAAaNgAAK45QADHHIABAAAAAAAAAAAZCkAAGfSAABuHgAAh7cAAMN1AADELgAAyFUAAOWVAADwWwAA8ssAAQqQAAERAgABKqsAATPpAAE2cAABQJsAAV5FAAFergABYJcAAWTHAAFqDgABcYcAAXl+AAF8VwABfMAAAX8wAAGCWQABiMUAAY9wAAGUhQABllkAAZcpAAG3ggABuOUAAbtVAAHANQAByysAAdGuAAHWjgAB9QkAAfy7AAIHUAACDjsAAg9wAAIboAACQ3IAAkZLAAJLlQACXkIAAmeJAAJ/lwACh7cAAq8QAAL34AADAAAAAyf7AAN7iQBpAAwAZgALAGwADQAngAAAP4AAACGAAAApgACAXYAAAGkADgBsAA8AJ4AAAD+AAAAhgAAAKYAAgF2AAABsgAGATIACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD6AbIAEAG+ABQBlgAUAdYAFAHKABQBhgAUAQYAGAE+ABwBDgAcAR4AHgFGABwB5gAUAZYAFAG+ABQBygAUAYYAFAHWABYBBgAUAWIAHAFeABwBBgAcAVoAHgFmABwBugAcAbIAHAHKABwB1gAcAbYAHAHSABwBpgAcAQ4AHAE+ABwBHgAcAaIAHAGKABwBVgAcAa4AHAHaABwB3gAcAUYAHAFSABQBZgAUAVoAGAFeABgBlgAgAYYAIAG+ACABkgAgAY4AIAGeACIBxgAiAJ4AGAAHCpf/7DC7/+eK5AAHhIAAA8JD//pcn//4e4P//h7f//w9wAAQAAAAG1PIAAtGwAAHhIAAG444AE01FAAHhIA==", zg = "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", Pg = "AXEAEgAAAH8AKQAQAAkAOgBNAAkAAAAHvGqRuQCQAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVEkAAAAAAAAAAAAAAAAAAAAAAADsEsCoACDAAAAdwFQAFsAAABTAxAAawMwAGMCUAB3AiAAYwBwAHcCIABjAaAAR1+UID9dsABDXbAAi12wAJNdsAAIwOAADNxAAC9AAAAvQXAALgEAAC9CAAAtgcAAh0AAACAYAAA7XfAAYMDQAGDA0AAtVTAAjwJQAJsCUAB3iVAABMAEPAtChFwzQKAAg1ywAHNAAACDzsAAd0FwAAtChEgb40AAG+AgAC/DAAB1kCAACFwAABDAFFQIQAAAL+NAAC5CsAAuQrAALkKwAC5CsAAuXrAALkKwAC5CsAAuXrAALkKwAC5CsAAIwGAACNxgAAkcwAB0hLAALRwAAC9CdGB3QYAAawAEwF8BoABjAuAAbwFUrFcCUABPAqRofwEQAGsDMAAXAyAANwLQAHsC5IBLAAUElwMwAGsDMAB3AVSsVwGkqHcdUABnADTAPwJQAGMCpJBrAzAAawNkaJ8DZKhrAySAawOElEcC4AAL43AAM0NQAAvh4AAvQJAACsJAAAtChEQswOAAI0CFFCDAVRQvQbRkIMDVFAtflAAg3SAAL0DgAAqBkAAKnvAAI0IQAAdBtGSAwOAAPMDlMCzAhRQs3IUUIN0gABzCFRQYwPAADcFgADjA4AAgwhAAUMIUZCTCYAAo3SAAGMKQACzBRFigwUAAL0JwAC7CMAAuwdAAAAAAAAAQylQAFCYAABXT1AAXgawAGVLkABrdVAAbtEAAHjkAAB5SSAAf5tQAIZSsACHHOAAifUgAI0KAACTwVAAmniwAKEwAACk0nAAq4nAAK6esACyQSAAteOQALj4cAC8DVAAv6/AAMNSQADGZyAAyTywAMl8AADKCZAAy01AANbqsADZ1wAA57UAAOf7wADrELAA655AAQLZIAEGe5ABDKVQAAAAAAAbp5AAX06QAG444ACAAAAAhxxwAJEvcACddeAAoOOQAKT6UACnu3AAq0mwAK7u4ACxxyAAu2CwAMAAAAAAAA//306QAAxxwAAOOOAAEJgAABjjkAArjkAAMccgAEAAAAAAAAAABw/AAAlIsAAJSyAACWHgAA4fkAAOhLAADyaQABAg4AAQ1uAAEQbAABEcUAAS9nAAE1aQABQ/UAAU1uAAFQ/AABXEkAAW0JAAF4GQABe/AAAX5bAAGDKQABhLwAAYZSAAGVcgABoVcAAaRXAAGl7AABptQAAaikAAGpFQABt04AAbjkAAHEVQAB1jwAAdyOAAHk0gAB7p4AAfAyAAH2hAAB/mwAAhqMAAIodAACKRUAAi3UAAJQRwACUxQAAl7QAAJwhAAChgIAAo45AAKUiwACsZ4AAvF3AAMAAAADHHQAA2hMAGkADABmAAsAbAANACeAAAA/gAAAIYAAACmAAIBdgAAAaQAOAGwADwAngAAAP4AAACGAAAApgACAXYAAAGyAAYBMgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPoBsgAQAb4AFAGWABQB1gAUAcoAFAGGABQBBgAYAT4AHAEOABwBHgAeAUYAHAHmABQBlgAUAb4AFAHKABQBhgAUAdYAFgEGABQBYgAcAV4AHAEGABwBWgAeAWYAHAG6ABwBsgAcAcoAHAHWABwBtgAcAdIAHAGmABwBDgAcAT4AHAEeABwBogAcAYoAHAFWABwBrgAcAdoAHAHeABwBRgAcAVIAFAFmABQBWgAYAV4AGAGWACABhgAgAb4AIAGSACABjgAgAZ4AIgHGACIAngAYAAa9p//vNa//6vFkAAa3VAADW6//+vaD//lIr//+Ui///KRUABAAAAAXgawAChMAAAa3VAAbjjgAQylUAAa3V", qg = "AMAAEgAAAH8AAgAQAAwAAQACAAAAAAAH3+o8eACgAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVFQAAAAAAAAAAAAAAAAAAAAAAADqAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAABOwAAATsAAAFQAAABWwAAAdAAAAHQAAABwAAAAdAAAAGwAAAB0AAAAQoAAAHQAAABUAAAAVAAAAGIAAAB0AAAAdAAAAHkAAABKAAAAdABAAHQAAAB0AAAAfYAAAH2AAAB0AAAAdAAAAH1AAAB9QAAAWAAAAFyAAABGQAAAXIAAAEQAAAB9QAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAFQAAABWQAAAaMAAAFBAAABowAAAdABAQHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdkAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAH1AAAB9QAAAfUAAAHQAAABBwAAAdAAAAFQAAAB0AAAAVAAAAHQAAABUAAAAdAAAAFbAAAB0AAAAdAAAAHbAAAB0AAAAdAAAAFQAAABUAAAAVAAAAFbAAABWwAAAVAAAAFQAAABkAAAAVAAAAFQAAABUAAAAVAAAAFbAAABUAAAAfUAAAH1AAAB9QAAAdAAAAHQAAAAAAAAAAhmYgAAAAAAAgAAAAOC2AAGOOMABqZlAAbjjgAIVVYACH0mAAiqqwAI23IACOOOAAkMgwAJDjoACccdAAqqqwALHHIAAAAA//zfSP/+tgr//xxyAADjjgABVVMAAVVVAAGFrQABxx0AAjjjAAMccwADjjoAAAAAgGAADoBgAA8AAAAAAAhmYgAAAAAAAAAAAAbjjgAQzMMACGZi", $g = "AMEAEgAAAH8AAgAQAA0AAQACAAAAAAAH34a1VADAAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVFQAAAAAAAAAAAAAAAAAAAAAAADmAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB1AAAAdQAAAHQAAABPAAAATwAAAFQAAABXAAAAdAAAAHQAAABwAAAAdAAAAGwAAAB0AAAAQsAAAHQAAABUAAAAVAAAAGJAAAB0AAAAdAAAAHlAAABKQAAAdABAAHQAAAB1AAAAfcAAAH3AAAB0AAAAdAAAAH2AAAB9gAAAWAAAAFyAAABGgAAAXIAAAEQAAAB9gAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAFQAAABWgAAAZMAAAFBAAABkwAAAdABAQHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdoAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAH2AAAB9gAAAfYAAAHQAAABCAAAAdAAAAFQAAAB0AAAAVAAAAHQAAABUAAAAdAAAAFcAAAB0AAAAdAAAAHcAAAB0AAAAdAAAAFQAAABUAAAAVAAAAFcAAABXAAAAVAAAAFQAAABoAAAAVAAAAFQAAABUAAAAVAAAAFcAAABUAAAAfYAAAH2AAAB9gAAAdAAAAHQAAAAAAAAAAg7vAAAAAAAAc44AAOEvQAGOOMABpzpAAbjjwAIVVcACGrgAAiqrAAI2hQACNtxAAj+GQAJDjkACcccAAqqqwALHHEAAAAA//zVzP/+o8P//xL3/////QAA448AAVVTAAFVVQABfDAAAccdAAI45AADHHMAA445AAAAAIBgAA6AYAAPAAAAAAAIO7wAAAAAAAAAAAAG448AEHd4AAg7vA==", Ai = "AMAAEgAAAH8AAgAQAAwAAQACAAAAAAAH30PKcwCAAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVFQAAAAAAAAAAAAAAAAAAAAAAADuAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAABOwAAATsAAAFQAAABWwAAAdAAAAHQAAABsAAAAdAAAAHAAAAB0AAAAQoAAAHQAAABUAAAAVAAAAGIAAAB0AAAAdAAAAHkAAABKAAAAdABAAHQAAAB0AAAAfYAAAH2AAAB0AAAAdAAAAH1AAAB9QAAAWAAAAFyAAABGQAAAXIAAAEQAAAB9QAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAFQAAABWQAAAaMAAAFBAAABowAAAdABAQHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdkAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAH1AAAB9QAAAfUAAAHQAAABBwAAAdAAAAFQAAAB0AAAAVAAAAHQAAABUAAAAdAAAAFbAAAB0AAAAdAAAAHbAAAB0AAAAdAAAAFQAAABUAAAAVAAAAFbAAABWwAAAVAAAAFQAAABkAAAAVAAAAFQAAABUAAAAVAAAAFbAAABUAAAAfUAAAH1AAAB9QAAAdAAAAHQAAAAAAAAAAiACAAAAAAAAiceAAOAAAAGOOQABrSeAAbjjgAIVVYACIgkAAiqqgAI23AACPHIAAkOOAAJIiAACcccAAqqqgALHHIAAAAA//ztgv/+wQj//yqsAADjjgABVVQAAVVWAAGT5AABxxwAAjjkAAMccgADjjgAAAAAgGAADoBgAA8AAAAAAAiACAAAAAAAAAAAAAbjjgARABAACIAI", ei = "AL8AEgAAAH8AAgAQAAsAAQACAAAAAAAH36ROAACQAAATVGVYIHR5cGV3cml0ZXIgdGV4dAAAAAAAAAAAAAAAAAAAAAAAAAAABENNVFQAAAAAAAAAAAAAAAAAAAAAAADsAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAABOgAAAToAAAFQAAABWgAAAdAAAAHQAAABsAAAAdAAAAHAAAAB0AAAAQkAAAHQAAABUAAAAVAAAAGHAAAB0AAAAdAAAAHkAAABJwAAAdABAAHQAAAB0AAAAfUAAAH1AAAB0AAAAdAAAAH1AAAB9QAAAWAAAAFyAAABGAAAAXIAAAEQAAAB9QAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAFQAAABWAAAAaMAAAFBAAABowAAAdABAQHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdgAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAHQAAAB0AAAAdAAAAH1AAAB9QAAAfUAAAHQAAABBgAAAdAAAAFQAAAB0AAAAVAAAAHQAAABUAAAAdAAAAFaAAAB0AAAAdAAAAHaAAAB0AAAAdAAAAFQAAABUAAAAVAAAAFaAAABWgAAAVAAAAFQAAABkAAAAVAAAAFQAAABUAAAAVAAAAFaAAABUAAAAfUAAAH1AAAB9QAAAdAAAAHQAAAAAAAAAAhmYAAAAAAAAgl8AAOBlQAGOOQABq/iAAbjjgAIVVUACH0lAAiqqwAI23AACO0LAAkOOQAJHHAACcccAAqqqwALHHIAAAAA//zoxf/+tgn//yXuAADjjgABVVUAAY8rAAHHHAACOOQAAxxyAAOOOQAAAACAYAAOgGAADwAAAAAACGZgAAAAAAAAAAAABuOOABDMwAAIZmA=", ti = "AT8AEgAAAH8AKQAQAAoABwBNAAkAAAAHEyBQ4gCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NNVQAAAAAAAAAAAAAAAAAAAAAAAADqFMAAACHAAAAfwAAAGcAAABfAAAAdwAAAG8AAAB/AAAAbwAAAH8AAABvAAAAT2BkIEdgUABLYFAAi2BQAJNgUAAIwFAAEOAAADdAAAA3QAAANkAAADdAAAA1gAAAd0AAACgYAABDYAAAbMAAAGzAAAA1VAAAjwAAAJsAAAB/iAAABMAEPAtABFw3QAAAh1wAAFdAAACHzAAAf0AAAAtABEgf5AAAH+QAADfAAAB90AAACGAAABTABFQIQAAAN+QAADaAAAA2gAAANoAAADaAAAA2oAAANoAAADaAAAA2oAAANoAAADaAAAAIwAAACOAAAAkgAAB8hAAANSAAADdABGB/QAAAdwAEwGsAAABvAAAAewAErGMAAABbAARogwAAAHcAAAAbAAAAOwAAAH8ABIBTAAUElwAAAHcAAAB/AASsYwAEqH8gAABzAATARwAAAG8ABJB3AAAAdwAkaJ8AJKh3AASAdwA0lE8AAAAL5AAAN0AAAAvkAAA3QAAACsAAAAtABEQ0wFAAK0AFFCjABRQ3QFRkKMAFFA9gZAAo4AAAN0BQAArAUAAK4AAAK0AAAAdAVGSEwFAARMBVMDTABRQ04AUUKOAAACTABRQcwAAAEgBQADzAUAAowAAAXMAEZCzAUAAw4AAAIMAQADTARFigwEAAN0AAADbAAAA2wAAAAAAAAAARxxgAFVVUABVVWAAXHHQAGOOMABqqqAAcccgAHHHMAB1VWAAgAAAAIIiMACHHIAAjjjgAJHHIACVVWAAlVWAAJxx0ACjjjAAqqqwAK444ACxxyAAtVVgALjjoAC8cdAAwAAAAMOOUADHHIAAyqqwAM444ADRxzAA1VVgANccgADjjlAA9VVQAPVVYAD444AA+OOgARHHMAEVVWABHHHQAAAAAAAbBbAAXeuAAG444ACAAAAAhxyAAJFZ0ACVVWAAnXXgAKDjoACk+lAAqhUwAK7u4ACxxyAAu2CwAMAAAAAAAA//3euAAAxx0AAOOOAAFVVgABjjoAArjjAAMccAADHHIABAAAAAAAAAAAMzMAADjjAABmZgAAccgAAKT7AACqqwBpAAwAZgALAGwADQAngAAAP4AAACGAAAApgACAXYAAAGkADgBsAA8AJ4AAAD+AAAAhgAAAKYAAgF2AAABsgAGATIACgGAAXAAnACIAP4ADgCGAA4AtAHuALQB8gGAAPIBgAD6AbIAEAG+ABQBlgAUAdYAFAHKABQBhgAUAQYAGAE+ABwBDgAcAR4AHgFGABwB5gAUAZYAFAG+ABQBygAUAYYAFAHWABYBBgAUAWIAHAFeABwBBgAcAVoAHgFmABwBugAcAbIAHAHKABwB1gAcAbYAHAHSABwBpgAcAQ4AHAE+ABwBHgAcAaIAHAGKABwBVgAcAa4AHAHaABwB3gAcAUYAHAFSABQBZgAUAVoAGAFeABgBlgAgAYYAIAG+ACABkgAgAY4AIAGeACIBxgAiAJ4AGAACqq//7jjr/+nHIAAHHHQAA447//qqq//444///jjj//xxyAAAAAAAGOOMAAqqrAAHHHQAG444AEccdAAHHHQ==", ni = "ATgAEgAAAH8AGgAOAAoABQBYAAoAAAAHwqDVmQCgAAAIVGVYIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUNNVlRUAAAAAAAAAAAAAAAAAAAAAADqEKAAABegAAAWoAAAEqAAABKgAAAUoAAAFKAAABagAAAUoAAAFqAAABSgAAAPoBEKDqAAAA6gAAAXoAAAF6AAAAFAAAADSQAACqAAAAqgAAAKkAAACqAAAAqAAAAUoAAABwgAAAugAAAUQAAAFkAAAApmAAAYoAAAGaAAABbDAAABQAEAAaABFwqgAAAXoAAACtUAABfVAAAWoAAAAaABEgXUAAAF1AAAClAAABayAAABFwAABEABFQEQAAAK1AAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAqgAAAKoAAACqAAAAFAAAABRwAAASkAABYxAAAIKQAACKABGBKgAAAUoAFME6AAABSgAAAVoAE1EqAAABGgASQWoAAAFKAAAASgAVcKoAAAFaABKhCgAVIYoAAAFKAAABagATUSoAEeFqcAABSgAUwOoAAAFKABLhSgAAAUoAUkGaAFJBSgASoUoAkvEKAAAALUAAAKoAAAAtQAAAqgAAABoAAAAaABEQlAAUgOoAFCB0ABQA6gAAAHQAAAA6ARAgpJBVYOoAE6AaAAAAOpAAANoAEZAaAAABdAAToOQAE6CkABQg5JAUIMSQAABUAAAAZAAAAFcAFKDkABSw1ABRkUQAUaDUAAAA1JBR8HQAAACkANFhlADAAKoAAACqAAAAqgAAAAAAAAAASqqAAEwWsABSIgAAWZlgAGiIUABqBqAAd3cwAH7usACCqmAAhmYgAIZmMACN3YAAjd2gAJVVAACczIAApEPgAKu7YACzMtAAuqpQAMIhsADJmTAA0RCgAN//gADu7mABDMwwAAAAAAAZmaAAY44wAGpmUABuOOAAhVVgAIqqsACNtyAAkMgwAJDjoACccdAAp9JQAKqqsACxxyAAAAAP/830gAALYIAADjjgABVVMAAVVVAAHHHQACOOMAAxxzAAOOOgAAAAAAADu7AABrhQAAd3gAATBbAGyAAIBMgAEAaQAMAGYACwBsAA0AJ4ACAD+AAgAhgAIAKYACgF2AAgBpAA4AbAAPACeAAgA/gAIAIYACACmAAoBdgAKAYABcACcAIgA/gAOAIYADgC0Ae4AtAHyAYAA8gGAAPgBhgAQAZYAFAGGABQBvgAWAY4AFAEGABgBvgAUAZYAFAGGABQAugAaALIAGAG+ABgBlgAYAdYAGAHKABgBhgAYAQYAHAE+ABQBDgAUAR4AFgFGABQB5gAUAZYAGAG+ABgBygAYAYYAGAEGABoB1gAYAWIAFAFeABQBBgAUAVoAFgFmABQB0gAUAdYAFAGKABQB5gAUAdoAFgHeABQBogAWAa4AFAGWACABvgAgAeIAFAGSACABjgAgAcYAIAHaABQBqgAkAeYAFgHeABQB0gAUAQ4AFAE+ABQBHgAUAVYAFAFGABQBUgAYAWYAGAFaAB4BXgAeAaoAIgEmACP/7VVj/+t3gAAEwWwAB3d3//xES//+IiP/+mZr//iIjAAB3eAAA7u4AAAAAAAWZlgACzMsAAd3dAAbjjgAQzMMAAd3d", ri = "AMoAEgAIAH0ADgAIAA8AAwAAAAAABwANYgdhMQCgAAAYZXVsZXIgc3Vic3RpdHV0aW9ucyBvbmx5AAAAAAAAAAAAAAAAAAAACUVVRVggVjIuMgAAAAAAAAAAAAAAAADqBRgCCgUYAgsGGgIMBhoCDQcdAg4HHQIPCB4COAgeAjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApBAAAKQQAACkEAAApBAAAAAAAAAAAAAAAAAAAAAAAACkEAAApBAAADYgAAA2IAAApBAAAKYgAACmIAAAAAAAAKQQAACkEAAAZiAAAGYgAACkEAAApiAAAKYgAAAAAAAAAAAAAKUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQUDAAkFAwEJBQMCCQUDAwkLAAAJCwAACQQDBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHBkkBDAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwYCWAsGAlkEBwZaAAAAAAAAAAAAAAAAAAAAAAAAAAANOQAADDkAAAEMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsGAmEMOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzAAAGcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAAAAIgAAACIAAAAiAAAAAAAAAABxxzAAczOAAIAAIACHHIAAlVWAAKqq0ADAACAAzjkwAOOOYAEAADABDjkgAWk+0AFxx2AAAAAAAAo9YAAY44AAGZmwAF3rgABuOOAAsccgAMAAAAAAAA//3euAADHHAABAAAAATM0AAOZnAAEAAOABHHKAASj2oAGAANABwpCgAczOAAI45SACXCqgAvXEoAAAAAAABxyAABxx04PDo+OT07PjgAOj45ADs+AAAAPjgAOz45ADo+AAAAAAAAAAAAAAAAAAAAAAAG444AEAADAAAAAAAAo9YAAccdAAKqqwADMzMACZmaAAGZmg==", gi = "AMoAEgAIAH0ADgAIAA8AAwAAAAAABwANaxPfkQBwAAAYZXVsZXIgc3Vic3RpdHV0aW9ucyBvbmx5AAAAAAAAAAAAAAAAAAAACUVVRVggVjIuMgAAAAAAAAAAAAAAAADwBRgCCgUYAgsGGgIMBhoCDQcdAg4HHQIPCB4COAgeAjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApBAAAKQQAACkEAAApBAAAAAAAAAAAAAAAAAAAAAAAACkEAAApBAAADYgAAA2IAAApBAAAKYgAACmIAAAAAAAAKQQAACkEAAAZiAAAGYgAACkEAAApiAAAKYgAAAAAAAAAAAAAKUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQUDAAkFAwEJBQMCCQUDAwkLAAAJCwAACQQDBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHBkkCDAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwYCWAsGAlkEBwZaAAAAAAAAAAAAAAAAAAAAAAAAAAANKQAADCkAAAIMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsGAmEMKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzAAAGcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAEwAAABMAAAATAAAAAAAAAAB3Q+AAgghQAJHHUACZprAAqWXgAMEEUADYorAA6GIAAQAAUAEfflABLz1QAZQDsAGddlAAAAAAAAxvIAAZmbAAGmmQAGJTAABuOOAAsccgAMAAAAAAAA//4lMAADHHIABAAAAATM0AAOZnAAEAAOABHHKQASbE4AGAAOABwF7gAczOAAI45SACWfjgAvOS4AAAAAAAB9+QAB9+A4PDo+OT07PjgAOj45ADs+AAAAPjgAOz45ADo+AAAAAAAAAAAAAAAAAAAAAAAG444AEjjpAAAAAAAAxvIAAccbAAKqqwADMzIACccbAAJJJQ==", ii = "AMoAEgAIAH0ADgAIAA8AAwAAAAAABwANJAX55wCAAAAYZXVsZXIgc3Vic3RpdHV0aW9ucyBvbmx5AAAAAAAAAAAAAAAAAAAACUVVRVggVjIuMgAAAAAAAAAAAAAAAADuBRgCCgUYAgsGGgIMBhoCDQcdAg4HHQIPCB4COAgeAjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApBAAAKQQAACkEAAApBAAAAAAAAAAAAAAAAAAAAAAAACkEAAApBAAADYgAAA2IAAApBAAAKYgAACmIAAAAAAAAKQQAACkEAAAZiAAAGYgAACkEAAApiAAAKYgAAAAAAAAAAAAAKUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQUDAAkFAwEJBQMCCQUDAwkLAAAJCwAACQQDBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHBkkCDAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwYCWAsGAlkEBwZaAAAAAAAAAAAAAAAAAAAAAAAAAAANKQAADCkAAAIMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsGAmEMKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzAAAGcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAEwAAABMAAAATAAAAAAAAAABzM4AAeOQAAIgAgACPjsAAnqtAALVWAADMAMAA2x1AAPHIAAEQAQABHx2AAX/T4AGI5QAAAAAAAAuFIAAZmaAAGccAAGDDwABuOOAAsccgAMAAAAAAAA//4MPAADHHAABAAAAATM0AAOZnAAEAAOABHHKAASeu4AGAAMABwUjgAczOAAI45SACWuLgAvR84AAAAAAAB45AAB45A4PDo+OT07PjgAOj45ADs+AAAAPjgAOz45ADo+AAAAAAAAAAAAAAAAAAAAAAAG444AEQAQAAAAAAAAuFIAAcccAAKqqgADMzQACbjkAAIAAA==", Bi = "AMsAEgAIAH0ADwAIAA8AAwAAAAAABwANhtgXiQCQAAAYZXVsZXIgc3Vic3RpdHV0aW9ucyBvbmx5AAAAAAAAAAAAAAAAAAAACUVVRVggVjIuMgAAAAAAAAAAAAAAAADsBRgCCgUYAgsGGgIMBhoCDQcdAg4HHQIPCB4COAgeAjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApBAAAKQQAACkEAAApBAAAAAAAAAAAAAAAAAAAAAAAACkEAAApBAAADYgAAA2IAAApBAAAKYgAACmIAAAAAAAAKQQAACkEAAAZiAAAGYgAACkEAAApiAAAKYgAAAAAAAAAAAAAKUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQUDAAkFAwEJBQMCCQUDAwkLAAAJCwAACQQDBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHBkkCDAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwYCWAwGAlkEBwZaAAAAAAAAAAAAAAAAAAAAAAAAAAAOOQAADTkAAAIMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGAmENOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzAAAGcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEgAAABIAAAASAAAAAAAAAABzM5AAdPAAAIOOAACK3QAAmXsgAK9oAADFVSAA0/MAAOngAAEHHAABFboAARW6IAFzRsABfAwAAAAAAAAKzyAAGUiQABmZsABfTpAAbjjgALHHIADAAAAAAAAP/99OkAAxxyAAQAAAAEzNAADmZwABAADgARxykAEoZOABgADAAcH+4AHMzgACOOUgAluY4AL1MuAAAAAAAAdPAAAdPAODw6Pjk9Oz44ADo+OQA7PgAAAD44ADs+OQA6PgAAAAAAAAAAAAAAAAAAAAAABuOOABBxwAAAAAAAAKzyAAHHHAACqqsAAzM0AAmt1AABxxw=", oi = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAW2JYM5wCgAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAADqGVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAABAFoAAQOeAAEFQAABBuIAAU+0wAFTTIABU6AAAVjZgAFllgABjMYAAY3AwAGSpsABkvqAAZc5QAG2P0AB1eyAAdaTgAHYNYAB2tKAAdsmAAHjUAACFzyAAisoAAJTpoACWYdAAlrVgAJbKUACXCQAAl7AwAJhCgACYgTAAmk0AAJqLsACatYAAm+8AAJ2RAACm9IAAp10AAKebsAC1+iAAuMCwALkpMAC6DyAAyFigAMlTYADKD4AAyjlQANjrUADZaLAA2bxQAN8K0ADkmAAA6uFQAOvcIADtaTAA+fvQAPoloAD6T2AA+nkwAPsLgAD7SjAA+18gAPuI4AD7x6ABCzWwATwxsAE9QWAAAAAAABuoAAB5sAAAhtLgAJU0oAChGQAAsQAAAL/dgAAAAAAACa4AABAiAAAVS6AAIEQAADBmAAA/9IAAAAAAAAAAAABVVVAAAAAAAAAAAAB5sAABAAAAAAAAAABgzAAARSQAAEwOAABgzAAAKXwAAGe2AABgzAAAUvgAADBmAAA+OgAAZ7YAAAbqAAIyzdAA/9IAAEGvA=", ai = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAWouDdiQBQAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAAD0GVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAAB8bwAAfVUAAH3IAAB+OwAAkkQAAJNBAACTWAAAlMgAAJhJAACjEQAAo1YAAKSvAACkxgAApfEAAK56AAC3MQAAt18AALfSAAC4igAAuKEAALrgAADJKQAAzqQAANnIAADbZgAA28IAANvZAADcHgAA3NYAAN13AADdvAAA37YAAN/7AADgKQAA4YIAAONOAADtowAA7hYAAO5bAAD+KwABATkAAQGsAAECqQABEmIAARN2AAEURQABFHMAASSfAAElKQABJYUAAStcAAExeAABOGMAATl3AAE7LAABSQIAAUkwAAFJXgABSYwAAUotAAFKcgABSokAAUq3AAFK/AABW/cAAZHfAAGTCgAAAAAAABvQAAB6YAAAh5YAAJYMYACiAgAAsgAAAMDzAAAAAAAACbwAABA5YAAVamAAIHKgADCsAABAUQAAAAAAAAAAAABVVWAAAAAAAAAAAAB6YAABAAAAAAAAAABhWAAARYgAAEx8AABhWAAAKbgAAGhMAABhWAAAU3AAADCsAAA+lAAAaEwAAAb0AAI1+9ABAUQAAEIOA=", li = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAWONiU4gBgAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAADyGVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAABd8tAAXtCAAF8/UABfrjAAcv1QAHPxMAB0B1AAdWoAAHjKgACDLoAAg3EAAIS9gACE07AAhfPQAI4tsACWk9AAlsAwAJcvAACX4FAAl/aAAJogsACn5TAArS1QALfqAAC5eQAAudGwALnn0AC6KlAAutuwALt20AC7uVAAvaEAAL3jgAC+D9AAv1xQAMEXsADLDNAAy3uwAMu+MADa+4AA3e0wAN5cAADfT9AA7ncAAO+BAADwSIAA8HTQAQAK0AEAj9ABAOiAAQaJUAEMbLABExeAARQhgAEVxrABIxxQASNIsAEjdQABI6FQASQ8gAEkfwABJJUwASTBgAElBAABNWGAAWlVgAFqdbAAAAAAABuasAB5dVAAhpIAAJTssACgy1AAsKqwAL+BAAAAAAAACalQABAaMAAVQVAAIDSAADBOsAA/1bAAAAAAAAAAAABVVVAAAAAAAAAAAAB5dVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvoAA/1awAEGPU=", ci = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAWjMZs2QBwAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAADwGVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAABR5nAAUrtQAFMlsABTkCAAZhrgAGcFAABnGlAAaG7gAGutAAB1p1AAdecgAHcmcAB3O7AAeFBwAIA2kACIR1AAiHHgAIjcUACJhpAAiZvgAIuwAACY6HAAnfrgAKhKUACpyXAAqh6QAKoz4ACqc7AAqx4AAKuzAACr8uAArccgAK4HAACuMZAAr3DgALEakAC6qnAAuxTgALtUsADJ9wAAzMqwAM01IADOH1AA3KxQAN2rsADea1AA3pXgAO2NUADuDQAA7mIgAPPJsAD5cSAA/9ggAQDXkAECbAABDzoAAQ9kkAEPjyABD7mwARBOsAEQjpABEKPgARDOcAERDlABIMVQAVKosAFTvXAAAAAAAButsAB5ySAAhu7gAJVTcAChOlAAsSSQAMAFIAAAAAAACbAAABAlUAAVUAAAIEqwADBwAABAAbAAAAAAAAAAAABVVVAAAAAAAAAAAAB5ySABAAAAAAAAAABg4AAARTJQAEwdsABg4AAAKYSQAGfLcABg4AAAUwkgADBwAAA+RuAAZ8twAAbrcAIzQiABAAbgAEG8k=", si = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAWsafUNwCAAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAADuGVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAABAxyAAQZpgAEIEAABCbaAAVNSAAFW84ABV0gAAVyQAAFpb4ABkQuAAZIJAAGW/IABl1EAAZubgAG69wAB2vuAAdukgAHdSwAB3+8AAeBDgAHohAACHP+AAjEiAAJaEAACYAEAAmFTAAJhp4ACYqUAAmVJAAJnmIACaJYAAm/ZAAJw1oACcX+AAnZzAAJ9DQACowKAAqSpAAKlpoAC376AAur3gALsngAC8D+AAyoDAAMt+QADMPGAAzGagANtBIADbv+AA3BRgAOFxgADnDgAA7WigAO5mIADv94AA/KzAAPzXAAD9AUAA/SuAAP2/YAD9/sAA/hPgAP4+IAD+fYABDhYgAT+ZIAFAq8AAAAAAABu8AAB6CAAAhzSAAJWggAChjYAAsYAAAMBoQAAAAAAACbUAABAtoAAVWwAAIFtgADCJAABAIsAAAAAAAAAAAABVVWAAAAAAAAAAAAB6CAABAAAAAAAAAABhEgAARVYAAExFAABhEgAAKZoAAGgBAABhEgAAUzQAADCJAAA+ZwAAaAEAAAbvAAI0ZMABAIsAAEHeg=", ui = "AQEAEgABAH8ARAAIAAcAAQAAAAAAAAAWTTF9WgCQAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRkIgVjIuMgAAAAAAAAAAAAAAAADsGVAAAA1lAAAKUAAAHWUAAAxgAAAOYAAAAAAAADxgAAArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYAAAAAAAAAAAAAAAAAAAAAAAADNgAAABYAAAEHYAABB2AAAFUAAANEMAAAUQAAA0QwAABRAAAB12AAAdIAAAHSAAAB0gAAAdJQAAHSUAAB0lAAAdYAAAHSUAAB1gAAAdJQAAAyAAAAMkAAAAAAAAGCAAAAAAAAAPYAAAAAAAADBgAABBYAAAKmAAAD5gAAAsYAAAKWQAADdgAAAyYgAAJ2AAACVkAAAuYAAALWAAAENgAAA/YAAAOGAAADllAAA4YQAAOmAAADtgAAAvYAAAMmAAAD1gAABCYAAAMWAAAEBlAAAoZAAABHYAAAAAAAAEdgAAHGAAAAAAAAAAAAAAICAAABxgAAATIAAAGlAAABUgAAALZQAAHiUAACRlAAAGYAAAB2AAABRgAAAIYAAANiAAACYgAAAjIAAAITUAAB8lAAARIAAAFiAAAAxQAAAaIAAAIjAAADUwAAAQJQAAGyUAABIlAAAAAAAAAAAAAAJgAAAAAAAAF2AAAAAAAAAABADcAAQN6wAEFHIABBr5AAU+HAAFTHkABU3HAAViqwAFlZUABjJAAAY2KwAGScAABksOAAZcBwAG2A4AB1ayAAdZTgAHX9UAB2pHAAdrlQAHjDkACFvOAAircgAJTVUACWTVAAlqDgAJa1wACW9HAAl5uQAJgtwACYbHAAmjgAAJp2sACaoHAAm9nAAJ17kACm3cAAp0ZAAKeE4AC14VAAuKeQALkQAAC59cAAyD1QAMk4AADJ9AAAyh3AANjNwADZSyAA2Z6wAN7scADkeOAA6sFQAOu8AADtSOAA+dnAAPoDkAD6LVAA+lcgAPrpUAD7KAAA+zzgAPtmsAD7pVABCxFQATwGsAE9FkAAAAAAABuasAB5dVAAhpIAAJTssACgy1AAsKqwAL+BAAAAAAAACalQABAaQAAVQVAAIDRwADBOsAA/1bAAAAAAAAAAAABVVVAAAAAAAAAAAAB5dVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvnAA/1awAEGPU=", Ci = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAWjyVusgCgAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAADqGGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAANkaAADb3gAA3UAAARxOgAEdsIABHj4AAR+gAAEu1gABThaAAVEhQAFVAIABVUdAAVYbgAFzJYABgzAAAY35QAGOhsABjs2AAY/owAGaJIABxUlAAfSUAAH02sAB/W2AAf5CAAH+iMAB/s+AAf+kAAIAeIACAL9AAgHagAIDg0ACA8oAAgwWAAINeAACEZ4AAhXEAAIbTAACNZIAAjfIgAJodUACcdyAAnM+gAKVQsACpq9AAqoAwAKsfgACrQuAAt7TgALgfIAC4ZeAAvORgAMGYAADESlAAxgTQAMkPoADTtWAA09jQANP8MADUH6AA1NCgANTiUADVBbAA1TrQAOJMIAELyCABDK4wAAAAAAAbqAAAXmCAAHmwAACGIgAAlTSgAJ8GAACxAAAAv92AAAAAD//ed4AACa4AABAiAAAVS6AAIEQAADBmAAA/9IAAAAAAAAAAAABVVVAAAAAAAAAAAAB5sAABAAAAAAAAAABgzAAARSQAAEwOAABgzAAAKXwAAGe2AABgzAAAUvgAADBmAAA+OgAAZ7YAAAbqAAIyzdAA/9IAAEGvA=", di = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAWuMmv1ABQAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAAD0GGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAAcrIAAHOGAABz8AAAhtGgAIc7oACHZgAAh9AAAIxeAACVuaAAlqLQAJfLoACX4NAAmCBgAKDSYACloAAAqNrQAKkFMACpGmAAqW8wAKx/oAC5atAAx5QAAMepMADKOmAAynoAAMqPMADKpGAAyuQAAMsjoADLONAAy42gAMwM0ADMIgAAzp4AAM8IAADQRgAA0YQAANMsAADbCgAA27OgAOpG0ADtF6AA7YGgAPexMAD86NAA/ecwAP6mAAD+0GABDbhgAQ43oAEOjGABE+5gARmQAAEcytABHtzQASKBoAEvQmABL2zQAS+XMAEvwaABMJWgATCq0AEw1TABMRTQAUC7oAFya6ABc38wAAAAAAAb0AAAXukAAHpgAACG5AAAlgxgAJ/sAACyAAAAwPMAAAAAD//eRwAACbwAABA5YAAVamAAIHKgADCsAABAUQAAAAAAAAAAAABVVWAAAAAAAAAAAAB6YAABAAAAAAAAAABhWAAARYgAAEx8AABhWAAAKbgAAGhMAABhWAAAU3AAADCsAAA+lAAAaEwAAAb0AAI1+9ABAUQAAEIOA=", wi = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAWZRZ7xABgAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAADyGGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAAVXjQAFZCgABWp1AAaJ1QAGkCMABpKoAAaY9QAG3kgAB2y1AAd6kwAHjDgAB417AAeRQwAIFZsACF61AAiP3QAIkmMACJOlAAiYsAAIx1MACYvzAApjewAKZL0ACovQAAqPmAAKkNsACpIdAAqV5QAKma0ACprwAAqf+wAKp4sACqjNAArOnQAK1OsACufTAAr6uwALE/AAC4utAAuVwwAMc5gADJ5zAAykwAANP8gADY8wAA2eUAANqagADawtAA6PDQAOlp0ADpuoAA7tlQAPQ0sAD3RzAA+T9QAPy2sAEI2FABCQCwAQkpAAEJUVABChsAAQovMAEKV4ABCpQAARl3gAFIu4ABScGwAAAAAAAbmrAAXjMAAHl1UACF4VAAlOywAJ65UACwqrAAv4EAAAAAD//eh7AACalQABAaMAAVQVAAIDSAADBOsAA/1bAAAAAAAAAAAABVVVAAAAAAAAAAAAB5dVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvoAA/1awAEGPU=", Qi = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAWWO0mAgBwAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAADwGGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAASaewAEpnIABKxuAAW9NwAFwzIABcWXAAXLkgAGDWAABpSSAAahuwAGsnsABrOuAAa3RQAHNOUAB3pJAAeo8gAHq1cAB6yJAAexUgAH3ZcACJg7AAlk0gAJZgUACYsbAAmOsgAJj+UACZEXAAmUrgAJmEUACZl3AAmeQAAJpW4ACaagAAnKhQAJ0IAACeJyAAn0ZQAKDFIACn37AAqHjgALWiAAC4LOAAuIyQAMG/IADGdSAAx1rgAMgHIADILXAA1aMgANYWAADWYpAA2z7gAOBUkADjPyAA5R2wAOhoAADz7AAA9BJQAPQ4kAD0XuAA9R5QAPUxcAD1V7AA9ZEgAQOzIAEwkOABMYmwAAAAAAAbrbAAXnQAAHnJIACGPbAAlVNwAJ8m4ACxJJAAwAUgAAAAD//ecJAACbAAABAlUAAVUAAAIEqwADBwAABAAbAAAAAAAAAAAABVVVAAAAAAAAAAAAB5ySABAAAAAAAAAABg4AAARTJQAEwdsABg4AAAKYSQAGfLcABg4AAAUwkgADBwAAA+RuAAZ8twAAbrcAIzQiABAAbgAEG8k=", hi = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAWXJeCJQCAAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAADuGGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAAOFhgADkQIAA5bAAAScmAAEolYABKSiAASqYAAE6YoABWtQAAV38gAFiAYABYksAAWMngAGBTQABkfQAAZ0mgAGduYABngMAAZ8pAAGpyIAB1pKAAgerAAIH9IACENsAAhG3gAISAQACEkqAAhMnAAIUA4ACFE0AAhVzAAIXLAACF3WAAiASgAIhggACJdCAAiofAAIv3QACSyOAAk1vgAJ/94ACibqAAosqAAKueoACwJEAAsQDAALGmIACxyuAAvrZgAL8koAC/biAAxBiAAMj6AADLxqAAzZIAANC6gADbyEAA2+0AANwRwADcNoAA3O5AAN0AoADdJWAA3VyAAOrtYAEV/mABFu1AAAAAAAAbvAAAXqTAAHoIAACGgwAAlaCAAJ95AACxgAAAwGhAAAAAD//eX0AACbUAABAtoAAVWwAAIFtgADCJAABAIsAAAAAAAAAAAABVVWAAAAAAAAAAAAB6CAABAAAAAAAAAABhEgAARVYAAExFAABhEgAAKZoAAGgBAABhEgAAUzQAADCJAAA+ZwAAaAEAAAbvAAI0ZMABAIsAAEHeg=", fi = "AQQAEgAAAH8ARAAJAAgAAQAAAAAAAAAW+DPzrwCQAAAPVGVYIHRleHQgc3Vic2V0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUVVRk0gVjIuMgAAAAAAAAAAAAAAAADsGGAAABlgAAAMdgAACnYAACA2AAALcAAADWAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAAAAAA0cAAAAXAAABCHAAAQhwAABGAAADVUAAAEEAAANVQAAAQQAAAfhwAAHzAAAB8wAAAfMAAAHzYAAB82AAAfNgAAH3AAAB82AAAfcAAAHzYAAAMwAAADNQAAAAAAADUhAAAAAAAADnAAAAAAAAAxcAAAQXAAACtwAAA+cAAALXAAACp1AAA4cAAAM3MAAChwAAAndQAAL3AAAC5wAABDcAAAP3AAADlwAAA6dgAAOXIAADtwAAA8cAAAMHAAACxwAAA9cAAAQnAAADJwAABAdgAAKXUAAASHAAAAAAAABIcAABxwAAAAAAAAAAAAAB0wAAAjcAAAEjAAABpgAAAUMAAACXYAACE2AAAldgAABXAAAAdwAAAScAAABnAAADYwAAAmMAAAFjAAAB1GAAAXNgAAETAAABUwAAALYAAAJDAAACJAAAA3QAAAEDYAABs2AAATNgAAAAAAAAAAAAACcAAAAAAAAA9wAAAAAAAAAAN4lAADg+UAA4mOAASLpAAEkUwABJOQAASZOQAE13sABVdkAAVj1wAFc7AABXTSAAV4NwAF7xIABjC5AAZc3gAGXyIABmBEAAZkywAGjqwABz9CAAgA0gAIAfQACCULAAgocAAIKZIACCq0AAguGQAIMX4ACDKgAAg3JwAIPfIACD8UAAhhCQAIZrIACHesAAiIpwAIn0sACQrUAAkT4gAJ2xsACgGXAAoHQAAKknsACtnLAArnYAAK8ZAACvPUAAu/lAALxl4AC8rlAAwUeQAMYXIADI2XAAyp5AAM27IADYoEAA2MRwANjosADZDOAA2cIAANnUIADZ+FAA2i6wAOeNsAESAFABEuvAAAAAAAAbmrAAXjMAAHl1UACF4VAAlOywAJ65UACwqrAAv4EAAAAAD//eh7AACalQABAaQAAVQVAAIDRwADBOsAA/1bAAAAAAAAAAAABVVVAAAAAAAAAAAAB5dVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvnAA/1awAEGPU=", Ii = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWkWV3yACgAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAADqEkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAE5OAABapQAAXHkAAFzuAABd/wAAXmCAAGkeAABuTAAAb/kAAHUnAAB2EQAAfzUAAH+qAACGEAAAhoUAAIgyAACJS6AAixSwAItlAACL2gAAjJ0AAIzrAACNhwAAlLAAAJVMAACVf+AAlYaAAJZwgACWhAAAmKYAAJxhgACcdQAAnSSAAJ7lAACfMwAAo3cAAKOxgACj/4AApK8AAKVegAClcgAApiGAAKbRAACnC4AAp5QAAKh+AACpooAAqheAAKorAACqPoAAq4oAAKudgACrxIAAq/8AAKxNAACsYIAArK6AALM7gAC2boAAttAAALb3AAC574AAu9cAALzBAAC+2CAAv38AAMgagADIaIAAyhWAAMthAADRKwAA0mMAANRxgADYVAAA2I6AANkDgADbYAAA29UAAN+kAADh2YAA5muAAOtLgADrXwAA7CIAAO7gAAD1uwAA9/CAAPkogAD5PAAA/TIAASAs0AEoiYAAAAAAABuoAAB8dAAAoRkAALPEAAC/3YAAAAAAACBEAAAwZgAAP/SAAAAAAAAH1DAAD6hgABd8oAAfUNgH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAH1DAAD6hgAB9Q3//wV6//6INgAAAAAABVVVAAAAAAAAAAAAB8dAABAAAAAAAAAABgzAAARSQAAEwOAABgzAAAKXwAAGe2AABgzAAAUvgAADBmAAA+OgAAZ7YAAAbqAAIyzdAA/9IAAEGvA=", Gi = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWKiAvnABQAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAAD0EkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAI+40ACeBgAAoCRgAKCsAACh6GAAollgAK7MAAC0zNAAtr4AALy+0AC9zgAAyGYAAMjtoADQWAAA0N+gANLQ0ADUFzAA1ikAANaGAADXDaAA1++gANhKAADY/tAA4UswAOIAAADiPDAA4kPQAONTAADjaaAA5eJgAOo10ADqTGAA6xfQAO0foADtegAA8mugAPKvYADzCdAA89UwAPSgoAD0tzAA9YKgAPZOAAD2kdAA9zAAAPg/MAD5kjAA+hnQAPowYAD6RwAA+8cwAPvd0AD8CwAA/E7QAPypMAD8v9AA/RowAQSx0AEIZwABCNgAAQkFMAEMdqABDqugAQ+60AESJwABEuhgARziMAEdPKABHy3QASCuAAEnY6ABKM0wASsvYAEvsAABL/PQATB7YAEzOAABM7+gATgpoAE6uQABQAUAAUWrYAFFwgABRqQAAUnRoAFRw6ABVFMAAVW8oAFV0zABWmpgAYL00AGMpdAAAAAAABvQAAB9KAAAogIAALTIAADA8wAAAAAAACByoAAwrAAAQFEAAAAAAAAJEtAAEiWgABs4YAAkSzgH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAJEtAAEiWgACRLP//t2m//5MegAAAAAABVVWAAAAAAAAAAAAB9KAABAAAAAAAAAABhWAAARYgAAEx8AABhWAAAKbgAAGhMAABhWAAAU3AAADCsAAA+lAAAaEwAAAb0AAI1+9ABAUQAAEIOA=", Ei = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWojUPnQBgAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAADyEkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAHFCsAB/E7AAgR+wAIGisACC1FAAg0GAAI9IAACVFLAAlvUAAJzBsACdx7AAqAOwAKiGsACvsLAAsDOwALIUAACzT1AAtU8wALWpAAC2LAAAtwZQALddsAC4DFAAwBCwAMC/UADA+YAAwQDQAMIG0ADCHLAAxIAAAMit0ADIw7AAyYgwAMt+UADL1bAA0JxQANDd0ADRNTAA0fmwANK+MADS1AAA05iAANRdAADUnoAA1TdQANY9UADXhNAA2AfQANgdsADYM4AA2aawANm8gADZ6DAA2imwANqBAADaltAA2u4wAOJD0ADl2NAA5kYAAOZxsADpxTAA6+cAAOztAADvRDAA7/8AAPmiMAD5+YAA+9nQAP1NAAEDyFABBSWwAQdzMAELzLABDA4wAQyRMAEPNgABD7kAARP8sAEWddABG5PQASEJMAEhHwABIflQASULUAEsuFABLzGAATCO0AEwpLABNRQAAVw+UAFlmzAAAAAAABuasAB8OAAAoMtQALNtUAC/gQAAAAAAACA0gAAwTrAAP9WwAAAAAAAIxAAAEYgAABpMAAAjEAgH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAIxAAAEYgAACMQD//ueA//5bQAAAAAAABVVVAAAAAAAAAAAAB8OAABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvoAA/1awAEGPU=", bi = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWSWQ5hwBwAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAADwEkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAGYa4ABzkyAAdZIAAHYRsAB3O7AAd6YgAINfcACJBuAAitsgAJCCkACRggAAm3xQAJv8AACi+AAAo3ewAKVMAACmf3AAqHJwAKjKAACpSbAAqh6QAKpzsACrHgAAsu7gALOZIACz0eAAs9kAALTYcAC07bAAt0GwALtUsAC7agAAvCmQAL4TIAC+aFAAwxBQAMNQIADDpVAAxGTgAMUkcADFObAAxflQAMa44ADG+LAAx42wAMiNIADJzHAAykwgAMphcADKdrAAy+CQAMv14ADMIHAAzGBQAMy1cADMyrAAzR/gANRGcADXxHAA2C7gANhZcADbl5AA3auwAN6rIADg81AA4alwAOsOsADrY+AA7TggAO6iAAD087AA9khQAPiHAAD8xJAA/QRwAP2EIAEAGAABAJewAQTAAAEHKVABDCZwARF4sAERjgABEmLgARVhIAEc3OABH0YgASCasAEgsAABJQLgAUsxsAFUUnAAAAAAAButsAB8jbAAoTpQALPpIADABSAAAAAAACBKsAAwcAAAQAGwAAAAAAAIi7AAERdwABmjIAAiLugH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAIi7AAERdwACIu7//u6J//5lzgAAAAAABVVVAAAAAAAAAAAAB8jbABAAAAAAAAAABg4AAARTJQAEwdsABg4AAAKYSQAGfLcABg4AAAUwkgADBwAAA+RuAAZ8twAAbrcAIzQiABAAbgAEG8k=", Hi = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWgDKNzQCAAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAADuEkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAFNTAABgdIAAYmaAAGLjAABkBYAAZG1AAG/bAAB1XgAAdyaAAHypgAB9ooAAh1yAAIfZAACOqAAAjySAAJDtAACSGMAAk/9AAJRUgACU0QAAlaCAAJXzgACWmYAAnjgAAJ7eAACfFWAAnxxAAKAVQACgKgAAom8AAKZnwACmfIAApzdAAKkUgACpZ4AArfGAAK4vwACugsAArz2AAK/4QACwDQAAsMfAALGCgACxwMAAslIAALNLAAC0gkAAtP7AALUTgAC1KEAAtokAALadwAC2x0AAtwWAALdYgAC3bUAAt8BAAL64wADCIEAAwogAAMKxgADF2sAAx+GAAMjagADLFAAAy8WAANTuQADVQUAA1wnAANhqgADek4AA39+AAOIPwADmMgAA5nBAAObswADpcAAA6eyAAO36AADwU8AA9TDAAPpgwAD6dYAA+0UAAP4wAAEFe4ABB9VAAQkhQAEJNgABDW0AATKl4AE7i8AAAAAAABu8AAB8zgAAoY2AALRGAADAaEAAAAAAACBbYAAwiQAAQCLAAAAAAAAIVKAAEKlAABj94AAhUogH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAIVKAAEKlAACFSj//vVs//5wIgAAAAAABVVWAAAAAAAAAAAAB8zgABAAAAAAAAAABhEgAARVYAAExFAABhEgAAKZoAAGgBAABhEgAAUzQAADCJAAA+ZwAAaAEAAAbvAAI0ZMABAIsAAEHeg=", Fi = "AS4AEgAAAH8AXgAGAAQABQAOAAUAAAAWgtT4EwCQAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUkIgVjIuMgAAAAAAAAAAAAAAAADsEkAJBUVAAQBYQAEATUABAC1AAABLQAEAPEAAAEdAAQBaQAAAREABAFdAAAA+IAAAO0IAACkiAAAcQAAAHSAAAA9BAQEsIgAAK0ABAAMgAAAaIAAAH0ABAyoiAAAlIAAAHkEAADEgAQEgIgEAOyAAABkgAQEkIAAAUEIAAB0iAABJQgEAWSABABEgAAAmQAAAVjAAAAAAAAAAAAAASCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAABdAAAAXQAAAF0AAAAIQAAACEAAABSAAABhTAQgEIAAAAAAAAChAAABKQAAAP0AAAEZAAQFSQAAAJ0AAABBAAQVMQAEATkABAAxAAAALQQAAQ0AAACNAAABdQAAAVUAAAFFAAQAzQAEGU0IAAD1AAAAuQAEAE0ARBU9AAABCQAkEXEAFBEFAAQEbQA0EQEABAQAAAAAAAAAAAAAAAAAAAAAAAAAACEAAADMgAQA5QAAAFiABADlAAAAiIAEACUABAi8iAQAyQAAABkAAAAVCAAAhQAAAB0AAAFsgAAA2IAAAOCABADAiAAA3IgAADSAAAA4gAQAKMAAANSAAABUgAABUIAAAFyAAADQiAAAUIAEABiAAAAYgAAA6IAEBAAAAAAEAAAAAAAAAAAAAAAAE/dwABcc8AAXlEgAF7IcABf3uAAYEJQAGs2sABwfyAAcjSwAHd9IAB4a8AAgb5wAII1wACIvHAAiTPAAIrpUACMCLAAjdsAAI4ssACOpAAAj2rgAI+6cACQWZAAl6cgAJhGQACYe1AAmIHgAJlwkACZhHAAm7FQAJ9/4ACfk8AAoEbAAKIQQACiX8AAprmQAKb1QACnRMAAp/fAAKiqwACovrAAqXGwAKoksACqYFAAquuQAKvaQACtBJAArXvgAK2PwACto7AArvXAAK8JsACvMXAAr20gAK+8sACv0JAAsCAgALbOkAC6EeAAunVQALqdIAC9pMAAv5YAAMCEsADCppAAw1CwAMwYIADMZ7AAzh1AAM9vUADVVuAA1pUgANiuIADcpHAA3OAgAN1XcADfwAAA4DdQAOQZwADmWpAA6wPgAO/8wADwELAA8NeQAPOjkAD6oZAA/OJQAP4gkAD+NHABAj6wASXsIAEuc3AAAAAAABuasAB8OAAAoMtQALNtUAC/gQAAAAAAACA0cAAwTrAAP9WwAAAAAAAH/CAAD/hAABf0UAAf8HgH+AAIB/gAGAf4ACgH+AAwB/gAEAPYADADuABIA6gAQAQYADAGGAAwBngAMAAYADAAOAA4ALgAMAAH/CAAD/hAAB/wf//wB8//6AuwAAAAAABVVVAAAAAAAAAAAAB8OAABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvnAA/1awAEGPU=", Yi = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAWIvvBOQCgAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAADqDVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAEcToABU+VAAVUAgAFW8AABcKiAAXYwgAGNsoABk8gAAZvNQAGqvIABrg4AAbbfQAG6gAAB0taAAeIMgAHyFsAB8qSAAfixgAH7fgAB/11AAf+kAAIBBgACAdqAAgxcwAIOTIACGr6AAirIwAIxJUACM1uAAjVLQAI2ZoACN4GAAjh1QAI4nMACOSqAAjqMgAI8fAACPZdAAj3eAAJA6MACRnDAAk3ogAJOdgACWT9AAlqhQAJbvIACYClAAmJfgAJlsUACamTAAmrygAJrgAACa8bAAmwNgAJvGIACb6YAAnh/gAJ8pYACkfFAApW4gAKWF0ACnzeAAqJCgAKmaIACqFgAAqoAwAKqjoACrMTAAtArQALaZsAC28jAAt1xgALkFMAC6Q9AAwRwgAMGYAADB8IAAw2QwAMPx0ADFQiAAxVPQAMY54ADIggAAzZ/QAM/n4ADUDeAA1DFQANRmYADVTIAA2dywAOAnYADgOSAA6nSwAPyIMAELTDAAAAAAABuoAAB1igAAhRiAAKEZAACxAAAAv92AAAAAAAAFL4AAIEQAADBmAAA/9IAAAAAAAAbqAAAONmAAFVGgABxs2Af4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAcbMAAONmAAHGzf//HJr//qrmAAAAAAAFVVUAAAAAAAAAAAAHWKAAEAAAAAAAAAAGDMAABFJAAATA4AAGDMAAApfAAAZ7YAAGDMAABS+AAAMGYAAD46AABntgAABuoAAjLN0AD/0gAAQa8A==", pi = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAWNzvG5wBQAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAAD0DVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAIbRoACXdtAAl8ugAJhgAACgE6AAobugAKjFoACqmAAArP7QALF3oACydgAAtRpgALYwAAC9eaAAwgegAMbVMADG/6AAyNAAAMmmAADKztAAyuQAAMtOAADLjaAAzrMwAM9HoADTAaAA188wANm20ADaYGAA2vTQANtJoADbnmAA2+egANvzMADcHaAA3IegAN0cAADdcNAA3YYAAN5vMADgFzAA4lOgAOJ+AADluNAA5iLQAOZ3oADnytAA6HRgAOly0ADq2zAA6wWgAOswAADrRTAA61pgAOxDoADsbgAA7xRgAPBSYAD2stAA99TQAPfw0AD6rGAA+5WgAPzToAD9aAAA/ecwAP4RoAD+uzABCVTQAQxlMAEMzzABDU5gAQ9LMAEQyNABGPugARmQAAEZ+gABG7cwARxg0AEd86ABHgjQAR8cYAEh2AABJ/jQASq0YAEvrGABL9bQATAWYAExKgABNqEwAT4qYAE+P6ABSoEwAWAoAAFx1zAAAAAAABvQAAB2NAAAhdkAAKICAACyAAAAwPMAAAAAAAAFNwAAIHKgADCsAABAUQAAAAAAAAhIAAARBaAAGYhgACILOAf4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAiC0AARBaAAIgs//+76b//md6AAAAAAAFVVYAAAAAAAAAAAAHY0AAEAAAAAAAAAAGFYAABFiAAATHwAAGFYAAApuAAAaEwAAGFYAABTcAAAMKwAAD6UAABoTAAABvQAAjX70AEBRAAAQg4A==", Zi = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAW5Ax4JwBgAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAADyDVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAGpYAAB6cIAAesKAAHtSAACCxIAAhF6AAIstAACM8AAAj0KAAJOVgACUi4AAlxkAAJgmAACfMgAAo5mAAKg+gACoZ4AAqigAAKr3gACsFoAArCsAAKyRgACszwAAr9oAALBpgAC0BAAAuKkAALqAgAC7JIAAu7QAALwGAAC8WAAAvJ6AALyqAAC80wAAvTmAAL3JAAC+GwAAvi+AAL8RAADAqwAAwtSAAML9gADGHQAAxoOAAMbVgADIHYAAyMGAAMm3gADLFAAAyz0AAMtmAADLeoAAy48AAMxwgADMmYAAzymAANBdAADWh4AA15+AANe7AADaX4AA20EAANx0gADdBAAA3X8AAN2oAADeTAAA6IwAAOuCgADr6QAA7GQAAO5QAADvwQAA966AAPg+AAD4pIAA+lMAAPr3AAD8fIAA/JEAAP2bgAEAQAABBi0AAQjRgAENn4ABDciAAQ4GAAEPEIABFFmAARujAAEbt4ABJ5GAATyBAAFNmwAAAAAAABuasAB1UVAAhNhQAKDLUACwqrAAv4EAAAAAAAAFLQAAIDSAADBOsAA/1bAAAAAAAAgCAAAQdgAAGLEAACDsCAf4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAg7AAAQdgAAIOwP/++KD//nTwAAAAAAAFVVUAAAAAAAAAAAAHVRUAEAAAAAAAAAAGCdUABFArAAS+lQAGCdUAApaAAAZ4QAAGCdUABS0AAAME6wAD4cAABnhAAABuawAjG+gAD/VrAAQY9Q==", Di = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAW+ruHXABwAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAADwDVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAF/wAABvpAAAb/QAAHCAAAB3xAAAeVQAAH/4AACBsAAAg/QAAIgsAACJHAAAi5mwAIygAACTgAAAl8wAAJxUAACcfAAAnjGwAJ78AACgFAAAoCgAAKCMAACgyAAAo8AAAKRMAACn0AAArFgAAK4kAACuxAAAr1AAAK+gAACv8AAAsDTgALBAAACwaAAAsMwAALFYAACxqAAAsbwAALKYAAC0KAAAtkQAALZsAAC5eAAAudwAALosAAC7bAAAvAwAALz8AAC+UAAAvngAAL6gAAC+tAAAvsgAAL+kAAC/zAAAwkwAAMN4AADJfAAAyo1QAMqoAADNPAAAzhgAAM9EAADP0AAA0EgAANBwAADREAAA2xAAAN30AADeWAAA3tAAAOCwAADiGAAA6dQAAOpgAADqxAAA7GgAAO0IAADuhAAA7pgAAO+cAADyMAAA9/gAAPqMAAD/PAAA/2QAAP+gAAEApAABBcwAAQzoAAEM/AABGIwAASz44AE9qAAAAAAAAButsAB1olAAhTQAAKE6UACxJJAAwAUgAAAAAAAFMJAAIEqwADBwAABAAbAAAAAAAAfQAAAQDyAAGBawACAeWAf4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAgHkAAQDyAAIB5f/+/w7//n6VAAAAAAAFVVUAAAAAAAAAAAAHWiUAEAAAAAAAAAAGDgAABFMlAATB2wAGDgAAAphJAAZ8twAGDgAABTCSAAMHAAAD5G4ABny3AAButwAjNCIAEABuAAQbyQ==", xi = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAWeMbKNgCAAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAADuDVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAEzMgABb0KAAXB0gAFyjAABjlaAAZRQgAGttwABtEoAAbz0gAHNF4AB0K2AAdo1AAHeIAAB+GwAAgjbgAIaMIACGsmAAiFUAAIkWYACKIiAAijVAAIqU4ACKzkAAjaUAAI4q4ACRh4AAldzAAJeUoACYLaAAmLOAAJkAAACZTIAAmY5gAJmZAACZv0AAmh7gAJqkwACa8UAAmwRgAJvWwACdVUAAn1mgAJ9/4ACiacAAoslgAKMV4ACkR+AApODgAKXGYACnC4AApzHAAKdYAACnayAAp35AAKhQoACoduAAqtrgAKv5wACxumAAsr/AALLZQAC1UGAAtiLAALdBoAC3x4AAuDpAALhggAC4+YAAwomAAMVNIADFrMAAxh+AAMfqgADJQsAA0KggANEuAADRjaAA0x9AANO4QADVI6AA1TbAANYvYADYpoAA3i3AAOCk4ADlIGAA5UagAOWAAADmeKAA62bgAPIzQADyRmAA/VTgARDdAAEg0UAAAAAAABu8AAB13wAAhXjAAKGNgACxgAAAwGhAAAAAAAAFM0AAIFtgADCJAABAIsAAAAAAAAd4gAAPW0AAFwjgAB62iAf4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAetoAAPW0AAHraP//Ckz//o9yAAAAAAAFVVYAAAAAAAAAAAAHXfAAEAAAAAAAAAAGESAABFVgAATEUAAGESAAApmgAAaAEAAGESAABTNAAAMIkAAD5nAABoAQAABu8AAjRkwAEAiwAAQd6A==", mi = "ATMAEgAAAH8AYQAHAAUABQAOAAUAAAAWlSOt9QCQAAAWVGVYIG1hdGggaXRhbGljIHN1YnNldAAAAAAAAAAAAAAAAAAAAAAACUVVUk0gVjIuMgAAAAAAAAAAAAAAAADsDVARBUdQAQBOUAEAUlABADFQAABKUAEAPlAAAElQAQBaUAAARlABAFxQAABAIAAAQVMAADgjAAAXUAAAHiAAABlSAQEnIwAAIVABAAUgAAAjIAAAHFABAzojAAAyIAAAIFIAADkgAQEdIwEANiAAABogAQEtIAAAS1MAACwjAABMUwEAWyABABEgAAAfUAAAXUAAAAAAAAAAAAAATyABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAABZQAAAWUAAAFlAAAAIQAAACEAAATTEAABhkAQhNMQAAAAAAAChQAABRUAAAP1AAAEhQAQFXUAAANVAAABVQAQVQUAEAVFAAAAlQAAAKUgAARVAAACZQAABgUAAAWVAAAFVQAQArUAUGWFMAADlQAAAlUAEAE1ARBVNQAAA9UA0EX1AJBENQAQEiUAkERFABAQAAAAAAAAAAAAAAAAAAAAAAAAAACFAAADkgAQAuUAAAEiABADNQAAAWIAEADFABAiojAQA7UAAABlAAAANTAAAkUAAAB1AAAF4gAABCIAAAKSABAC8jAAA3IwAADiAAAA8gAQALQAAAPCAAABQgAABWIAAAGyAAADAjAAAQIAEABCAAAAMjAAA0IAEBAAAAAAEAAAAAAAAAAAAAAAAEkscABXeyAAV8QAAFhDkABe4kAAYE6wAGZbkABn7HAAafzgAG3U4ABur5AAcPRwAHHjkAB4JyAAfBFQAIAyQACAVrAAgeVQAIKdwACDnOAAg68gAIQKQACEQOAAhvVQAId04ACKqOAAjsnAAJBs4ACQ/rAAkX5AAJHHIACSEAAAkk6wAJJY4ACSfVAAkthwAJNYAACToOAAk7MgAJR7kACV6AAAl9QAAJf4cACavyAAmxpAAJtjIACchrAAnRhwAJ3zIACfKOAAn01QAJ9xwACfhAAAn5ZAAKBesACggyAAospAAKPbkACpVrAAqk+QAKpoAACswVAArYnAAK6bIACvGrAAr4gAAK+scACwPkAAuVqwALv84AC8WAAAvMVQAL56sAC/wrAAxs6wAMdOQADHqVAAySgAAMm5wADLFAAAyyZAAMwTIADObHAA07DgANYKQADaT5AA2nQAANqqsADbl5AA4EpAAObEcADm1rAA8V+QAQP7kAETLyAAAAAAABuasAB1UVAAhNhQAKDLUACwqrAAv4EAAAAAAAAFLQAAIDRwADBOsAA/1bAAAAAAAAceQAAOocAAFfKwAB1DmAf4AAgH+AAYB/gAKAf4ADAH+AAQA9gAMAO4AEgDqABABBgAMAYYADAGeAAwABgAMAA4ADgAuAAwAAdQ4AAOocAAHUOf//FeT//qDVAAAAAAAFVVUAAAAAAAAAAAAHVRUAEAAAAAAAAAAGCdUABFArAAS+lQAGCdUAApaAAAZ4QAAGCdUABS0AAAME6wAD4cAABnhAAABuawAjG+cAD/VrAAQY9Q==", yi = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAWsJWMkwCgAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAADqGjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAPbgAAFyUAACQOAAAkSgAAJJoAACU/AAAmUgAAJ+IAACgZAAAp2wAAK5MAACu2AAAr/AAAL4AAAC/GAAAwEQAAMFcAADD8AAAxfgAAMycAADMsAAAzvQAAM9YAADREAAA2sAAAN1AAADf6AAA4BAAAOA4AADizAAA7gwAAO+IAADwPAAA/9wAARwkAAEeLAAAAAAAADBmAAB8dAAAlTSgALPEAAC/3YAAAAAAABVLoAAgRAAAP/SAAAAAAAAPoAgDCAAIAwgAEAAoJgAAEA8wAAAAAABVVVAAAAAAAAAAAAB8dAABAAAAAAAAAABgzAAARSQAAEwOAABgzAAAKXwAAGe2AABgzAAAUvgAADBmAAA+OgAAZ7YAAAbqAAIyzdAA/9IAAEGvA=", Vi = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAWKR7o6wBQAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAAD0GjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAerYAAJ2VAADX76AA2P7QANpoYADdUjAA4i0wAOk9MADqNdAA8ifQAPnsoAD6itAA+8cwAQurMAEM56ABDjqgAQ93AAESYNABFKxgARwtYAEcRAABHtNgAR9EYAEhNaABLCgAAS77MAEx+6ABMijQATJWAAE1P9ABQfYwAUOjoAFEbwABVhcAAXYMMAF4V9AAAAAAADCsAAB9KAAAlgxgALTIAADA8wAAAAAAABVqYAAgcqAAQFEAAAAAAAARqAgDCAAIAwgAEAAtXgAAEiWgAAAAAABVVWAAAAAAAAAAAAB9KAABAAAAAAAAAABhWAAARYgAAEx8AABhWAAAKbgAAGhMAABhWAAAU3AAADCsAAA+lAAAaEwAAAb0AAI1+9ABAUQAAEIOA=", Mi = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAWjvSeXgBgAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAADyGjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAXawAAH+eAAC4bAAAuXQAALrUAAC9qgAAwmQAAMlEAADKNgAA0fIAANmCAADaHAAA21AAAOrIAADr/AAA7UYAAO56AADxUAAA84wAAPraAAD68AAA/W4AAP3cAAD/wAABCmgAAQ0oAAEQFAABEEAAARBsAAETQgABH6IAASFEAAEiCgABMzoAAVJWAAFUkgAAAAAAADBOsAB8OAAAlOywALNtUAC/gQAAAAAAABVBUAAgNIAAP9WwAAAAAAARMAgDCAAIAwgAEAAsKdAAEapQAAAAAABVVVAAAAAAAAAAAAB8OAABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvoAA/1awAEGPU=", Wi = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAW249NFwBwAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAADwGjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAUt5QAHPukACrQuAArEQAAK2a4ACwXgAAtPiQALuq4AC8lpAAxB8gAMt84ADMEuAAzT7gANxQAADdfAAA3r1wAN/pcADirJAA5NmwAOv3IADsDJAA7noAAO7lIADwvJAA+x2wAP3LcAEApAABAM7gAQD5sAEDvOABD8qQARFhsAESIpABIuBQAUEtcAFDWpAAAAAAADBwAAB8jbAAlVNwALPpIADABSAAAAAAABVQAAAgSrAAQAGwAAAAAAAQvbgDCAAIAwgAEAArBCAAETTgAAAAAABVVVAAAAAAAAAAAAB8jbABAAAAAAAAAABg4AAARTJQAEwdsABg4AAAKYSQAGfLcABg4AAAUwkgADBwAAA+RuAAZ8twAAbrcAIzQiABAAbgAEG8k=", Ui = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAWZ1+2OgCAAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAADuGjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAQGtAAGCg4ACWh0AAl4HAAJjPwACbgKAAn/zAAKaCwACnaGAArr8gALXsIAC2fkAAt6KAAMZQAADHdEAAyK1gAMnRoADMgoAAzqFAANWPoADVpIAA2AHgANhqQADaNYAA5FIAAObuAADps8AA6d2AAOoHQADsuCAA+HYgAPoCwAD6vqABCw2gASiSYAEqsSAAAAAAADCJAAB8zgAAlaCAALRGAADAaEAAAAAAABVbAAAgW2AAQCLAAAAAAAAQTwgDCAAIAwgAEAAp54AAEMMAAAAAAABVVWAAAAAAAAAAAAB8zgABAAAAAAAAAABhEgAARVYAAExFAABhEgAAKZoAAGgBAABhEgAAUzQAADCJAAA+ZwAAaAEAAAbvAAI0ZMABAIsAAEHeg=", Ri = "AN0AEgAAAHgAJgAGAAQAAgACAAIAAAAWHpN8ugCQAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU0IgVjIuMgAAAAAAAAAAAAAAAADsGjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAIUAAAApAAAAAAAAAAAAAAB1AAAAfQAEAG0AAAAxAAAAiQAAADkAAABJAAAANQgAAI0AAAARAAQEGQgEBIEAAABdAAAAkQAAAHEAAABZAAAAQQAAAE0AAABlAAAAIQAAAC0AEABVAAAARQAAAJUAAABhAAAAMQAAAD0AAAAAAAAAAAAAAAAAAAB5AAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAPr9QAF4fAACSn1AAk5NQAJTYsACXd7AAm9YAAKIwsACjEFAAqjZQALEzsACxwgAAst6wAMEqsADCR1AAw3hQAMSVAADHNAAAyUSwANAFAADQGVAA0mcAANLMsADUjAAA3mVQAODwAADjo1AA48wAAOP0sADmk7AA8gOwAPOGAAD0PQABBB+wASDgUAEi8QAAAAAAADBOsAB8OAAAlOywALNtUAC/gQAAAAAAABVBUAAgNHAAP9WwAAAAAAAP4rgDCAAIAwgAEAAo0OAAEFOQAAAAAABVVVAAAAAAAAAAAAB8OAABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvnAA/1awAEGPU=", Ni = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAWTFKnrgCgAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAADqGzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAANp8AAFHugABuR4AAgHagAIGR0ACD2eAAisPgAI0vYACN8iAAlj4gAJiGMACaQLAAmrygAJu0YACmNtAAqCZgAKkeMACpmiAAqiewAK8z0AC1JgAAts7QALcnUAC3f9AAuQUwAMGYAADC1qAAxUIgAMYoMADGS6AAxm8AANKr4ADT/DAA1JuAAOJvgAD7duAA/UMgAAAAAAAwZgAAdYoAAJU0oACzxAAAv92AAAAAAAAVS6AAIEQAAD/0gAAAAAAAA3UAAAbqAAAKXwgDCAAIAwgAEAAjiAAADjZgAAAAAABVVVAAAAAAAAAAAAB1igABAAAAAAAAAABgzAAARSQAAEwOAABgzAAAKXwAAGe2AABgzAAAUvgAADBmAAA+OgAAZ7YAAAbqAAIyzdAA/9IAAEGvA=", Xi = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAWlB1XVwBQAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAAD0GzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAcxwAAJPSAAC1xgAAy42gAMzg0ADPnGAA1+RgANrKYADbs6AA5aOgAOhfMADqcTAA6wWgAOwuYAD4xNAA+xZgAPw/MAD806AA/X0wAQOI0AEKqAABDKTQAQ0O0AENeNABD0swARmQAAEbDaABHfOgAR8HMAEfMaABH1wAAS4EYAEvlzABMFYAAUDmAAFe4GABYQegAAAAAAAwrAAAdjQAAJYMYAC0yAAAwPMAAAAAAAAVamAAIHKgAEBRAAAAAAAABCQAAAhIAAAMbAgDCAAIAwgAEAAqjgAAEQWgAAAAAABVVWAAAAAAAAAAAAB2NAABAAAAAAAAAABhWAAARYgAAEx8AABhWAAAKbgAAGhMAABhWAAAU3AAADCsAAA+lAAAaEwAAAb0AAI1+9ABAUQAAEIOA=", ki = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAW/BiHugBgAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAADyGzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAV0kAAHbqgACXv4AArM8AAK4XAACwu4AAuL2AALuLAAC8bIAAxgiAAMitAADKrYAAyz0AAMxcAADYiAAA2sYAANvlAADcdIAA3RiAAOLxAADp1AAA68AAAOwmgADsjQAA7lAAAPg+AAD5rwAA/HyAAP2HAAD9sAAA/dkAAQwFgAENiwABDkOAAR5HgAE7RIABPVmAAAAAAAAwTrAAdVFQAJTssACzbVAAv4EAAAAAAAAVQVAAIDSAAD/VsAAAAAAABAEAAAgCAAAMAwgDCAAIAwgAEAApJwAAEHYAAAAAAABVVVAAAAAAAAAAAAB1UVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvoAA/1awAEGPU=", vi = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAWahQE5gBwAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAADwGzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAATVgAAGw0AACMPAAAoMgAAKIIAACknAAArGwAAK8oAACwBAAAuWQAALv4AAC97AAAvngAAL+QAADLcAAAzaAAAM64AADPRAAAz+QAANWYAADcUAAA3jAAAN6UAADe+AAA4LAAAOpgAADryAAA7oQAAO+IAADvsAAA79gAAP2sAAD/KAAA/9wAAQ98AAErxAABLcwAAAAAAAAwcAAAdaJQAJVTcACz6SAAwAUgAAAAAAAVUAAAIEqwAEABsAAAAAAAA+gAAAfQAAALuAgDCAAIAwgAEAAoJeAAEA8gAAAAAABVVVAAAAAAAAAAAAB1olABAAAAAAAAAABg4AAARTJQAEwdsABg4AAAKYSQAGfLcABg4AAAUwkgADBwAAA+RuAAZ8twAAbrcAIzQiABAAbgAEG8k=", Si = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAWoul3jACAAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAADuGzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAO2eAAFkbQAB378AAi7aAAIzqgACPZcAAlurAAJmMgACaYEAAo2ZAAKXhgACnwsAAqEmAAKlXAAC0xQAAtuAAALftgAC4dEAAuQ5AAL6LgADFAwAAxtEAAMcxQADHkYAAyTkAANKMAADT5oAA1ohAANeCgADXqQAA18+AAOUewADmjIAA5znAAPZDwAERfEABE3DAAAAAAAAwiQAAdd8AAJWggAC0RgAAwGhAAAAAAAAVWwAAIFtgAEAiwAAAAAAAA8KAAAeFAAALR4gDCAAIAwgAEAAmpIAAD3UAAAAAAABVVWAAAAAAAAAAAAB13wABAAAAAAAAAABhEgAARVYAAExFAABhEgAAKZoAAGgBAABhEgAAUzQAADCJAAA+ZwAAaAEAAAbvAAI0ZMABAIsAAEHeg=", Ji = "AOAAEgAAAHgAJwAGAAQABAACAAIAAAAWdd5K2ACQAAAXVGVYIG1hdGggc3ltYm9scyBzdWJzZXQAAAAAAAAAAAAAAAAAAAAACUVVU00gVjIuMgAAAAAAAAAAAAAAAADsGzEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUgAAAAAAAAIkAAAApAAAAAAAAAAAAAAB9AAAAdQAEAHEAAAA1AAAAjQAAAD0AAABBACAAOQgAAJEAEAARAAQEGQgEBIUAAABhAAAAlQAAAHkAEABZAAAASQAAAE0AAABpAAAAIQAAAC0AMABdAAAAUQAAAJkAAABlAAAAMQAAAEUAAAAAAAAAAAAAAAAAAACBAAAAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MAAANTAAAAAAAAAAAAAAJTAAAAAAAAAAAAAAAAAAAFUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxAAAAAAAAAAAAAAAAOOsgAFVgsABy6uAAhd3AAIcE4ACJZZAAkJoAAJMfkACT6nAAnI/AAJ7wcACgvZAAoT6wAKJA4ACtNHAArzjgALA7IACwvEAAsU/AALaSQAC8xHAAvn8gAL7bUAC/N5AAwM1QAMm8cADLCHAAzY4AAM59wADOorAAzseQANuIQADc5rAA3YywAOv1kAEGCnABB+oAAAAAAAAwTrAAdVFQAJTssACzbVAAv4EAAAAAAAAVQVAAIDRwAD/VsAAAAAAAA5pAAAc0cAAKzrgDCAAIAwgAEAAlBlAADs9QAAAAAABVVVAAAAAAAAAAAAB1UVABAAAAAAAAAABgnVAARQKwAEvpUABgnVAAKWgAAGeEAABgnVAAUtAAADBOsAA+HAAAZ4QAAAbmsAIxvnAA/1awAEGPU=", Ki = "AOUAEgAAAH8AFQAQABAAAgAAAAAAAAAWl7PuzQCgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAADqC4AAAAuAAAALgAAAC4AAAAuAAAACUAAAB5cAAAeXAAALZgAAC2YAABFDAAARQwAAC4AAAAiQAAANkAAABpAAABFDAAARQwAAEYoAABGKAAAMmwAADJsAAAObAAADmwAAA5sAAAObAAASQwAAEkMAABGKAAARigAABJAAAASQAAAREQAAFBEAABFQAAARUAAAC6wAAAusAAALrAAAC70AABJQAAAHkAAAB5AAAAtmAAAL5gAAC6wAAAusAAALvQAAC3gAAAt4AAALeAAAC3gAAAt4AAALvQAAC3gAAAuKAAABUAAABDIAAAtmAAALZgAAC3gAAAu9AAALeAAAC4oAAAtUAAALVAAAC1QAAAtUAAALeAAAC3gAAA+bAAAEvQAACFAAAAtUAAALVAAABDIAAAQyAAAIUAAACFAAAAhQAAALkAAAC94AAAveAAAL/wAAC/8AAAmABAAReAAAEXgAAAyQAAAGmwAABpsAAAa7AAAIkAAACJAAAAhEAAALkAAAC5sAAAubAAALVAAAC1QAAAdQAAAHUAAAClAAAApQAAALkAAAC5AAAAu9AAALvQAAC1UAAAtVAAATVAAAE1QAAASQAAAEkAAAEJkAAA6ZAAAHkAAAC5YAAAsRAAALMgAABBAAAAQQAAAMkAAABMAAAAUrAAALZgAAC2YAAAtmAAAAAAAAAARmZgAEccgABqqtAAgAAgAI45AACcceAAqqrQALjjsADAACAAwqqwAMccoADVVYAA445gAOb30ADxxzAA8liAAQAAMAEccgABVVWgAWOOgAAAAAAAYLzgAG444AB2ydAAhbugAIzDoACU/IAAovyAAKzM0ACxNrAAusXQAMF+UADTM4AA4rygAOqq0AD7iWAAAAAP/93rj//2ydAAA3dQAAkBIAAPhQAAFPyAABxx0AAi/IAAJ9SgAC5JAAAxxwAAOsXQAEF+UABivKAAe4lgAAAAAAAGZmAAAAAAAAAAAAAAAAAAAAAAAG444AEAADAAAAAAAK0voABky6AAcZhgAK+agABYR4AAabNQAFzmgABJ9KAAJmZgAD9JoABi2AAADMzQAmPXAAECj2AAQAAA==", ji = "AOcAEgAAAH8AFwAQABAAAgAAAAAAAAAWIokceABQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAAD0EKAAABCgAAAQoAAAEKAAABCgAAACQAAACXUAAAl1AAAQdgAAEHYAABNDAAATQwAAEKAAAAxwAAAScAAACHAAABNDAAATQwAAE4cAABOHAAARdwAAEXcAAAR3AAAEdwAABHcAAAR3AAAUQwAAFEMAABOHAAAThwAABXAAAAVwAAATEQAAFhEAABNAAAATQAAAELwAABCsAAAQrAAAEM0AABRAAAAJcAAACXAAABB2AAAK5gAAEKsAABCrAAAQzQAAEIgAABCIAAAQiAAAEIgAABCIAAAQvQAAEIgAABCaAAABQAAAAzIAABBmAAAQZgAAEIgAABC9AAAQiAAAEJoAABBUAAAQVAAAEFQAABBUAAAQiAAAEIgAAA93AAAFmQAAB0AAABBUAAAQVAAAAzIAAAMyAAAHQAAAB0AAAAdAAAAQcAAAEN4AABDeAAAQ/wAAEP8AAA5wBAATdwAAE3cAABFwAAAIdwAACHcAAAiXAAAMcAAADHAAAAxDAAAQcAAAEHcAABB3AAAQVAAAEFQAAAlAAAAJQAAADUAAAA1AAAAQcAAAEHAAABC9AAAQvQAAEGUAABBlAAAVVAAAFVQAAAVwAAAFcAAADoYAAAuGAAAJcAAAEKYAABARAAAQMgAABTAAAAUwAAARcAAABaAAAAYnAAAQdgAAEHYAABB2AAAAAAAAAAcOPQAHVVoACgANAAocegALxyYADOOaAA4AAwAOAA0ADxyAAA+OTQAP0o0AEDjzABCOOgAQk/oAERxzABFVZgAScdoAE45NABXHMwAYABoAHHHmAB2OWgAAAAAABletAAbjjQAICCYACLHGAAmdWgAKWvoACuOTAAt3nQAMPe0ADRydAA2iFgAOCLoAEFaTABFVZgASO5AAAAAA//5XrQAAQuYAAIfTAAGdWgACLUMAAp+DAAMfCgADglYABAAAAAR73QAE9KAABV/mAAXxXQAIVpMACjuQAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAbjjQAXjk0AAAAAAA7NygAGMw0ACBDtABBnYwAIgrMACA6QAAZ09gAEtg0AAzMzAAZmZgAH6UAAAZmaAB+uEwAWuFMABAAA", _i = "AOgAEgAAAH8AGAAQABAAAgAAAAAAAAAWDEXqNgBgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAADyD6AAAA+gAAAPoAAAD6AAAA+gAAACQAAACXUAAAl1AAAPZgAAD2YAABRDAAAUQwAAD6AAAApwAAATcAAAB3AAABRDAAAUQwAAFHkAABR5AAASeQAAEnkAAAN5AAADeQAAA3kAAAN5AAAVQwAAFUMAABR5AAAUeQAABXAAAAVwAAAUEQAAFxEAABRAAAAUQAAAD7wAAA+8AAAPvAAAD80AABVAAAAJcAAACXAAAA9mAAAL5gAAD6sAAA+rAAAPzQAAD4kAAA+JAAAPiQAAD4kAAA+JAAAPzQAAD4kAAA+aAAABQAAABDIAAA9mAAAPZgAAD4kAAA/NAAAPiQAAD5oAAA9UAAAPVAAAD1QAAA9UAAAPiQAAD4kAABF5AAAFmgAACEAAAA9UAAAPVAAABDIAAAQyAAAIQAAACEAAAAhAAAAPcAAAD94AAA/eAAAP/wAAD/8AAAxwBAAUeAAAFHgAABJwAAAHeQAAB3kAAAeZAAAKcAAACnAAAApDAAAPcAAAD3kAAA95AAAPVAAAD1QAAAlAAAAJQAAADUAAAA1AAAAPcAAAD3AAAA/NAAAPzQAAD2UAAA9lAAAWVAAAFlQAAAVwAAAFcAAAEHcAAA53AAAJcAAAD5YAAA8RAAAPMgAABSAAAAUgAAAScAAABbAAAAYpAAAPZgAAD2YAAA9mAAAAAAAAAAXaEwAGEvUACKqoAAlVUAAKOOAAC0JbAAxL1QAM45AADVVQAA5eywAOhLUADsj7AA8GowAPaDUAD2hFABAl1QAQJfAAEHHAABF7OwATjjAAFaElABnHEAAa0IsAAAAAAAY9KAAHEvMACAg9AAiwyAAJaGUAChjAAArzyAALO70ADCXrAAyTcAANGvgADY8wAA/lTQAQccAAEbilAAAAAP/+PSgAAAg9AAB/AAABaGUAAftlAAJDQwACqB0AAtedAAMsFQAEFEgABLUjAAUC4wAFjzAAB+VNAAm4pQAAAAAAAHd4AAAAAAAAAAAAAAAAAAAAAAAG440AFHHAAAAAAAANANAABkb9AAfCQAAN0WUABt6tAAgMKAAGttMABJe1AAKqqwAFVVUABpewAAFVVQAfu7sAFZmbAAQAAA==", Oi = "AOgAEgAAAH8AGAAQABAAAgAAAAAAAAAWuHXuNwBwAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAADwDqAAAA6gAAAOoAAADqAAAA6gAAACUAAACJYAAAiWAAAOZgAADmYAABRDAAAUQwAADqAAAAqQAAATkAAAB5AAABRDAAAUQwAAFJgAABSYAAAQmAAAEJgAAAOYAAADmAAAA5gAAAOYAAAVQwAAFUMAABSYAAAUmAAABZAAAAWQAAAUEQAAFxEAABRQAAAUUAAADrsAAA67AAAOuwAADs0AABVQAAAIkAAACJAAAA5mAAAM5gAADroAAA66AAAOzQAADpgAAA6YAAAOmAAADpgAAA6YAAAOzAAADpgAAA6pAAABUAAABDIAAA52AAAOdgAADpgAAA7MAAAOmAAADqkAAA5UAAAOVAAADlQAAA5UAAAOmAAADpgAABGYAAAFqQAACVAAAA5UAAAOVAAABDIAAAQyAAAJUAAACVAAAAlQAAAOkAAADt4AAA7eAAAO/wAADv8AAAuQBAAUhwAAFIcAABCQAAAHmAAAB5gAAAeoAAAKkAAACpAAAApDAAAOkAAADpgAAA6YAAAOVAAADlQAAAhQAAAIUAAADVAAAA1QAAAOkAAADpAAAA7MAAAOzAAADmUAAA5lAAAWVAAAFlQAAAWQAAAFkAAAEocAAA+HAAAIkAAADqYAAA4RAAAOMgAABSAAAAUgAAAQkAAABcAAAAYoAAAOZgAADmYAAA5mAAAAAAAAAAVFFQAFbbkAB+OSAAjbcAAJXXkACllpAAtVWQAMUUkADFlpAA1NOQANvwIADccgAA4WxQAOSSkADxxuAA9FGQAPtuAAD9dZABBBCQASOOkAFDDJABggiQAZHHkAAAAAAAYlMAAG444AB9lSAAh2MAAJDMIACcgeAAoMFQAKlUAACwWwAAvnoAAMksAADTIZAA92kAAPz0AAEThHAAAAAP/+JTD//9lSAAB2MAABNfcAAaibAAH52QACp3IAAwoQAAPr5wAEdacABKqLAAUc2wAFR1kAB3aQAAk4RwAAAAAAAHFgAAAAAAAAAAAAAAAAAAAAAAAG444AErryAAAAAAALt44ABiR3AAeKDgAMCM4ABYHnAAgKawAG5dkABJJJAAJJJQAEkkkABaaXAAEkkgAbMzIAEoOpAAQAAA==", Li = "AOYAEgAAAH8AFgAQABAAAgAAAAAAAAAWr1pEswCAAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAADuDJAAAAyQAAAMkAAADJAAAAyQAAACUAAAB4cAAAeHAAAMZgAADGYAABJDAAASQwAADJAAAAmAAAAPgAAABoAAABJDAAASQwAAEokAABKJAAANiQAADYkAAAOJAAADiQAAA4kAAAOJAAATQwAAE0MAABKJAAASiQAABIAAAASAAAASEQAAFREAABJQAAASUAAADKwAAAy8AAAMvAAADM0AABNQAAAHgAAAB4AAAAxmAAAM5gAADKwAAAysAAAMzQAADHgAAAx4AAAMeAAADHgAAAx4AAAMzQAADHgAAAyaAAABUAAABDIAAAxmAAAMZgAADHgAAAzNAAAMeAAADJoAAAxUAAAMVAAADFQAAAxUAAAMeAAADHgAABCJAAAEqwAACFAAAAxUAAAMVAAABDIAAAQyAAAIUAAACFAAAAhQAAAMgAAADO4AAAzuAAAM/wAADP8AAAqABAASeAAAEngAAA2AAAAGiQAABokAAAapAAAJgAAACYAAAAlDAAAMgAAADIkAAAyJAAAMVAAADFQAAAdQAAAHUAAAC1AAAAtQAAAMgAAADIAAAAzNAAAMzQAADGUAAAxlAAAUVAAAFFQAAASAAAAEgAAAEYgAAA6IAAAHgAAADJYAAAwRAAAMMgAABCAAAAQgAAANgAAABNAAAAUpAAAMZgAADGYAAAxmAAAAAAAAAASccgAEuOgABxVcAAiACAAJcdAACmOYAAtVYAALuOgADEcoAAy7yAANE+wADTjwAA4quAAO45gADxyAAA8qrAAPnHwAEQAQABLjoAAWqsAAF5yIAAAAAAAGDDwABsACAAewcgAIbV4ACPMQAAmadAAKmwYACwWwAAtx0AAMJVYADFz0AAzTDAANMzgADy4aABC26AAAAAD//gw8//+wcgAAbV4AAQKQAAFsYAABuZwAAeOQAAKbBgADEO4AA4YSAAQAAAAESY4ABNMMAAcG1gAItugAAAAAAABszgAAAAAAAAAAAAAAAAAAAAAABuOOABEAEAAAAAAACyQsAAaKlAAHUbAAC/xaAAZGUAAGpYwABaWMAASOOAACAAAABAAAAAZVVgABAAAAF8zMABIzNAAEAAA=", Ti = "AOYAEgAAAH8AFgAQABAAAgAAAAAAAAAW07GMBwCQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQU0gVjIuMgAAAAAAAAAAAAAAAADsDJAAAAyQAAAMkAAADJAAAAyQAAACYAAAB5gAAAeYAAAMdwAADHcAABJTAAASUwAADJAAAAmQAAAOkAAABpAAABJTAAASUwAAEpoAABKaAAANmwAADZsAAAObAAADmwAAA5sAAAObAAATUwAAE1MAABKaAAASmgAABJAAAASQAAASEQAAFREAABJgAAASYAAADLwAAAy8AAAMvAAADM0AABNgAAAHkAAAB5AAAAx3AAAM5wAADLwAAAy8AAAMzQAADIkAAAyJAAAMiQAADIkAAAyJAAAMzQAADIkAAAybAAABYAAABEIAAAx3AAAMdwAADIkAAAzNAAAMiQAADJsAAAxlAAAMZQAADGUAAAxlAAAMiQAADIkAABCbAAAEvAAACGAAAAxlAAAMZQAABEIAAARCAAAIYAAACGAAAAhgAAAMkAAADO4AAAzuAAAM/wAADP8AAAqQBAASiQAAEokAAA2QAAAGmwAABpsAAAa7AAAJkAAACZAAAAlUAAAMkAAADJsAAAybAAAMZQAADGUAAAdgAAAHYAAAC2AAAAtgAAAMkAAADJAAAAzNAAAMzQAADHYAAAx2AAAUZQAAFGUAAASQAAAEkAAAEZkAAA+ZAAAHkAAADKcAAAwRAAAMQgAABCAAAAQgAAANkAAABNAAAAU7AAAMdwAADHcAAAx3AAAAAAAAAAR4GQAEkWAABtoQAAg44AAJIsAACgygAAr2gAALoTAAC+BgAAxUrgAMnB4ADMpAAA20IAAOngAADqqcAA8ixAAPYesAEHHAABJFgAAV7QAAFtbgAAAAAAAF9OkABmUgAAbjjgAHjLcACGSMAAjaLAAJXQQACmTVAAsXMgALTwAAC/9OAAx3QAANMzkADsegABA3MAAAAAD//fTp//+MtwAASRkAAIAAAADQyQABMccAAYHAAAHTwAACbMUAAvPHAAMpMgAD/04ABHdAAAaYwAAINzAAAAAAAABpPgAAAAAAAAAAAAAAAAAAAAAABuOOABBxwAAAAAAAClkLAAaOJAAHMnwACtoAAAVt6wAHr5UABswHAASXtAABxxwAAtCeAAWhNAAA444AKn0nABAthAAEAAA=", zi = "AOMAEgAAAH8AEwAQABAAAgAAAAAAAAAWiLYWyACgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAADqDbsAAA27AAANzgAADc4AAA2ZAAANmQAADZkAAA2ZAAANuwAADbsAAA3OAAANzgAADXYAAA12AAANzgAADc4AAA2qAAANqgAADaoAAA2qAAAN/wAADf8AAA27AAANuwAADbwAAA28AAANvAAADbwAAA0RAAANzgAADogAAA6oAAANdgAADXYAAA27AAANuwAADc0AAA3NAAANuwAADbsAAA12AAANdgAADc4AAA3OAAAGqwAAAqsAAAFlAAADZQAACYAAAAyAAAAJgAAADIAAAA3OAAANzgAADZkAAA2ZAAAQEQAAEBEAABARAAAQEQAAEBEAABARAAANZQAADWUAAAiAAAAMgAAAC4AAAAyAAAAMgAAAC4AAAAmAAAANgAAADYAAAAOAAAAGhwAADYAAAAuAAAAPgAAADIAAAA2HAAAJgAAADYcAAAyAAAAIgAAAC4AAAAyAAAAMgAAAEIAAAAyAAAAMgAAAC4AAABHQAlwS0AAAEdACXhLgAAAAAAAACIAAAAqAAAAAAAAAAAAAAAAAAAAAAAAADIAAAAiAAAANMgAAC4AAAAWAAAALgAAADVQAAA1UAAANZQAADWUAAAFlAAADZQAADWUAAA0RAAANQwAADWUAAA28AAANvAAAECAAABAgAAANZQAACyAEAAiAAAAHgAAAB4AAAAQgAAAAAAAAAAOOOgAEccgABjjlAAbd4AAHHHMACAACAAik/QAI45AACcceAAo45QAKqq0AC447AAxxygAOOOYADxx1ABAAAwAeOOoAJVVdAAAAAAAF3rgABuOOAAdrgwAHut4ACKAlAAlOgAAKLPAACwWwAAtK0AAL25YADB26AAyzhgANMzgADmZlAA62UwAAAAD//d64//9rg///ut4AAKAlAAFOgAACLPAAAqqrAAMccAADStAAA7ctAAQF0wAEL8sABI6aAATYCAAGtlMAAAAAAACk+wAEAAAABMzQAAJmYAABmaAAB2hNABAAAAABmaAACtL6AAZMugAHGYYACvmoAAWEeAAGmzUABc5oAASfSgACZmYAA/SaAAYtgAAAzM0AJj1wABAo9gAEAAA=", Pi = "AOsAEgAAAH8AGwAQABAAAgAAAAAAAAAW/fYhFwBQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAAD0FssAABbLAAAW7gAAFu4AABapAAAWqQAAFqkAABapAAAWywAAFssAABbuAAAW7gAAFocAABaHAAAW7gAAFu4AABapAAAWugAAFqkAABa6AAAW/wAAFv8AABbLAAAWywAAFswAABbMAAAWzAAAFswAABYRAAAW7gAAF3YAABeWAAAWhwAAFocAABbLAAAWywAAFt0AABbdAAAWywAAFssAABaHAAAWhwAAFu4AABbuAAAMmAAAA5gAAAJlAAAGZQAAEHAAABVwAAAQcAAAFXAAABbuAAAW7gAAFqkAABapAAAYEQAAGBEAABgRAAAYEQAAGBEAABgRAAAWZQAAFmUAAA9wAAALcAAACXAAAAtwAAALcAAACXAAAAdwAAANcAAADXAAAAFwAAAEdQAADXAAAAlwAAAScAAAC3AAAA11AAAHcAAADXUAAAtwAAAFcAAACXAAAAtwAAALcAAAFHAAAAtwAAALcAAACXAAABmwAlwasAAAGbACXhrQAAAAAAAAD3AAABFwAAAAAAAAAAAAAAAAAAAAAAAAFXAAAA9wAAAWMgAAE3AAAApwAAATcAAAFlQAABZUAAAWZQAAFmUAAAJlAAAGZQAAFmUAABYRAAAWQwAAFmUAABbMAAAWzAAAGCAAABggAAAWZQAAEyAEAAVwAAAOcAAADnAAAAggAAAAAAAAAAY42gAGOOYAB1VaAAf/8wAI44AACY5AAAnHDQAKVV0ACqqaAAqqswALjiYAC8cmAAxxswAMqrYADOOaAA4ADQAOjkYADxxaAA8cgAAP/+YAEDjzABFVZgATjk0AFcczACeOZgAwcgAAAAAAAAZXrQAG440ACDymAAidpgAJnVoACpaqAAsFsAALglYADAAAAAzzqgANRG0ADfFdAA5wNgAO7uYAES9aAAAAAP/+V60AADymAACdpgABnVoAApaqAAMccwADglYABAAAAATzqgAFVaAABdoAAAYIugAGeg0ABu7mAAkvWgAAAAAAAOOQAAQAAAAEzNAAAmZgAAGZoAAHaEAAEAAAAAGZoAAOzcoABjMNAAgQ7QAQZ2MACIKzAAgOkAAGdPYABLYNAAMzMwAGZmYAB+lAAAGZmgAfrhMAFrhTAAQAAA==", qi = "AOsAEgAAAH8AGwAQABAAAgAAAAAAAAAWTxoEKwBgAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAADyFcwAABXMAAAV7gAAFe4AABWpAAAVqQAAFakAABWpAAAVzAAAFcwAABXuAAAV7gAAFYcAABWHAAAV7gAAFe4AABWqAAAVuwAAFaoAABW7AAAV/wAAFf8AABXMAAAVzAAAFcwAABXMAAAVzAAAFcwAABURAAAV7gAAF3cAABeXAAAVhwAAFYcAABXMAAAVzAAAFd0AABXdAAAVzAAAFcwAABWHAAAVhwAAFe4AABXuAAAKmAAAApgAAAFlAAAFZQAAD3AAABNwAAAPcAAAE3AAABXuAAAV7gAAFakAABWpAAAYEQAAGBEAABgRAAAYEQAAGBEAABgRAAAVZQAAFWUAAA1wAAAOcAAAC3AAAA5wAAAOcAAAC3AAAAlwAAAQcAAAEHAAAANwAAAEdgAAEHAAAAtwAAAUcAAADnAAABB2AAAJcAAAEHYAAA5wAAAGcAAAC3AAAA5wAAAOcAAAFnAAAA5wAAAOcAAAC3AAABmwAlwasAAAGbACXhrgAAAAAAAADXAAABFwAAAAAAAAAAAAAAAAAAAAAAAAE3AAAA1wAAAVMgAAEnAAAAhwAAAScAAAFVQAABVUAAAVZQAAFWUAAAFlAAAFZQAAFWUAABURAAAVQwAAFWUAABXMAAAVzAAAGCAAABggAAAVZQAAEiAEAAZwAAAMcAAADHAAAAcgAAAAAAAAAAUJewAGEvUABjjdAAf/+AAIJesACOOFAAjjjQAJL2UACccTAAo44AAKqqAACwl4AAtCWwALji0ADEvVAAxxuwAM0JMADVVQAA5eywAPHGMAD2hFAA//8AARezsAE44wACQl2wAscbAAAAAAAAY9KAAG440ACBCAAAht+AAJaGUACj0YAAsFsAALO70ADAAAAAyc+wANGvgADY8wAA4THQAOZeAAEJVVAAAAAP/+PSgAABCAAABt+AABaGUAAj0YAAKqqAADLBUABAAAAASE1QAEtSMABQK7AAWPMAAGEx0ABmXgAAiVVQAAAAAAANCYAAQAAAAEzNAAAmZgAAGZoAAHaEUAEAAAAAGZoAANANAABkb9AAfCQAAN0WUABt6tAAgMKAAGttMABJe1AAKqqwAFVVUABpewAAFVVQAfu7sAFZmbAAQAAA==", $i = "AOsAEgAAAH8AGwAQABAAAgAAAAAAAAAWcXnAgQBwAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAADwFLsAABS7AAAU3gAAFN4AABSIAAAUiAAAFIgAABSIAAAUuwAAFLsAABTeAAAU3gAAFHcAABR3AAAU3gAAFN4AABSZAAAUqgAAFJkAABSqAAAU/wAAFP8AABS7AAAUuwAAFLwAABS8AAAUvAAAFLwAABQRAAAU3gAAF3cAABeHAAAUdwAAFHcAABS7AAAUuwAAFM0AABTNAAAUuwAAFLsAABR3AAAUdwAAFN4AABTeAAAJiAAAAogAAAFlAAAEZQAADnAAABNwAAAOcAAAE3AAABTeAAAU3gAAFIgAABSIAAAYEQAAGBEAABgRAAAYEQAAGBEAABgRAAAUZQAAFGUAAAxwAAAPcAAADXAAAA9wAAAPcAAADXAAAApwAAAScAAAEnAAAANwAAAFdgAAEnAAAA1wAAAVcAAAD3AAABJ2AAAKcAAAEnYAAA9wAAAIcAAADXAAAA9wAAAPcAAAFnAAAA9wAAAPcAAADXAAABmwAlwasAAAGbACXhrgAAAAAAAADHAAABBwAAAAAAAAAAAAAAAAAAAAAAAAE3AAAAxwAAAUMgAAEXAAAAdwAAARcAAAFFQAABRUAAAUZQAAFGUAAAFlAAAEZQAAFGUAABQRAAAUQwAAFGUAABS8AAAUvAAAGCAAABggAAAUZQAAESAEAAhwAAALcAAAC3AAAAYgAAAAAAAAAARxyQAFbbkABjjgAAdlmQAH//sACBx1AAhhiQAI44kACV15AAnHFwAKIIcACllpAAqqpQALVVkAC44yAAvTUAAMUUkADHHAAA1NOQAOSSkADxxpAA//9wAQQQkAEjjpACH36QAp12kAAAAAAAYlMAAG444AB+blAAhA1QAJNfcACfUVAAsFsAAMFOIADHWnAAyv2QANMhkADbFFAA3zqQAOZmUAEBCrAAAAAP/+JTD//+blAABA1QABNfcAAfUVAAKqqQADChAABBTiAAR1pwAEr9kABRzbAAVHWQAFsUUABfOpAAgQqwAAAAAAAMMOAAQAAAAEzNAAAmZgAAGZoAAHaEcAEAAAAAGZoAALt44ABiR3AAeKDgAMCM4ABYHnAAgKawAG5dkABJJJAAJJJQAEkkkABaaXAAEkkgAbMzIAEoOpAAQAAA==", AB = "AOsAEgAAAH8AGwAQABAAAgAAAAAAAAAWcMpwzACAAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAADuFLsAABS7AAAU3gAAFN4AABSYAAAUmAAAFJgAABSYAAAUuwAAFLsAABTeAAAU3gAAFHYAABR2AAAU3gAAFN4AABSqAAAUqgAAFKoAABSqAAAU/wAAFP8AABS7AAAUuwAAFLwAABS8AAAUvAAAFLwAABQRAAAU3gAAFocAABaXAAAUdgAAFHYAABS7AAAUuwAAFM0AABTNAAAUuwAAFLsAABR2AAAUdgAAFN4AABTeAAAImQAAApkAAAFlAAAEZQAADYAAABKAAAANgAAAEoAAABTeAAAU3gAAFJgAABSYAAAYEQAAGBEAABgRAAAYEQAAGBEAABgRAAAUZQAAFGUAAAuAAAARgAAADoAAABGAAAARgAAADoAAAAyAAAATgAAAE4AAAAOAAAAHhgAAE4AAAA6AAAAVgAAAEYAAABOGAAAMgAAAE4YAABGAAAAJgAAADoAAABGAAAARgAAAF4AAABGAAAARgAAADoAAABnAAlwawAAAGcACXhrgAAAAAAAAC4AAAA+AAAAAAAAAAAAAAAAAAAAAAAAAEoAAAAuAAAAUMgAAEIAAAAaAAAAQgAAAFFQAABRUAAAUZQAAFGUAAAFlAAAEZQAAFGUAABQRAAAUQwAAFGUAABS8AAAUvAAAGCAAABggAAAUZQAAECAEAAmAAAAKgAAACoAAAAUgAAAAAAAAAAPHIAAEuOgABjjiAAaceAAHTkAAB45AAAf//gAIgAgACOOMAAk47AAJcdAACccaAApjmAAKqqgACtx8AAtVYAALjjYADEcoAAxxxAANOPAADxxuAA8cgAAP//wAEQAQACAckAAnqtAAAAAAAAYMPAAG444AB7xOAAgStgAJApAACba8AAqyogALBbAAC+v0AAxJjgAM0wwADUBUAA2L0AAOZmQAD5Q0AAAAAP/+DDz//7xOAAAStgABApAAAba8AAKupgADHHAAA9foAAQAAAAESY4ABL7cAATnPAAFTXIABYvQAAeUNAAAAAAAALjkAAQAAAAEzNAAAmZgAAGZoAAHaEoAEAAAAAGZoAALJCwABoqUAAdRsAAL/FoABkZQAAaljAAFpYwABI44AAIAAAAEAAAABlVWAAEAAAAXzMwAEjM0AAQAAA==", eB = "AOsAEgAAAH8AGwAQABAAAgAAAAAAAAAWqgC1YQCQAAAQVGVYIG1hdGggc3ltYm9scwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACU1TQk0gVjIuMgAAAAAAAAAAAAAAAADsFLsAABS7AAAU3gAAFN4AABSZAAAUmQAAFJkAABSZAAAUuwAAFLsAABTeAAAU3gAAFHYAABR2AAAU3gAAFN4AABSqAAAUqgAAFKoAABSqAAAU/wAAFP8AABS7AAAUuwAAFLwAABS8AAAUvAAAFLwAABQRAAAU3gAAFYgAABWoAAAUdgAAFHYAABS7AAAUuwAAFM0AABTNAAAUuwAAFLsAABR2AAAUdgAAFN4AABTeAAAIqgAAAqoAAAFlAAAEZQAADYAAABKAAAANgAAAEoAAABTeAAAU3gAAFJkAABSZAAAYEQAAGBEAABgRAAAYEQAAGBEAABgRAAAUZQAAFGUAAAuAAAARgAAAD4AAABGAAAARgAAAD4AAAAyAAAATgAAAE4AAAAOAAAAHhwAAE4AAAA+AAAAWgAAAEYAAABOHAAAMgAAAE4cAABGAAAAJgAAAD4AAABGAAAARgAAAF4AAABGAAAARgAAAD4AAABnQAlwa0AAAGdACXhrgAAAAAAAAC4AAAA6AAAAAAAAAAAAAAAAAAAAAAAAAEoAAAAuAAAAUMgAAEIAAAAaAAAAQgAAAFFQAABRUAAAUZQAAFGUAAAFlAAAEZQAAFGUAABQRAAAUQwAAFGUAABS8AAAUvAAAGCAAABggAAAUZQAAECAEAAmAAAAKgAAACoAAAAUgAAAAAAAAAAOngAAEkWAABjjkAAZlIAAHD8sAB08AAAgAAAAIOOAACOOOAAjmtAAJIsAACcccAAoMoAAKgZAACqqrAAr2gAALjjkAC+BgAAxxxwAMykAADp4AAA8ccgAQAAAAEHHAAB8PwAAmXsAAAAAAAAX06QAG444AB5NXAAfmOQAI0MkACX/0AApvNwALBbAAC45pAAwAXAAMd0AADOzkAA0wBwAOZmQADyHAAAAAAP/99On//5NX///mOQAA0MkAAX/0AAJvNwACqqsAAxxyAAOOaQAEAFwABGQgAASKYAAE7OQABS5LAAchwAAAAAAAAK3UAAQAAAAEzNAAAmZgAAGZoAAHaEwAEAAAAAGZoAAKWQsABo4kAAcyfAAK2gAABW3rAAevlQAGzAcABJe0AAHHHAAC0J4ABaE0AADjjgAqfScAEC2EAAQAAA==", tB = {
  cmb10: Hr,
  cmbsy10: Fr,
  cmbsy6: Yr,
  cmbsy7: pr,
  cmbsy8: Zr,
  cmbsy9: Dr,
  cmbx10: xr,
  cmbx12: mr,
  cmbx5: yr,
  cmbx6: Vr,
  cmbx7: Mr,
  cmbx8: Wr,
  cmbx9: Ur,
  cmbxsl10: Rr,
  cmbxti10: Nr,
  cmcsc10: Xr,
  cmcsc8: kr,
  cmcsc9: vr,
  cmdunh10: Sr,
  cmex10: Jr,
  cmex7: Kr,
  cmex8: jr,
  cmex9: _r,
  cmff10: Or,
  cmfi10: Lr,
  cmfib8: Tr,
  cminch: zr,
  cmitt10: Pr,
  cmmi10: qr,
  cmmi12: $r,
  cmmi5: Ag,
  cmmi6: eg,
  cmmi7: tg,
  cmmi8: ng,
  cmmi9: rg,
  cmmib10: gg,
  cmmib6: ig,
  cmmib7: Bg,
  cmmib8: og,
  cmmib9: ag,
  cmr10: lg,
  cmr12: cg,
  cmr17: sg,
  cmr5: ug,
  cmr6: Cg,
  cmr7: dg,
  cmr8: wg,
  cmr9: Qg,
  cmsl10: hg,
  cmsl12: fg,
  cmsl8: Ig,
  cmsl9: Gg,
  cmsltt10: Eg,
  cmss10: bg,
  cmss12: Hg,
  cmss17: Fg,
  cmss8: Yg,
  cmss9: pg,
  cmssbx10: Zg,
  cmssdc10: Dg,
  cmssi10: xg,
  cmssi12: mg,
  cmssi17: yg,
  cmssi8: Vg,
  cmssi9: Mg,
  cmssq8: Wg,
  cmssqi8: Ug,
  cmsy10: Rg,
  cmsy5: Ng,
  cmsy6: Xg,
  cmsy7: kg,
  cmsy8: vg,
  cmsy9: Sg,
  cmtcsc10: Jg,
  cmtex10: Kg,
  cmtex8: jg,
  cmtex9: _g,
  cmti10: Og,
  cmti12: Lg,
  cmti7: Tg,
  cmti8: zg,
  cmti9: Pg,
  cmtt10: qg,
  cmtt12: $g,
  cmtt8: Ai,
  cmtt9: ei,
  cmu10: ti,
  cmvtt10: ni,
  euex10: ri,
  euex7: gi,
  euex8: ii,
  euex9: Bi,
  eufb10: oi,
  eufb5: ai,
  eufb6: li,
  eufb7: ci,
  eufb8: si,
  eufb9: ui,
  eufm10: Ci,
  eufm5: di,
  eufm6: wi,
  eufm7: Qi,
  eufm8: hi,
  eufm9: fi,
  eurb10: Ii,
  eurb5: Gi,
  eurb6: Ei,
  eurb7: bi,
  eurb8: Hi,
  eurb9: Fi,
  eurm10: Yi,
  eurm5: pi,
  eurm6: Zi,
  eurm7: Di,
  eurm8: xi,
  eurm9: mi,
  eusb10: yi,
  eusb5: Vi,
  eusb6: Mi,
  eusb7: Wi,
  eusb8: Ui,
  eusb9: Ri,
  eusm10: Ni,
  eusm5: Xi,
  eusm6: ki,
  eusm7: vi,
  eusm8: Si,
  eusm9: Ji,
  msam10: Ki,
  msam5: ji,
  msam6: _i,
  msam7: Oi,
  msam8: Li,
  msam9: Ti,
  msbm10: zi,
  msbm5: Pi,
  msbm6: qi,
  msbm7: $i,
  msbm8: AB,
  msbm9: eB
};
var vt;
function nB() {
  if (vt) return ge;
  vt = 1;
  var o = ge && ge.__read || function(c, w) {
    var V = typeof Symbol == "function" && c[Symbol.iterator];
    if (!V) return c;
    var I = V.call(c), s, C = [], x;
    try {
      for (; (w === void 0 || w-- > 0) && !(s = I.next()).done; ) C.push(s.value);
    } catch (U) {
      x = { error: U };
    } finally {
      try {
        s && !s.done && (V = I.return) && V.call(I);
      } finally {
        if (x) throw x.error;
      }
    }
    return C;
  }, l = ge && ge.__spread || function() {
    for (var c = [], w = 0; w < arguments.length; w++) c = c.concat(o(arguments[w]));
    return c;
  };
  Object.defineProperty(ge, "__esModule", { value: !0 });
  var y = br(), b = tB, X = 1, u = 2, H = 3, n = 128, i = {
    header: 0,
    character_info: 1,
    width: 2,
    height: 3,
    depth: 4,
    italic_correction: 5,
    lig_kern: 6,
    kern: 7,
    extensible_character: 8,
    font_parameter: 9
  };
  function p(c, w) {
    return c + 4 * w;
  }
  var D = (
    /** @class */
    function() {
      function c(w) {
        this.position = 0, this.stream = w, this.read_lengths(), this.read_header(), this.read_font_parameters(), this.read_lig_kern_programs(), this.read_characters();
      }
      return c.prototype.seek = function(w) {
        this.position = w;
      }, c.prototype.read_unsigned_byte1 = function(w) {
        w && (this.position = w);
        var V = this.stream.readUInt8(this.position);
        return this.position = this.position + 1, V;
      }, c.prototype.read_unsigned_byte2 = function(w) {
        w && (this.position = w);
        var V = this.stream.readUInt16BE(this.position);
        return this.position = this.position + 2, V;
      }, c.prototype.read_unsigned_byte4 = function(w) {
        w && (this.position = w);
        var V = this.stream.readUInt32BE(this.position);
        return this.position = this.position + 4, V;
      }, c.prototype.read_four_byte_numbers_in_table = function(w, V) {
        return this.seek(this.position_in_table(w, V)), [
          this.read_unsigned_byte1(),
          this.read_unsigned_byte1(),
          this.read_unsigned_byte1(),
          this.read_unsigned_byte1()
        ];
      }, c.prototype.read_extensible_recipe = function(w) {
        return this.read_four_byte_numbers_in_table(i.extensible_character, w);
      }, c.prototype.read_fix_word = function(w) {
        w && (this.position = w);
        var V = this.stream.readUInt32BE(this.position);
        return this.position = this.position + 4, V;
      }, c.prototype.read_fix_word_in_table = function(w, V) {
        return this.read_fix_word(this.position_in_table(w, V));
      }, c.prototype.read_bcpl = function(w) {
        w && (this.position = w);
        var V = this.read_unsigned_byte1(), I = this.stream.slice(this.position, this.position + V).toString("ascii");
        return this.position += V, I;
      }, c.prototype.seek_to_table = function(w, V) {
        V ? this.seek(this.position_in_table(w, V)) : this.seek(this.table_pointers[w]);
      }, c.prototype.position_in_table = function(w, V) {
        return p(this.table_pointers[w], V);
      }, c.prototype.read_lengths = function() {
        this.table_lengths = [], this.seek(0), this.entire_file_length = this.read_unsigned_byte2();
        var w = this.read_unsigned_byte2();
        this.smallest_character_code = this.read_unsigned_byte2(), this.largest_character_code = this.read_unsigned_byte2();
        var V = 18;
        this.table_lengths[i.header] = Math.max(V, w), this.number_of_chars = this.largest_character_code - this.smallest_character_code + 1, this.table_lengths[i.character_info] = this.number_of_chars;
        for (var I = i.width; I <= i.font_parameter; I++)
          this.table_lengths[I] = this.read_unsigned_byte2();
        this.table_pointers = [], this.table_pointers[i.header] = 24;
        for (var s = i.header; s < i.font_parameter; s++)
          this.table_pointers[s + 1] = this.position_in_table(s, this.table_lengths[s]);
        var C = this.position_in_table(i.font_parameter, this.table_lengths[i.font_parameter]);
        if (C != p(0, this.entire_file_length))
          throw Error("Bad TFM file");
      }, c.prototype.read_header = function() {
        this.seek_to_table(i.header);
        var w = this.read_unsigned_byte4(), V = this.read_fix_word(), I = this.table_pointers[i.character_info], s = this.position, C;
        s < I && (C = this.read_bcpl());
        var x = 40;
        s += x;
        var U;
        s < I && (U = this.read_bcpl(s));
        var N = 20;
        s += N, s < I && (this.read_unsigned_byte1(s), this.read_unsigned_byte2(), this.read_unsigned_byte1()), this.tfm = new y.Tfm(this.smallest_character_code, this.largest_character_code, w, V, C, U);
      }, c.prototype.read_font_parameters = function() {
        this.seek_to_table(i.font_parameter);
        var w = this;
        this.tfm.character_coding_scheme == "TeX math italic" || this.tfm.set_font_parameters(l(Array(7).keys()).map(function() {
          return w.read_fix_word();
        })), this.tfm.character_coding_scheme == "TeX math symbols" && this.tfm.set_math_symbols_parameters(l(Array(15).keys()).map(function() {
          return w.read_fix_word();
        })), (this.tfm.character_coding_scheme == "TeX math extension" || this.tfm.character_coding_scheme == "euler substitutions only") && this.tfm.set_math_extension_parameters(l(Array(6).keys()).map(function() {
          return w.read_fix_word();
        }));
      }, c.prototype.read_lig_kern_programs = function() {
        this.seek_to_table(i.lig_kern);
        var w = this.read_unsigned_byte1(), V = this.read_unsigned_byte1(), I = this.read_unsigned_byte1(), s = this.read_unsigned_byte1();
        if (w == 255)
          throw Error("Font has right boundary char");
        this.seek_to_table(i.lig_kern, this.table_lengths[i.lig_kern] - 1);
        var C = this.read_unsigned_byte1();
        if (V = this.read_unsigned_byte1(), I = this.read_unsigned_byte1(), s = this.read_unsigned_byte1(), C == 255)
          throw Error("Font has left boundary char program");
        for (var x = !0, U = 0; U < this.table_lengths[i.lig_kern]; U++) {
          this.seek_to_table(i.lig_kern, U);
          var N = this.read_unsigned_byte1();
          V = this.read_unsigned_byte1(), I = this.read_unsigned_byte1(), s = this.read_unsigned_byte1(), x && N > 128 && (N = this.read_unsigned_byte1(), V = this.read_unsigned_byte1(), I = this.read_unsigned_byte1(), s = this.read_unsigned_byte1());
          var q = N >= 128;
          if (I >= n) {
            var L = 256 * (I - n) + s, $ = this.read_fix_word_in_table(i.kern, L);
            new y.TfmKern(this.tfm, U, q, V, $);
          } else {
            var GA = I >> 2, _ = (I & 2) == 0, AA = (I & 1) == 0, aA = s;
            new y.TfmLigature(this.tfm, U, q, V, aA, GA, _, AA);
          }
          x = q == !0;
        }
      }, c.prototype.read_characters = function() {
        for (var w = this.smallest_character_code; w < this.largest_character_code; w++)
          this.process_char(w);
      }, c.prototype.process_char = function(w) {
        var V = this.read_char_info(w), I = V.width_index, s = V.height_index, C = V.depth_index, x = V.italic_index, U = V.tag, N = V.remainder, q = 0;
        I != 0 && (q = this.read_fix_word_in_table(i.width, I));
        var L = 0;
        s != 0 && (L = this.read_fix_word_in_table(i.height, s));
        var $ = 0;
        C != 0 && ($ = this.read_fix_word_in_table(i.depth, C));
        var GA = 0;
        x != 0 && (GA = this.read_fix_word_in_table(i.italic_correction, x));
        var _, AA, aA;
        U == X && (_ = N), U == u && (AA = N), U == H && (aA = this.read_extensible_recipe(N)), aA !== void 0 ? new y.TfmExtensibleChar(this.tfm, w, q, L, $, GA, aA, _, AA) : new y.TfmChar(this.tfm, w, q, L, $, GA, _, AA);
      }, c.prototype.read_char_info = function(w) {
        var V = w - this.smallest_character_code, I = [];
        return this.seek_to_table(i.character_info, V), I[0] = this.read_unsigned_byte1(), I[1] = this.read_unsigned_byte1(), I[2] = this.read_unsigned_byte1(), I[3] = this.read_unsigned_byte1(), {
          width_index: I[0],
          height_index: I[1] >> 4,
          depth_index: I[1] & 15,
          italic_index: I[2] >> 6,
          tag: I[2] & 3,
          remainder: I[3]
        };
      }, c;
    }()
  );
  function f(c) {
    var w = new D(c);
    return w.tfm;
  }
  function Y(c) {
    if (b[c]) {
      var w = Buffer.from(b[c], "base64");
      return f(w);
    }
    throw Error("Could not find font " + c);
  }
  return ge.loadFont = Y, ge;
}
var St;
function Ln() {
  if (St) return be;
  St = 1, Object.defineProperty(be, "__esModule", { value: !0 });
  var o = nB(), l = (
    /** @class */
    /* @__PURE__ */ function() {
      function X(u) {
        u ? (this.h = u.h, this.v = u.v, this.w = u.w, this.x = u.x, this.y = u.y, this.z = u.z) : this.h = this.v = this.w = this.x = this.y = this.z = 0;
      }
      return X;
    }()
  ), y = (
    /** @class */
    /* @__PURE__ */ function() {
      function X(u) {
        this.name = u.name, this.checksum = u.checksum, this.scaleFactor = u.scaleFactor, this.designSize = u.designSize;
      }
      return X;
    }()
  );
  be.DviFont = y;
  var b = (
    /** @class */
    function() {
      function X() {
        this.fonts = [];
      }
      return X.prototype.preamble = function(u, H, n, i) {
      }, X.prototype.pushColor = function(u) {
      }, X.prototype.popColor = function() {
      }, X.prototype.push = function() {
        this.stack.push(new l(this.position));
      }, X.prototype.pop = function() {
        this.position = this.stack.pop();
      }, X.prototype.beginPage = function(u) {
        this.stack = [], this.position = new l();
      }, X.prototype.endPage = function() {
      }, X.prototype.post = function(u) {
      }, X.prototype.postPost = function(u) {
      }, X.prototype.putRule = function(u) {
      }, X.prototype.moveRight = function(u) {
        this.position.h += u;
      }, X.prototype.moveDown = function(u) {
        this.position.v += u;
      }, X.prototype.setFont = function(u) {
        this.font = u;
      }, X.prototype.putSVG = function(u) {
      }, X.prototype.putText = function(u) {
        return 0;
      }, X.prototype.loadFont = function(u) {
        var H = new y(u);
        return H.metrics = o.loadFont(u.name), H;
      }, X;
    }()
  );
  return be.Machine = b, be;
}
var Jt;
function rB() {
  if (Jt) return he;
  Jt = 1;
  var o = he && he.__extends || /* @__PURE__ */ function() {
    var b = function(X, u) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(H, n) {
        H.__proto__ = n;
      } || function(H, n) {
        for (var i in n) n.hasOwnProperty(i) && (H[i] = n[i]);
      }, b(X, u);
    };
    return function(X, u) {
      b(X, u);
      function H() {
        this.constructor = X;
      }
      X.prototype = u === null ? Object.create(u) : (H.prototype = u.prototype, new H());
    };
  }();
  Object.defineProperty(he, "__esModule", { value: !0 });
  var l = Ln(), y = (
    /** @class */
    function(b) {
      o(X, b);
      function X(u) {
        var H = b.call(this) || this;
        return H.output = u, H.color = "black", H.colorStack = [], H.svgDepth = 0, H;
      }
      return X.prototype.pushColor = function(u) {
        this.colorStack.push(this.color), this.color = u;
      }, X.prototype.popColor = function() {
        this.color = this.colorStack.pop();
      }, X.prototype.putSVG = function(u) {
        var H = this.position.h * this.pointsPerDviUnit, n = this.position.v * this.pointsPerDviUnit;
        this.svgDepth += (u.match(/<svg>/g) || []).length, this.svgDepth -= (u.match(/<\/svg>/g) || []).length, u = u.replace("<svg>", '<svg width="10pt" height="10pt" viewBox="0 0 10 10" style="overflow: visible; position: absolute;">'), u = u.replace(/{\?x}/g, H.toString()), u = u.replace(/{\?y}/g, n.toString()), this.output.write(u);
      }, X.prototype.preamble = function(u, H, n, i) {
        var p = n * u / 1e3 / H;
        this.pointsPerDviUnit = p * 72.27 / 1e5 / 2.54;
      }, X.prototype.putRule = function(u) {
        var H = u.a * this.pointsPerDviUnit, n = u.b * this.pointsPerDviUnit, i = this.position.h * this.pointsPerDviUnit, p = this.position.v * this.pointsPerDviUnit, D = p - H;
        this.output.write('<span style="background: ' + this.color + "; position: absolute; top: " + D + "pt; left: " + i + "pt; width:" + n + "pt; height: " + H + `pt;"></span>
`);
      }, X.prototype.putText = function(u) {
        for (var H = 0, n = 0, i = 0, p = "", D = 0; D < u.length; D++) {
          var f = u[D], Y = this.font.metrics.characters[f];
          if (Y === void 0)
            throw Error("Could not find font metric for " + f);
          H += Y.width, n = Math.max(n, Y.height), i = Math.max(i, Y.depth), f < 32 ? p += "&#" + (127 + f + 32 + 4) + ";" : p += String.fromCharCode(f);
        }
        var c = this.font.metrics.designSize / 1048576 * 65536 / 1048576, I = (this.position.v - n * c) * this.pointsPerDviUnit, w = this.position.h * this.pointsPerDviUnit;
        H * this.pointsPerDviUnit * c;
        var V = n * this.pointsPerDviUnit * c;
        i * this.pointsPerDviUnit * c;
        var I = this.position.v * this.pointsPerDviUnit, s = this.font.metrics.designSize / 1048576 * this.font.scaleFactor / this.font.designSize;
        if (this.svgDepth == 0)
          this.output.write('<span style="color: ' + this.color + "; font-family: " + this.font.name + "; font-size: " + s + "pt; position: absolute; top: " + (I - V) + "pt; left: " + w + 'pt; overflow: visible;"><span style="margin-top: -' + s + "pt; line-height: 0pt; height: " + s + 'pt; display: inline-block; vertical-align: baseline; ">' + p + '</span><span style="display: inline-block; vertical-align: ' + V + `pt; height: 0pt; line-height: 0;"></span></span>
`);
        else {
          var C = this.position.v * this.pointsPerDviUnit;
          this.output.write('<text alignment-baseline="baseline" y="' + C + '" x="' + w + '" style="font-family: ' + this.font.name + "; font-size: " + s + ';">' + p + `</text>
`);
        }
        return H * c * this.font.scaleFactor / this.font.designSize;
      }, X;
    }(l.Machine)
  );
  return he.default = y, he;
}
var ie = {}, Kt;
function gB() {
  if (Kt) return ie;
  Kt = 1;
  var o = ie && ie.__extends || /* @__PURE__ */ function() {
    var u = function(H, n) {
      return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, p) {
        i.__proto__ = p;
      } || function(i, p) {
        for (var D in p) p.hasOwnProperty(D) && (i[D] = p[D]);
      }, u(H, n);
    };
    return function(H, n) {
      u(H, n);
      function i() {
        this.constructor = H;
      }
      H.prototype = n === null ? Object.create(n) : (i.prototype = n.prototype, new i());
    };
  }(), l = ie && ie.__values || function(u) {
    var H = typeof Symbol == "function" && u[Symbol.iterator], n = 0;
    return H ? H.call(u) : {
      next: function() {
        return u && n >= u.length && (u = void 0), { value: u && u[n++], done: !u };
      }
    };
  };
  Object.defineProperty(ie, "__esModule", { value: !0 });
  var y = Ln(), b = 1e-5, X = (
    /** @class */
    function(u) {
      o(H, u);
      function H(n) {
        var i = u.call(this) || this;
        return i.output = n, i.snippets = [], i;
      }
      return H.prototype.putRule = function(n) {
      }, H.prototype.beginPage = function(n) {
        u.prototype.beginPage.call(this, n), this.snippets = [];
      }, H.prototype.endPage = function() {
        var n, i;
        if (this.snippets = this.snippets.sort(function(s, C) {
          return s[1] < C[1] ? -1 : s[1] > C[1] ? 1 : s[0] < C[0] ? -1 : s[0] > C[0] ? 1 : 0;
        }), this.snippets.length != 0) {
          var p = this.snippets[0][0], D = this.snippets[0][1];
          try {
            for (var f = l(this.snippets), Y = f.next(); !Y.done; Y = f.next()) {
              var c = Y.value, w = c[0], V = c[1], I = c[2];
              V > D && this.output.write(`
`), w > p + b && this.output.write(" "), this.output.write(I.toString()), D = V, p = w;
            }
          } catch (s) {
            n = { error: s };
          } finally {
            try {
              Y && !Y.done && (i = f.return) && i.call(f);
            } finally {
              if (n) throw n.error;
            }
          }
        }
      }, H.prototype.putText = function(n) {
        return this.snippets.push([this.position.h, this.position.v, n]), b;
      }, H.prototype.postPost = function(n) {
        this.output.end();
      }, H;
    }(y.Machine)
  );
  return ie.default = X, ie;
}
var jt;
function iB() {
  if (jt) return PA;
  jt = 1;
  var o = PA && PA.__awaiter || function(p, D, f, Y) {
    return new (f || (f = Promise))(function(c, w) {
      function V(C) {
        try {
          s(Y.next(C));
        } catch (x) {
          w(x);
        }
      }
      function I(C) {
        try {
          s(Y.throw(C));
        } catch (x) {
          w(x);
        }
      }
      function s(C) {
        C.done ? c(C.value) : new f(function(x) {
          x(C.value);
        }).then(V, I);
      }
      s((Y = Y.apply(p, D || [])).next());
    });
  }, l = PA && PA.__generator || function(p, D) {
    var f = { label: 0, sent: function() {
      if (w[0] & 1) throw w[1];
      return w[1];
    }, trys: [], ops: [] }, Y, c, w, V;
    return V = { next: I(0), throw: I(1), return: I(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
      return this;
    }), V;
    function I(C) {
      return function(x) {
        return s([C, x]);
      };
    }
    function s(C) {
      if (Y) throw new TypeError("Generator is already executing.");
      for (; f; ) try {
        if (Y = 1, c && (w = C[0] & 2 ? c.return : C[0] ? c.throw || ((w = c.return) && w.call(c), 0) : c.next) && !(w = w.call(c, C[1])).done) return w;
        switch (c = 0, w && (C = [C[0] & 2, w.value]), C[0]) {
          case 0:
          case 1:
            w = C;
            break;
          case 4:
            return f.label++, { value: C[1], done: !1 };
          case 5:
            f.label++, c = C[1], C = [0];
            continue;
          case 7:
            C = f.ops.pop(), f.trys.pop();
            continue;
          default:
            if (w = f.trys, !(w = w.length > 0 && w[w.length - 1]) && (C[0] === 6 || C[0] === 2)) {
              f = 0;
              continue;
            }
            if (C[0] === 3 && (!w || C[1] > w[0] && C[1] < w[3])) {
              f.label = C[1];
              break;
            }
            if (C[0] === 6 && f.label < w[1]) {
              f.label = w[1], w = C;
              break;
            }
            if (w && f.label < w[2]) {
              f.label = w[2], f.ops.push(C);
              break;
            }
            w[2] && f.ops.pop(), f.trys.pop();
            continue;
        }
        C = D.call(p, f);
      } catch (x) {
        C = [6, x], c = 0;
      } finally {
        Y = w = 0;
      }
      if (C[0] & 5) throw C[1];
      return { value: C[0] ? C[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(PA, "__esModule", { value: !0 });
  var y = Ir(), b = Gr(), X = Er(), u = rB(), H = gB();
  PA.Machines = {
    HTML: u.default,
    text: H.default
  };
  var n = Ue();
  PA.dviParser = n.dviParser, PA.execute = n.execute, PA.mergeText = n.mergeText, PA.specials = {
    color: y.default,
    svg: b.default,
    papersize: X.default
  };
  function i(p, D) {
    return o(this, void 0, void 0, function() {
      var f, Y;
      return l(this, function(c) {
        switch (c.label) {
          case 0:
            return f = X.default(b.default(y.default(n.mergeText(n.dviParser(p))))), Y = new u.default(D), [4, n.execute(f, Y)];
          case 1:
            return c.sent(), [
              2
              /*return*/
            ];
        }
      });
    });
  }
  return PA.dvi2html = i, PA;
}
var Tn = iB(), ve = { exports: {} }, Se = { exports: {} }, Je = {}, He = {}, _t;
function zn() {
  if (_t) return He;
  _t = 1, He.byteLength = n, He.toByteArray = p, He.fromByteArray = Y;
  for (var o = [], l = [], y = typeof Uint8Array < "u" ? Uint8Array : Array, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", X = 0, u = b.length; X < u; ++X)
    o[X] = b[X], l[b.charCodeAt(X)] = X;
  l[45] = 62, l[95] = 63;
  function H(c) {
    var w = c.length;
    if (w % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var V = c.indexOf("=");
    V === -1 && (V = w);
    var I = V === w ? 0 : 4 - V % 4;
    return [V, I];
  }
  function n(c) {
    var w = H(c), V = w[0], I = w[1];
    return (V + I) * 3 / 4 - I;
  }
  function i(c, w, V) {
    return (w + V) * 3 / 4 - V;
  }
  function p(c) {
    var w, V = H(c), I = V[0], s = V[1], C = new y(i(c, I, s)), x = 0, U = s > 0 ? I - 4 : I, N;
    for (N = 0; N < U; N += 4)
      w = l[c.charCodeAt(N)] << 18 | l[c.charCodeAt(N + 1)] << 12 | l[c.charCodeAt(N + 2)] << 6 | l[c.charCodeAt(N + 3)], C[x++] = w >> 16 & 255, C[x++] = w >> 8 & 255, C[x++] = w & 255;
    return s === 2 && (w = l[c.charCodeAt(N)] << 2 | l[c.charCodeAt(N + 1)] >> 4, C[x++] = w & 255), s === 1 && (w = l[c.charCodeAt(N)] << 10 | l[c.charCodeAt(N + 1)] << 4 | l[c.charCodeAt(N + 2)] >> 2, C[x++] = w >> 8 & 255, C[x++] = w & 255), C;
  }
  function D(c) {
    return o[c >> 18 & 63] + o[c >> 12 & 63] + o[c >> 6 & 63] + o[c & 63];
  }
  function f(c, w, V) {
    for (var I, s = [], C = w; C < V; C += 3)
      I = (c[C] << 16 & 16711680) + (c[C + 1] << 8 & 65280) + (c[C + 2] & 255), s.push(D(I));
    return s.join("");
  }
  function Y(c) {
    for (var w, V = c.length, I = V % 3, s = [], C = 16383, x = 0, U = V - I; x < U; x += C)
      s.push(f(c, x, x + C > U ? U : x + C));
    return I === 1 ? (w = c[V - 1], s.push(
      o[w >> 2] + o[w << 4 & 63] + "=="
    )) : I === 2 && (w = (c[V - 2] << 8) + c[V - 1], s.push(
      o[w >> 10] + o[w >> 4 & 63] + o[w << 2 & 63] + "="
    )), s.join("");
  }
  return He;
}
var De = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Ot;
function BB() {
  return Ot || (Ot = 1, De.read = function(o, l, y, b, X) {
    var u, H, n = X * 8 - b - 1, i = (1 << n) - 1, p = i >> 1, D = -7, f = y ? X - 1 : 0, Y = y ? -1 : 1, c = o[l + f];
    for (f += Y, u = c & (1 << -D) - 1, c >>= -D, D += n; D > 0; u = u * 256 + o[l + f], f += Y, D -= 8)
      ;
    for (H = u & (1 << -D) - 1, u >>= -D, D += b; D > 0; H = H * 256 + o[l + f], f += Y, D -= 8)
      ;
    if (u === 0)
      u = 1 - p;
    else {
      if (u === i)
        return H ? NaN : (c ? -1 : 1) * (1 / 0);
      H = H + Math.pow(2, b), u = u - p;
    }
    return (c ? -1 : 1) * H * Math.pow(2, u - b);
  }, De.write = function(o, l, y, b, X, u) {
    var H, n, i, p = u * 8 - X - 1, D = (1 << p) - 1, f = D >> 1, Y = X === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = b ? 0 : u - 1, w = b ? 1 : -1, V = l < 0 || l === 0 && 1 / l < 0 ? 1 : 0;
    for (l = Math.abs(l), isNaN(l) || l === 1 / 0 ? (n = isNaN(l) ? 1 : 0, H = D) : (H = Math.floor(Math.log(l) / Math.LN2), l * (i = Math.pow(2, -H)) < 1 && (H--, i *= 2), H + f >= 1 ? l += Y / i : l += Y * Math.pow(2, 1 - f), l * i >= 2 && (H++, i /= 2), H + f >= D ? (n = 0, H = D) : H + f >= 1 ? (n = (l * i - 1) * Math.pow(2, X), H = H + f) : (n = l * Math.pow(2, f - 1) * Math.pow(2, X), H = 0)); X >= 8; o[y + c] = n & 255, c += w, n /= 256, X -= 8)
      ;
    for (H = H << X | n, p += X; p > 0; o[y + c] = H & 255, c += w, H /= 256, p -= 8)
      ;
    o[y + c - w] |= V * 128;
  }), De;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Lt;
function Ce() {
  return Lt || (Lt = 1, function(o) {
    const l = zn(), y = BB(), b = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    o.Buffer = n, o.SlowBuffer = C, o.INSPECT_MAX_BYTES = 50;
    const X = 2147483647;
    o.kMaxLength = X, n.TYPED_ARRAY_SUPPORT = u(), !n.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function u() {
      try {
        const h = new Uint8Array(1), e = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(h, e), h.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(n.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (n.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(n.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (n.isBuffer(this))
          return this.byteOffset;
      }
    });
    function H(h) {
      if (h > X)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
      const e = new Uint8Array(h);
      return Object.setPrototypeOf(e, n.prototype), e;
    }
    function n(h, e, g) {
      if (typeof h == "number") {
        if (typeof e == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return f(h);
      }
      return i(h, e, g);
    }
    n.poolSize = 8192;
    function i(h, e, g) {
      if (typeof h == "string")
        return Y(h, e);
      if (ArrayBuffer.isView(h))
        return w(h);
      if (h == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
        );
      if (W(h, ArrayBuffer) || h && W(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (W(h, SharedArrayBuffer) || h && W(h.buffer, SharedArrayBuffer)))
        return V(h, e, g);
      if (typeof h == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const R = h.valueOf && h.valueOf();
      if (R != null && R !== h)
        return n.from(R, e, g);
      const B = I(h);
      if (B) return B;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
        return n.from(h[Symbol.toPrimitive]("string"), e, g);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    }
    n.from = function(h, e, g) {
      return i(h, e, g);
    }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array);
    function p(h) {
      if (typeof h != "number")
        throw new TypeError('"size" argument must be of type number');
      if (h < 0)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
    }
    function D(h, e, g) {
      return p(h), h <= 0 ? H(h) : e !== void 0 ? typeof g == "string" ? H(h).fill(e, g) : H(h).fill(e) : H(h);
    }
    n.alloc = function(h, e, g) {
      return D(h, e, g);
    };
    function f(h) {
      return p(h), H(h < 0 ? 0 : s(h) | 0);
    }
    n.allocUnsafe = function(h) {
      return f(h);
    }, n.allocUnsafeSlow = function(h) {
      return f(h);
    };
    function Y(h, e) {
      if ((typeof e != "string" || e === "") && (e = "utf8"), !n.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e);
      const g = x(h, e) | 0;
      let R = H(g);
      const B = R.write(h, e);
      return B !== g && (R = R.slice(0, B)), R;
    }
    function c(h) {
      const e = h.length < 0 ? 0 : s(h.length) | 0, g = H(e);
      for (let R = 0; R < e; R += 1)
        g[R] = h[R] & 255;
      return g;
    }
    function w(h) {
      if (W(h, Uint8Array)) {
        const e = new Uint8Array(h);
        return V(e.buffer, e.byteOffset, e.byteLength);
      }
      return c(h);
    }
    function V(h, e, g) {
      if (e < 0 || h.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (h.byteLength < e + (g || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let R;
      return e === void 0 && g === void 0 ? R = new Uint8Array(h) : g === void 0 ? R = new Uint8Array(h, e) : R = new Uint8Array(h, e, g), Object.setPrototypeOf(R, n.prototype), R;
    }
    function I(h) {
      if (n.isBuffer(h)) {
        const e = s(h.length) | 0, g = H(e);
        return g.length === 0 || h.copy(g, 0, 0, e), g;
      }
      if (h.length !== void 0)
        return typeof h.length != "number" || rA(h.length) ? H(0) : c(h);
      if (h.type === "Buffer" && Array.isArray(h.data))
        return c(h.data);
    }
    function s(h) {
      if (h >= X)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + X.toString(16) + " bytes");
      return h | 0;
    }
    function C(h) {
      return +h != h && (h = 0), n.alloc(+h);
    }
    n.isBuffer = function(e) {
      return e != null && e._isBuffer === !0 && e !== n.prototype;
    }, n.compare = function(e, g) {
      if (W(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), W(g, Uint8Array) && (g = n.from(g, g.offset, g.byteLength)), !n.isBuffer(e) || !n.isBuffer(g))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (e === g) return 0;
      let R = e.length, B = g.length;
      for (let k = 0, O = Math.min(R, B); k < O; ++k)
        if (e[k] !== g[k]) {
          R = e[k], B = g[k];
          break;
        }
      return R < B ? -1 : B < R ? 1 : 0;
    }, n.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, n.concat = function(e, g) {
      if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return n.alloc(0);
      let R;
      if (g === void 0)
        for (g = 0, R = 0; R < e.length; ++R)
          g += e[R].length;
      const B = n.allocUnsafe(g);
      let k = 0;
      for (R = 0; R < e.length; ++R) {
        let O = e[R];
        if (W(O, Uint8Array))
          k + O.length > B.length ? (n.isBuffer(O) || (O = n.from(O)), O.copy(B, k)) : Uint8Array.prototype.set.call(
            B,
            O,
            k
          );
        else if (n.isBuffer(O))
          O.copy(B, k);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        k += O.length;
      }
      return B;
    };
    function x(h, e) {
      if (n.isBuffer(h))
        return h.length;
      if (ArrayBuffer.isView(h) || W(h, ArrayBuffer))
        return h.byteLength;
      if (typeof h != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
        );
      const g = h.length, R = arguments.length > 2 && arguments[2] === !0;
      if (!R && g === 0) return 0;
      let B = !1;
      for (; ; )
        switch (e) {
          case "ascii":
          case "latin1":
          case "binary":
            return g;
          case "utf8":
          case "utf-8":
            return hA(h).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return g * 2;
          case "hex":
            return g >>> 1;
          case "base64":
            return r(h).length;
          default:
            if (B)
              return R ? -1 : hA(h).length;
            e = ("" + e).toLowerCase(), B = !0;
        }
    }
    n.byteLength = x;
    function U(h, e, g) {
      let R = !1;
      if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, e >>>= 0, g <= e))
        return "";
      for (h || (h = "utf8"); ; )
        switch (h) {
          case "hex":
            return FA(this, e, g);
          case "utf8":
          case "utf-8":
            return fA(this, e, g);
          case "ascii":
            return HA(this, e, g);
          case "latin1":
          case "binary":
            return oA(this, e, g);
          case "base64":
            return K(this, e, g);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return v(this, e, g);
          default:
            if (R) throw new TypeError("Unknown encoding: " + h);
            h = (h + "").toLowerCase(), R = !0;
        }
    }
    n.prototype._isBuffer = !0;
    function N(h, e, g) {
      const R = h[e];
      h[e] = h[g], h[g] = R;
    }
    n.prototype.swap16 = function() {
      const e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let g = 0; g < e; g += 2)
        N(this, g, g + 1);
      return this;
    }, n.prototype.swap32 = function() {
      const e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let g = 0; g < e; g += 4)
        N(this, g, g + 3), N(this, g + 1, g + 2);
      return this;
    }, n.prototype.swap64 = function() {
      const e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let g = 0; g < e; g += 8)
        N(this, g, g + 7), N(this, g + 1, g + 6), N(this, g + 2, g + 5), N(this, g + 3, g + 4);
      return this;
    }, n.prototype.toString = function() {
      const e = this.length;
      return e === 0 ? "" : arguments.length === 0 ? fA(this, 0, e) : U.apply(this, arguments);
    }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(e) {
      if (!n.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e ? !0 : n.compare(this, e) === 0;
    }, n.prototype.inspect = function() {
      let e = "";
      const g = o.INSPECT_MAX_BYTES;
      return e = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (e += " ... "), "<Buffer " + e + ">";
    }, b && (n.prototype[b] = n.prototype.inspect), n.prototype.compare = function(e, g, R, B, k) {
      if (W(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), !n.isBuffer(e))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
        );
      if (g === void 0 && (g = 0), R === void 0 && (R = e ? e.length : 0), B === void 0 && (B = 0), k === void 0 && (k = this.length), g < 0 || R > e.length || B < 0 || k > this.length)
        throw new RangeError("out of range index");
      if (B >= k && g >= R)
        return 0;
      if (B >= k)
        return -1;
      if (g >= R)
        return 1;
      if (g >>>= 0, R >>>= 0, B >>>= 0, k >>>= 0, this === e) return 0;
      let O = k - B, IA = R - g;
      const J = Math.min(O, IA), gA = this.slice(B, k), Q = e.slice(g, R);
      for (let uA = 0; uA < J; ++uA)
        if (gA[uA] !== Q[uA]) {
          O = gA[uA], IA = Q[uA];
          break;
        }
      return O < IA ? -1 : IA < O ? 1 : 0;
    };
    function q(h, e, g, R, B) {
      if (h.length === 0) return -1;
      if (typeof g == "string" ? (R = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, rA(g) && (g = B ? 0 : h.length - 1), g < 0 && (g = h.length + g), g >= h.length) {
        if (B) return -1;
        g = h.length - 1;
      } else if (g < 0)
        if (B) g = 0;
        else return -1;
      if (typeof e == "string" && (e = n.from(e, R)), n.isBuffer(e))
        return e.length === 0 ? -1 : L(h, e, g, R, B);
      if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? B ? Uint8Array.prototype.indexOf.call(h, e, g) : Uint8Array.prototype.lastIndexOf.call(h, e, g) : L(h, [e], g, R, B);
      throw new TypeError("val must be string, number or Buffer");
    }
    function L(h, e, g, R, B) {
      let k = 1, O = h.length, IA = e.length;
      if (R !== void 0 && (R = String(R).toLowerCase(), R === "ucs2" || R === "ucs-2" || R === "utf16le" || R === "utf-16le")) {
        if (h.length < 2 || e.length < 2)
          return -1;
        k = 2, O /= 2, IA /= 2, g /= 2;
      }
      function J(Q, uA) {
        return k === 1 ? Q[uA] : Q.readUInt16BE(uA * k);
      }
      let gA;
      if (B) {
        let Q = -1;
        for (gA = g; gA < O; gA++)
          if (J(h, gA) === J(e, Q === -1 ? 0 : gA - Q)) {
            if (Q === -1 && (Q = gA), gA - Q + 1 === IA) return Q * k;
          } else
            Q !== -1 && (gA -= gA - Q), Q = -1;
      } else
        for (g + IA > O && (g = O - IA), gA = g; gA >= 0; gA--) {
          let Q = !0;
          for (let uA = 0; uA < IA; uA++)
            if (J(h, gA + uA) !== J(e, uA)) {
              Q = !1;
              break;
            }
          if (Q) return gA;
        }
      return -1;
    }
    n.prototype.includes = function(e, g, R) {
      return this.indexOf(e, g, R) !== -1;
    }, n.prototype.indexOf = function(e, g, R) {
      return q(this, e, g, R, !0);
    }, n.prototype.lastIndexOf = function(e, g, R) {
      return q(this, e, g, R, !1);
    };
    function $(h, e, g, R) {
      g = Number(g) || 0;
      const B = h.length - g;
      R ? (R = Number(R), R > B && (R = B)) : R = B;
      const k = e.length;
      R > k / 2 && (R = k / 2);
      let O;
      for (O = 0; O < R; ++O) {
        const IA = parseInt(e.substr(O * 2, 2), 16);
        if (rA(IA)) return O;
        h[g + O] = IA;
      }
      return O;
    }
    function GA(h, e, g, R) {
      return E(hA(e, h.length - g), h, g, R);
    }
    function _(h, e, g, R) {
      return E(d(e), h, g, R);
    }
    function AA(h, e, g, R) {
      return E(r(e), h, g, R);
    }
    function aA(h, e, g, R) {
      return E(A(e, h.length - g), h, g, R);
    }
    n.prototype.write = function(e, g, R, B) {
      if (g === void 0)
        B = "utf8", R = this.length, g = 0;
      else if (R === void 0 && typeof g == "string")
        B = g, R = this.length, g = 0;
      else if (isFinite(g))
        g = g >>> 0, isFinite(R) ? (R = R >>> 0, B === void 0 && (B = "utf8")) : (B = R, R = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const k = this.length - g;
      if ((R === void 0 || R > k) && (R = k), e.length > 0 && (R < 0 || g < 0) || g > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      B || (B = "utf8");
      let O = !1;
      for (; ; )
        switch (B) {
          case "hex":
            return $(this, e, g, R);
          case "utf8":
          case "utf-8":
            return GA(this, e, g, R);
          case "ascii":
          case "latin1":
          case "binary":
            return _(this, e, g, R);
          case "base64":
            return AA(this, e, g, R);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return aA(this, e, g, R);
          default:
            if (O) throw new TypeError("Unknown encoding: " + B);
            B = ("" + B).toLowerCase(), O = !0;
        }
    }, n.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function K(h, e, g) {
      return e === 0 && g === h.length ? l.fromByteArray(h) : l.fromByteArray(h.slice(e, g));
    }
    function fA(h, e, g) {
      g = Math.min(h.length, g);
      const R = [];
      let B = e;
      for (; B < g; ) {
        const k = h[B];
        let O = null, IA = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
        if (B + IA <= g) {
          let J, gA, Q, uA;
          switch (IA) {
            case 1:
              k < 128 && (O = k);
              break;
            case 2:
              J = h[B + 1], (J & 192) === 128 && (uA = (k & 31) << 6 | J & 63, uA > 127 && (O = uA));
              break;
            case 3:
              J = h[B + 1], gA = h[B + 2], (J & 192) === 128 && (gA & 192) === 128 && (uA = (k & 15) << 12 | (J & 63) << 6 | gA & 63, uA > 2047 && (uA < 55296 || uA > 57343) && (O = uA));
              break;
            case 4:
              J = h[B + 1], gA = h[B + 2], Q = h[B + 3], (J & 192) === 128 && (gA & 192) === 128 && (Q & 192) === 128 && (uA = (k & 15) << 18 | (J & 63) << 12 | (gA & 63) << 6 | Q & 63, uA > 65535 && uA < 1114112 && (O = uA));
          }
        }
        O === null ? (O = 65533, IA = 1) : O > 65535 && (O -= 65536, R.push(O >>> 10 & 1023 | 55296), O = 56320 | O & 1023), R.push(O), B += IA;
      }
      return xA(R);
    }
    const bA = 4096;
    function xA(h) {
      const e = h.length;
      if (e <= bA)
        return String.fromCharCode.apply(String, h);
      let g = "", R = 0;
      for (; R < e; )
        g += String.fromCharCode.apply(
          String,
          h.slice(R, R += bA)
        );
      return g;
    }
    function HA(h, e, g) {
      let R = "";
      g = Math.min(h.length, g);
      for (let B = e; B < g; ++B)
        R += String.fromCharCode(h[B] & 127);
      return R;
    }
    function oA(h, e, g) {
      let R = "";
      g = Math.min(h.length, g);
      for (let B = e; B < g; ++B)
        R += String.fromCharCode(h[B]);
      return R;
    }
    function FA(h, e, g) {
      const R = h.length;
      (!e || e < 0) && (e = 0), (!g || g < 0 || g > R) && (g = R);
      let B = "";
      for (let k = e; k < g; ++k)
        B += CA[h[k]];
      return B;
    }
    function v(h, e, g) {
      const R = h.slice(e, g);
      let B = "";
      for (let k = 0; k < R.length - 1; k += 2)
        B += String.fromCharCode(R[k] + R[k + 1] * 256);
      return B;
    }
    n.prototype.slice = function(e, g) {
      const R = this.length;
      e = ~~e, g = g === void 0 ? R : ~~g, e < 0 ? (e += R, e < 0 && (e = 0)) : e > R && (e = R), g < 0 ? (g += R, g < 0 && (g = 0)) : g > R && (g = R), g < e && (g = e);
      const B = this.subarray(e, g);
      return Object.setPrototypeOf(B, n.prototype), B;
    };
    function a(h, e, g) {
      if (h % 1 !== 0 || h < 0) throw new RangeError("offset is not uint");
      if (h + e > g) throw new RangeError("Trying to access beyond buffer length");
    }
    n.prototype.readUintLE = n.prototype.readUIntLE = function(e, g, R) {
      e = e >>> 0, g = g >>> 0, R || a(e, g, this.length);
      let B = this[e], k = 1, O = 0;
      for (; ++O < g && (k *= 256); )
        B += this[e + O] * k;
      return B;
    }, n.prototype.readUintBE = n.prototype.readUIntBE = function(e, g, R) {
      e = e >>> 0, g = g >>> 0, R || a(e, g, this.length);
      let B = this[e + --g], k = 1;
      for (; g > 0 && (k *= 256); )
        B += this[e + --g] * k;
      return B;
    }, n.prototype.readUint8 = n.prototype.readUInt8 = function(e, g) {
      return e = e >>> 0, g || a(e, 1, this.length), this[e];
    }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(e, g) {
      return e = e >>> 0, g || a(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(e, g) {
      return e = e >>> 0, g || a(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, n.prototype.readBigUInt64LE = ZA(function(e) {
      e = e >>> 0, S(e, "offset");
      const g = this[e], R = this[e + 7];
      (g === void 0 || R === void 0) && T(e, this.length - 8);
      const B = g + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, k = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + R * 2 ** 24;
      return BigInt(B) + (BigInt(k) << BigInt(32));
    }), n.prototype.readBigUInt64BE = ZA(function(e) {
      e = e >>> 0, S(e, "offset");
      const g = this[e], R = this[e + 7];
      (g === void 0 || R === void 0) && T(e, this.length - 8);
      const B = g * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], k = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + R;
      return (BigInt(B) << BigInt(32)) + BigInt(k);
    }), n.prototype.readIntLE = function(e, g, R) {
      e = e >>> 0, g = g >>> 0, R || a(e, g, this.length);
      let B = this[e], k = 1, O = 0;
      for (; ++O < g && (k *= 256); )
        B += this[e + O] * k;
      return k *= 128, B >= k && (B -= Math.pow(2, 8 * g)), B;
    }, n.prototype.readIntBE = function(e, g, R) {
      e = e >>> 0, g = g >>> 0, R || a(e, g, this.length);
      let B = g, k = 1, O = this[e + --B];
      for (; B > 0 && (k *= 256); )
        O += this[e + --B] * k;
      return k *= 128, O >= k && (O -= Math.pow(2, 8 * g)), O;
    }, n.prototype.readInt8 = function(e, g) {
      return e = e >>> 0, g || a(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    }, n.prototype.readInt16LE = function(e, g) {
      e = e >>> 0, g || a(e, 2, this.length);
      const R = this[e] | this[e + 1] << 8;
      return R & 32768 ? R | 4294901760 : R;
    }, n.prototype.readInt16BE = function(e, g) {
      e = e >>> 0, g || a(e, 2, this.length);
      const R = this[e + 1] | this[e] << 8;
      return R & 32768 ? R | 4294901760 : R;
    }, n.prototype.readInt32LE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, n.prototype.readInt32BE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, n.prototype.readBigInt64LE = ZA(function(e) {
      e = e >>> 0, S(e, "offset");
      const g = this[e], R = this[e + 7];
      (g === void 0 || R === void 0) && T(e, this.length - 8);
      const B = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (R << 24);
      return (BigInt(B) << BigInt(32)) + BigInt(g + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    }), n.prototype.readBigInt64BE = ZA(function(e) {
      e = e >>> 0, S(e, "offset");
      const g = this[e], R = this[e + 7];
      (g === void 0 || R === void 0) && T(e, this.length - 8);
      const B = (g << 24) + // Overflow
      this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(B) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + R);
    }), n.prototype.readFloatLE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), y.read(this, e, !0, 23, 4);
    }, n.prototype.readFloatBE = function(e, g) {
      return e = e >>> 0, g || a(e, 4, this.length), y.read(this, e, !1, 23, 4);
    }, n.prototype.readDoubleLE = function(e, g) {
      return e = e >>> 0, g || a(e, 8, this.length), y.read(this, e, !0, 52, 8);
    }, n.prototype.readDoubleBE = function(e, g) {
      return e = e >>> 0, g || a(e, 8, this.length), y.read(this, e, !1, 52, 8);
    };
    function Z(h, e, g, R, B, k) {
      if (!n.isBuffer(h)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > B || e < k) throw new RangeError('"value" argument is out of bounds');
      if (g + R > h.length) throw new RangeError("Index out of range");
    }
    n.prototype.writeUintLE = n.prototype.writeUIntLE = function(e, g, R, B) {
      if (e = +e, g = g >>> 0, R = R >>> 0, !B) {
        const IA = Math.pow(2, 8 * R) - 1;
        Z(this, e, g, R, IA, 0);
      }
      let k = 1, O = 0;
      for (this[g] = e & 255; ++O < R && (k *= 256); )
        this[g + O] = e / k & 255;
      return g + R;
    }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(e, g, R, B) {
      if (e = +e, g = g >>> 0, R = R >>> 0, !B) {
        const IA = Math.pow(2, 8 * R) - 1;
        Z(this, e, g, R, IA, 0);
      }
      let k = R - 1, O = 1;
      for (this[g + k] = e & 255; --k >= 0 && (O *= 256); )
        this[g + k] = e / O & 255;
      return g + R;
    }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 1, 255, 0), this[g] = e & 255, g + 1;
    }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 2, 65535, 0), this[g] = e & 255, this[g + 1] = e >>> 8, g + 2;
    }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 2, 65535, 0), this[g] = e >>> 8, this[g + 1] = e & 255, g + 2;
    }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 4, 4294967295, 0), this[g + 3] = e >>> 24, this[g + 2] = e >>> 16, this[g + 1] = e >>> 8, this[g] = e & 255, g + 4;
    }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 4, 4294967295, 0), this[g] = e >>> 24, this[g + 1] = e >>> 16, this[g + 2] = e >>> 8, this[g + 3] = e & 255, g + 4;
    };
    function m(h, e, g, R, B) {
      dA(e, R, B, h, g, 7);
      let k = Number(e & BigInt(4294967295));
      h[g++] = k, k = k >> 8, h[g++] = k, k = k >> 8, h[g++] = k, k = k >> 8, h[g++] = k;
      let O = Number(e >> BigInt(32) & BigInt(4294967295));
      return h[g++] = O, O = O >> 8, h[g++] = O, O = O >> 8, h[g++] = O, O = O >> 8, h[g++] = O, g;
    }
    function z(h, e, g, R, B) {
      dA(e, R, B, h, g, 7);
      let k = Number(e & BigInt(4294967295));
      h[g + 7] = k, k = k >> 8, h[g + 6] = k, k = k >> 8, h[g + 5] = k, k = k >> 8, h[g + 4] = k;
      let O = Number(e >> BigInt(32) & BigInt(4294967295));
      return h[g + 3] = O, O = O >> 8, h[g + 2] = O, O = O >> 8, h[g + 1] = O, O = O >> 8, h[g] = O, g + 8;
    }
    n.prototype.writeBigUInt64LE = ZA(function(e, g = 0) {
      return m(this, e, g, BigInt(0), BigInt("0xffffffffffffffff"));
    }), n.prototype.writeBigUInt64BE = ZA(function(e, g = 0) {
      return z(this, e, g, BigInt(0), BigInt("0xffffffffffffffff"));
    }), n.prototype.writeIntLE = function(e, g, R, B) {
      if (e = +e, g = g >>> 0, !B) {
        const J = Math.pow(2, 8 * R - 1);
        Z(this, e, g, R, J - 1, -J);
      }
      let k = 0, O = 1, IA = 0;
      for (this[g] = e & 255; ++k < R && (O *= 256); )
        e < 0 && IA === 0 && this[g + k - 1] !== 0 && (IA = 1), this[g + k] = (e / O >> 0) - IA & 255;
      return g + R;
    }, n.prototype.writeIntBE = function(e, g, R, B) {
      if (e = +e, g = g >>> 0, !B) {
        const J = Math.pow(2, 8 * R - 1);
        Z(this, e, g, R, J - 1, -J);
      }
      let k = R - 1, O = 1, IA = 0;
      for (this[g + k] = e & 255; --k >= 0 && (O *= 256); )
        e < 0 && IA === 0 && this[g + k + 1] !== 0 && (IA = 1), this[g + k] = (e / O >> 0) - IA & 255;
      return g + R;
    }, n.prototype.writeInt8 = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[g] = e & 255, g + 1;
    }, n.prototype.writeInt16LE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 2, 32767, -32768), this[g] = e & 255, this[g + 1] = e >>> 8, g + 2;
    }, n.prototype.writeInt16BE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 2, 32767, -32768), this[g] = e >>> 8, this[g + 1] = e & 255, g + 2;
    }, n.prototype.writeInt32LE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 4, 2147483647, -2147483648), this[g] = e & 255, this[g + 1] = e >>> 8, this[g + 2] = e >>> 16, this[g + 3] = e >>> 24, g + 4;
    }, n.prototype.writeInt32BE = function(e, g, R) {
      return e = +e, g = g >>> 0, R || Z(this, e, g, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[g] = e >>> 24, this[g + 1] = e >>> 16, this[g + 2] = e >>> 8, this[g + 3] = e & 255, g + 4;
    }, n.prototype.writeBigInt64LE = ZA(function(e, g = 0) {
      return m(this, e, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), n.prototype.writeBigInt64BE = ZA(function(e, g = 0) {
      return z(this, e, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function sA(h, e, g, R, B, k) {
      if (g + R > h.length) throw new RangeError("Index out of range");
      if (g < 0) throw new RangeError("Index out of range");
    }
    function cA(h, e, g, R, B) {
      return e = +e, g = g >>> 0, B || sA(h, e, g, 4), y.write(h, e, g, R, 23, 4), g + 4;
    }
    n.prototype.writeFloatLE = function(e, g, R) {
      return cA(this, e, g, !0, R);
    }, n.prototype.writeFloatBE = function(e, g, R) {
      return cA(this, e, g, !1, R);
    };
    function QA(h, e, g, R, B) {
      return e = +e, g = g >>> 0, B || sA(h, e, g, 8), y.write(h, e, g, R, 52, 8), g + 8;
    }
    n.prototype.writeDoubleLE = function(e, g, R) {
      return QA(this, e, g, !0, R);
    }, n.prototype.writeDoubleBE = function(e, g, R) {
      return QA(this, e, g, !1, R);
    }, n.prototype.copy = function(e, g, R, B) {
      if (!n.isBuffer(e)) throw new TypeError("argument should be a Buffer");
      if (R || (R = 0), !B && B !== 0 && (B = this.length), g >= e.length && (g = e.length), g || (g = 0), B > 0 && B < R && (B = R), B === R || e.length === 0 || this.length === 0) return 0;
      if (g < 0)
        throw new RangeError("targetStart out of bounds");
      if (R < 0 || R >= this.length) throw new RangeError("Index out of range");
      if (B < 0) throw new RangeError("sourceEnd out of bounds");
      B > this.length && (B = this.length), e.length - g < B - R && (B = e.length - g + R);
      const k = B - R;
      return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(g, R, B) : Uint8Array.prototype.set.call(
        e,
        this.subarray(R, B),
        g
      ), k;
    }, n.prototype.fill = function(e, g, R, B) {
      if (typeof e == "string") {
        if (typeof g == "string" ? (B = g, g = 0, R = this.length) : typeof R == "string" && (B = R, R = this.length), B !== void 0 && typeof B != "string")
          throw new TypeError("encoding must be a string");
        if (typeof B == "string" && !n.isEncoding(B))
          throw new TypeError("Unknown encoding: " + B);
        if (e.length === 1) {
          const O = e.charCodeAt(0);
          (B === "utf8" && O < 128 || B === "latin1") && (e = O);
        }
      } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
      if (g < 0 || this.length < g || this.length < R)
        throw new RangeError("Out of range index");
      if (R <= g)
        return this;
      g = g >>> 0, R = R === void 0 ? this.length : R >>> 0, e || (e = 0);
      let k;
      if (typeof e == "number")
        for (k = g; k < R; ++k)
          this[k] = e;
      else {
        const O = n.isBuffer(e) ? e : n.from(e, B), IA = O.length;
        if (IA === 0)
          throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (k = 0; k < R - g; ++k)
          this[k + g] = O[k % IA];
      }
      return this;
    };
    const P = {};
    function eA(h, e, g) {
      P[h] = class extends g {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: e.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
        }
        get code() {
          return h;
        }
        set code(B) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${h}]: ${this.message}`;
        }
      };
    }
    eA(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(h) {
        return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), eA(
      "ERR_INVALID_ARG_TYPE",
      function(h, e) {
        return `The "${h}" argument must be of type number. Received type ${typeof e}`;
      },
      TypeError
    ), eA(
      "ERR_OUT_OF_RANGE",
      function(h, e, g) {
        let R = `The value of "${h}" is out of range.`, B = g;
        return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? B = iA(String(g)) : typeof g == "bigint" && (B = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (B = iA(B)), B += "n"), R += ` It must be ${e}. Received ${B}`, R;
      },
      RangeError
    );
    function iA(h) {
      let e = "", g = h.length;
      const R = h[0] === "-" ? 1 : 0;
      for (; g >= R + 4; g -= 3)
        e = `_${h.slice(g - 3, g)}${e}`;
      return `${h.slice(0, g)}${e}`;
    }
    function pA(h, e, g) {
      S(e, "offset"), (h[e] === void 0 || h[e + g] === void 0) && T(e, h.length - (g + 1));
    }
    function dA(h, e, g, R, B, k) {
      if (h > g || h < e) {
        const O = typeof e == "bigint" ? "n" : "";
        let IA;
        throw e === 0 || e === BigInt(0) ? IA = `>= 0${O} and < 2${O} ** ${(k + 1) * 8}${O}` : IA = `>= -(2${O} ** ${(k + 1) * 8 - 1}${O}) and < 2 ** ${(k + 1) * 8 - 1}${O}`, new P.ERR_OUT_OF_RANGE("value", IA, h);
      }
      pA(R, B, k);
    }
    function S(h, e) {
      if (typeof h != "number")
        throw new P.ERR_INVALID_ARG_TYPE(e, "number", h);
    }
    function T(h, e, g) {
      throw Math.floor(h) !== h ? (S(h, g), new P.ERR_OUT_OF_RANGE("offset", "an integer", h)) : e < 0 ? new P.ERR_BUFFER_OUT_OF_BOUNDS() : new P.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${e}`,
        h
      );
    }
    const nA = /[^+/0-9A-Za-z-_]/g;
    function EA(h) {
      if (h = h.split("=")[0], h = h.trim().replace(nA, ""), h.length < 2) return "";
      for (; h.length % 4 !== 0; )
        h = h + "=";
      return h;
    }
    function hA(h, e) {
      e = e || 1 / 0;
      let g;
      const R = h.length;
      let B = null;
      const k = [];
      for (let O = 0; O < R; ++O) {
        if (g = h.charCodeAt(O), g > 55295 && g < 57344) {
          if (!B) {
            if (g > 56319) {
              (e -= 3) > -1 && k.push(239, 191, 189);
              continue;
            } else if (O + 1 === R) {
              (e -= 3) > -1 && k.push(239, 191, 189);
              continue;
            }
            B = g;
            continue;
          }
          if (g < 56320) {
            (e -= 3) > -1 && k.push(239, 191, 189), B = g;
            continue;
          }
          g = (B - 55296 << 10 | g - 56320) + 65536;
        } else B && (e -= 3) > -1 && k.push(239, 191, 189);
        if (B = null, g < 128) {
          if ((e -= 1) < 0) break;
          k.push(g);
        } else if (g < 2048) {
          if ((e -= 2) < 0) break;
          k.push(
            g >> 6 | 192,
            g & 63 | 128
          );
        } else if (g < 65536) {
          if ((e -= 3) < 0) break;
          k.push(
            g >> 12 | 224,
            g >> 6 & 63 | 128,
            g & 63 | 128
          );
        } else if (g < 1114112) {
          if ((e -= 4) < 0) break;
          k.push(
            g >> 18 | 240,
            g >> 12 & 63 | 128,
            g >> 6 & 63 | 128,
            g & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return k;
    }
    function d(h) {
      const e = [];
      for (let g = 0; g < h.length; ++g)
        e.push(h.charCodeAt(g) & 255);
      return e;
    }
    function A(h, e) {
      let g, R, B;
      const k = [];
      for (let O = 0; O < h.length && !((e -= 2) < 0); ++O)
        g = h.charCodeAt(O), R = g >> 8, B = g % 256, k.push(B), k.push(R);
      return k;
    }
    function r(h) {
      return l.toByteArray(EA(h));
    }
    function E(h, e, g, R) {
      let B;
      for (B = 0; B < R && !(B + g >= e.length || B >= h.length); ++B)
        e[B + g] = h[B];
      return B;
    }
    function W(h, e) {
      return h instanceof e || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === e.name;
    }
    function rA(h) {
      return h !== h;
    }
    const CA = function() {
      const h = "0123456789abcdef", e = new Array(256);
      for (let g = 0; g < 16; ++g) {
        const R = g * 16;
        for (let B = 0; B < 16; ++B)
          e[R + B] = h[g] + h[B];
      }
      return e;
    }();
    function ZA(h) {
      return typeof BigInt > "u" ? MA : h;
    }
    function MA() {
      throw new Error("BigInt not supported");
    }
  }(Je)), Je;
}
var Ke, Tt;
function NA() {
  if (Tt) return Ke;
  Tt = 1;
  class o extends Error {
    constructor(y) {
      if (!Array.isArray(y))
        throw new TypeError(`Expected input to be an Array, got ${typeof y}`);
      let b = "";
      for (let X = 0; X < y.length; X++)
        b += `    ${y[X].stack}
`;
      super(b), this.name = "AggregateError", this.errors = y;
    }
  }
  return Ke = {
    AggregateError: o,
    ArrayIsArray(l) {
      return Array.isArray(l);
    },
    ArrayPrototypeIncludes(l, y) {
      return l.includes(y);
    },
    ArrayPrototypeIndexOf(l, y) {
      return l.indexOf(y);
    },
    ArrayPrototypeJoin(l, y) {
      return l.join(y);
    },
    ArrayPrototypeMap(l, y) {
      return l.map(y);
    },
    ArrayPrototypePop(l, y) {
      return l.pop(y);
    },
    ArrayPrototypePush(l, y) {
      return l.push(y);
    },
    ArrayPrototypeSlice(l, y, b) {
      return l.slice(y, b);
    },
    Error,
    FunctionPrototypeCall(l, y, ...b) {
      return l.call(y, ...b);
    },
    FunctionPrototypeSymbolHasInstance(l, y) {
      return Function.prototype[Symbol.hasInstance].call(l, y);
    },
    MathFloor: Math.floor,
    Number,
    NumberIsInteger: Number.isInteger,
    NumberIsNaN: Number.isNaN,
    NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
    NumberParseInt: Number.parseInt,
    ObjectDefineProperties(l, y) {
      return Object.defineProperties(l, y);
    },
    ObjectDefineProperty(l, y, b) {
      return Object.defineProperty(l, y, b);
    },
    ObjectGetOwnPropertyDescriptor(l, y) {
      return Object.getOwnPropertyDescriptor(l, y);
    },
    ObjectKeys(l) {
      return Object.keys(l);
    },
    ObjectSetPrototypeOf(l, y) {
      return Object.setPrototypeOf(l, y);
    },
    Promise,
    PromisePrototypeCatch(l, y) {
      return l.catch(y);
    },
    PromisePrototypeThen(l, y, b) {
      return l.then(y, b);
    },
    PromiseReject(l) {
      return Promise.reject(l);
    },
    PromiseResolve(l) {
      return Promise.resolve(l);
    },
    ReflectApply: Reflect.apply,
    RegExpPrototypeTest(l, y) {
      return l.test(y);
    },
    SafeSet: Set,
    String,
    StringPrototypeSlice(l, y, b) {
      return l.slice(y, b);
    },
    StringPrototypeToLowerCase(l) {
      return l.toLowerCase();
    },
    StringPrototypeToUpperCase(l) {
      return l.toUpperCase();
    },
    StringPrototypeTrim(l) {
      return l.trim();
    },
    Symbol,
    SymbolFor: Symbol.for,
    SymbolAsyncIterator: Symbol.asyncIterator,
    SymbolHasInstance: Symbol.hasInstance,
    SymbolIterator: Symbol.iterator,
    SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
    SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
    TypedArrayPrototypeSet(l, y, b) {
      return l.set(y, b);
    },
    Boolean,
    Uint8Array
  }, Ke;
}
var je = { exports: {} }, _e, zt;
function Pn() {
  return zt || (zt = 1, _e = {
    format(o, ...l) {
      return o.replace(/%([sdifj])/g, function(...[y, b]) {
        const X = l.shift();
        return b === "f" ? X.toFixed(6) : b === "j" ? JSON.stringify(X) : b === "s" && typeof X == "object" ? `${X.constructor !== Object ? X.constructor.name : ""} {}`.trim() : X.toString();
      });
    },
    inspect(o) {
      switch (typeof o) {
        case "string":
          if (o.includes("'"))
            if (o.includes('"')) {
              if (!o.includes("`") && !o.includes("${"))
                return `\`${o}\``;
            } else return `"${o}"`;
          return `'${o}'`;
        case "number":
          return isNaN(o) ? "NaN" : Object.is(o, -0) ? String(o) : o;
        case "bigint":
          return `${String(o)}n`;
        case "boolean":
        case "undefined":
          return String(o);
        case "object":
          return "{}";
      }
    }
  }), _e;
}
var Oe, Pt;
function KA() {
  if (Pt) return Oe;
  Pt = 1;
  const { format: o, inspect: l } = Pn(), { AggregateError: y } = NA(), b = globalThis.AggregateError || y, X = Symbol("kIsNodeError"), u = [
    "string",
    "function",
    "number",
    "object",
    // Accept 'Function' and 'Object' as alternative to the lower cased version.
    "Function",
    "Object",
    "boolean",
    "bigint",
    "symbol"
  ], H = /^([A-Z][a-z0-9]*)+$/, n = "__node_internal_", i = {};
  function p(I, s) {
    if (!I)
      throw new i.ERR_INTERNAL_ASSERTION(s);
  }
  function D(I) {
    let s = "", C = I.length;
    const x = I[0] === "-" ? 1 : 0;
    for (; C >= x + 4; C -= 3)
      s = `_${I.slice(C - 3, C)}${s}`;
    return `${I.slice(0, C)}${s}`;
  }
  function f(I, s, C) {
    if (typeof s == "function")
      return p(
        s.length <= C.length,
        // Default options do not count.
        `Code: ${I}; The provided arguments length (${C.length}) does not match the required ones (${s.length}).`
      ), s(...C);
    const x = (s.match(/%[dfijoOs]/g) || []).length;
    return p(
      x === C.length,
      `Code: ${I}; The provided arguments length (${C.length}) does not match the required ones (${x}).`
    ), C.length === 0 ? s : o(s, ...C);
  }
  function Y(I, s, C) {
    C || (C = Error);
    class x extends C {
      constructor(...N) {
        super(f(I, s, N));
      }
      toString() {
        return `${this.name} [${I}]: ${this.message}`;
      }
    }
    Object.defineProperties(x.prototype, {
      name: {
        value: C.name,
        writable: !0,
        enumerable: !1,
        configurable: !0
      },
      toString: {
        value() {
          return `${this.name} [${I}]: ${this.message}`;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0
      }
    }), x.prototype.code = I, x.prototype[X] = !0, i[I] = x;
  }
  function c(I) {
    const s = n + I.name;
    return Object.defineProperty(I, "name", {
      value: s
    }), I;
  }
  function w(I, s) {
    if (I && s && I !== s) {
      if (Array.isArray(s.errors))
        return s.errors.push(I), s;
      const C = new b([s, I], s.message);
      return C.code = s.code, C;
    }
    return I || s;
  }
  class V extends Error {
    constructor(s = "The operation was aborted", C = void 0) {
      if (C !== void 0 && typeof C != "object")
        throw new i.ERR_INVALID_ARG_TYPE("options", "Object", C);
      super(s, C), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  }
  return Y("ERR_ASSERTION", "%s", Error), Y(
    "ERR_INVALID_ARG_TYPE",
    (I, s, C) => {
      p(typeof I == "string", "'name' must be a string"), Array.isArray(s) || (s = [s]);
      let x = "The ";
      I.endsWith(" argument") ? x += `${I} ` : x += `"${I}" ${I.includes(".") ? "property" : "argument"} `, x += "must be ";
      const U = [], N = [], q = [];
      for (const $ of s)
        p(typeof $ == "string", "All expected entries have to be of type string"), u.includes($) ? U.push($.toLowerCase()) : H.test($) ? N.push($) : (p($ !== "object", 'The value "object" should be written as "Object"'), q.push($));
      if (N.length > 0) {
        const $ = U.indexOf("object");
        $ !== -1 && (U.splice(U, $, 1), N.push("Object"));
      }
      if (U.length > 0) {
        switch (U.length) {
          case 1:
            x += `of type ${U[0]}`;
            break;
          case 2:
            x += `one of type ${U[0]} or ${U[1]}`;
            break;
          default: {
            const $ = U.pop();
            x += `one of type ${U.join(", ")}, or ${$}`;
          }
        }
        (N.length > 0 || q.length > 0) && (x += " or ");
      }
      if (N.length > 0) {
        switch (N.length) {
          case 1:
            x += `an instance of ${N[0]}`;
            break;
          case 2:
            x += `an instance of ${N[0]} or ${N[1]}`;
            break;
          default: {
            const $ = N.pop();
            x += `an instance of ${N.join(", ")}, or ${$}`;
          }
        }
        q.length > 0 && (x += " or ");
      }
      switch (q.length) {
        case 0:
          break;
        case 1:
          q[0].toLowerCase() !== q[0] && (x += "an "), x += `${q[0]}`;
          break;
        case 2:
          x += `one of ${q[0]} or ${q[1]}`;
          break;
        default: {
          const $ = q.pop();
          x += `one of ${q.join(", ")}, or ${$}`;
        }
      }
      if (C == null)
        x += `. Received ${C}`;
      else if (typeof C == "function" && C.name)
        x += `. Received function ${C.name}`;
      else if (typeof C == "object") {
        var L;
        if ((L = C.constructor) !== null && L !== void 0 && L.name)
          x += `. Received an instance of ${C.constructor.name}`;
        else {
          const $ = l(C, {
            depth: -1
          });
          x += `. Received ${$}`;
        }
      } else {
        let $ = l(C, {
          colors: !1
        });
        $.length > 25 && ($ = `${$.slice(0, 25)}...`), x += `. Received type ${typeof C} (${$})`;
      }
      return x;
    },
    TypeError
  ), Y(
    "ERR_INVALID_ARG_VALUE",
    (I, s, C = "is invalid") => {
      let x = l(s);
      return x.length > 128 && (x = x.slice(0, 128) + "..."), `The ${I.includes(".") ? "property" : "argument"} '${I}' ${C}. Received ${x}`;
    },
    TypeError
  ), Y(
    "ERR_INVALID_RETURN_VALUE",
    (I, s, C) => {
      var x;
      const U = C != null && (x = C.constructor) !== null && x !== void 0 && x.name ? `instance of ${C.constructor.name}` : `type ${typeof C}`;
      return `Expected ${I} to be returned from the "${s}" function but got ${U}.`;
    },
    TypeError
  ), Y(
    "ERR_MISSING_ARGS",
    (...I) => {
      p(I.length > 0, "At least one arg needs to be specified");
      let s;
      const C = I.length;
      switch (I = (Array.isArray(I) ? I : [I]).map((x) => `"${x}"`).join(" or "), C) {
        case 1:
          s += `The ${I[0]} argument`;
          break;
        case 2:
          s += `The ${I[0]} and ${I[1]} arguments`;
          break;
        default:
          {
            const x = I.pop();
            s += `The ${I.join(", ")}, and ${x} arguments`;
          }
          break;
      }
      return `${s} must be specified`;
    },
    TypeError
  ), Y(
    "ERR_OUT_OF_RANGE",
    (I, s, C) => {
      p(s, 'Missing "range" argument');
      let x;
      if (Number.isInteger(C) && Math.abs(C) > 2 ** 32)
        x = D(String(C));
      else if (typeof C == "bigint") {
        x = String(C);
        const U = BigInt(2) ** BigInt(32);
        (C > U || C < -U) && (x = D(x)), x += "n";
      } else
        x = l(C);
      return `The value of "${I}" is out of range. It must be ${s}. Received ${x}`;
    },
    RangeError
  ), Y("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), Y("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), Y("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), Y("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), Y("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), Y("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), Y("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), Y("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), Y("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), Y("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), Y("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), Oe = {
    AbortError: V,
    aggregateTwoErrors: c(w),
    hideStackFrames: c,
    codes: i
  }, Oe;
}
var Fe = { exports: {} }, qt;
function pe() {
  if (qt) return Fe.exports;
  qt = 1;
  const { AbortController: o, AbortSignal: l } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return Fe.exports = o, Fe.exports.AbortSignal = l, Fe.exports.default = o, Fe.exports;
}
var xe = { exports: {} }, $t;
function Re() {
  if ($t) return xe.exports;
  $t = 1;
  var o = typeof Reflect == "object" ? Reflect : null, l = o && typeof o.apply == "function" ? o.apply : function(N, q, L) {
    return Function.prototype.apply.call(N, q, L);
  }, y;
  o && typeof o.ownKeys == "function" ? y = o.ownKeys : Object.getOwnPropertySymbols ? y = function(N) {
    return Object.getOwnPropertyNames(N).concat(Object.getOwnPropertySymbols(N));
  } : y = function(N) {
    return Object.getOwnPropertyNames(N);
  };
  function b(U) {
    console && console.warn && console.warn(U);
  }
  var X = Number.isNaN || function(N) {
    return N !== N;
  };
  function u() {
    u.init.call(this);
  }
  xe.exports = u, xe.exports.once = s, u.EventEmitter = u, u.prototype._events = void 0, u.prototype._eventsCount = 0, u.prototype._maxListeners = void 0;
  var H = 10;
  function n(U) {
    if (typeof U != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof U);
  }
  Object.defineProperty(u, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return H;
    },
    set: function(U) {
      if (typeof U != "number" || U < 0 || X(U))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + U + ".");
      H = U;
    }
  }), u.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, u.prototype.setMaxListeners = function(N) {
    if (typeof N != "number" || N < 0 || X(N))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + N + ".");
    return this._maxListeners = N, this;
  };
  function i(U) {
    return U._maxListeners === void 0 ? u.defaultMaxListeners : U._maxListeners;
  }
  u.prototype.getMaxListeners = function() {
    return i(this);
  }, u.prototype.emit = function(N) {
    for (var q = [], L = 1; L < arguments.length; L++) q.push(arguments[L]);
    var $ = N === "error", GA = this._events;
    if (GA !== void 0)
      $ = $ && GA.error === void 0;
    else if (!$)
      return !1;
    if ($) {
      var _;
      if (q.length > 0 && (_ = q[0]), _ instanceof Error)
        throw _;
      var AA = new Error("Unhandled error." + (_ ? " (" + _.message + ")" : ""));
      throw AA.context = _, AA;
    }
    var aA = GA[N];
    if (aA === void 0)
      return !1;
    if (typeof aA == "function")
      l(aA, this, q);
    else
      for (var K = aA.length, fA = w(aA, K), L = 0; L < K; ++L)
        l(fA[L], this, q);
    return !0;
  };
  function p(U, N, q, L) {
    var $, GA, _;
    if (n(q), GA = U._events, GA === void 0 ? (GA = U._events = /* @__PURE__ */ Object.create(null), U._eventsCount = 0) : (GA.newListener !== void 0 && (U.emit(
      "newListener",
      N,
      q.listener ? q.listener : q
    ), GA = U._events), _ = GA[N]), _ === void 0)
      _ = GA[N] = q, ++U._eventsCount;
    else if (typeof _ == "function" ? _ = GA[N] = L ? [q, _] : [_, q] : L ? _.unshift(q) : _.push(q), $ = i(U), $ > 0 && _.length > $ && !_.warned) {
      _.warned = !0;
      var AA = new Error("Possible EventEmitter memory leak detected. " + _.length + " " + String(N) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      AA.name = "MaxListenersExceededWarning", AA.emitter = U, AA.type = N, AA.count = _.length, b(AA);
    }
    return U;
  }
  u.prototype.addListener = function(N, q) {
    return p(this, N, q, !1);
  }, u.prototype.on = u.prototype.addListener, u.prototype.prependListener = function(N, q) {
    return p(this, N, q, !0);
  };
  function D() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function f(U, N, q) {
    var L = { fired: !1, wrapFn: void 0, target: U, type: N, listener: q }, $ = D.bind(L);
    return $.listener = q, L.wrapFn = $, $;
  }
  u.prototype.once = function(N, q) {
    return n(q), this.on(N, f(this, N, q)), this;
  }, u.prototype.prependOnceListener = function(N, q) {
    return n(q), this.prependListener(N, f(this, N, q)), this;
  }, u.prototype.removeListener = function(N, q) {
    var L, $, GA, _, AA;
    if (n(q), $ = this._events, $ === void 0)
      return this;
    if (L = $[N], L === void 0)
      return this;
    if (L === q || L.listener === q)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete $[N], $.removeListener && this.emit("removeListener", N, L.listener || q));
    else if (typeof L != "function") {
      for (GA = -1, _ = L.length - 1; _ >= 0; _--)
        if (L[_] === q || L[_].listener === q) {
          AA = L[_].listener, GA = _;
          break;
        }
      if (GA < 0)
        return this;
      GA === 0 ? L.shift() : V(L, GA), L.length === 1 && ($[N] = L[0]), $.removeListener !== void 0 && this.emit("removeListener", N, AA || q);
    }
    return this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.removeAllListeners = function(N) {
    var q, L, $;
    if (L = this._events, L === void 0)
      return this;
    if (L.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : L[N] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete L[N]), this;
    if (arguments.length === 0) {
      var GA = Object.keys(L), _;
      for ($ = 0; $ < GA.length; ++$)
        _ = GA[$], _ !== "removeListener" && this.removeAllListeners(_);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (q = L[N], typeof q == "function")
      this.removeListener(N, q);
    else if (q !== void 0)
      for ($ = q.length - 1; $ >= 0; $--)
        this.removeListener(N, q[$]);
    return this;
  };
  function Y(U, N, q) {
    var L = U._events;
    if (L === void 0)
      return [];
    var $ = L[N];
    return $ === void 0 ? [] : typeof $ == "function" ? q ? [$.listener || $] : [$] : q ? I($) : w($, $.length);
  }
  u.prototype.listeners = function(N) {
    return Y(this, N, !0);
  }, u.prototype.rawListeners = function(N) {
    return Y(this, N, !1);
  }, u.listenerCount = function(U, N) {
    return typeof U.listenerCount == "function" ? U.listenerCount(N) : c.call(U, N);
  }, u.prototype.listenerCount = c;
  function c(U) {
    var N = this._events;
    if (N !== void 0) {
      var q = N[U];
      if (typeof q == "function")
        return 1;
      if (q !== void 0)
        return q.length;
    }
    return 0;
  }
  u.prototype.eventNames = function() {
    return this._eventsCount > 0 ? y(this._events) : [];
  };
  function w(U, N) {
    for (var q = new Array(N), L = 0; L < N; ++L)
      q[L] = U[L];
    return q;
  }
  function V(U, N) {
    for (; N + 1 < U.length; N++)
      U[N] = U[N + 1];
    U.pop();
  }
  function I(U) {
    for (var N = new Array(U.length), q = 0; q < N.length; ++q)
      N[q] = U[q].listener || U[q];
    return N;
  }
  function s(U, N) {
    return new Promise(function(q, L) {
      function $(_) {
        U.removeListener(N, GA), L(_);
      }
      function GA() {
        typeof U.removeListener == "function" && U.removeListener("error", $), q([].slice.call(arguments));
      }
      x(U, N, GA, { once: !0 }), N !== "error" && C(U, $, { once: !0 });
    });
  }
  function C(U, N, q) {
    typeof U.on == "function" && x(U, "error", N, q);
  }
  function x(U, N, q, L) {
    if (typeof U.on == "function")
      L.once ? U.once(N, q) : U.on(N, q);
    else if (typeof U.addEventListener == "function")
      U.addEventListener(N, function $(GA) {
        L.once && U.removeEventListener(N, $), q(GA);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof U);
  }
  return xe.exports;
}
var An;
function TA() {
  return An || (An = 1, function(o) {
    const l = Ce(), { format: y, inspect: b } = Pn(), {
      codes: { ERR_INVALID_ARG_TYPE: X }
    } = KA(), { kResistStopPropagation: u, AggregateError: H, SymbolDispose: n } = NA(), i = globalThis.AbortSignal || pe().AbortSignal, p = globalThis.AbortController || pe().AbortController, D = Object.getPrototypeOf(async function() {
    }).constructor, f = globalThis.Blob || l.Blob, Y = typeof f < "u" ? function(I) {
      return I instanceof f;
    } : function(I) {
      return !1;
    }, c = (V, I) => {
      if (V !== void 0 && (V === null || typeof V != "object" || !("aborted" in V)))
        throw new X(I, "AbortSignal", V);
    }, w = (V, I) => {
      if (typeof V != "function")
        throw new X(I, "Function", V);
    };
    o.exports = {
      AggregateError: H,
      kEmptyObject: Object.freeze({}),
      once(V) {
        let I = !1;
        return function(...s) {
          I || (I = !0, V.apply(this, s));
        };
      },
      createDeferredPromise: function() {
        let V, I;
        return {
          promise: new Promise((C, x) => {
            V = C, I = x;
          }),
          resolve: V,
          reject: I
        };
      },
      promisify(V) {
        return new Promise((I, s) => {
          V((C, ...x) => C ? s(C) : I(...x));
        });
      },
      debuglog() {
        return function() {
        };
      },
      format: y,
      inspect: b,
      types: {
        isAsyncFunction(V) {
          return V instanceof D;
        },
        isArrayBufferView(V) {
          return ArrayBuffer.isView(V);
        }
      },
      isBlob: Y,
      deprecate(V, I) {
        return V;
      },
      addAbortListener: Re().addAbortListener || function(I, s) {
        if (I === void 0)
          throw new X("signal", "AbortSignal", I);
        c(I, "signal"), w(s, "listener");
        let C;
        return I.aborted ? queueMicrotask(() => s()) : (I.addEventListener("abort", s, {
          __proto__: null,
          once: !0,
          [u]: !0
        }), C = () => {
          I.removeEventListener("abort", s);
        }), {
          __proto__: null,
          [n]() {
            var x;
            (x = C) === null || x === void 0 || x();
          }
        };
      },
      AbortSignalAny: i.any || function(I) {
        if (I.length === 1)
          return I[0];
        const s = new p(), C = () => s.abort();
        return I.forEach((x) => {
          c(x, "signals"), x.addEventListener("abort", C, {
            once: !0
          });
        }), s.signal.addEventListener(
          "abort",
          () => {
            I.forEach((x) => x.removeEventListener("abort", C));
          },
          {
            once: !0
          }
        ), s.signal;
      }
    }, o.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  }(je)), je.exports;
}
var me = {}, Le, en;
function Ze() {
  if (en) return Le;
  en = 1;
  const {
    ArrayIsArray: o,
    ArrayPrototypeIncludes: l,
    ArrayPrototypeJoin: y,
    ArrayPrototypeMap: b,
    NumberIsInteger: X,
    NumberIsNaN: u,
    NumberMAX_SAFE_INTEGER: H,
    NumberMIN_SAFE_INTEGER: n,
    NumberParseInt: i,
    ObjectPrototypeHasOwnProperty: p,
    RegExpPrototypeExec: D,
    String: f,
    StringPrototypeToUpperCase: Y,
    StringPrototypeTrim: c
  } = NA(), {
    hideStackFrames: w,
    codes: { ERR_SOCKET_BAD_PORT: V, ERR_INVALID_ARG_TYPE: I, ERR_INVALID_ARG_VALUE: s, ERR_OUT_OF_RANGE: C, ERR_UNKNOWN_SIGNAL: x }
  } = KA(), { normalizeEncoding: U } = TA(), { isAsyncFunction: N, isArrayBufferView: q } = TA().types, L = {};
  function $(A) {
    return A === (A | 0);
  }
  function GA(A) {
    return A === A >>> 0;
  }
  const _ = /^[0-7]+$/, AA = "must be a 32-bit unsigned integer or an octal string";
  function aA(A, r, E) {
    if (typeof A > "u" && (A = E), typeof A == "string") {
      if (D(_, A) === null)
        throw new s(r, A, AA);
      A = i(A, 8);
    }
    return bA(A, r), A;
  }
  const K = w((A, r, E = n, W = H) => {
    if (typeof A != "number") throw new I(r, "number", A);
    if (!X(A)) throw new C(r, "an integer", A);
    if (A < E || A > W) throw new C(r, `>= ${E} && <= ${W}`, A);
  }), fA = w((A, r, E = -2147483648, W = 2147483647) => {
    if (typeof A != "number")
      throw new I(r, "number", A);
    if (!X(A))
      throw new C(r, "an integer", A);
    if (A < E || A > W)
      throw new C(r, `>= ${E} && <= ${W}`, A);
  }), bA = w((A, r, E = !1) => {
    if (typeof A != "number")
      throw new I(r, "number", A);
    if (!X(A))
      throw new C(r, "an integer", A);
    const W = E ? 1 : 0, rA = 4294967295;
    if (A < W || A > rA)
      throw new C(r, `>= ${W} && <= ${rA}`, A);
  });
  function xA(A, r) {
    if (typeof A != "string") throw new I(r, "string", A);
  }
  function HA(A, r, E = void 0, W) {
    if (typeof A != "number") throw new I(r, "number", A);
    if (E != null && A < E || W != null && A > W || (E != null || W != null) && u(A))
      throw new C(
        r,
        `${E != null ? `>= ${E}` : ""}${E != null && W != null ? " && " : ""}${W != null ? `<= ${W}` : ""}`,
        A
      );
  }
  const oA = w((A, r, E) => {
    if (!l(E, A)) {
      const rA = "must be one of: " + y(
        b(E, (CA) => typeof CA == "string" ? `'${CA}'` : f(CA)),
        ", "
      );
      throw new s(r, A, rA);
    }
  });
  function FA(A, r) {
    if (typeof A != "boolean") throw new I(r, "boolean", A);
  }
  function v(A, r, E) {
    return A == null || !p(A, r) ? E : A[r];
  }
  const a = w((A, r, E = null) => {
    const W = v(E, "allowArray", !1), rA = v(E, "allowFunction", !1);
    if (!v(E, "nullable", !1) && A === null || !W && o(A) || typeof A != "object" && (!rA || typeof A != "function"))
      throw new I(r, "Object", A);
  }), Z = w((A, r) => {
    if (A != null && typeof A != "object" && typeof A != "function")
      throw new I(r, "a dictionary", A);
  }), m = w((A, r, E = 0) => {
    if (!o(A))
      throw new I(r, "Array", A);
    if (A.length < E) {
      const W = `must be longer than ${E}`;
      throw new s(r, A, W);
    }
  });
  function z(A, r) {
    m(A, r);
    for (let E = 0; E < A.length; E++)
      xA(A[E], `${r}[${E}]`);
  }
  function sA(A, r) {
    m(A, r);
    for (let E = 0; E < A.length; E++)
      FA(A[E], `${r}[${E}]`);
  }
  function cA(A, r) {
    m(A, r);
    for (let E = 0; E < A.length; E++) {
      const W = A[E], rA = `${r}[${E}]`;
      if (W == null)
        throw new I(rA, "AbortSignal", W);
      pA(W, rA);
    }
  }
  function QA(A, r = "signal") {
    if (xA(A, r), L[A] === void 0)
      throw L[Y(A)] !== void 0 ? new x(A + " (signals must use all capital letters)") : new x(A);
  }
  const P = w((A, r = "buffer") => {
    if (!q(A))
      throw new I(r, ["Buffer", "TypedArray", "DataView"], A);
  });
  function eA(A, r) {
    const E = U(r), W = A.length;
    if (E === "hex" && W % 2 !== 0)
      throw new s("encoding", r, `is invalid for data of length ${W}`);
  }
  function iA(A, r = "Port", E = !0) {
    if (typeof A != "number" && typeof A != "string" || typeof A == "string" && c(A).length === 0 || +A !== +A >>> 0 || A > 65535 || A === 0 && !E)
      throw new V(r, A, E);
    return A | 0;
  }
  const pA = w((A, r) => {
    if (A !== void 0 && (A === null || typeof A != "object" || !("aborted" in A)))
      throw new I(r, "AbortSignal", A);
  }), dA = w((A, r) => {
    if (typeof A != "function") throw new I(r, "Function", A);
  }), S = w((A, r) => {
    if (typeof A != "function" || N(A)) throw new I(r, "Function", A);
  }), T = w((A, r) => {
    if (A !== void 0) throw new I(r, "undefined", A);
  });
  function nA(A, r, E) {
    if (!l(E, A))
      throw new I(r, `('${y(E, "|")}')`, A);
  }
  const EA = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function hA(A, r) {
    if (typeof A > "u" || !D(EA, A))
      throw new s(
        r,
        A,
        'must be an array or string of format "</styles.css>; rel=preload; as=style"'
      );
  }
  function d(A) {
    if (typeof A == "string")
      return hA(A, "hints"), A;
    if (o(A)) {
      const r = A.length;
      let E = "";
      if (r === 0)
        return E;
      for (let W = 0; W < r; W++) {
        const rA = A[W];
        hA(rA, "hints"), E += rA, W !== r - 1 && (E += ", ");
      }
      return E;
    }
    throw new s(
      "hints",
      A,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
  }
  return Le = {
    isInt32: $,
    isUint32: GA,
    parseFileMode: aA,
    validateArray: m,
    validateStringArray: z,
    validateBooleanArray: sA,
    validateAbortSignalArray: cA,
    validateBoolean: FA,
    validateBuffer: P,
    validateDictionary: Z,
    validateEncoding: eA,
    validateFunction: dA,
    validateInt32: fA,
    validateInteger: K,
    validateNumber: HA,
    validateObject: a,
    validateOneOf: oA,
    validatePlainFunction: S,
    validatePort: iA,
    validateSignalName: QA,
    validateString: xA,
    validateUint32: bA,
    validateUndefined: T,
    validateUnion: nA,
    validateAbortSignal: pA,
    validateLinkHeaderValue: d
  }, Le;
}
var ye = { exports: {} }, Te = { exports: {} }, tn;
function de() {
  if (tn) return Te.exports;
  tn = 1;
  var o = Te.exports = {}, l, y;
  function b() {
    throw new Error("setTimeout has not been defined");
  }
  function X() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? l = setTimeout : l = b;
    } catch {
      l = b;
    }
    try {
      typeof clearTimeout == "function" ? y = clearTimeout : y = X;
    } catch {
      y = X;
    }
  })();
  function u(V) {
    if (l === setTimeout)
      return setTimeout(V, 0);
    if ((l === b || !l) && setTimeout)
      return l = setTimeout, setTimeout(V, 0);
    try {
      return l(V, 0);
    } catch {
      try {
        return l.call(null, V, 0);
      } catch {
        return l.call(this, V, 0);
      }
    }
  }
  function H(V) {
    if (y === clearTimeout)
      return clearTimeout(V);
    if ((y === X || !y) && clearTimeout)
      return y = clearTimeout, clearTimeout(V);
    try {
      return y(V);
    } catch {
      try {
        return y.call(null, V);
      } catch {
        return y.call(this, V);
      }
    }
  }
  var n = [], i = !1, p, D = -1;
  function f() {
    !i || !p || (i = !1, p.length ? n = p.concat(n) : D = -1, n.length && Y());
  }
  function Y() {
    if (!i) {
      var V = u(f);
      i = !0;
      for (var I = n.length; I; ) {
        for (p = n, n = []; ++D < I; )
          p && p[D].run();
        D = -1, I = n.length;
      }
      p = null, i = !1, H(V);
    }
  }
  o.nextTick = function(V) {
    var I = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var s = 1; s < arguments.length; s++)
        I[s - 1] = arguments[s];
    n.push(new c(V, I)), n.length === 1 && !i && u(Y);
  };
  function c(V, I) {
    this.fun = V, this.array = I;
  }
  c.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {};
  function w() {
  }
  return o.on = w, o.addListener = w, o.once = w, o.off = w, o.removeListener = w, o.removeAllListeners = w, o.emit = w, o.prependListener = w, o.prependOnceListener = w, o.listeners = function(V) {
    return [];
  }, o.binding = function(V) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function() {
    return "/";
  }, o.chdir = function(V) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function() {
    return 0;
  }, Te.exports;
}
var ze, nn;
function ne() {
  if (nn) return ze;
  nn = 1;
  const { SymbolAsyncIterator: o, SymbolIterator: l, SymbolFor: y } = NA(), b = y("nodejs.stream.destroyed"), X = y("nodejs.stream.errored"), u = y("nodejs.stream.readable"), H = y("nodejs.stream.writable"), n = y("nodejs.stream.disturbed"), i = y("nodejs.webstream.isClosedPromise"), p = y("nodejs.webstream.controllerErrorFunction");
  function D(v, a = !1) {
    var Z;
    return !!(v && typeof v.pipe == "function" && typeof v.on == "function" && (!a || typeof v.pause == "function" && typeof v.resume == "function") && (!v._writableState || ((Z = v._readableState) === null || Z === void 0 ? void 0 : Z.readable) !== !1) && // Duplex
    (!v._writableState || v._readableState));
  }
  function f(v) {
    var a;
    return !!(v && typeof v.write == "function" && typeof v.on == "function" && (!v._readableState || ((a = v._writableState) === null || a === void 0 ? void 0 : a.writable) !== !1));
  }
  function Y(v) {
    return !!(v && typeof v.pipe == "function" && v._readableState && typeof v.on == "function" && typeof v.write == "function");
  }
  function c(v) {
    return v && (v._readableState || v._writableState || typeof v.write == "function" && typeof v.on == "function" || typeof v.pipe == "function" && typeof v.on == "function");
  }
  function w(v) {
    return !!(v && !c(v) && typeof v.pipeThrough == "function" && typeof v.getReader == "function" && typeof v.cancel == "function");
  }
  function V(v) {
    return !!(v && !c(v) && typeof v.getWriter == "function" && typeof v.abort == "function");
  }
  function I(v) {
    return !!(v && !c(v) && typeof v.readable == "object" && typeof v.writable == "object");
  }
  function s(v) {
    return w(v) || V(v) || I(v);
  }
  function C(v, a) {
    return v == null ? !1 : a === !0 ? typeof v[o] == "function" : a === !1 ? typeof v[l] == "function" : typeof v[o] == "function" || typeof v[l] == "function";
  }
  function x(v) {
    if (!c(v)) return null;
    const a = v._writableState, Z = v._readableState, m = a || Z;
    return !!(v.destroyed || v[b] || m != null && m.destroyed);
  }
  function U(v) {
    if (!f(v)) return null;
    if (v.writableEnded === !0) return !0;
    const a = v._writableState;
    return a != null && a.errored ? !1 : typeof (a == null ? void 0 : a.ended) != "boolean" ? null : a.ended;
  }
  function N(v, a) {
    if (!f(v)) return null;
    if (v.writableFinished === !0) return !0;
    const Z = v._writableState;
    return Z != null && Z.errored ? !1 : typeof (Z == null ? void 0 : Z.finished) != "boolean" ? null : !!(Z.finished || a === !1 && Z.ended === !0 && Z.length === 0);
  }
  function q(v) {
    if (!D(v)) return null;
    if (v.readableEnded === !0) return !0;
    const a = v._readableState;
    return !a || a.errored ? !1 : typeof (a == null ? void 0 : a.ended) != "boolean" ? null : a.ended;
  }
  function L(v, a) {
    if (!D(v)) return null;
    const Z = v._readableState;
    return Z != null && Z.errored ? !1 : typeof (Z == null ? void 0 : Z.endEmitted) != "boolean" ? null : !!(Z.endEmitted || a === !1 && Z.ended === !0 && Z.length === 0);
  }
  function $(v) {
    return v && v[u] != null ? v[u] : typeof (v == null ? void 0 : v.readable) != "boolean" ? null : x(v) ? !1 : D(v) && v.readable && !L(v);
  }
  function GA(v) {
    return v && v[H] != null ? v[H] : typeof (v == null ? void 0 : v.writable) != "boolean" ? null : x(v) ? !1 : f(v) && v.writable && !U(v);
  }
  function _(v, a) {
    return c(v) ? x(v) ? !0 : !((a == null ? void 0 : a.readable) !== !1 && $(v) || (a == null ? void 0 : a.writable) !== !1 && GA(v)) : null;
  }
  function AA(v) {
    var a, Z;
    return c(v) ? v.writableErrored ? v.writableErrored : (a = (Z = v._writableState) === null || Z === void 0 ? void 0 : Z.errored) !== null && a !== void 0 ? a : null : null;
  }
  function aA(v) {
    var a, Z;
    return c(v) ? v.readableErrored ? v.readableErrored : (a = (Z = v._readableState) === null || Z === void 0 ? void 0 : Z.errored) !== null && a !== void 0 ? a : null : null;
  }
  function K(v) {
    if (!c(v))
      return null;
    if (typeof v.closed == "boolean")
      return v.closed;
    const a = v._writableState, Z = v._readableState;
    return typeof (a == null ? void 0 : a.closed) == "boolean" || typeof (Z == null ? void 0 : Z.closed) == "boolean" ? (a == null ? void 0 : a.closed) || (Z == null ? void 0 : Z.closed) : typeof v._closed == "boolean" && fA(v) ? v._closed : null;
  }
  function fA(v) {
    return typeof v._closed == "boolean" && typeof v._defaultKeepAlive == "boolean" && typeof v._removedConnection == "boolean" && typeof v._removedContLen == "boolean";
  }
  function bA(v) {
    return typeof v._sent100 == "boolean" && fA(v);
  }
  function xA(v) {
    var a;
    return typeof v._consuming == "boolean" && typeof v._dumped == "boolean" && ((a = v.req) === null || a === void 0 ? void 0 : a.upgradeOrConnect) === void 0;
  }
  function HA(v) {
    if (!c(v)) return null;
    const a = v._writableState, Z = v._readableState, m = a || Z;
    return !m && bA(v) || !!(m && m.autoDestroy && m.emitClose && m.closed === !1);
  }
  function oA(v) {
    var a;
    return !!(v && ((a = v[n]) !== null && a !== void 0 ? a : v.readableDidRead || v.readableAborted));
  }
  function FA(v) {
    var a, Z, m, z, sA, cA, QA, P, eA, iA;
    return !!(v && ((a = (Z = (m = (z = (sA = (cA = v[X]) !== null && cA !== void 0 ? cA : v.readableErrored) !== null && sA !== void 0 ? sA : v.writableErrored) !== null && z !== void 0 ? z : (QA = v._readableState) === null || QA === void 0 ? void 0 : QA.errorEmitted) !== null && m !== void 0 ? m : (P = v._writableState) === null || P === void 0 ? void 0 : P.errorEmitted) !== null && Z !== void 0 ? Z : (eA = v._readableState) === null || eA === void 0 ? void 0 : eA.errored) !== null && a !== void 0 ? a : !((iA = v._writableState) === null || iA === void 0) && iA.errored));
  }
  return ze = {
    isDestroyed: x,
    kIsDestroyed: b,
    isDisturbed: oA,
    kIsDisturbed: n,
    isErrored: FA,
    kIsErrored: X,
    isReadable: $,
    kIsReadable: u,
    kIsClosedPromise: i,
    kControllerErrorFunction: p,
    kIsWritable: H,
    isClosed: K,
    isDuplexNodeStream: Y,
    isFinished: _,
    isIterable: C,
    isReadableNodeStream: D,
    isReadableStream: w,
    isReadableEnded: q,
    isReadableFinished: L,
    isReadableErrored: aA,
    isNodeStream: c,
    isWebStream: s,
    isWritable: GA,
    isWritableNodeStream: f,
    isWritableStream: V,
    isWritableEnded: U,
    isWritableFinished: N,
    isWritableErrored: AA,
    isServerRequest: xA,
    isServerResponse: bA,
    willEmitClose: HA,
    isTransformStream: I
  }, ze;
}
var rn;
function Be() {
  if (rn) return ye.exports;
  rn = 1;
  const o = de(), { AbortError: l, codes: y } = KA(), { ERR_INVALID_ARG_TYPE: b, ERR_STREAM_PREMATURE_CLOSE: X } = y, { kEmptyObject: u, once: H } = TA(), { validateAbortSignal: n, validateFunction: i, validateObject: p, validateBoolean: D } = Ze(), { Promise: f, PromisePrototypeThen: Y, SymbolDispose: c } = NA(), {
    isClosed: w,
    isReadable: V,
    isReadableNodeStream: I,
    isReadableStream: s,
    isReadableFinished: C,
    isReadableErrored: x,
    isWritable: U,
    isWritableNodeStream: N,
    isWritableStream: q,
    isWritableFinished: L,
    isWritableErrored: $,
    isNodeStream: GA,
    willEmitClose: _,
    kIsClosedPromise: AA
  } = ne();
  let aA;
  function K(oA) {
    return oA.setHeader && typeof oA.abort == "function";
  }
  const fA = () => {
  };
  function bA(oA, FA, v) {
    var a, Z;
    if (arguments.length === 2 ? (v = FA, FA = u) : FA == null ? FA = u : p(FA, "options"), i(v, "callback"), n(FA.signal, "options.signal"), v = H(v), s(oA) || q(oA))
      return xA(oA, FA, v);
    if (!GA(oA))
      throw new b("stream", ["ReadableStream", "WritableStream", "Stream"], oA);
    const m = (a = FA.readable) !== null && a !== void 0 ? a : I(oA), z = (Z = FA.writable) !== null && Z !== void 0 ? Z : N(oA), sA = oA._writableState, cA = oA._readableState, QA = () => {
      oA.writable || iA();
    };
    let P = _(oA) && I(oA) === m && N(oA) === z, eA = L(oA, !1);
    const iA = () => {
      eA = !0, oA.destroyed && (P = !1), !(P && (!oA.readable || m)) && (!m || pA) && v.call(oA);
    };
    let pA = C(oA, !1);
    const dA = () => {
      pA = !0, oA.destroyed && (P = !1), !(P && (!oA.writable || z)) && (!z || eA) && v.call(oA);
    }, S = (A) => {
      v.call(oA, A);
    };
    let T = w(oA);
    const nA = () => {
      T = !0;
      const A = $(oA) || x(oA);
      if (A && typeof A != "boolean")
        return v.call(oA, A);
      if (m && !pA && I(oA, !0) && !C(oA, !1))
        return v.call(oA, new X());
      if (z && !eA && !L(oA, !1))
        return v.call(oA, new X());
      v.call(oA);
    }, EA = () => {
      T = !0;
      const A = $(oA) || x(oA);
      if (A && typeof A != "boolean")
        return v.call(oA, A);
      v.call(oA);
    }, hA = () => {
      oA.req.on("finish", iA);
    };
    K(oA) ? (oA.on("complete", iA), P || oA.on("abort", nA), oA.req ? hA() : oA.on("request", hA)) : z && !sA && (oA.on("end", QA), oA.on("close", QA)), !P && typeof oA.aborted == "boolean" && oA.on("aborted", nA), oA.on("end", dA), oA.on("finish", iA), FA.error !== !1 && oA.on("error", S), oA.on("close", nA), T ? o.nextTick(nA) : sA != null && sA.errorEmitted || cA != null && cA.errorEmitted ? P || o.nextTick(EA) : (!m && (!P || V(oA)) && (eA || U(oA) === !1) || !z && (!P || U(oA)) && (pA || V(oA) === !1) || cA && oA.req && oA.aborted) && o.nextTick(EA);
    const d = () => {
      v = fA, oA.removeListener("aborted", nA), oA.removeListener("complete", iA), oA.removeListener("abort", nA), oA.removeListener("request", hA), oA.req && oA.req.removeListener("finish", iA), oA.removeListener("end", QA), oA.removeListener("close", QA), oA.removeListener("finish", iA), oA.removeListener("end", dA), oA.removeListener("error", S), oA.removeListener("close", nA);
    };
    if (FA.signal && !T) {
      const A = () => {
        const r = v;
        d(), r.call(
          oA,
          new l(void 0, {
            cause: FA.signal.reason
          })
        );
      };
      if (FA.signal.aborted)
        o.nextTick(A);
      else {
        aA = aA || TA().addAbortListener;
        const r = aA(FA.signal, A), E = v;
        v = H((...W) => {
          r[c](), E.apply(oA, W);
        });
      }
    }
    return d;
  }
  function xA(oA, FA, v) {
    let a = !1, Z = fA;
    if (FA.signal)
      if (Z = () => {
        a = !0, v.call(
          oA,
          new l(void 0, {
            cause: FA.signal.reason
          })
        );
      }, FA.signal.aborted)
        o.nextTick(Z);
      else {
        aA = aA || TA().addAbortListener;
        const z = aA(FA.signal, Z), sA = v;
        v = H((...cA) => {
          z[c](), sA.apply(oA, cA);
        });
      }
    const m = (...z) => {
      a || o.nextTick(() => v.apply(oA, z));
    };
    return Y(oA[AA].promise, m, m), fA;
  }
  function HA(oA, FA) {
    var v;
    let a = !1;
    return FA === null && (FA = u), (v = FA) !== null && v !== void 0 && v.cleanup && (D(FA.cleanup, "cleanup"), a = FA.cleanup), new f((Z, m) => {
      const z = bA(oA, FA, (sA) => {
        a && z(), sA ? m(sA) : Z();
      });
    });
  }
  return ye.exports = bA, ye.exports.finished = HA, ye.exports;
}
var Pe, gn;
function Ge() {
  if (gn) return Pe;
  gn = 1;
  const o = de(), {
    aggregateTwoErrors: l,
    codes: { ERR_MULTIPLE_CALLBACK: y },
    AbortError: b
  } = KA(), { Symbol: X } = NA(), { kIsDestroyed: u, isDestroyed: H, isFinished: n, isServerRequest: i } = ne(), p = X("kDestroy"), D = X("kConstruct");
  function f(_, AA, aA) {
    _ && (_.stack, AA && !AA.errored && (AA.errored = _), aA && !aA.errored && (aA.errored = _));
  }
  function Y(_, AA) {
    const aA = this._readableState, K = this._writableState, fA = K || aA;
    return K != null && K.destroyed || aA != null && aA.destroyed ? (typeof AA == "function" && AA(), this) : (f(_, K, aA), K && (K.destroyed = !0), aA && (aA.destroyed = !0), fA.constructed ? c(this, _, AA) : this.once(p, function(bA) {
      c(this, l(bA, _), AA);
    }), this);
  }
  function c(_, AA, aA) {
    let K = !1;
    function fA(bA) {
      if (K)
        return;
      K = !0;
      const xA = _._readableState, HA = _._writableState;
      f(bA, HA, xA), HA && (HA.closed = !0), xA && (xA.closed = !0), typeof aA == "function" && aA(bA), bA ? o.nextTick(w, _, bA) : o.nextTick(V, _);
    }
    try {
      _._destroy(AA || null, fA);
    } catch (bA) {
      fA(bA);
    }
  }
  function w(_, AA) {
    I(_, AA), V(_);
  }
  function V(_) {
    const AA = _._readableState, aA = _._writableState;
    aA && (aA.closeEmitted = !0), AA && (AA.closeEmitted = !0), (aA != null && aA.emitClose || AA != null && AA.emitClose) && _.emit("close");
  }
  function I(_, AA) {
    const aA = _._readableState, K = _._writableState;
    K != null && K.errorEmitted || aA != null && aA.errorEmitted || (K && (K.errorEmitted = !0), aA && (aA.errorEmitted = !0), _.emit("error", AA));
  }
  function s() {
    const _ = this._readableState, AA = this._writableState;
    _ && (_.constructed = !0, _.closed = !1, _.closeEmitted = !1, _.destroyed = !1, _.errored = null, _.errorEmitted = !1, _.reading = !1, _.ended = _.readable === !1, _.endEmitted = _.readable === !1), AA && (AA.constructed = !0, AA.destroyed = !1, AA.closed = !1, AA.closeEmitted = !1, AA.errored = null, AA.errorEmitted = !1, AA.finalCalled = !1, AA.prefinished = !1, AA.ended = AA.writable === !1, AA.ending = AA.writable === !1, AA.finished = AA.writable === !1);
  }
  function C(_, AA, aA) {
    const K = _._readableState, fA = _._writableState;
    if (fA != null && fA.destroyed || K != null && K.destroyed)
      return this;
    K != null && K.autoDestroy || fA != null && fA.autoDestroy ? _.destroy(AA) : AA && (AA.stack, fA && !fA.errored && (fA.errored = AA), K && !K.errored && (K.errored = AA), aA ? o.nextTick(I, _, AA) : I(_, AA));
  }
  function x(_, AA) {
    if (typeof _._construct != "function")
      return;
    const aA = _._readableState, K = _._writableState;
    aA && (aA.constructed = !1), K && (K.constructed = !1), _.once(D, AA), !(_.listenerCount(D) > 1) && o.nextTick(U, _);
  }
  function U(_) {
    let AA = !1;
    function aA(K) {
      if (AA) {
        C(_, K ?? new y());
        return;
      }
      AA = !0;
      const fA = _._readableState, bA = _._writableState, xA = bA || fA;
      fA && (fA.constructed = !0), bA && (bA.constructed = !0), xA.destroyed ? _.emit(p, K) : K ? C(_, K, !0) : o.nextTick(N, _);
    }
    try {
      _._construct((K) => {
        o.nextTick(aA, K);
      });
    } catch (K) {
      o.nextTick(aA, K);
    }
  }
  function N(_) {
    _.emit(D);
  }
  function q(_) {
    return (_ == null ? void 0 : _.setHeader) && typeof _.abort == "function";
  }
  function L(_) {
    _.emit("close");
  }
  function $(_, AA) {
    _.emit("error", AA), o.nextTick(L, _);
  }
  function GA(_, AA) {
    !_ || H(_) || (!AA && !n(_) && (AA = new b()), i(_) ? (_.socket = null, _.destroy(AA)) : q(_) ? _.abort() : q(_.req) ? _.req.abort() : typeof _.destroy == "function" ? _.destroy(AA) : typeof _.close == "function" ? _.close() : AA ? o.nextTick($, _, AA) : o.nextTick(L, _), _.destroyed || (_[u] = !0));
  }
  return Pe = {
    construct: x,
    destroyer: GA,
    destroy: Y,
    undestroy: s,
    errorOrDestroy: C
  }, Pe;
}
var qe, Bn;
function xt() {
  if (Bn) return qe;
  Bn = 1;
  const { ArrayIsArray: o, ObjectSetPrototypeOf: l } = NA(), { EventEmitter: y } = Re();
  function b(u) {
    y.call(this, u);
  }
  l(b.prototype, y.prototype), l(b, y), b.prototype.pipe = function(u, H) {
    const n = this;
    function i(V) {
      u.writable && u.write(V) === !1 && n.pause && n.pause();
    }
    n.on("data", i);
    function p() {
      n.readable && n.resume && n.resume();
    }
    u.on("drain", p), !u._isStdio && (!H || H.end !== !1) && (n.on("end", f), n.on("close", Y));
    let D = !1;
    function f() {
      D || (D = !0, u.end());
    }
    function Y() {
      D || (D = !0, typeof u.destroy == "function" && u.destroy());
    }
    function c(V) {
      w(), y.listenerCount(this, "error") === 0 && this.emit("error", V);
    }
    X(n, "error", c), X(u, "error", c);
    function w() {
      n.removeListener("data", i), u.removeListener("drain", p), n.removeListener("end", f), n.removeListener("close", Y), n.removeListener("error", c), u.removeListener("error", c), n.removeListener("end", w), n.removeListener("close", w), u.removeListener("close", w);
    }
    return n.on("end", w), n.on("close", w), u.on("close", w), u.emit("pipe", n), u;
  };
  function X(u, H, n) {
    if (typeof u.prependListener == "function") return u.prependListener(H, n);
    !u._events || !u._events[H] ? u.on(H, n) : o(u._events[H]) ? u._events[H].unshift(n) : u._events[H] = [n, u._events[H]];
  }
  return qe = {
    Stream: b,
    prependListener: X
  }, qe;
}
var $e = { exports: {} }, on;
function Ne() {
  return on || (on = 1, function(o) {
    const { SymbolDispose: l } = NA(), { AbortError: y, codes: b } = KA(), { isNodeStream: X, isWebStream: u, kControllerErrorFunction: H } = ne(), n = Be(), { ERR_INVALID_ARG_TYPE: i } = b;
    let p;
    const D = (f, Y) => {
      if (typeof f != "object" || !("aborted" in f))
        throw new i(Y, "AbortSignal", f);
    };
    o.exports.addAbortSignal = function(Y, c) {
      if (D(Y, "signal"), !X(c) && !u(c))
        throw new i("stream", ["ReadableStream", "WritableStream", "Stream"], c);
      return o.exports.addAbortSignalNoValidate(Y, c);
    }, o.exports.addAbortSignalNoValidate = function(f, Y) {
      if (typeof f != "object" || !("aborted" in f))
        return Y;
      const c = X(Y) ? () => {
        Y.destroy(
          new y(void 0, {
            cause: f.reason
          })
        );
      } : () => {
        Y[H](
          new y(void 0, {
            cause: f.reason
          })
        );
      };
      if (f.aborted)
        c();
      else {
        p = p || TA().addAbortListener;
        const w = p(f, c);
        n(Y, w[l]);
      }
      return Y;
    };
  }($e)), $e.exports;
}
var At, an;
function oB() {
  if (an) return At;
  an = 1;
  const { StringPrototypeSlice: o, SymbolIterator: l, TypedArrayPrototypeSet: y, Uint8Array: b } = NA(), { Buffer: X } = Ce(), { inspect: u } = TA();
  return At = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(n) {
      const i = {
        data: n,
        next: null
      };
      this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
    }
    unshift(n) {
      const i = {
        data: n,
        next: this.head
      };
      this.length === 0 && (this.tail = i), this.head = i, ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      const n = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, n;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(n) {
      if (this.length === 0) return "";
      let i = this.head, p = "" + i.data;
      for (; (i = i.next) !== null; ) p += n + i.data;
      return p;
    }
    concat(n) {
      if (this.length === 0) return X.alloc(0);
      const i = X.allocUnsafe(n >>> 0);
      let p = this.head, D = 0;
      for (; p; )
        y(i, p.data, D), D += p.data.length, p = p.next;
      return i;
    }
    // Consumes a specified amount of bytes or characters from the buffered data.
    consume(n, i) {
      const p = this.head.data;
      if (n < p.length) {
        const D = p.slice(0, n);
        return this.head.data = p.slice(n), D;
      }
      return n === p.length ? this.shift() : i ? this._getString(n) : this._getBuffer(n);
    }
    first() {
      return this.head.data;
    }
    *[l]() {
      for (let n = this.head; n; n = n.next)
        yield n.data;
    }
    // Consumes a specified amount of characters from the buffered data.
    _getString(n) {
      let i = "", p = this.head, D = 0;
      do {
        const f = p.data;
        if (n > f.length)
          i += f, n -= f.length;
        else {
          n === f.length ? (i += f, ++D, p.next ? this.head = p.next : this.head = this.tail = null) : (i += o(f, 0, n), this.head = p, p.data = o(f, n));
          break;
        }
        ++D;
      } while ((p = p.next) !== null);
      return this.length -= D, i;
    }
    // Consumes a specified amount of bytes from the buffered data.
    _getBuffer(n) {
      const i = X.allocUnsafe(n), p = n;
      let D = this.head, f = 0;
      do {
        const Y = D.data;
        if (n > Y.length)
          y(i, Y, p - n), n -= Y.length;
        else {
          n === Y.length ? (y(i, Y, p - n), ++f, D.next ? this.head = D.next : this.head = this.tail = null) : (y(i, new b(Y.buffer, Y.byteOffset, n), p - n), this.head = D, D.data = Y.slice(n));
          break;
        }
        ++f;
      } while ((D = D.next) !== null);
      return this.length -= f, i;
    }
    // Make sure the linked list only shows the minimal necessary information.
    [Symbol.for("nodejs.util.inspect.custom")](n, i) {
      return u(this, {
        ...i,
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: !1
      });
    }
  }, At;
}
var et, ln;
function Xe() {
  if (ln) return et;
  ln = 1;
  const { MathFloor: o, NumberIsInteger: l } = NA(), { validateInteger: y } = Ze(), { ERR_INVALID_ARG_VALUE: b } = KA().codes;
  let X = 16 * 1024, u = 16;
  function H(D, f, Y) {
    return D.highWaterMark != null ? D.highWaterMark : f ? D[Y] : null;
  }
  function n(D) {
    return D ? u : X;
  }
  function i(D, f) {
    y(f, "value", 0), D ? u = f : X = f;
  }
  function p(D, f, Y, c) {
    const w = H(f, c, Y);
    if (w != null) {
      if (!l(w) || w < 0) {
        const V = c ? `options.${Y}` : "options.highWaterMark";
        throw new b(V, w);
      }
      return o(w);
    }
    return n(D.objectMode);
  }
  return et = {
    getHighWaterMark: p,
    getDefaultHighWaterMark: n,
    setDefaultHighWaterMark: i
  }, et;
}
var tt = {}, Ve = { exports: {} }, nt = {}, Me = {}, cn;
function aB() {
  return cn || (cn = 1, Me.read = function(o, l, y, b, X) {
    var u, H, n = X * 8 - b - 1, i = (1 << n) - 1, p = i >> 1, D = -7, f = y ? X - 1 : 0, Y = y ? -1 : 1, c = o[l + f];
    for (f += Y, u = c & (1 << -D) - 1, c >>= -D, D += n; D > 0; u = u * 256 + o[l + f], f += Y, D -= 8)
      ;
    for (H = u & (1 << -D) - 1, u >>= -D, D += b; D > 0; H = H * 256 + o[l + f], f += Y, D -= 8)
      ;
    if (u === 0)
      u = 1 - p;
    else {
      if (u === i)
        return H ? NaN : (c ? -1 : 1) * (1 / 0);
      H = H + Math.pow(2, b), u = u - p;
    }
    return (c ? -1 : 1) * H * Math.pow(2, u - b);
  }, Me.write = function(o, l, y, b, X, u) {
    var H, n, i, p = u * 8 - X - 1, D = (1 << p) - 1, f = D >> 1, Y = X === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, c = b ? 0 : u - 1, w = b ? 1 : -1, V = l < 0 || l === 0 && 1 / l < 0 ? 1 : 0;
    for (l = Math.abs(l), isNaN(l) || l === 1 / 0 ? (n = isNaN(l) ? 1 : 0, H = D) : (H = Math.floor(Math.log(l) / Math.LN2), l * (i = Math.pow(2, -H)) < 1 && (H--, i *= 2), H + f >= 1 ? l += Y / i : l += Y * Math.pow(2, 1 - f), l * i >= 2 && (H++, i /= 2), H + f >= D ? (n = 0, H = D) : H + f >= 1 ? (n = (l * i - 1) * Math.pow(2, X), H = H + f) : (n = l * Math.pow(2, f - 1) * Math.pow(2, X), H = 0)); X >= 8; o[y + c] = n & 255, c += w, n /= 256, X -= 8)
      ;
    for (H = H << X | n, p += X; p > 0; o[y + c] = H & 255, c += w, H /= 256, p -= 8)
      ;
    o[y + c - w] |= V * 128;
  }), Me;
}
var rt, sn;
function lB() {
  if (sn) return rt;
  sn = 1;
  var o = {}.toString;
  return rt = Array.isArray || function(l) {
    return o.call(l) == "[object Array]";
  }, rt;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var un;
function cB() {
  return un || (un = 1, function(o) {
    var l = zn(), y = aB(), b = lB();
    o.Buffer = n, o.SlowBuffer = s, o.INSPECT_MAX_BYTES = 50, n.TYPED_ARRAY_SUPPORT = Wt.TYPED_ARRAY_SUPPORT !== void 0 ? Wt.TYPED_ARRAY_SUPPORT : X(), o.kMaxLength = u();
    function X() {
      try {
        var d = new Uint8Array(1);
        return d.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } }, d.foo() === 42 && // typed array instances can be augmented
        typeof d.subarray == "function" && // chrome 9-10 lack `subarray`
        d.subarray(1, 1).byteLength === 0;
      } catch {
        return !1;
      }
    }
    function u() {
      return n.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function H(d, A) {
      if (u() < A)
        throw new RangeError("Invalid typed array length");
      return n.TYPED_ARRAY_SUPPORT ? (d = new Uint8Array(A), d.__proto__ = n.prototype) : (d === null && (d = new n(A)), d.length = A), d;
    }
    function n(d, A, r) {
      if (!n.TYPED_ARRAY_SUPPORT && !(this instanceof n))
        return new n(d, A, r);
      if (typeof d == "number") {
        if (typeof A == "string")
          throw new Error(
            "If encoding is specified then the first argument must be a string"
          );
        return f(this, d);
      }
      return i(this, d, A, r);
    }
    n.poolSize = 8192, n._augment = function(d) {
      return d.__proto__ = n.prototype, d;
    };
    function i(d, A, r, E) {
      if (typeof A == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer < "u" && A instanceof ArrayBuffer ? w(d, A, r, E) : typeof A == "string" ? Y(d, A, r) : V(d, A);
    }
    n.from = function(d, A, r) {
      return i(null, d, A, r);
    }, n.TYPED_ARRAY_SUPPORT && (n.prototype.__proto__ = Uint8Array.prototype, n.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && n[Symbol.species] === n && Object.defineProperty(n, Symbol.species, {
      value: null,
      configurable: !0
    }));
    function p(d) {
      if (typeof d != "number")
        throw new TypeError('"size" argument must be a number');
      if (d < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    function D(d, A, r, E) {
      return p(A), A <= 0 ? H(d, A) : r !== void 0 ? typeof E == "string" ? H(d, A).fill(r, E) : H(d, A).fill(r) : H(d, A);
    }
    n.alloc = function(d, A, r) {
      return D(null, d, A, r);
    };
    function f(d, A) {
      if (p(A), d = H(d, A < 0 ? 0 : I(A) | 0), !n.TYPED_ARRAY_SUPPORT)
        for (var r = 0; r < A; ++r)
          d[r] = 0;
      return d;
    }
    n.allocUnsafe = function(d) {
      return f(null, d);
    }, n.allocUnsafeSlow = function(d) {
      return f(null, d);
    };
    function Y(d, A, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !n.isEncoding(r))
        throw new TypeError('"encoding" must be a valid string encoding');
      var E = C(A, r) | 0;
      d = H(d, E);
      var W = d.write(A, r);
      return W !== E && (d = d.slice(0, W)), d;
    }
    function c(d, A) {
      var r = A.length < 0 ? 0 : I(A.length) | 0;
      d = H(d, r);
      for (var E = 0; E < r; E += 1)
        d[E] = A[E] & 255;
      return d;
    }
    function w(d, A, r, E) {
      if (A.byteLength, r < 0 || A.byteLength < r)
        throw new RangeError("'offset' is out of bounds");
      if (A.byteLength < r + (E || 0))
        throw new RangeError("'length' is out of bounds");
      return r === void 0 && E === void 0 ? A = new Uint8Array(A) : E === void 0 ? A = new Uint8Array(A, r) : A = new Uint8Array(A, r, E), n.TYPED_ARRAY_SUPPORT ? (d = A, d.__proto__ = n.prototype) : d = c(d, A), d;
    }
    function V(d, A) {
      if (n.isBuffer(A)) {
        var r = I(A.length) | 0;
        return d = H(d, r), d.length === 0 || A.copy(d, 0, 0, r), d;
      }
      if (A) {
        if (typeof ArrayBuffer < "u" && A.buffer instanceof ArrayBuffer || "length" in A)
          return typeof A.length != "number" || hA(A.length) ? H(d, 0) : c(d, A);
        if (A.type === "Buffer" && b(A.data))
          return c(d, A.data);
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function I(d) {
      if (d >= u())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u().toString(16) + " bytes");
      return d | 0;
    }
    function s(d) {
      return +d != d && (d = 0), n.alloc(+d);
    }
    n.isBuffer = function(A) {
      return !!(A != null && A._isBuffer);
    }, n.compare = function(A, r) {
      if (!n.isBuffer(A) || !n.isBuffer(r))
        throw new TypeError("Arguments must be Buffers");
      if (A === r) return 0;
      for (var E = A.length, W = r.length, rA = 0, CA = Math.min(E, W); rA < CA; ++rA)
        if (A[rA] !== r[rA]) {
          E = A[rA], W = r[rA];
          break;
        }
      return E < W ? -1 : W < E ? 1 : 0;
    }, n.isEncoding = function(A) {
      switch (String(A).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, n.concat = function(A, r) {
      if (!b(A))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (A.length === 0)
        return n.alloc(0);
      var E;
      if (r === void 0)
        for (r = 0, E = 0; E < A.length; ++E)
          r += A[E].length;
      var W = n.allocUnsafe(r), rA = 0;
      for (E = 0; E < A.length; ++E) {
        var CA = A[E];
        if (!n.isBuffer(CA))
          throw new TypeError('"list" argument must be an Array of Buffers');
        CA.copy(W, rA), rA += CA.length;
      }
      return W;
    };
    function C(d, A) {
      if (n.isBuffer(d))
        return d.length;
      if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(d) || d instanceof ArrayBuffer))
        return d.byteLength;
      typeof d != "string" && (d = "" + d);
      var r = d.length;
      if (r === 0) return 0;
      for (var E = !1; ; )
        switch (A) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
          case void 0:
            return dA(d).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return nA(d).length;
          default:
            if (E) return dA(d).length;
            A = ("" + A).toLowerCase(), E = !0;
        }
    }
    n.byteLength = C;
    function x(d, A, r) {
      var E = !1;
      if ((A === void 0 || A < 0) && (A = 0), A > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, A >>>= 0, r <= A))
        return "";
      for (d || (d = "utf8"); ; )
        switch (d) {
          case "hex":
            return FA(this, A, r);
          case "utf8":
          case "utf-8":
            return fA(this, A, r);
          case "ascii":
            return HA(this, A, r);
          case "latin1":
          case "binary":
            return oA(this, A, r);
          case "base64":
            return K(this, A, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return v(this, A, r);
          default:
            if (E) throw new TypeError("Unknown encoding: " + d);
            d = (d + "").toLowerCase(), E = !0;
        }
    }
    n.prototype._isBuffer = !0;
    function U(d, A, r) {
      var E = d[A];
      d[A] = d[r], d[r] = E;
    }
    n.prototype.swap16 = function() {
      var A = this.length;
      if (A % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; r < A; r += 2)
        U(this, r, r + 1);
      return this;
    }, n.prototype.swap32 = function() {
      var A = this.length;
      if (A % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; r < A; r += 4)
        U(this, r, r + 3), U(this, r + 1, r + 2);
      return this;
    }, n.prototype.swap64 = function() {
      var A = this.length;
      if (A % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; r < A; r += 8)
        U(this, r, r + 7), U(this, r + 1, r + 6), U(this, r + 2, r + 5), U(this, r + 3, r + 4);
      return this;
    }, n.prototype.toString = function() {
      var A = this.length | 0;
      return A === 0 ? "" : arguments.length === 0 ? fA(this, 0, A) : x.apply(this, arguments);
    }, n.prototype.equals = function(A) {
      if (!n.isBuffer(A)) throw new TypeError("Argument must be a Buffer");
      return this === A ? !0 : n.compare(this, A) === 0;
    }, n.prototype.inspect = function() {
      var A = "", r = o.INSPECT_MAX_BYTES;
      return this.length > 0 && (A = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (A += " ... ")), "<Buffer " + A + ">";
    }, n.prototype.compare = function(A, r, E, W, rA) {
      if (!n.isBuffer(A))
        throw new TypeError("Argument must be a Buffer");
      if (r === void 0 && (r = 0), E === void 0 && (E = A ? A.length : 0), W === void 0 && (W = 0), rA === void 0 && (rA = this.length), r < 0 || E > A.length || W < 0 || rA > this.length)
        throw new RangeError("out of range index");
      if (W >= rA && r >= E)
        return 0;
      if (W >= rA)
        return -1;
      if (r >= E)
        return 1;
      if (r >>>= 0, E >>>= 0, W >>>= 0, rA >>>= 0, this === A) return 0;
      for (var CA = rA - W, ZA = E - r, MA = Math.min(CA, ZA), h = this.slice(W, rA), e = A.slice(r, E), g = 0; g < MA; ++g)
        if (h[g] !== e[g]) {
          CA = h[g], ZA = e[g];
          break;
        }
      return CA < ZA ? -1 : ZA < CA ? 1 : 0;
    };
    function N(d, A, r, E, W) {
      if (d.length === 0) return -1;
      if (typeof r == "string" ? (E = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = W ? 0 : d.length - 1), r < 0 && (r = d.length + r), r >= d.length) {
        if (W) return -1;
        r = d.length - 1;
      } else if (r < 0)
        if (W) r = 0;
        else return -1;
      if (typeof A == "string" && (A = n.from(A, E)), n.isBuffer(A))
        return A.length === 0 ? -1 : q(d, A, r, E, W);
      if (typeof A == "number")
        return A = A & 255, n.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? W ? Uint8Array.prototype.indexOf.call(d, A, r) : Uint8Array.prototype.lastIndexOf.call(d, A, r) : q(d, [A], r, E, W);
      throw new TypeError("val must be string, number or Buffer");
    }
    function q(d, A, r, E, W) {
      var rA = 1, CA = d.length, ZA = A.length;
      if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
        if (d.length < 2 || A.length < 2)
          return -1;
        rA = 2, CA /= 2, ZA /= 2, r /= 2;
      }
      function MA(B, k) {
        return rA === 1 ? B[k] : B.readUInt16BE(k * rA);
      }
      var h;
      if (W) {
        var e = -1;
        for (h = r; h < CA; h++)
          if (MA(d, h) === MA(A, e === -1 ? 0 : h - e)) {
            if (e === -1 && (e = h), h - e + 1 === ZA) return e * rA;
          } else
            e !== -1 && (h -= h - e), e = -1;
      } else
        for (r + ZA > CA && (r = CA - ZA), h = r; h >= 0; h--) {
          for (var g = !0, R = 0; R < ZA; R++)
            if (MA(d, h + R) !== MA(A, R)) {
              g = !1;
              break;
            }
          if (g) return h;
        }
      return -1;
    }
    n.prototype.includes = function(A, r, E) {
      return this.indexOf(A, r, E) !== -1;
    }, n.prototype.indexOf = function(A, r, E) {
      return N(this, A, r, E, !0);
    }, n.prototype.lastIndexOf = function(A, r, E) {
      return N(this, A, r, E, !1);
    };
    function L(d, A, r, E) {
      r = Number(r) || 0;
      var W = d.length - r;
      E ? (E = Number(E), E > W && (E = W)) : E = W;
      var rA = A.length;
      if (rA % 2 !== 0) throw new TypeError("Invalid hex string");
      E > rA / 2 && (E = rA / 2);
      for (var CA = 0; CA < E; ++CA) {
        var ZA = parseInt(A.substr(CA * 2, 2), 16);
        if (isNaN(ZA)) return CA;
        d[r + CA] = ZA;
      }
      return CA;
    }
    function $(d, A, r, E) {
      return EA(dA(A, d.length - r), d, r, E);
    }
    function GA(d, A, r, E) {
      return EA(S(A), d, r, E);
    }
    function _(d, A, r, E) {
      return GA(d, A, r, E);
    }
    function AA(d, A, r, E) {
      return EA(nA(A), d, r, E);
    }
    function aA(d, A, r, E) {
      return EA(T(A, d.length - r), d, r, E);
    }
    n.prototype.write = function(A, r, E, W) {
      if (r === void 0)
        W = "utf8", E = this.length, r = 0;
      else if (E === void 0 && typeof r == "string")
        W = r, E = this.length, r = 0;
      else if (isFinite(r))
        r = r | 0, isFinite(E) ? (E = E | 0, W === void 0 && (W = "utf8")) : (W = E, E = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var rA = this.length - r;
      if ((E === void 0 || E > rA) && (E = rA), A.length > 0 && (E < 0 || r < 0) || r > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      W || (W = "utf8");
      for (var CA = !1; ; )
        switch (W) {
          case "hex":
            return L(this, A, r, E);
          case "utf8":
          case "utf-8":
            return $(this, A, r, E);
          case "ascii":
            return GA(this, A, r, E);
          case "latin1":
          case "binary":
            return _(this, A, r, E);
          case "base64":
            return AA(this, A, r, E);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return aA(this, A, r, E);
          default:
            if (CA) throw new TypeError("Unknown encoding: " + W);
            W = ("" + W).toLowerCase(), CA = !0;
        }
    }, n.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function K(d, A, r) {
      return A === 0 && r === d.length ? l.fromByteArray(d) : l.fromByteArray(d.slice(A, r));
    }
    function fA(d, A, r) {
      r = Math.min(d.length, r);
      for (var E = [], W = A; W < r; ) {
        var rA = d[W], CA = null, ZA = rA > 239 ? 4 : rA > 223 ? 3 : rA > 191 ? 2 : 1;
        if (W + ZA <= r) {
          var MA, h, e, g;
          switch (ZA) {
            case 1:
              rA < 128 && (CA = rA);
              break;
            case 2:
              MA = d[W + 1], (MA & 192) === 128 && (g = (rA & 31) << 6 | MA & 63, g > 127 && (CA = g));
              break;
            case 3:
              MA = d[W + 1], h = d[W + 2], (MA & 192) === 128 && (h & 192) === 128 && (g = (rA & 15) << 12 | (MA & 63) << 6 | h & 63, g > 2047 && (g < 55296 || g > 57343) && (CA = g));
              break;
            case 4:
              MA = d[W + 1], h = d[W + 2], e = d[W + 3], (MA & 192) === 128 && (h & 192) === 128 && (e & 192) === 128 && (g = (rA & 15) << 18 | (MA & 63) << 12 | (h & 63) << 6 | e & 63, g > 65535 && g < 1114112 && (CA = g));
          }
        }
        CA === null ? (CA = 65533, ZA = 1) : CA > 65535 && (CA -= 65536, E.push(CA >>> 10 & 1023 | 55296), CA = 56320 | CA & 1023), E.push(CA), W += ZA;
      }
      return xA(E);
    }
    var bA = 4096;
    function xA(d) {
      var A = d.length;
      if (A <= bA)
        return String.fromCharCode.apply(String, d);
      for (var r = "", E = 0; E < A; )
        r += String.fromCharCode.apply(
          String,
          d.slice(E, E += bA)
        );
      return r;
    }
    function HA(d, A, r) {
      var E = "";
      r = Math.min(d.length, r);
      for (var W = A; W < r; ++W)
        E += String.fromCharCode(d[W] & 127);
      return E;
    }
    function oA(d, A, r) {
      var E = "";
      r = Math.min(d.length, r);
      for (var W = A; W < r; ++W)
        E += String.fromCharCode(d[W]);
      return E;
    }
    function FA(d, A, r) {
      var E = d.length;
      (!A || A < 0) && (A = 0), (!r || r < 0 || r > E) && (r = E);
      for (var W = "", rA = A; rA < r; ++rA)
        W += pA(d[rA]);
      return W;
    }
    function v(d, A, r) {
      for (var E = d.slice(A, r), W = "", rA = 0; rA < E.length; rA += 2)
        W += String.fromCharCode(E[rA] + E[rA + 1] * 256);
      return W;
    }
    n.prototype.slice = function(A, r) {
      var E = this.length;
      A = ~~A, r = r === void 0 ? E : ~~r, A < 0 ? (A += E, A < 0 && (A = 0)) : A > E && (A = E), r < 0 ? (r += E, r < 0 && (r = 0)) : r > E && (r = E), r < A && (r = A);
      var W;
      if (n.TYPED_ARRAY_SUPPORT)
        W = this.subarray(A, r), W.__proto__ = n.prototype;
      else {
        var rA = r - A;
        W = new n(rA, void 0);
        for (var CA = 0; CA < rA; ++CA)
          W[CA] = this[CA + A];
      }
      return W;
    };
    function a(d, A, r) {
      if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
      if (d + A > r) throw new RangeError("Trying to access beyond buffer length");
    }
    n.prototype.readUIntLE = function(A, r, E) {
      A = A | 0, r = r | 0, E || a(A, r, this.length);
      for (var W = this[A], rA = 1, CA = 0; ++CA < r && (rA *= 256); )
        W += this[A + CA] * rA;
      return W;
    }, n.prototype.readUIntBE = function(A, r, E) {
      A = A | 0, r = r | 0, E || a(A, r, this.length);
      for (var W = this[A + --r], rA = 1; r > 0 && (rA *= 256); )
        W += this[A + --r] * rA;
      return W;
    }, n.prototype.readUInt8 = function(A, r) {
      return r || a(A, 1, this.length), this[A];
    }, n.prototype.readUInt16LE = function(A, r) {
      return r || a(A, 2, this.length), this[A] | this[A + 1] << 8;
    }, n.prototype.readUInt16BE = function(A, r) {
      return r || a(A, 2, this.length), this[A] << 8 | this[A + 1];
    }, n.prototype.readUInt32LE = function(A, r) {
      return r || a(A, 4, this.length), (this[A] | this[A + 1] << 8 | this[A + 2] << 16) + this[A + 3] * 16777216;
    }, n.prototype.readUInt32BE = function(A, r) {
      return r || a(A, 4, this.length), this[A] * 16777216 + (this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3]);
    }, n.prototype.readIntLE = function(A, r, E) {
      A = A | 0, r = r | 0, E || a(A, r, this.length);
      for (var W = this[A], rA = 1, CA = 0; ++CA < r && (rA *= 256); )
        W += this[A + CA] * rA;
      return rA *= 128, W >= rA && (W -= Math.pow(2, 8 * r)), W;
    }, n.prototype.readIntBE = function(A, r, E) {
      A = A | 0, r = r | 0, E || a(A, r, this.length);
      for (var W = r, rA = 1, CA = this[A + --W]; W > 0 && (rA *= 256); )
        CA += this[A + --W] * rA;
      return rA *= 128, CA >= rA && (CA -= Math.pow(2, 8 * r)), CA;
    }, n.prototype.readInt8 = function(A, r) {
      return r || a(A, 1, this.length), this[A] & 128 ? (255 - this[A] + 1) * -1 : this[A];
    }, n.prototype.readInt16LE = function(A, r) {
      r || a(A, 2, this.length);
      var E = this[A] | this[A + 1] << 8;
      return E & 32768 ? E | 4294901760 : E;
    }, n.prototype.readInt16BE = function(A, r) {
      r || a(A, 2, this.length);
      var E = this[A + 1] | this[A] << 8;
      return E & 32768 ? E | 4294901760 : E;
    }, n.prototype.readInt32LE = function(A, r) {
      return r || a(A, 4, this.length), this[A] | this[A + 1] << 8 | this[A + 2] << 16 | this[A + 3] << 24;
    }, n.prototype.readInt32BE = function(A, r) {
      return r || a(A, 4, this.length), this[A] << 24 | this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3];
    }, n.prototype.readFloatLE = function(A, r) {
      return r || a(A, 4, this.length), y.read(this, A, !0, 23, 4);
    }, n.prototype.readFloatBE = function(A, r) {
      return r || a(A, 4, this.length), y.read(this, A, !1, 23, 4);
    }, n.prototype.readDoubleLE = function(A, r) {
      return r || a(A, 8, this.length), y.read(this, A, !0, 52, 8);
    }, n.prototype.readDoubleBE = function(A, r) {
      return r || a(A, 8, this.length), y.read(this, A, !1, 52, 8);
    };
    function Z(d, A, r, E, W, rA) {
      if (!n.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (A > W || A < rA) throw new RangeError('"value" argument is out of bounds');
      if (r + E > d.length) throw new RangeError("Index out of range");
    }
    n.prototype.writeUIntLE = function(A, r, E, W) {
      if (A = +A, r = r | 0, E = E | 0, !W) {
        var rA = Math.pow(2, 8 * E) - 1;
        Z(this, A, r, E, rA, 0);
      }
      var CA = 1, ZA = 0;
      for (this[r] = A & 255; ++ZA < E && (CA *= 256); )
        this[r + ZA] = A / CA & 255;
      return r + E;
    }, n.prototype.writeUIntBE = function(A, r, E, W) {
      if (A = +A, r = r | 0, E = E | 0, !W) {
        var rA = Math.pow(2, 8 * E) - 1;
        Z(this, A, r, E, rA, 0);
      }
      var CA = E - 1, ZA = 1;
      for (this[r + CA] = A & 255; --CA >= 0 && (ZA *= 256); )
        this[r + CA] = A / ZA & 255;
      return r + E;
    }, n.prototype.writeUInt8 = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 1, 255, 0), n.TYPED_ARRAY_SUPPORT || (A = Math.floor(A)), this[r] = A & 255, r + 1;
    };
    function m(d, A, r, E) {
      A < 0 && (A = 65535 + A + 1);
      for (var W = 0, rA = Math.min(d.length - r, 2); W < rA; ++W)
        d[r + W] = (A & 255 << 8 * (E ? W : 1 - W)) >>> (E ? W : 1 - W) * 8;
    }
    n.prototype.writeUInt16LE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 2, 65535, 0), n.TYPED_ARRAY_SUPPORT ? (this[r] = A & 255, this[r + 1] = A >>> 8) : m(this, A, r, !0), r + 2;
    }, n.prototype.writeUInt16BE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 2, 65535, 0), n.TYPED_ARRAY_SUPPORT ? (this[r] = A >>> 8, this[r + 1] = A & 255) : m(this, A, r, !1), r + 2;
    };
    function z(d, A, r, E) {
      A < 0 && (A = 4294967295 + A + 1);
      for (var W = 0, rA = Math.min(d.length - r, 4); W < rA; ++W)
        d[r + W] = A >>> (E ? W : 3 - W) * 8 & 255;
    }
    n.prototype.writeUInt32LE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 4, 4294967295, 0), n.TYPED_ARRAY_SUPPORT ? (this[r + 3] = A >>> 24, this[r + 2] = A >>> 16, this[r + 1] = A >>> 8, this[r] = A & 255) : z(this, A, r, !0), r + 4;
    }, n.prototype.writeUInt32BE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 4, 4294967295, 0), n.TYPED_ARRAY_SUPPORT ? (this[r] = A >>> 24, this[r + 1] = A >>> 16, this[r + 2] = A >>> 8, this[r + 3] = A & 255) : z(this, A, r, !1), r + 4;
    }, n.prototype.writeIntLE = function(A, r, E, W) {
      if (A = +A, r = r | 0, !W) {
        var rA = Math.pow(2, 8 * E - 1);
        Z(this, A, r, E, rA - 1, -rA);
      }
      var CA = 0, ZA = 1, MA = 0;
      for (this[r] = A & 255; ++CA < E && (ZA *= 256); )
        A < 0 && MA === 0 && this[r + CA - 1] !== 0 && (MA = 1), this[r + CA] = (A / ZA >> 0) - MA & 255;
      return r + E;
    }, n.prototype.writeIntBE = function(A, r, E, W) {
      if (A = +A, r = r | 0, !W) {
        var rA = Math.pow(2, 8 * E - 1);
        Z(this, A, r, E, rA - 1, -rA);
      }
      var CA = E - 1, ZA = 1, MA = 0;
      for (this[r + CA] = A & 255; --CA >= 0 && (ZA *= 256); )
        A < 0 && MA === 0 && this[r + CA + 1] !== 0 && (MA = 1), this[r + CA] = (A / ZA >> 0) - MA & 255;
      return r + E;
    }, n.prototype.writeInt8 = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 1, 127, -128), n.TYPED_ARRAY_SUPPORT || (A = Math.floor(A)), A < 0 && (A = 255 + A + 1), this[r] = A & 255, r + 1;
    }, n.prototype.writeInt16LE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 2, 32767, -32768), n.TYPED_ARRAY_SUPPORT ? (this[r] = A & 255, this[r + 1] = A >>> 8) : m(this, A, r, !0), r + 2;
    }, n.prototype.writeInt16BE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 2, 32767, -32768), n.TYPED_ARRAY_SUPPORT ? (this[r] = A >>> 8, this[r + 1] = A & 255) : m(this, A, r, !1), r + 2;
    }, n.prototype.writeInt32LE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 4, 2147483647, -2147483648), n.TYPED_ARRAY_SUPPORT ? (this[r] = A & 255, this[r + 1] = A >>> 8, this[r + 2] = A >>> 16, this[r + 3] = A >>> 24) : z(this, A, r, !0), r + 4;
    }, n.prototype.writeInt32BE = function(A, r, E) {
      return A = +A, r = r | 0, E || Z(this, A, r, 4, 2147483647, -2147483648), A < 0 && (A = 4294967295 + A + 1), n.TYPED_ARRAY_SUPPORT ? (this[r] = A >>> 24, this[r + 1] = A >>> 16, this[r + 2] = A >>> 8, this[r + 3] = A & 255) : z(this, A, r, !1), r + 4;
    };
    function sA(d, A, r, E, W, rA) {
      if (r + E > d.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range");
    }
    function cA(d, A, r, E, W) {
      return W || sA(d, A, r, 4), y.write(d, A, r, E, 23, 4), r + 4;
    }
    n.prototype.writeFloatLE = function(A, r, E) {
      return cA(this, A, r, !0, E);
    }, n.prototype.writeFloatBE = function(A, r, E) {
      return cA(this, A, r, !1, E);
    };
    function QA(d, A, r, E, W) {
      return W || sA(d, A, r, 8), y.write(d, A, r, E, 52, 8), r + 8;
    }
    n.prototype.writeDoubleLE = function(A, r, E) {
      return QA(this, A, r, !0, E);
    }, n.prototype.writeDoubleBE = function(A, r, E) {
      return QA(this, A, r, !1, E);
    }, n.prototype.copy = function(A, r, E, W) {
      if (E || (E = 0), !W && W !== 0 && (W = this.length), r >= A.length && (r = A.length), r || (r = 0), W > 0 && W < E && (W = E), W === E || A.length === 0 || this.length === 0) return 0;
      if (r < 0)
        throw new RangeError("targetStart out of bounds");
      if (E < 0 || E >= this.length) throw new RangeError("sourceStart out of bounds");
      if (W < 0) throw new RangeError("sourceEnd out of bounds");
      W > this.length && (W = this.length), A.length - r < W - E && (W = A.length - r + E);
      var rA = W - E, CA;
      if (this === A && E < r && r < W)
        for (CA = rA - 1; CA >= 0; --CA)
          A[CA + r] = this[CA + E];
      else if (rA < 1e3 || !n.TYPED_ARRAY_SUPPORT)
        for (CA = 0; CA < rA; ++CA)
          A[CA + r] = this[CA + E];
      else
        Uint8Array.prototype.set.call(
          A,
          this.subarray(E, E + rA),
          r
        );
      return rA;
    }, n.prototype.fill = function(A, r, E, W) {
      if (typeof A == "string") {
        if (typeof r == "string" ? (W = r, r = 0, E = this.length) : typeof E == "string" && (W = E, E = this.length), A.length === 1) {
          var rA = A.charCodeAt(0);
          rA < 256 && (A = rA);
        }
        if (W !== void 0 && typeof W != "string")
          throw new TypeError("encoding must be a string");
        if (typeof W == "string" && !n.isEncoding(W))
          throw new TypeError("Unknown encoding: " + W);
      } else typeof A == "number" && (A = A & 255);
      if (r < 0 || this.length < r || this.length < E)
        throw new RangeError("Out of range index");
      if (E <= r)
        return this;
      r = r >>> 0, E = E === void 0 ? this.length : E >>> 0, A || (A = 0);
      var CA;
      if (typeof A == "number")
        for (CA = r; CA < E; ++CA)
          this[CA] = A;
      else {
        var ZA = n.isBuffer(A) ? A : dA(new n(A, W).toString()), MA = ZA.length;
        for (CA = 0; CA < E - r; ++CA)
          this[CA + r] = ZA[CA % MA];
      }
      return this;
    };
    var P = /[^+\/0-9A-Za-z-_]/g;
    function eA(d) {
      if (d = iA(d).replace(P, ""), d.length < 2) return "";
      for (; d.length % 4 !== 0; )
        d = d + "=";
      return d;
    }
    function iA(d) {
      return d.trim ? d.trim() : d.replace(/^\s+|\s+$/g, "");
    }
    function pA(d) {
      return d < 16 ? "0" + d.toString(16) : d.toString(16);
    }
    function dA(d, A) {
      A = A || 1 / 0;
      for (var r, E = d.length, W = null, rA = [], CA = 0; CA < E; ++CA) {
        if (r = d.charCodeAt(CA), r > 55295 && r < 57344) {
          if (!W) {
            if (r > 56319) {
              (A -= 3) > -1 && rA.push(239, 191, 189);
              continue;
            } else if (CA + 1 === E) {
              (A -= 3) > -1 && rA.push(239, 191, 189);
              continue;
            }
            W = r;
            continue;
          }
          if (r < 56320) {
            (A -= 3) > -1 && rA.push(239, 191, 189), W = r;
            continue;
          }
          r = (W - 55296 << 10 | r - 56320) + 65536;
        } else W && (A -= 3) > -1 && rA.push(239, 191, 189);
        if (W = null, r < 128) {
          if ((A -= 1) < 0) break;
          rA.push(r);
        } else if (r < 2048) {
          if ((A -= 2) < 0) break;
          rA.push(
            r >> 6 | 192,
            r & 63 | 128
          );
        } else if (r < 65536) {
          if ((A -= 3) < 0) break;
          rA.push(
            r >> 12 | 224,
            r >> 6 & 63 | 128,
            r & 63 | 128
          );
        } else if (r < 1114112) {
          if ((A -= 4) < 0) break;
          rA.push(
            r >> 18 | 240,
            r >> 12 & 63 | 128,
            r >> 6 & 63 | 128,
            r & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return rA;
    }
    function S(d) {
      for (var A = [], r = 0; r < d.length; ++r)
        A.push(d.charCodeAt(r) & 255);
      return A;
    }
    function T(d, A) {
      for (var r, E, W, rA = [], CA = 0; CA < d.length && !((A -= 2) < 0); ++CA)
        r = d.charCodeAt(CA), E = r >> 8, W = r % 256, rA.push(W), rA.push(E);
      return rA;
    }
    function nA(d) {
      return l.toByteArray(eA(d));
    }
    function EA(d, A, r, E) {
      for (var W = 0; W < E && !(W + r >= A.length || W >= d.length); ++W)
        A[W + r] = d[W];
      return W;
    }
    function hA(d) {
      return d !== d;
    }
  }(nt)), nt;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Cn;
function sB() {
  return Cn || (Cn = 1, function(o, l) {
    var y = cB(), b = y.Buffer;
    function X(H, n) {
      for (var i in H)
        n[i] = H[i];
    }
    b.from && b.alloc && b.allocUnsafe && b.allocUnsafeSlow ? o.exports = y : (X(y, l), l.Buffer = u);
    function u(H, n, i) {
      return b(H, n, i);
    }
    u.prototype = Object.create(b.prototype), X(b, u), u.from = function(H, n, i) {
      if (typeof H == "number")
        throw new TypeError("Argument must not be a number");
      return b(H, n, i);
    }, u.alloc = function(H, n, i) {
      if (typeof H != "number")
        throw new TypeError("Argument must be a number");
      var p = b(H);
      return n !== void 0 ? typeof i == "string" ? p.fill(n, i) : p.fill(n) : p.fill(0), p;
    }, u.allocUnsafe = function(H) {
      if (typeof H != "number")
        throw new TypeError("Argument must be a number");
      return b(H);
    }, u.allocUnsafeSlow = function(H) {
      if (typeof H != "number")
        throw new TypeError("Argument must be a number");
      return y.SlowBuffer(H);
    };
  }(Ve, Ve.exports)), Ve.exports;
}
var dn;
function uB() {
  if (dn) return tt;
  dn = 1;
  var o = sB().Buffer, l = o.isEncoding || function(s) {
    switch (s = "" + s, s && s.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function y(s) {
    if (!s) return "utf8";
    for (var C; ; )
      switch (s) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return s;
        default:
          if (C) return;
          s = ("" + s).toLowerCase(), C = !0;
      }
  }
  function b(s) {
    var C = y(s);
    if (typeof C != "string" && (o.isEncoding === l || !l(s))) throw new Error("Unknown encoding: " + s);
    return C || s;
  }
  tt.StringDecoder = X;
  function X(s) {
    this.encoding = b(s);
    var C;
    switch (this.encoding) {
      case "utf16le":
        this.text = f, this.end = Y, C = 4;
        break;
      case "utf8":
        this.fillLast = i, C = 4;
        break;
      case "base64":
        this.text = c, this.end = w, C = 3;
        break;
      default:
        this.write = V, this.end = I;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = o.allocUnsafe(C);
  }
  X.prototype.write = function(s) {
    if (s.length === 0) return "";
    var C, x;
    if (this.lastNeed) {
      if (C = this.fillLast(s), C === void 0) return "";
      x = this.lastNeed, this.lastNeed = 0;
    } else
      x = 0;
    return x < s.length ? C ? C + this.text(s, x) : this.text(s, x) : C || "";
  }, X.prototype.end = D, X.prototype.text = p, X.prototype.fillLast = function(s) {
    if (this.lastNeed <= s.length)
      return s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    s.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, s.length), this.lastNeed -= s.length;
  };
  function u(s) {
    return s <= 127 ? 0 : s >> 5 === 6 ? 2 : s >> 4 === 14 ? 3 : s >> 3 === 30 ? 4 : s >> 6 === 2 ? -1 : -2;
  }
  function H(s, C, x) {
    var U = C.length - 1;
    if (U < x) return 0;
    var N = u(C[U]);
    return N >= 0 ? (N > 0 && (s.lastNeed = N - 1), N) : --U < x || N === -2 ? 0 : (N = u(C[U]), N >= 0 ? (N > 0 && (s.lastNeed = N - 2), N) : --U < x || N === -2 ? 0 : (N = u(C[U]), N >= 0 ? (N > 0 && (N === 2 ? N = 0 : s.lastNeed = N - 3), N) : 0));
  }
  function n(s, C, x) {
    if ((C[0] & 192) !== 128)
      return s.lastNeed = 0, "�";
    if (s.lastNeed > 1 && C.length > 1) {
      if ((C[1] & 192) !== 128)
        return s.lastNeed = 1, "�";
      if (s.lastNeed > 2 && C.length > 2 && (C[2] & 192) !== 128)
        return s.lastNeed = 2, "�";
    }
  }
  function i(s) {
    var C = this.lastTotal - this.lastNeed, x = n(this, s);
    if (x !== void 0) return x;
    if (this.lastNeed <= s.length)
      return s.copy(this.lastChar, C, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    s.copy(this.lastChar, C, 0, s.length), this.lastNeed -= s.length;
  }
  function p(s, C) {
    var x = H(this, s, C);
    if (!this.lastNeed) return s.toString("utf8", C);
    this.lastTotal = x;
    var U = s.length - (x - this.lastNeed);
    return s.copy(this.lastChar, 0, U), s.toString("utf8", C, U);
  }
  function D(s) {
    var C = s && s.length ? this.write(s) : "";
    return this.lastNeed ? C + "�" : C;
  }
  function f(s, C) {
    if ((s.length - C) % 2 === 0) {
      var x = s.toString("utf16le", C);
      if (x) {
        var U = x.charCodeAt(x.length - 1);
        if (U >= 55296 && U <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = s[s.length - 2], this.lastChar[1] = s[s.length - 1], x.slice(0, -1);
      }
      return x;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = s[s.length - 1], s.toString("utf16le", C, s.length - 1);
  }
  function Y(s) {
    var C = s && s.length ? this.write(s) : "";
    if (this.lastNeed) {
      var x = this.lastTotal - this.lastNeed;
      return C + this.lastChar.toString("utf16le", 0, x);
    }
    return C;
  }
  function c(s, C) {
    var x = (s.length - C) % 3;
    return x === 0 ? s.toString("base64", C) : (this.lastNeed = 3 - x, this.lastTotal = 3, x === 1 ? this.lastChar[0] = s[s.length - 1] : (this.lastChar[0] = s[s.length - 2], this.lastChar[1] = s[s.length - 1]), s.toString("base64", C, s.length - x));
  }
  function w(s) {
    var C = s && s.length ? this.write(s) : "";
    return this.lastNeed ? C + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : C;
  }
  function V(s) {
    return s.toString(this.encoding);
  }
  function I(s) {
    return s && s.length ? this.write(s) : "";
  }
  return tt;
}
var gt, wn;
function qn() {
  if (wn) return gt;
  wn = 1;
  const o = de(), { PromisePrototypeThen: l, SymbolAsyncIterator: y, SymbolIterator: b } = NA(), { Buffer: X } = Ce(), { ERR_INVALID_ARG_TYPE: u, ERR_STREAM_NULL_VALUES: H } = KA().codes;
  function n(i, p, D) {
    let f;
    if (typeof p == "string" || p instanceof X)
      return new i({
        objectMode: !0,
        ...D,
        read() {
          this.push(p), this.push(null);
        }
      });
    let Y;
    if (p && p[y])
      Y = !0, f = p[y]();
    else if (p && p[b])
      Y = !1, f = p[b]();
    else
      throw new u("iterable", ["Iterable"], p);
    const c = new i({
      objectMode: !0,
      highWaterMark: 1,
      // TODO(ronag): What options should be allowed?
      ...D
    });
    let w = !1;
    c._read = function() {
      w || (w = !0, I());
    }, c._destroy = function(s, C) {
      l(
        V(s),
        () => o.nextTick(C, s),
        // nextTick is here in case cb throws
        (x) => o.nextTick(C, x || s)
      );
    };
    async function V(s) {
      const C = s != null, x = typeof f.throw == "function";
      if (C && x) {
        const { value: U, done: N } = await f.throw(s);
        if (await U, N)
          return;
      }
      if (typeof f.return == "function") {
        const { value: U } = await f.return();
        await U;
      }
    }
    async function I() {
      for (; ; ) {
        try {
          const { value: s, done: C } = Y ? await f.next() : f.next();
          if (C)
            c.push(null);
          else {
            const x = s && typeof s.then == "function" ? await s : s;
            if (x === null)
              throw w = !1, new H();
            if (c.push(x))
              continue;
            w = !1;
          }
        } catch (s) {
          c.destroy(s);
        }
        break;
      }
    }
    return c;
  }
  return gt = n, gt;
}
var it, Qn;
function ke() {
  if (Qn) return it;
  Qn = 1;
  const o = de(), {
    ArrayPrototypeIndexOf: l,
    NumberIsInteger: y,
    NumberIsNaN: b,
    NumberParseInt: X,
    ObjectDefineProperties: u,
    ObjectKeys: H,
    ObjectSetPrototypeOf: n,
    Promise: i,
    SafeSet: p,
    SymbolAsyncDispose: D,
    SymbolAsyncIterator: f,
    Symbol: Y
  } = NA();
  it = W, W.ReadableState = E;
  const { EventEmitter: c } = Re(), { Stream: w, prependListener: V } = xt(), { Buffer: I } = Ce(), { addAbortSignal: s } = Ne(), C = Be();
  let x = TA().debuglog("stream", (G) => {
    x = G;
  });
  const U = oB(), N = Ge(), { getHighWaterMark: q, getDefaultHighWaterMark: L } = Xe(), {
    aggregateTwoErrors: $,
    codes: {
      ERR_INVALID_ARG_TYPE: GA,
      ERR_METHOD_NOT_IMPLEMENTED: _,
      ERR_OUT_OF_RANGE: AA,
      ERR_STREAM_PUSH_AFTER_EOF: aA,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: K
    },
    AbortError: fA
  } = KA(), { validateObject: bA } = Ze(), xA = Y("kPaused"), { StringDecoder: HA } = uB(), oA = qn();
  n(W.prototype, w.prototype), n(W, w);
  const FA = () => {
  }, { errorOrDestroy: v } = N, a = 1, Z = 2, m = 4, z = 8, sA = 16, cA = 32, QA = 64, P = 128, eA = 256, iA = 512, pA = 1024, dA = 2048, S = 4096, T = 8192, nA = 16384, EA = 32768, hA = 65536, d = 1 << 17, A = 1 << 18;
  function r(G) {
    return {
      enumerable: !1,
      get() {
        return (this.state & G) !== 0;
      },
      set(M) {
        M ? this.state |= G : this.state &= ~G;
      }
    };
  }
  u(E.prototype, {
    objectMode: r(a),
    ended: r(Z),
    endEmitted: r(m),
    reading: r(z),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: r(sA),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: r(cA),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: r(QA),
    emittedReadable: r(P),
    readableListening: r(eA),
    resumeScheduled: r(iA),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: r(pA),
    emitClose: r(dA),
    autoDestroy: r(S),
    // Has it been destroyed.
    destroyed: r(T),
    // Indicates whether the stream has finished destroying.
    closed: r(nA),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: r(EA),
    multiAwaitDrain: r(hA),
    // If true, a maybeReadMore has been scheduled.
    readingMore: r(d),
    dataEmitted: r(A)
  });
  function E(G, M, wA) {
    typeof wA != "boolean" && (wA = M instanceof te()), this.state = dA | S | sA | cA, G && G.objectMode && (this.state |= a), wA && G && G.readableObjectMode && (this.state |= a), this.highWaterMark = G ? q(this, G, "readableHighWaterMark", wA) : L(!1), this.buffer = new U(), this.length = 0, this.pipes = [], this.flowing = null, this[xA] = null, G && G.emitClose === !1 && (this.state &= ~dA), G && G.autoDestroy === !1 && (this.state &= ~S), this.errored = null, this.defaultEncoding = G && G.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, G && G.encoding && (this.decoder = new HA(G.encoding), this.encoding = G.encoding);
  }
  function W(G) {
    if (!(this instanceof W)) return new W(G);
    const M = this instanceof te();
    this._readableState = new E(G, this, M), G && (typeof G.read == "function" && (this._read = G.read), typeof G.destroy == "function" && (this._destroy = G.destroy), typeof G.construct == "function" && (this._construct = G.construct), G.signal && !M && s(G.signal, this)), w.call(this, G), N.construct(this, () => {
      this._readableState.needReadable && B(this, this._readableState);
    });
  }
  W.prototype.destroy = N.destroy, W.prototype._undestroy = N.undestroy, W.prototype._destroy = function(G, M) {
    M(G);
  }, W.prototype[c.captureRejectionSymbol] = function(G) {
    this.destroy(G);
  }, W.prototype[D] = function() {
    let G;
    return this.destroyed || (G = this.readableEnded ? null : new fA(), this.destroy(G)), new i((M, wA) => C(this, (YA) => YA && YA !== G ? wA(YA) : M(null)));
  }, W.prototype.push = function(G, M) {
    return rA(this, G, M, !1);
  }, W.prototype.unshift = function(G, M) {
    return rA(this, G, M, !0);
  };
  function rA(G, M, wA, YA) {
    x("readableAddChunk", M);
    const DA = G._readableState;
    let VA;
    if ((DA.state & a) === 0 && (typeof M == "string" ? (wA = wA || DA.defaultEncoding, DA.encoding !== wA && (YA && DA.encoding ? M = I.from(M, wA).toString(DA.encoding) : (M = I.from(M, wA), wA = ""))) : M instanceof I ? wA = "" : w._isUint8Array(M) ? (M = w._uint8ArrayToBuffer(M), wA = "") : M != null && (VA = new GA("chunk", ["string", "Buffer", "Uint8Array"], M))), VA)
      v(G, VA);
    else if (M === null)
      DA.state &= ~z, e(G, DA);
    else if ((DA.state & a) !== 0 || M && M.length > 0)
      if (YA)
        if ((DA.state & m) !== 0) v(G, new K());
        else {
          if (DA.destroyed || DA.errored) return !1;
          CA(G, DA, M, !0);
        }
      else if (DA.ended)
        v(G, new aA());
      else {
        if (DA.destroyed || DA.errored)
          return !1;
        DA.state &= ~z, DA.decoder && !wA ? (M = DA.decoder.write(M), DA.objectMode || M.length !== 0 ? CA(G, DA, M, !1) : B(G, DA)) : CA(G, DA, M, !1);
      }
    else YA || (DA.state &= ~z, B(G, DA));
    return !DA.ended && (DA.length < DA.highWaterMark || DA.length === 0);
  }
  function CA(G, M, wA, YA) {
    M.flowing && M.length === 0 && !M.sync && G.listenerCount("data") > 0 ? ((M.state & hA) !== 0 ? M.awaitDrainWriters.clear() : M.awaitDrainWriters = null, M.dataEmitted = !0, G.emit("data", wA)) : (M.length += M.objectMode ? 1 : wA.length, YA ? M.buffer.unshift(wA) : M.buffer.push(wA), (M.state & QA) !== 0 && g(G)), B(G, M);
  }
  W.prototype.isPaused = function() {
    const G = this._readableState;
    return G[xA] === !0 || G.flowing === !1;
  }, W.prototype.setEncoding = function(G) {
    const M = new HA(G);
    this._readableState.decoder = M, this._readableState.encoding = this._readableState.decoder.encoding;
    const wA = this._readableState.buffer;
    let YA = "";
    for (const DA of wA)
      YA += M.write(DA);
    return wA.clear(), YA !== "" && wA.push(YA), this._readableState.length = YA.length, this;
  };
  const ZA = 1073741824;
  function MA(G) {
    if (G > ZA)
      throw new AA("size", "<= 1GiB", G);
    return G--, G |= G >>> 1, G |= G >>> 2, G |= G >>> 4, G |= G >>> 8, G |= G >>> 16, G++, G;
  }
  function h(G, M) {
    return G <= 0 || M.length === 0 && M.ended ? 0 : (M.state & a) !== 0 ? 1 : b(G) ? M.flowing && M.length ? M.buffer.first().length : M.length : G <= M.length ? G : M.ended ? M.length : 0;
  }
  W.prototype.read = function(G) {
    x("read", G), G === void 0 ? G = NaN : y(G) || (G = X(G, 10));
    const M = this._readableState, wA = G;
    if (G > M.highWaterMark && (M.highWaterMark = MA(G)), G !== 0 && (M.state &= ~P), G === 0 && M.needReadable && ((M.highWaterMark !== 0 ? M.length >= M.highWaterMark : M.length > 0) || M.ended))
      return x("read: emitReadable", M.length, M.ended), M.length === 0 && M.ended ? lA(this) : g(this), null;
    if (G = h(G, M), G === 0 && M.ended)
      return M.length === 0 && lA(this), null;
    let YA = (M.state & QA) !== 0;
    if (x("need readable", YA), (M.length === 0 || M.length - G < M.highWaterMark) && (YA = !0, x("length less than watermark", YA)), M.ended || M.reading || M.destroyed || M.errored || !M.constructed)
      YA = !1, x("reading, ended or constructing", YA);
    else if (YA) {
      x("do read"), M.state |= z | cA, M.length === 0 && (M.state |= QA);
      try {
        this._read(M.highWaterMark);
      } catch (VA) {
        v(this, VA);
      }
      M.state &= ~cA, M.reading || (G = h(wA, M));
    }
    let DA;
    return G > 0 ? DA = BA(G, M) : DA = null, DA === null ? (M.needReadable = M.length <= M.highWaterMark, G = 0) : (M.length -= G, M.multiAwaitDrain ? M.awaitDrainWriters.clear() : M.awaitDrainWriters = null), M.length === 0 && (M.ended || (M.needReadable = !0), wA !== G && M.ended && lA(this)), DA !== null && !M.errorEmitted && !M.closeEmitted && (M.dataEmitted = !0, this.emit("data", DA)), DA;
  };
  function e(G, M) {
    if (x("onEofChunk"), !M.ended) {
      if (M.decoder) {
        const wA = M.decoder.end();
        wA && wA.length && (M.buffer.push(wA), M.length += M.objectMode ? 1 : wA.length);
      }
      M.ended = !0, M.sync ? g(G) : (M.needReadable = !1, M.emittedReadable = !0, R(G));
    }
  }
  function g(G) {
    const M = G._readableState;
    x("emitReadable", M.needReadable, M.emittedReadable), M.needReadable = !1, M.emittedReadable || (x("emitReadable", M.flowing), M.emittedReadable = !0, o.nextTick(R, G));
  }
  function R(G) {
    const M = G._readableState;
    x("emitReadable_", M.destroyed, M.length, M.ended), !M.destroyed && !M.errored && (M.length || M.ended) && (G.emit("readable"), M.emittedReadable = !1), M.needReadable = !M.flowing && !M.ended && M.length <= M.highWaterMark, uA(G);
  }
  function B(G, M) {
    !M.readingMore && M.constructed && (M.readingMore = !0, o.nextTick(k, G, M));
  }
  function k(G, M) {
    for (; !M.reading && !M.ended && (M.length < M.highWaterMark || M.flowing && M.length === 0); ) {
      const wA = M.length;
      if (x("maybeReadMore read 0"), G.read(0), wA === M.length)
        break;
    }
    M.readingMore = !1;
  }
  W.prototype._read = function(G) {
    throw new _("_read()");
  }, W.prototype.pipe = function(G, M) {
    const wA = this, YA = this._readableState;
    YA.pipes.length === 1 && (YA.multiAwaitDrain || (YA.multiAwaitDrain = !0, YA.awaitDrainWriters = new p(YA.awaitDrainWriters ? [YA.awaitDrainWriters] : []))), YA.pipes.push(G), x("pipe count=%d opts=%j", YA.pipes.length, M);
    const VA = (!M || M.end !== !1) && G !== o.stdout && G !== o.stderr ? SA : re;
    YA.endEmitted ? o.nextTick(VA) : wA.once("end", VA), G.on("unpipe", WA);
    function WA(le, ee) {
      x("onunpipe"), le === wA && ee && ee.hasUnpiped === !1 && (ee.hasUnpiped = !0, Qe());
    }
    function SA() {
      x("onend"), G.end();
    }
    let XA, ae = !1;
    function Qe() {
      x("cleanup"), G.removeListener("close", zA), G.removeListener("finish", jA), XA && G.removeListener("drain", XA), G.removeListener("error", kA), G.removeListener("unpipe", WA), wA.removeListener("end", SA), wA.removeListener("end", re), wA.removeListener("data", JA), ae = !0, XA && YA.awaitDrainWriters && (!G._writableState || G._writableState.needDrain) && XA();
    }
    function RA() {
      ae || (YA.pipes.length === 1 && YA.pipes[0] === G ? (x("false write response, pause", 0), YA.awaitDrainWriters = G, YA.multiAwaitDrain = !1) : YA.pipes.length > 1 && YA.pipes.includes(G) && (x("false write response, pause", YA.awaitDrainWriters.size), YA.awaitDrainWriters.add(G)), wA.pause()), XA || (XA = O(wA, G), G.on("drain", XA));
    }
    wA.on("data", JA);
    function JA(le) {
      x("ondata");
      const ee = G.write(le);
      x("dest.write", ee), ee === !1 && RA();
    }
    function kA(le) {
      if (x("onerror", le), re(), G.removeListener("error", kA), G.listenerCount("error") === 0) {
        const ee = G._writableState || G._readableState;
        ee && !ee.errorEmitted ? v(G, le) : G.emit("error", le);
      }
    }
    V(G, "error", kA);
    function zA() {
      G.removeListener("finish", jA), re();
    }
    G.once("close", zA);
    function jA() {
      x("onfinish"), G.removeListener("close", zA), re();
    }
    G.once("finish", jA);
    function re() {
      x("unpipe"), wA.unpipe(G);
    }
    return G.emit("pipe", wA), G.writableNeedDrain === !0 ? RA() : YA.flowing || (x("pipe resume"), wA.resume()), G;
  };
  function O(G, M) {
    return function() {
      const YA = G._readableState;
      YA.awaitDrainWriters === M ? (x("pipeOnDrain", 1), YA.awaitDrainWriters = null) : YA.multiAwaitDrain && (x("pipeOnDrain", YA.awaitDrainWriters.size), YA.awaitDrainWriters.delete(M)), (!YA.awaitDrainWriters || YA.awaitDrainWriters.size === 0) && G.listenerCount("data") && G.resume();
    };
  }
  W.prototype.unpipe = function(G) {
    const M = this._readableState, wA = {
      hasUnpiped: !1
    };
    if (M.pipes.length === 0) return this;
    if (!G) {
      const DA = M.pipes;
      M.pipes = [], this.pause();
      for (let VA = 0; VA < DA.length; VA++)
        DA[VA].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const YA = l(M.pipes, G);
    return YA === -1 ? this : (M.pipes.splice(YA, 1), M.pipes.length === 0 && this.pause(), G.emit("unpipe", this, wA), this);
  }, W.prototype.on = function(G, M) {
    const wA = w.prototype.on.call(this, G, M), YA = this._readableState;
    return G === "data" ? (YA.readableListening = this.listenerCount("readable") > 0, YA.flowing !== !1 && this.resume()) : G === "readable" && !YA.endEmitted && !YA.readableListening && (YA.readableListening = YA.needReadable = !0, YA.flowing = !1, YA.emittedReadable = !1, x("on readable", YA.length, YA.reading), YA.length ? g(this) : YA.reading || o.nextTick(J, this)), wA;
  }, W.prototype.addListener = W.prototype.on, W.prototype.removeListener = function(G, M) {
    const wA = w.prototype.removeListener.call(this, G, M);
    return G === "readable" && o.nextTick(IA, this), wA;
  }, W.prototype.off = W.prototype.removeListener, W.prototype.removeAllListeners = function(G) {
    const M = w.prototype.removeAllListeners.apply(this, arguments);
    return (G === "readable" || G === void 0) && o.nextTick(IA, this), M;
  };
  function IA(G) {
    const M = G._readableState;
    M.readableListening = G.listenerCount("readable") > 0, M.resumeScheduled && M[xA] === !1 ? M.flowing = !0 : G.listenerCount("data") > 0 ? G.resume() : M.readableListening || (M.flowing = null);
  }
  function J(G) {
    x("readable nexttick read 0"), G.read(0);
  }
  W.prototype.resume = function() {
    const G = this._readableState;
    return G.flowing || (x("resume"), G.flowing = !G.readableListening, gA(this, G)), G[xA] = !1, this;
  };
  function gA(G, M) {
    M.resumeScheduled || (M.resumeScheduled = !0, o.nextTick(Q, G, M));
  }
  function Q(G, M) {
    x("resume", M.reading), M.reading || G.read(0), M.resumeScheduled = !1, G.emit("resume"), uA(G), M.flowing && !M.reading && G.read(0);
  }
  W.prototype.pause = function() {
    return x("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (x("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[xA] = !0, this;
  };
  function uA(G) {
    const M = G._readableState;
    for (x("flow", M.flowing); M.flowing && G.read() !== null; ) ;
  }
  W.prototype.wrap = function(G) {
    let M = !1;
    G.on("data", (YA) => {
      !this.push(YA) && G.pause && (M = !0, G.pause());
    }), G.on("end", () => {
      this.push(null);
    }), G.on("error", (YA) => {
      v(this, YA);
    }), G.on("close", () => {
      this.destroy();
    }), G.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      M && G.resume && (M = !1, G.resume());
    };
    const wA = H(G);
    for (let YA = 1; YA < wA.length; YA++) {
      const DA = wA[YA];
      this[DA] === void 0 && typeof G[DA] == "function" && (this[DA] = G[DA].bind(G));
    }
    return this;
  }, W.prototype[f] = function() {
    return yA(this);
  }, W.prototype.iterator = function(G) {
    return G !== void 0 && bA(G, "options"), yA(this, G);
  };
  function yA(G, M) {
    typeof G.read != "function" && (G = W.wrap(G, {
      objectMode: !0
    }));
    const wA = t(G, M);
    return wA.stream = G, wA;
  }
  async function* t(G, M) {
    let wA = FA;
    function YA(WA) {
      this === G ? (wA(), wA = FA) : wA = WA;
    }
    G.on("readable", YA);
    let DA;
    const VA = C(
      G,
      {
        writable: !1
      },
      (WA) => {
        DA = WA ? $(DA, WA) : null, wA(), wA = FA;
      }
    );
    try {
      for (; ; ) {
        const WA = G.destroyed ? null : G.read();
        if (WA !== null)
          yield WA;
        else {
          if (DA)
            throw DA;
          if (DA === null)
            return;
          await new i(YA);
        }
      }
    } catch (WA) {
      throw DA = $(DA, WA), DA;
    } finally {
      (DA || (M == null ? void 0 : M.destroyOnReturn) !== !1) && (DA === void 0 || G._readableState.autoDestroy) ? N.destroyer(G, null) : (G.off("readable", YA), VA());
    }
  }
  u(W.prototype, {
    readable: {
      __proto__: null,
      get() {
        const G = this._readableState;
        return !!G && G.readable !== !1 && !G.destroyed && !G.errorEmitted && !G.endEmitted;
      },
      set(G) {
        this._readableState && (this._readableState.readable = !!G);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(G) {
        this._readableState && (this._readableState.flowing = G);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(G) {
        this._readableState && (this._readableState.destroyed = G);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), u(E.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[xA] !== !1;
      },
      set(G) {
        this[xA] = !!G;
      }
    }
  }), W._fromList = BA;
  function BA(G, M) {
    if (M.length === 0) return null;
    let wA;
    return M.objectMode ? wA = M.buffer.shift() : !G || G >= M.length ? (M.decoder ? wA = M.buffer.join("") : M.buffer.length === 1 ? wA = M.buffer.first() : wA = M.buffer.concat(M.length), M.buffer.clear()) : wA = M.buffer.consume(G, M.decoder), wA;
  }
  function lA(G) {
    const M = G._readableState;
    x("endReadable", M.endEmitted), M.endEmitted || (M.ended = !0, o.nextTick(F, M, G));
  }
  function F(G, M) {
    if (x("endReadableNT", G.endEmitted, G.length), !G.errored && !G.closeEmitted && !G.endEmitted && G.length === 0) {
      if (G.endEmitted = !0, M.emit("end"), M.writable && M.allowHalfOpen === !1)
        o.nextTick(j, M);
      else if (G.autoDestroy) {
        const wA = M._writableState;
        (!wA || wA.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (wA.finished || wA.writable === !1)) && M.destroy();
      }
    }
  }
  function j(G) {
    G.writable && !G.writableEnded && !G.destroyed && G.end();
  }
  W.from = function(G, M) {
    return oA(W, G, M);
  };
  let tA;
  function mA() {
    return tA === void 0 && (tA = {}), tA;
  }
  return W.fromWeb = function(G, M) {
    return mA().newStreamReadableFromReadableStream(G, M);
  }, W.toWeb = function(G, M) {
    return mA().newReadableStreamFromStreamReadable(G, M);
  }, W.wrap = function(G, M) {
    var wA, YA;
    return new W({
      objectMode: (wA = (YA = G.readableObjectMode) !== null && YA !== void 0 ? YA : G.objectMode) !== null && wA !== void 0 ? wA : !0,
      ...M,
      destroy(DA, VA) {
        N.destroyer(G, DA), VA(DA);
      }
    }).wrap(G);
  }, it;
}
var Bt, hn;
function mt() {
  if (hn) return Bt;
  hn = 1;
  const o = de(), {
    ArrayPrototypeSlice: l,
    Error: y,
    FunctionPrototypeSymbolHasInstance: b,
    ObjectDefineProperty: X,
    ObjectDefineProperties: u,
    ObjectSetPrototypeOf: H,
    StringPrototypeToLowerCase: n,
    Symbol: i,
    SymbolHasInstance: p
  } = NA();
  Bt = bA, bA.WritableState = K;
  const { EventEmitter: D } = Re(), f = xt().Stream, { Buffer: Y } = Ce(), c = Ge(), { addAbortSignal: w } = Ne(), { getHighWaterMark: V, getDefaultHighWaterMark: I } = Xe(), {
    ERR_INVALID_ARG_TYPE: s,
    ERR_METHOD_NOT_IMPLEMENTED: C,
    ERR_MULTIPLE_CALLBACK: x,
    ERR_STREAM_CANNOT_PIPE: U,
    ERR_STREAM_DESTROYED: N,
    ERR_STREAM_ALREADY_FINISHED: q,
    ERR_STREAM_NULL_VALUES: L,
    ERR_STREAM_WRITE_AFTER_END: $,
    ERR_UNKNOWN_ENCODING: GA
  } = KA().codes, { errorOrDestroy: _ } = c;
  H(bA.prototype, f.prototype), H(bA, f);
  function AA() {
  }
  const aA = i("kOnFinished");
  function K(S, T, nA) {
    typeof nA != "boolean" && (nA = T instanceof te()), this.objectMode = !!(S && S.objectMode), nA && (this.objectMode = this.objectMode || !!(S && S.writableObjectMode)), this.highWaterMark = S ? V(this, S, "writableHighWaterMark", nA) : I(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const EA = !!(S && S.decodeStrings === !1);
    this.decodeStrings = !EA, this.defaultEncoding = S && S.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = v.bind(void 0, T), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, fA(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !S || S.emitClose !== !1, this.autoDestroy = !S || S.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[aA] = [];
  }
  function fA(S) {
    S.buffered = [], S.bufferedIndex = 0, S.allBuffers = !0, S.allNoop = !0;
  }
  K.prototype.getBuffer = function() {
    return l(this.buffered, this.bufferedIndex);
  }, X(K.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function bA(S) {
    const T = this instanceof te();
    if (!T && !b(bA, this)) return new bA(S);
    this._writableState = new K(S, this, T), S && (typeof S.write == "function" && (this._write = S.write), typeof S.writev == "function" && (this._writev = S.writev), typeof S.destroy == "function" && (this._destroy = S.destroy), typeof S.final == "function" && (this._final = S.final), typeof S.construct == "function" && (this._construct = S.construct), S.signal && w(S.signal, this)), f.call(this, S), c.construct(this, () => {
      const nA = this._writableState;
      nA.writing || z(this, nA), P(this, nA);
    });
  }
  X(bA, p, {
    __proto__: null,
    value: function(S) {
      return b(this, S) ? !0 : this !== bA ? !1 : S && S._writableState instanceof K;
    }
  }), bA.prototype.pipe = function() {
    _(this, new U());
  };
  function xA(S, T, nA, EA) {
    const hA = S._writableState;
    if (typeof nA == "function")
      EA = nA, nA = hA.defaultEncoding;
    else {
      if (!nA) nA = hA.defaultEncoding;
      else if (nA !== "buffer" && !Y.isEncoding(nA)) throw new GA(nA);
      typeof EA != "function" && (EA = AA);
    }
    if (T === null)
      throw new L();
    if (!hA.objectMode)
      if (typeof T == "string")
        hA.decodeStrings !== !1 && (T = Y.from(T, nA), nA = "buffer");
      else if (T instanceof Y)
        nA = "buffer";
      else if (f._isUint8Array(T))
        T = f._uint8ArrayToBuffer(T), nA = "buffer";
      else
        throw new s("chunk", ["string", "Buffer", "Uint8Array"], T);
    let d;
    return hA.ending ? d = new $() : hA.destroyed && (d = new N("write")), d ? (o.nextTick(EA, d), _(S, d, !0), d) : (hA.pendingcb++, HA(S, hA, T, nA, EA));
  }
  bA.prototype.write = function(S, T, nA) {
    return xA(this, S, T, nA) === !0;
  }, bA.prototype.cork = function() {
    this._writableState.corked++;
  }, bA.prototype.uncork = function() {
    const S = this._writableState;
    S.corked && (S.corked--, S.writing || z(this, S));
  }, bA.prototype.setDefaultEncoding = function(T) {
    if (typeof T == "string" && (T = n(T)), !Y.isEncoding(T)) throw new GA(T);
    return this._writableState.defaultEncoding = T, this;
  };
  function HA(S, T, nA, EA, hA) {
    const d = T.objectMode ? 1 : nA.length;
    T.length += d;
    const A = T.length < T.highWaterMark;
    return A || (T.needDrain = !0), T.writing || T.corked || T.errored || !T.constructed ? (T.buffered.push({
      chunk: nA,
      encoding: EA,
      callback: hA
    }), T.allBuffers && EA !== "buffer" && (T.allBuffers = !1), T.allNoop && hA !== AA && (T.allNoop = !1)) : (T.writelen = d, T.writecb = hA, T.writing = !0, T.sync = !0, S._write(nA, EA, T.onwrite), T.sync = !1), A && !T.errored && !T.destroyed;
  }
  function oA(S, T, nA, EA, hA, d, A) {
    T.writelen = EA, T.writecb = A, T.writing = !0, T.sync = !0, T.destroyed ? T.onwrite(new N("write")) : nA ? S._writev(hA, T.onwrite) : S._write(hA, d, T.onwrite), T.sync = !1;
  }
  function FA(S, T, nA, EA) {
    --T.pendingcb, EA(nA), m(T), _(S, nA);
  }
  function v(S, T) {
    const nA = S._writableState, EA = nA.sync, hA = nA.writecb;
    if (typeof hA != "function") {
      _(S, new x());
      return;
    }
    nA.writing = !1, nA.writecb = null, nA.length -= nA.writelen, nA.writelen = 0, T ? (T.stack, nA.errored || (nA.errored = T), S._readableState && !S._readableState.errored && (S._readableState.errored = T), EA ? o.nextTick(FA, S, nA, T, hA) : FA(S, nA, T, hA)) : (nA.buffered.length > nA.bufferedIndex && z(S, nA), EA ? nA.afterWriteTickInfo !== null && nA.afterWriteTickInfo.cb === hA ? nA.afterWriteTickInfo.count++ : (nA.afterWriteTickInfo = {
      count: 1,
      cb: hA,
      stream: S,
      state: nA
    }, o.nextTick(a, nA.afterWriteTickInfo)) : Z(S, nA, 1, hA));
  }
  function a({ stream: S, state: T, count: nA, cb: EA }) {
    return T.afterWriteTickInfo = null, Z(S, T, nA, EA);
  }
  function Z(S, T, nA, EA) {
    for (!T.ending && !S.destroyed && T.length === 0 && T.needDrain && (T.needDrain = !1, S.emit("drain")); nA-- > 0; )
      T.pendingcb--, EA();
    T.destroyed && m(T), P(S, T);
  }
  function m(S) {
    if (S.writing)
      return;
    for (let hA = S.bufferedIndex; hA < S.buffered.length; ++hA) {
      var T;
      const { chunk: d, callback: A } = S.buffered[hA], r = S.objectMode ? 1 : d.length;
      S.length -= r, A(
        (T = S.errored) !== null && T !== void 0 ? T : new N("write")
      );
    }
    const nA = S[aA].splice(0);
    for (let hA = 0; hA < nA.length; hA++) {
      var EA;
      nA[hA](
        (EA = S.errored) !== null && EA !== void 0 ? EA : new N("end")
      );
    }
    fA(S);
  }
  function z(S, T) {
    if (T.corked || T.bufferProcessing || T.destroyed || !T.constructed)
      return;
    const { buffered: nA, bufferedIndex: EA, objectMode: hA } = T, d = nA.length - EA;
    if (!d)
      return;
    let A = EA;
    if (T.bufferProcessing = !0, d > 1 && S._writev) {
      T.pendingcb -= d - 1;
      const r = T.allNoop ? AA : (W) => {
        for (let rA = A; rA < nA.length; ++rA)
          nA[rA].callback(W);
      }, E = T.allNoop && A === 0 ? nA : l(nA, A);
      E.allBuffers = T.allBuffers, oA(S, T, !0, T.length, E, "", r), fA(T);
    } else {
      do {
        const { chunk: r, encoding: E, callback: W } = nA[A];
        nA[A++] = null;
        const rA = hA ? 1 : r.length;
        oA(S, T, !1, rA, r, E, W);
      } while (A < nA.length && !T.writing);
      A === nA.length ? fA(T) : A > 256 ? (nA.splice(0, A), T.bufferedIndex = 0) : T.bufferedIndex = A;
    }
    T.bufferProcessing = !1;
  }
  bA.prototype._write = function(S, T, nA) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: S,
            encoding: T
          }
        ],
        nA
      );
    else
      throw new C("_write()");
  }, bA.prototype._writev = null, bA.prototype.end = function(S, T, nA) {
    const EA = this._writableState;
    typeof S == "function" ? (nA = S, S = null, T = null) : typeof T == "function" && (nA = T, T = null);
    let hA;
    if (S != null) {
      const d = xA(this, S, T);
      d instanceof y && (hA = d);
    }
    return EA.corked && (EA.corked = 1, this.uncork()), hA || (!EA.errored && !EA.ending ? (EA.ending = !0, P(this, EA, !0), EA.ended = !0) : EA.finished ? hA = new q("end") : EA.destroyed && (hA = new N("end"))), typeof nA == "function" && (hA || EA.finished ? o.nextTick(nA, hA) : EA[aA].push(nA)), this;
  };
  function sA(S) {
    return S.ending && !S.destroyed && S.constructed && S.length === 0 && !S.errored && S.buffered.length === 0 && !S.finished && !S.writing && !S.errorEmitted && !S.closeEmitted;
  }
  function cA(S, T) {
    let nA = !1;
    function EA(hA) {
      if (nA) {
        _(S, hA ?? x());
        return;
      }
      if (nA = !0, T.pendingcb--, hA) {
        const d = T[aA].splice(0);
        for (let A = 0; A < d.length; A++)
          d[A](hA);
        _(S, hA, T.sync);
      } else sA(T) && (T.prefinished = !0, S.emit("prefinish"), T.pendingcb++, o.nextTick(eA, S, T));
    }
    T.sync = !0, T.pendingcb++;
    try {
      S._final(EA);
    } catch (hA) {
      EA(hA);
    }
    T.sync = !1;
  }
  function QA(S, T) {
    !T.prefinished && !T.finalCalled && (typeof S._final == "function" && !T.destroyed ? (T.finalCalled = !0, cA(S, T)) : (T.prefinished = !0, S.emit("prefinish")));
  }
  function P(S, T, nA) {
    sA(T) && (QA(S, T), T.pendingcb === 0 && (nA ? (T.pendingcb++, o.nextTick(
      (EA, hA) => {
        sA(hA) ? eA(EA, hA) : hA.pendingcb--;
      },
      S,
      T
    )) : sA(T) && (T.pendingcb++, eA(S, T))));
  }
  function eA(S, T) {
    T.pendingcb--, T.finished = !0;
    const nA = T[aA].splice(0);
    for (let EA = 0; EA < nA.length; EA++)
      nA[EA]();
    if (S.emit("finish"), T.autoDestroy) {
      const EA = S._readableState;
      (!EA || EA.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (EA.endEmitted || EA.readable === !1)) && S.destroy();
    }
  }
  u(bA.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(S) {
        this._writableState && (this._writableState.destroyed = S);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const S = this._writableState;
        return !!S && S.writable !== !1 && !S.destroyed && !S.errored && !S.ending && !S.ended;
      },
      set(S) {
        this._writableState && (this._writableState.writable = !!S);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const S = this._writableState;
        return S ? !S.destroyed && !S.ending && S.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const iA = c.destroy;
  bA.prototype.destroy = function(S, T) {
    const nA = this._writableState;
    return !nA.destroyed && (nA.bufferedIndex < nA.buffered.length || nA[aA].length) && o.nextTick(m, nA), iA.call(this, S, T), this;
  }, bA.prototype._undestroy = c.undestroy, bA.prototype._destroy = function(S, T) {
    T(S);
  }, bA.prototype[D.captureRejectionSymbol] = function(S) {
    this.destroy(S);
  };
  let pA;
  function dA() {
    return pA === void 0 && (pA = {}), pA;
  }
  return bA.fromWeb = function(S, T) {
    return dA().newStreamWritableFromWritableStream(S, T);
  }, bA.toWeb = function(S) {
    return dA().newWritableStreamFromStreamWritable(S);
  }, Bt;
}
var ot, fn;
function CB() {
  if (fn) return ot;
  fn = 1;
  const o = de(), l = Ce(), {
    isReadable: y,
    isWritable: b,
    isIterable: X,
    isNodeStream: u,
    isReadableNodeStream: H,
    isWritableNodeStream: n,
    isDuplexNodeStream: i,
    isReadableStream: p,
    isWritableStream: D
  } = ne(), f = Be(), {
    AbortError: Y,
    codes: { ERR_INVALID_ARG_TYPE: c, ERR_INVALID_RETURN_VALUE: w }
  } = KA(), { destroyer: V } = Ge(), I = te(), s = ke(), C = mt(), { createDeferredPromise: x } = TA(), U = qn(), N = globalThis.Blob || l.Blob, q = typeof N < "u" ? function(K) {
    return K instanceof N;
  } : function(K) {
    return !1;
  }, L = globalThis.AbortController || pe().AbortController, { FunctionPrototypeCall: $ } = NA();
  class GA extends I {
    constructor(K) {
      super(K), (K == null ? void 0 : K.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (K == null ? void 0 : K.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  ot = function aA(K, fA) {
    if (i(K))
      return K;
    if (H(K))
      return AA({
        readable: K
      });
    if (n(K))
      return AA({
        writable: K
      });
    if (u(K))
      return AA({
        writable: !1,
        readable: !1
      });
    if (p(K))
      return AA({
        readable: s.fromWeb(K)
      });
    if (D(K))
      return AA({
        writable: C.fromWeb(K)
      });
    if (typeof K == "function") {
      const { value: xA, write: HA, final: oA, destroy: FA } = _(K);
      if (X(xA))
        return U(GA, xA, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: HA,
          final: oA,
          destroy: FA
        });
      const v = xA == null ? void 0 : xA.then;
      if (typeof v == "function") {
        let a;
        const Z = $(
          v,
          xA,
          (m) => {
            if (m != null)
              throw new w("nully", "body", m);
          },
          (m) => {
            V(a, m);
          }
        );
        return a = new GA({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: HA,
          final(m) {
            oA(async () => {
              try {
                await Z, o.nextTick(m, null);
              } catch (z) {
                o.nextTick(m, z);
              }
            });
          },
          destroy: FA
        });
      }
      throw new w("Iterable, AsyncIterable or AsyncFunction", fA, xA);
    }
    if (q(K))
      return aA(K.arrayBuffer());
    if (X(K))
      return U(GA, K, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (p(K == null ? void 0 : K.readable) && D(K == null ? void 0 : K.writable))
      return GA.fromWeb(K);
    if (typeof (K == null ? void 0 : K.writable) == "object" || typeof (K == null ? void 0 : K.readable) == "object") {
      const xA = K != null && K.readable ? H(K == null ? void 0 : K.readable) ? K == null ? void 0 : K.readable : aA(K.readable) : void 0, HA = K != null && K.writable ? n(K == null ? void 0 : K.writable) ? K == null ? void 0 : K.writable : aA(K.writable) : void 0;
      return AA({
        readable: xA,
        writable: HA
      });
    }
    const bA = K == null ? void 0 : K.then;
    if (typeof bA == "function") {
      let xA;
      return $(
        bA,
        K,
        (HA) => {
          HA != null && xA.push(HA), xA.push(null);
        },
        (HA) => {
          V(xA, HA);
        }
      ), xA = new GA({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new c(
      fA,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      K
    );
  };
  function _(aA) {
    let { promise: K, resolve: fA } = x();
    const bA = new L(), xA = bA.signal;
    return {
      value: aA(
        async function* () {
          for (; ; ) {
            const oA = K;
            K = null;
            const { chunk: FA, done: v, cb: a } = await oA;
            if (o.nextTick(a), v) return;
            if (xA.aborted)
              throw new Y(void 0, {
                cause: xA.reason
              });
            ({ promise: K, resolve: fA } = x()), yield FA;
          }
        }(),
        {
          signal: xA
        }
      ),
      write(oA, FA, v) {
        const a = fA;
        fA = null, a({
          chunk: oA,
          done: !1,
          cb: v
        });
      },
      final(oA) {
        const FA = fA;
        fA = null, FA({
          done: !0,
          cb: oA
        });
      },
      destroy(oA, FA) {
        bA.abort(), FA(oA);
      }
    };
  }
  function AA(aA) {
    const K = aA.readable && typeof aA.readable.read != "function" ? s.wrap(aA.readable) : aA.readable, fA = aA.writable;
    let bA = !!y(K), xA = !!b(fA), HA, oA, FA, v, a;
    function Z(m) {
      const z = v;
      v = null, z ? z(m) : m && a.destroy(m);
    }
    return a = new GA({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(K != null && K.readableObjectMode),
      writableObjectMode: !!(fA != null && fA.writableObjectMode),
      readable: bA,
      writable: xA
    }), xA && (f(fA, (m) => {
      xA = !1, m && V(K, m), Z(m);
    }), a._write = function(m, z, sA) {
      fA.write(m, z) ? sA() : HA = sA;
    }, a._final = function(m) {
      fA.end(), oA = m;
    }, fA.on("drain", function() {
      if (HA) {
        const m = HA;
        HA = null, m();
      }
    }), fA.on("finish", function() {
      if (oA) {
        const m = oA;
        oA = null, m();
      }
    })), bA && (f(K, (m) => {
      bA = !1, m && V(K, m), Z(m);
    }), K.on("readable", function() {
      if (FA) {
        const m = FA;
        FA = null, m();
      }
    }), K.on("end", function() {
      a.push(null);
    }), a._read = function() {
      for (; ; ) {
        const m = K.read();
        if (m === null) {
          FA = a._read;
          return;
        }
        if (!a.push(m))
          return;
      }
    }), a._destroy = function(m, z) {
      !m && v !== null && (m = new Y()), FA = null, HA = null, oA = null, v === null ? z(m) : (v = z, V(fA, m), V(K, m));
    }, a;
  }
  return ot;
}
var at, In;
function te() {
  if (In) return at;
  In = 1;
  const {
    ObjectDefineProperties: o,
    ObjectGetOwnPropertyDescriptor: l,
    ObjectKeys: y,
    ObjectSetPrototypeOf: b
  } = NA();
  at = H;
  const X = ke(), u = mt();
  b(H.prototype, X.prototype), b(H, X);
  {
    const D = y(u.prototype);
    for (let f = 0; f < D.length; f++) {
      const Y = D[f];
      H.prototype[Y] || (H.prototype[Y] = u.prototype[Y]);
    }
  }
  function H(D) {
    if (!(this instanceof H)) return new H(D);
    X.call(this, D), u.call(this, D), D ? (this.allowHalfOpen = D.allowHalfOpen !== !1, D.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), D.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  o(H.prototype, {
    writable: {
      __proto__: null,
      ...l(u.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...l(u.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...l(u.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...l(u.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...l(u.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...l(u.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...l(u.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...l(u.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...l(u.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(D) {
        this._readableState && this._writableState && (this._readableState.destroyed = D, this._writableState.destroyed = D);
      }
    }
  });
  let n;
  function i() {
    return n === void 0 && (n = {}), n;
  }
  H.fromWeb = function(D, f) {
    return i().newStreamDuplexFromReadableWritablePair(D, f);
  }, H.toWeb = function(D) {
    return i().newReadableWritablePairFromDuplex(D);
  };
  let p;
  return H.from = function(D) {
    return p || (p = CB()), p(D, "body");
  }, at;
}
var lt, Gn;
function $n() {
  if (Gn) return lt;
  Gn = 1;
  const { ObjectSetPrototypeOf: o, Symbol: l } = NA();
  lt = H;
  const { ERR_METHOD_NOT_IMPLEMENTED: y } = KA().codes, b = te(), { getHighWaterMark: X } = Xe();
  o(H.prototype, b.prototype), o(H, b);
  const u = l("kCallback");
  function H(p) {
    if (!(this instanceof H)) return new H(p);
    const D = p ? X(this, p, "readableHighWaterMark", !0) : null;
    D === 0 && (p = {
      ...p,
      highWaterMark: null,
      readableHighWaterMark: D,
      // TODO (ronag): 0 is not optimal since we have
      // a "bug" where we check needDrain before calling _write and not after.
      // Refs: https://github.com/nodejs/node/pull/32887
      // Refs: https://github.com/nodejs/node/pull/35941
      writableHighWaterMark: p.writableHighWaterMark || 0
    }), b.call(this, p), this._readableState.sync = !1, this[u] = null, p && (typeof p.transform == "function" && (this._transform = p.transform), typeof p.flush == "function" && (this._flush = p.flush)), this.on("prefinish", i);
  }
  function n(p) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((D, f) => {
      if (D) {
        p ? p(D) : this.destroy(D);
        return;
      }
      f != null && this.push(f), this.push(null), p && p();
    }) : (this.push(null), p && p());
  }
  function i() {
    this._final !== n && n.call(this);
  }
  return H.prototype._final = n, H.prototype._transform = function(p, D, f) {
    throw new y("_transform()");
  }, H.prototype._write = function(p, D, f) {
    const Y = this._readableState, c = this._writableState, w = Y.length;
    this._transform(p, D, (V, I) => {
      if (V) {
        f(V);
        return;
      }
      I != null && this.push(I), c.ended || // Backwards compat.
      w === Y.length || // Backwards compat.
      Y.length < Y.highWaterMark ? f() : this[u] = f;
    });
  }, H.prototype._read = function() {
    if (this[u]) {
      const p = this[u];
      this[u] = null, p();
    }
  }, lt;
}
var ct, En;
function Ar() {
  if (En) return ct;
  En = 1;
  const { ObjectSetPrototypeOf: o } = NA();
  ct = y;
  const l = $n();
  o(y.prototype, l.prototype), o(y, l);
  function y(b) {
    if (!(this instanceof y)) return new y(b);
    l.call(this, b);
  }
  return y.prototype._transform = function(b, X, u) {
    u(null, b);
  }, ct;
}
var st, bn;
function yt() {
  if (bn) return st;
  bn = 1;
  const o = de(), { ArrayIsArray: l, Promise: y, SymbolAsyncIterator: b, SymbolDispose: X } = NA(), u = Be(), { once: H } = TA(), n = Ge(), i = te(), {
    aggregateTwoErrors: p,
    codes: {
      ERR_INVALID_ARG_TYPE: D,
      ERR_INVALID_RETURN_VALUE: f,
      ERR_MISSING_ARGS: Y,
      ERR_STREAM_DESTROYED: c,
      ERR_STREAM_PREMATURE_CLOSE: w
    },
    AbortError: V
  } = KA(), { validateFunction: I, validateAbortSignal: s } = Ze(), {
    isIterable: C,
    isReadable: x,
    isReadableNodeStream: U,
    isNodeStream: N,
    isTransformStream: q,
    isWebStream: L,
    isReadableStream: $,
    isReadableFinished: GA
  } = ne(), _ = globalThis.AbortController || pe().AbortController;
  let AA, aA, K;
  function fA(m, z, sA) {
    let cA = !1;
    m.on("close", () => {
      cA = !0;
    });
    const QA = u(
      m,
      {
        readable: z,
        writable: sA
      },
      (P) => {
        cA = !P;
      }
    );
    return {
      destroy: (P) => {
        cA || (cA = !0, n.destroyer(m, P || new c("pipe")));
      },
      cleanup: QA
    };
  }
  function bA(m) {
    return I(m[m.length - 1], "streams[stream.length - 1]"), m.pop();
  }
  function xA(m) {
    if (C(m))
      return m;
    if (U(m))
      return HA(m);
    throw new D("val", ["Readable", "Iterable", "AsyncIterable"], m);
  }
  async function* HA(m) {
    aA || (aA = ke()), yield* aA.prototype[b].call(m);
  }
  async function oA(m, z, sA, { end: cA }) {
    let QA, P = null;
    const eA = (dA) => {
      if (dA && (QA = dA), P) {
        const S = P;
        P = null, S();
      }
    }, iA = () => new y((dA, S) => {
      QA ? S(QA) : P = () => {
        QA ? S(QA) : dA();
      };
    });
    z.on("drain", eA);
    const pA = u(
      z,
      {
        readable: !1
      },
      eA
    );
    try {
      z.writableNeedDrain && await iA();
      for await (const dA of m)
        z.write(dA) || await iA();
      cA && (z.end(), await iA()), sA();
    } catch (dA) {
      sA(QA !== dA ? p(QA, dA) : dA);
    } finally {
      pA(), z.off("drain", eA);
    }
  }
  async function FA(m, z, sA, { end: cA }) {
    q(z) && (z = z.writable);
    const QA = z.getWriter();
    try {
      for await (const P of m)
        await QA.ready, QA.write(P).catch(() => {
        });
      await QA.ready, cA && await QA.close(), sA();
    } catch (P) {
      try {
        await QA.abort(P), sA(P);
      } catch (eA) {
        sA(eA);
      }
    }
  }
  function v(...m) {
    return a(m, H(bA(m)));
  }
  function a(m, z, sA) {
    if (m.length === 1 && l(m[0]) && (m = m[0]), m.length < 2)
      throw new Y("streams");
    const cA = new _(), QA = cA.signal, P = sA == null ? void 0 : sA.signal, eA = [];
    s(P, "options.signal");
    function iA() {
      hA(new V());
    }
    K = K || TA().addAbortListener;
    let pA;
    P && (pA = K(P, iA));
    let dA, S;
    const T = [];
    let nA = 0;
    function EA(E) {
      hA(E, --nA === 0);
    }
    function hA(E, W) {
      var rA;
      if (E && (!dA || dA.code === "ERR_STREAM_PREMATURE_CLOSE") && (dA = E), !(!dA && !W)) {
        for (; T.length; )
          T.shift()(dA);
        (rA = pA) === null || rA === void 0 || rA[X](), cA.abort(), W && (dA || eA.forEach((CA) => CA()), o.nextTick(z, dA, S));
      }
    }
    let d;
    for (let E = 0; E < m.length; E++) {
      const W = m[E], rA = E < m.length - 1, CA = E > 0, ZA = rA || (sA == null ? void 0 : sA.end) !== !1, MA = E === m.length - 1;
      if (N(W)) {
        let h = function(e) {
          e && e.name !== "AbortError" && e.code !== "ERR_STREAM_PREMATURE_CLOSE" && EA(e);
        };
        if (ZA) {
          const { destroy: e, cleanup: g } = fA(W, rA, CA);
          T.push(e), x(W) && MA && eA.push(g);
        }
        W.on("error", h), x(W) && MA && eA.push(() => {
          W.removeListener("error", h);
        });
      }
      if (E === 0)
        if (typeof W == "function") {
          if (d = W({
            signal: QA
          }), !C(d))
            throw new f("Iterable, AsyncIterable or Stream", "source", d);
        } else C(W) || U(W) || q(W) ? d = W : d = i.from(W);
      else if (typeof W == "function") {
        if (q(d)) {
          var A;
          d = xA((A = d) === null || A === void 0 ? void 0 : A.readable);
        } else
          d = xA(d);
        if (d = W(d, {
          signal: QA
        }), rA) {
          if (!C(d, !0))
            throw new f("AsyncIterable", `transform[${E - 1}]`, d);
        } else {
          var r;
          AA || (AA = Ar());
          const h = new AA({
            objectMode: !0
          }), e = (r = d) === null || r === void 0 ? void 0 : r.then;
          if (typeof e == "function")
            nA++, e.call(
              d,
              (B) => {
                S = B, B != null && h.write(B), ZA && h.end(), o.nextTick(EA);
              },
              (B) => {
                h.destroy(B), o.nextTick(EA, B);
              }
            );
          else if (C(d, !0))
            nA++, oA(d, h, EA, {
              end: ZA
            });
          else if ($(d) || q(d)) {
            const B = d.readable || d;
            nA++, oA(B, h, EA, {
              end: ZA
            });
          } else
            throw new f("AsyncIterable or Promise", "destination", d);
          d = h;
          const { destroy: g, cleanup: R } = fA(d, !1, !0);
          T.push(g), MA && eA.push(R);
        }
      } else if (N(W)) {
        if (U(d)) {
          nA += 2;
          const h = Z(d, W, EA, {
            end: ZA
          });
          x(W) && MA && eA.push(h);
        } else if (q(d) || $(d)) {
          const h = d.readable || d;
          nA++, oA(h, W, EA, {
            end: ZA
          });
        } else if (C(d))
          nA++, oA(d, W, EA, {
            end: ZA
          });
        else
          throw new D(
            "val",
            ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
            d
          );
        d = W;
      } else if (L(W)) {
        if (U(d))
          nA++, FA(xA(d), W, EA, {
            end: ZA
          });
        else if ($(d) || C(d))
          nA++, FA(d, W, EA, {
            end: ZA
          });
        else if (q(d))
          nA++, FA(d.readable, W, EA, {
            end: ZA
          });
        else
          throw new D(
            "val",
            ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
            d
          );
        d = W;
      } else
        d = i.from(W);
    }
    return (QA != null && QA.aborted || P != null && P.aborted) && o.nextTick(iA), d;
  }
  function Z(m, z, sA, { end: cA }) {
    let QA = !1;
    if (z.on("close", () => {
      QA || sA(new w());
    }), m.pipe(z, {
      end: !1
    }), cA) {
      let P = function() {
        QA = !0, z.end();
      };
      GA(m) ? o.nextTick(P) : m.once("end", P);
    } else
      sA();
    return u(
      m,
      {
        readable: !0,
        writable: !1
      },
      (P) => {
        const eA = m._readableState;
        P && P.code === "ERR_STREAM_PREMATURE_CLOSE" && eA && eA.ended && !eA.errored && !eA.errorEmitted ? m.once("end", sA).once("error", sA) : sA(P);
      }
    ), u(
      z,
      {
        readable: !1,
        writable: !0
      },
      sA
    );
  }
  return st = {
    pipelineImpl: a,
    pipeline: v
  }, st;
}
var ut, Hn;
function er() {
  if (Hn) return ut;
  Hn = 1;
  const { pipeline: o } = yt(), l = te(), { destroyer: y } = Ge(), {
    isNodeStream: b,
    isReadable: X,
    isWritable: u,
    isWebStream: H,
    isTransformStream: n,
    isWritableStream: i,
    isReadableStream: p
  } = ne(), {
    AbortError: D,
    codes: { ERR_INVALID_ARG_VALUE: f, ERR_MISSING_ARGS: Y }
  } = KA(), c = Be();
  return ut = function(...V) {
    if (V.length === 0)
      throw new Y("streams");
    if (V.length === 1)
      return l.from(V[0]);
    const I = [...V];
    if (typeof V[0] == "function" && (V[0] = l.from(V[0])), typeof V[V.length - 1] == "function") {
      const AA = V.length - 1;
      V[AA] = l.from(V[AA]);
    }
    for (let AA = 0; AA < V.length; ++AA)
      if (!(!b(V[AA]) && !H(V[AA]))) {
        if (AA < V.length - 1 && !(X(V[AA]) || p(V[AA]) || n(V[AA])))
          throw new f(`streams[${AA}]`, I[AA], "must be readable");
        if (AA > 0 && !(u(V[AA]) || i(V[AA]) || n(V[AA])))
          throw new f(`streams[${AA}]`, I[AA], "must be writable");
      }
    let s, C, x, U, N;
    function q(AA) {
      const aA = U;
      U = null, aA ? aA(AA) : AA ? N.destroy(AA) : !_ && !GA && N.destroy();
    }
    const L = V[0], $ = o(V, q), GA = !!(u(L) || i(L) || n(L)), _ = !!(X($) || p($) || n($));
    if (N = new l({
      // TODO (ronag): highWaterMark?
      writableObjectMode: !!(L != null && L.writableObjectMode),
      readableObjectMode: !!($ != null && $.readableObjectMode),
      writable: GA,
      readable: _
    }), GA) {
      if (b(L))
        N._write = function(aA, K, fA) {
          L.write(aA, K) ? fA() : s = fA;
        }, N._final = function(aA) {
          L.end(), C = aA;
        }, L.on("drain", function() {
          if (s) {
            const aA = s;
            s = null, aA();
          }
        });
      else if (H(L)) {
        const K = (n(L) ? L.writable : L).getWriter();
        N._write = async function(fA, bA, xA) {
          try {
            await K.ready, K.write(fA).catch(() => {
            }), xA();
          } catch (HA) {
            xA(HA);
          }
        }, N._final = async function(fA) {
          try {
            await K.ready, K.close().catch(() => {
            }), C = fA;
          } catch (bA) {
            fA(bA);
          }
        };
      }
      const AA = n($) ? $.readable : $;
      c(AA, () => {
        if (C) {
          const aA = C;
          C = null, aA();
        }
      });
    }
    if (_) {
      if (b($))
        $.on("readable", function() {
          if (x) {
            const AA = x;
            x = null, AA();
          }
        }), $.on("end", function() {
          N.push(null);
        }), N._read = function() {
          for (; ; ) {
            const AA = $.read();
            if (AA === null) {
              x = N._read;
              return;
            }
            if (!N.push(AA))
              return;
          }
        };
      else if (H($)) {
        const aA = (n($) ? $.readable : $).getReader();
        N._read = async function() {
          for (; ; )
            try {
              const { value: K, done: fA } = await aA.read();
              if (!N.push(K))
                return;
              if (fA) {
                N.push(null);
                return;
              }
            } catch {
              return;
            }
        };
      }
    }
    return N._destroy = function(AA, aA) {
      !AA && U !== null && (AA = new D()), x = null, s = null, C = null, U === null ? aA(AA) : (U = aA, b($) && y($, AA));
    }, N;
  }, ut;
}
var Fn;
function dB() {
  if (Fn) return me;
  Fn = 1;
  const o = globalThis.AbortController || pe().AbortController, {
    codes: { ERR_INVALID_ARG_VALUE: l, ERR_INVALID_ARG_TYPE: y, ERR_MISSING_ARGS: b, ERR_OUT_OF_RANGE: X },
    AbortError: u
  } = KA(), { validateAbortSignal: H, validateInteger: n, validateObject: i } = Ze(), p = NA().Symbol("kWeak"), D = NA().Symbol("kResistStopPropagation"), { finished: f } = Be(), Y = er(), { addAbortSignalNoValidate: c } = Ne(), { isWritable: w, isNodeStream: V } = ne(), { deprecate: I } = TA(), {
    ArrayPrototypePush: s,
    Boolean: C,
    MathFloor: x,
    Number: U,
    NumberIsNaN: N,
    Promise: q,
    PromiseReject: L,
    PromiseResolve: $,
    PromisePrototypeThen: GA,
    Symbol: _
  } = NA(), AA = _("kEmpty"), aA = _("kEof");
  function K(P, eA) {
    if (eA != null && i(eA, "options"), (eA == null ? void 0 : eA.signal) != null && H(eA.signal, "options.signal"), V(P) && !w(P))
      throw new l("stream", P, "must be writable");
    const iA = Y(this, P);
    return eA != null && eA.signal && c(eA.signal, iA), iA;
  }
  function fA(P, eA) {
    if (typeof P != "function")
      throw new y("fn", ["Function", "AsyncFunction"], P);
    eA != null && i(eA, "options"), (eA == null ? void 0 : eA.signal) != null && H(eA.signal, "options.signal");
    let iA = 1;
    (eA == null ? void 0 : eA.concurrency) != null && (iA = x(eA.concurrency));
    let pA = iA - 1;
    return (eA == null ? void 0 : eA.highWaterMark) != null && (pA = x(eA.highWaterMark)), n(iA, "options.concurrency", 1), n(pA, "options.highWaterMark", 0), pA += iA, (async function* () {
      const S = TA().AbortSignalAny(
        [eA == null ? void 0 : eA.signal].filter(C)
      ), T = this, nA = [], EA = {
        signal: S
      };
      let hA, d, A = !1, r = 0;
      function E() {
        A = !0, W();
      }
      function W() {
        r -= 1, rA();
      }
      function rA() {
        d && !A && r < iA && nA.length < pA && (d(), d = null);
      }
      async function CA() {
        try {
          for await (let ZA of T) {
            if (A)
              return;
            if (S.aborted)
              throw new u();
            try {
              if (ZA = P(ZA, EA), ZA === AA)
                continue;
              ZA = $(ZA);
            } catch (MA) {
              ZA = L(MA);
            }
            r += 1, GA(ZA, W, E), nA.push(ZA), hA && (hA(), hA = null), !A && (nA.length >= pA || r >= iA) && await new q((MA) => {
              d = MA;
            });
          }
          nA.push(aA);
        } catch (ZA) {
          const MA = L(ZA);
          GA(MA, W, E), nA.push(MA);
        } finally {
          A = !0, hA && (hA(), hA = null);
        }
      }
      CA();
      try {
        for (; ; ) {
          for (; nA.length > 0; ) {
            const ZA = await nA[0];
            if (ZA === aA)
              return;
            if (S.aborted)
              throw new u();
            ZA !== AA && (yield ZA), nA.shift(), rA();
          }
          await new q((ZA) => {
            hA = ZA;
          });
        }
      } finally {
        A = !0, d && (d(), d = null);
      }
    }).call(this);
  }
  function bA(P = void 0) {
    return P != null && i(P, "options"), (P == null ? void 0 : P.signal) != null && H(P.signal, "options.signal"), (async function* () {
      let iA = 0;
      for await (const dA of this) {
        var pA;
        if (P != null && (pA = P.signal) !== null && pA !== void 0 && pA.aborted)
          throw new u({
            cause: P.signal.reason
          });
        yield [iA++, dA];
      }
    }).call(this);
  }
  async function xA(P, eA = void 0) {
    for await (const iA of v.call(this, P, eA))
      return !0;
    return !1;
  }
  async function HA(P, eA = void 0) {
    if (typeof P != "function")
      throw new y("fn", ["Function", "AsyncFunction"], P);
    return !await xA.call(
      this,
      async (...iA) => !await P(...iA),
      eA
    );
  }
  async function oA(P, eA) {
    for await (const iA of v.call(this, P, eA))
      return iA;
  }
  async function FA(P, eA) {
    if (typeof P != "function")
      throw new y("fn", ["Function", "AsyncFunction"], P);
    async function iA(pA, dA) {
      return await P(pA, dA), AA;
    }
    for await (const pA of fA.call(this, iA, eA)) ;
  }
  function v(P, eA) {
    if (typeof P != "function")
      throw new y("fn", ["Function", "AsyncFunction"], P);
    async function iA(pA, dA) {
      return await P(pA, dA) ? pA : AA;
    }
    return fA.call(this, iA, eA);
  }
  class a extends b {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  }
  async function Z(P, eA, iA) {
    var pA;
    if (typeof P != "function")
      throw new y("reducer", ["Function", "AsyncFunction"], P);
    iA != null && i(iA, "options"), (iA == null ? void 0 : iA.signal) != null && H(iA.signal, "options.signal");
    let dA = arguments.length > 1;
    if (iA != null && (pA = iA.signal) !== null && pA !== void 0 && pA.aborted) {
      const hA = new u(void 0, {
        cause: iA.signal.reason
      });
      throw this.once("error", () => {
      }), await f(this.destroy(hA)), hA;
    }
    const S = new o(), T = S.signal;
    if (iA != null && iA.signal) {
      const hA = {
        once: !0,
        [p]: this,
        [D]: !0
      };
      iA.signal.addEventListener("abort", () => S.abort(), hA);
    }
    let nA = !1;
    try {
      for await (const hA of this) {
        var EA;
        if (nA = !0, iA != null && (EA = iA.signal) !== null && EA !== void 0 && EA.aborted)
          throw new u();
        dA ? eA = await P(eA, hA, {
          signal: T
        }) : (eA = hA, dA = !0);
      }
      if (!nA && !dA)
        throw new a();
    } finally {
      S.abort();
    }
    return eA;
  }
  async function m(P) {
    P != null && i(P, "options"), (P == null ? void 0 : P.signal) != null && H(P.signal, "options.signal");
    const eA = [];
    for await (const pA of this) {
      var iA;
      if (P != null && (iA = P.signal) !== null && iA !== void 0 && iA.aborted)
        throw new u(void 0, {
          cause: P.signal.reason
        });
      s(eA, pA);
    }
    return eA;
  }
  function z(P, eA) {
    const iA = fA.call(this, P, eA);
    return (async function* () {
      for await (const dA of iA)
        yield* dA;
    }).call(this);
  }
  function sA(P) {
    if (P = U(P), N(P))
      return 0;
    if (P < 0)
      throw new X("number", ">= 0", P);
    return P;
  }
  function cA(P, eA = void 0) {
    return eA != null && i(eA, "options"), (eA == null ? void 0 : eA.signal) != null && H(eA.signal, "options.signal"), P = sA(P), (async function* () {
      var pA;
      if (eA != null && (pA = eA.signal) !== null && pA !== void 0 && pA.aborted)
        throw new u();
      for await (const S of this) {
        var dA;
        if (eA != null && (dA = eA.signal) !== null && dA !== void 0 && dA.aborted)
          throw new u();
        P-- <= 0 && (yield S);
      }
    }).call(this);
  }
  function QA(P, eA = void 0) {
    return eA != null && i(eA, "options"), (eA == null ? void 0 : eA.signal) != null && H(eA.signal, "options.signal"), P = sA(P), (async function* () {
      var pA;
      if (eA != null && (pA = eA.signal) !== null && pA !== void 0 && pA.aborted)
        throw new u();
      for await (const S of this) {
        var dA;
        if (eA != null && (dA = eA.signal) !== null && dA !== void 0 && dA.aborted)
          throw new u();
        if (P-- > 0 && (yield S), P <= 0)
          return;
      }
    }).call(this);
  }
  return me.streamReturningOperators = {
    asIndexedPairs: I(bA, "readable.asIndexedPairs will be removed in a future version."),
    drop: cA,
    filter: v,
    flatMap: z,
    map: fA,
    take: QA,
    compose: K
  }, me.promiseReturningOperators = {
    every: HA,
    forEach: FA,
    reduce: Z,
    toArray: m,
    some: xA,
    find: oA
  }, me;
}
var Ct, Yn;
function tr() {
  if (Yn) return Ct;
  Yn = 1;
  const { ArrayPrototypePop: o, Promise: l } = NA(), { isIterable: y, isNodeStream: b, isWebStream: X } = ne(), { pipelineImpl: u } = yt(), { finished: H } = Be();
  nr();
  function n(...i) {
    return new l((p, D) => {
      let f, Y;
      const c = i[i.length - 1];
      if (c && typeof c == "object" && !b(c) && !y(c) && !X(c)) {
        const w = o(i);
        f = w.signal, Y = w.end;
      }
      u(
        i,
        (w, V) => {
          w ? D(w) : p(V);
        },
        {
          signal: f,
          end: Y
        }
      );
    });
  }
  return Ct = {
    finished: H,
    pipeline: n
  }, Ct;
}
var pn;
function nr() {
  if (pn) return Se.exports;
  pn = 1;
  const { Buffer: o } = Ce(), { ObjectDefineProperty: l, ObjectKeys: y, ReflectApply: b } = NA(), {
    promisify: { custom: X }
  } = TA(), { streamReturningOperators: u, promiseReturningOperators: H } = dB(), {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: n }
  } = KA(), i = er(), { setDefaultHighWaterMark: p, getDefaultHighWaterMark: D } = Xe(), { pipeline: f } = yt(), { destroyer: Y } = Ge(), c = Be(), w = tr(), V = ne(), I = Se.exports = xt().Stream;
  I.isDestroyed = V.isDestroyed, I.isDisturbed = V.isDisturbed, I.isErrored = V.isErrored, I.isReadable = V.isReadable, I.isWritable = V.isWritable, I.Readable = ke();
  for (const C of y(u)) {
    let U = function(...N) {
      if (new.target)
        throw n();
      return I.Readable.from(b(x, this, N));
    };
    const x = u[C];
    l(U, "name", {
      __proto__: null,
      value: x.name
    }), l(U, "length", {
      __proto__: null,
      value: x.length
    }), l(I.Readable.prototype, C, {
      __proto__: null,
      value: U,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const C of y(H)) {
    let U = function(...N) {
      if (new.target)
        throw n();
      return b(x, this, N);
    };
    const x = H[C];
    l(U, "name", {
      __proto__: null,
      value: x.name
    }), l(U, "length", {
      __proto__: null,
      value: x.length
    }), l(I.Readable.prototype, C, {
      __proto__: null,
      value: U,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  I.Writable = mt(), I.Duplex = te(), I.Transform = $n(), I.PassThrough = Ar(), I.pipeline = f;
  const { addAbortSignal: s } = Ne();
  return I.addAbortSignal = s, I.finished = c, I.destroy = Y, I.compose = i, I.setDefaultHighWaterMark = p, I.getDefaultHighWaterMark = D, l(I, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return w;
    }
  }), l(f, X, {
    __proto__: null,
    enumerable: !0,
    get() {
      return w.pipeline;
    }
  }), l(c, X, {
    __proto__: null,
    enumerable: !0,
    get() {
      return w.finished;
    }
  }), I.Stream = I, I._isUint8Array = function(x) {
    return x instanceof Uint8Array;
  }, I._uint8ArrayToBuffer = function(x) {
    return o.from(x.buffer, x.byteOffset, x.byteLength);
  }, Se.exports;
}
var Zn;
function wB() {
  return Zn || (Zn = 1, function(o) {
    const l = nr(), y = tr(), b = l.Readable.destroy;
    o.exports = l.Readable, o.exports._uint8ArrayToBuffer = l._uint8ArrayToBuffer, o.exports._isUint8Array = l._isUint8Array, o.exports.isDisturbed = l.isDisturbed, o.exports.isErrored = l.isErrored, o.exports.isReadable = l.isReadable, o.exports.Readable = l.Readable, o.exports.Writable = l.Writable, o.exports.Duplex = l.Duplex, o.exports.Transform = l.Transform, o.exports.PassThrough = l.PassThrough, o.exports.addAbortSignal = l.addAbortSignal, o.exports.finished = l.finished, o.exports.destroy = l.destroy, o.exports.destroy = b, o.exports.pipeline = l.pipeline, o.exports.compose = l.compose, Object.defineProperty(l, "promises", {
      configurable: !0,
      enumerable: !0,
      get() {
        return y;
      }
    }), o.exports.Stream = l.Stream, o.exports.default = o.exports;
  }(ve)), ve.exports;
}
var QB = wB();
const pt = {
  "article.cls": "JSUKJSUgVGhpcyBpcyBmaWxlIGBhcnRpY2xlLmNscycsCiUlIGdlbmVyYXRlZCB3aXRoIHRoZSBkb2NzdHJpcCB1dGlsaXR5LgolJQolJSBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGVzIHdlcmU6CiUlCiUlIGNsYXNzZXMuZHR4ICAod2l0aCBvcHRpb25zOiBgYXJ0aWNsZScpCiUlIAolJSBUaGlzIGlzIGEgZ2VuZXJhdGVkIGZpbGUuCiUlIAolJSBUaGUgc291cmNlIGlzIG1haW50YWluZWQgYnkgdGhlIExhVGVYIFByb2plY3QgdGVhbSBhbmQgYnVnCiUlIHJlcG9ydHMgZm9yIGl0IGNhbiBiZSBvcGVuZWQgYXQgaHR0cHM6Ly9sYXRleC1wcm9qZWN0Lm9yZy9idWdzLmh0bWwKJSUgKGJ1dCBwbGVhc2Ugb2JzZXJ2ZSBjb25kaXRpb25zIG9uIGJ1ZyByZXBvcnRzIHNlbnQgdG8gdGhhdCBhZGRyZXNzISkKJSUgCiUlIAolJSBDb3B5cmlnaHQgMTk5My0yMDE3CiUlIFRoZSBMYVRlWDMgUHJvamVjdCBhbmQgYW55IGluZGl2aWR1YWwgYXV0aG9ycyBsaXN0ZWQgZWxzZXdoZXJlCiUlIGluIHRoaXMgZmlsZS4KJSUgCiUlIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGZyb20gZmlsZShzKSBvZiB0aGUgTGFUZVggYmFzZSBzeXN0ZW0uCiUlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiUlIAolJSBJdCBtYXkgYmUgZGlzdHJpYnV0ZWQgYW5kL29yIG1vZGlmaWVkIHVuZGVyIHRoZQolJSBjb25kaXRpb25zIG9mIHRoZSBMYVRlWCBQcm9qZWN0IFB1YmxpYyBMaWNlbnNlLCBlaXRoZXIgdmVyc2lvbiAxLjNjCiUlIG9mIHRoaXMgbGljZW5zZSBvciAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLgolJSBUaGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhpcyBsaWNlbnNlIGlzIGluCiUlICAgIGh0dHBzOi8vd3d3LmxhdGV4LXByb2plY3Qub3JnL2xwcGwudHh0CiUlIGFuZCB2ZXJzaW9uIDEuM2Mgb3IgbGF0ZXIgaXMgcGFydCBvZiBhbGwgZGlzdHJpYnV0aW9ucyBvZiBMYVRlWAolJSB2ZXJzaW9uIDIwMDUvMTIvMDEgb3IgbGF0ZXIuCiUlIAolJSBUaGlzIGZpbGUgaGFzIHRoZSBMUFBMIG1haW50ZW5hbmNlIHN0YXR1cyAibWFpbnRhaW5lZCIuCiUlIAolJSBUaGlzIGZpbGUgbWF5IG9ubHkgYmUgZGlzdHJpYnV0ZWQgdG9nZXRoZXIgd2l0aCBhIGNvcHkgb2YgdGhlIExhVGVYCiUlIGJhc2Ugc3lzdGVtLiBZb3UgbWF5IGhvd2V2ZXIgZGlzdHJpYnV0ZSB0aGUgTGFUZVggYmFzZSBzeXN0ZW0gd2l0aG91dAolJSBzdWNoIGdlbmVyYXRlZCBmaWxlcy4KJSUgCiUlIFRoZSBsaXN0IG9mIGFsbCBmaWxlcyBiZWxvbmdpbmcgdG8gdGhlIExhVGVYIGJhc2UgZGlzdHJpYnV0aW9uIGlzCiUlIGdpdmVuIGluIHRoZSBmaWxlIGBtYW5pZmVzdC50eHQnLiBTZWUgYWxzbyBgbGVnYWwudHh0JyBmb3IgYWRkaXRpb25hbAolJSBpbmZvcm1hdGlvbi4KJSUgCiUlIFRoZSBsaXN0IG9mIGRlcml2ZWQgKHVucGFja2VkKSBmaWxlcyBiZWxvbmdpbmcgdG8gdGhlIGRpc3RyaWJ1dGlvbgolJSBhbmQgY292ZXJlZCBieSBMUFBMIGlzIGRlZmluZWQgYnkgdGhlIHVucGFja2luZyBzY3JpcHRzICh3aXRoCiUlIGV4dGVuc2lvbiAuaW5zKSB3aGljaCBhcmUgcGFydCBvZiB0aGUgZGlzdHJpYnV0aW9uLgpcTmVlZHNUZVhGb3JtYXR7TGFUZVgyZX1bMTk5NS8xMi8wMV0KXFByb3ZpZGVzQ2xhc3N7YXJ0aWNsZX0KICAgICAgICAgICAgICBbMjAxNC8wOS8yOSB2MS40aAogU3RhbmRhcmQgTGFUZVggZG9jdW1lbnQgY2xhc3NdClxuZXdjb21tYW5kXEBwdHNpemV7fQpcbmV3aWZcaWZAcmVzdG9uZWNvbApcbmV3aWZcaWZAdGl0bGVwYWdlClxAdGl0bGVwYWdlZmFsc2UKXGlmQGNvbXBhdGliaWxpdHlcZWxzZQpcRGVjbGFyZU9wdGlvbnthNHBhcGVyfQogICB7XHNldGxlbmd0aFxwYXBlcmhlaWdodCB7Mjk3bW19JQogICAgXHNldGxlbmd0aFxwYXBlcndpZHRoICB7MjEwbW19fQpcRGVjbGFyZU9wdGlvbnthNXBhcGVyfQogICB7XHNldGxlbmd0aFxwYXBlcmhlaWdodCB7MjEwbW19JQogICAgXHNldGxlbmd0aFxwYXBlcndpZHRoICB7MTQ4bW19fQpcRGVjbGFyZU9wdGlvbntiNXBhcGVyfQogICB7XHNldGxlbmd0aFxwYXBlcmhlaWdodCB7MjUwbW19JQogICAgXHNldGxlbmd0aFxwYXBlcndpZHRoICB7MTc2bW19fQpcRGVjbGFyZU9wdGlvbntsZXR0ZXJwYXBlcn0KICAge1xzZXRsZW5ndGhccGFwZXJoZWlnaHQgezExaW59JQogICAgXHNldGxlbmd0aFxwYXBlcndpZHRoICB7OC41aW59fQpcRGVjbGFyZU9wdGlvbntsZWdhbHBhcGVyfQogICB7XHNldGxlbmd0aFxwYXBlcmhlaWdodCB7MTRpbn0lCiAgICBcc2V0bGVuZ3RoXHBhcGVyd2lkdGggIHs4LjVpbn19ClxEZWNsYXJlT3B0aW9ue2V4ZWN1dGl2ZXBhcGVyfQogICB7XHNldGxlbmd0aFxwYXBlcmhlaWdodCB7MTAuNWlufSUKICAgIFxzZXRsZW5ndGhccGFwZXJ3aWR0aCAgezcuMjVpbn19ClxEZWNsYXJlT3B0aW9ue2xhbmRzY2FwZX0KICAge1xzZXRsZW5ndGhcQHRlbXBkaW1hICAge1xwYXBlcmhlaWdodH0lCiAgICBcc2V0bGVuZ3RoXHBhcGVyaGVpZ2h0IHtccGFwZXJ3aWR0aH0lCiAgICBcc2V0bGVuZ3RoXHBhcGVyd2lkdGggIHtcQHRlbXBkaW1hfX0KXGZpClxpZkBjb21wYXRpYmlsaXR5CiAgXHJlbmV3Y29tbWFuZFxAcHRzaXplezB9ClxlbHNlClxEZWNsYXJlT3B0aW9uezEwcHR9e1xyZW5ld2NvbW1hbmRcQHB0c2l6ZXswfX0KXGZpClxEZWNsYXJlT3B0aW9uezExcHR9e1xyZW5ld2NvbW1hbmRcQHB0c2l6ZXsxfX0KXERlY2xhcmVPcHRpb257MTJwdH17XHJlbmV3Y29tbWFuZFxAcHRzaXplezJ9fQpcaWZAY29tcGF0aWJpbGl0eVxlbHNlClxEZWNsYXJlT3B0aW9ue29uZXNpZGV9e1xAdHdvc2lkZWZhbHNlIFxAbXBhcnN3aXRjaGZhbHNlfQpcZmkKXERlY2xhcmVPcHRpb257dHdvc2lkZX17XEB0d29zaWRldHJ1ZSAgXEBtcGFyc3dpdGNodHJ1ZX0KXERlY2xhcmVPcHRpb257ZHJhZnR9e1xzZXRsZW5ndGhcb3ZlcmZ1bGxydWxlezVwdH19ClxpZkBjb21wYXRpYmlsaXR5XGVsc2UKXERlY2xhcmVPcHRpb257ZmluYWx9e1xzZXRsZW5ndGhcb3ZlcmZ1bGxydWxlezBwdH19ClxmaQpcRGVjbGFyZU9wdGlvbnt0aXRsZXBhZ2V9e1xAdGl0bGVwYWdldHJ1ZX0KXGlmQGNvbXBhdGliaWxpdHlcZWxzZQpcRGVjbGFyZU9wdGlvbntub3RpdGxlcGFnZX17XEB0aXRsZXBhZ2VmYWxzZX0KXGZpClxpZkBjb21wYXRpYmlsaXR5XGVsc2UKXERlY2xhcmVPcHRpb257b25lY29sdW1ufXtcQHR3b2NvbHVtbmZhbHNlfQpcZmkKXERlY2xhcmVPcHRpb257dHdvY29sdW1ufXtcQHR3b2NvbHVtbnRydWV9ClxEZWNsYXJlT3B0aW9ue2xlcW5vfXtcaW5wdXR7bGVxbm8uY2xvfX0KXERlY2xhcmVPcHRpb257ZmxlcW59e1xpbnB1dHtmbGVxbi5jbG99fQpcRGVjbGFyZU9wdGlvbntvcGVuYmlifXslCiAgXEF0RW5kT2ZQYWNrYWdleyUKICAgXHJlbmV3Y29tbWFuZFxAb3BlbmJpYkBjb2RleyUKICAgICAgXGFkdmFuY2VcbGVmdG1hcmdpblxiaWJpbmRlbnQKICAgICAgXGl0ZW1pbmRlbnQgLVxiaWJpbmRlbnQKICAgICAgXGxpc3RwYXJpbmRlbnQgXGl0ZW1pbmRlbnQKICAgICAgXHBhcnNlcCBcekAKICAgICAgfSUKICAgXHJlbmV3Y29tbWFuZFxuZXdibG9ja3tccGFyfX0lCn0KXEV4ZWN1dGVPcHRpb25ze2xldHRlcnBhcGVyLDEwcHQsb25lc2lkZSxvbmVjb2x1bW4sZmluYWx9ClxQcm9jZXNzT3B0aW9ucwpcaW5wdXR7c2l6ZTFcQHB0c2l6ZS5jbG99ClxzZXRsZW5ndGhcbGluZXNraXB7MVxwQH0KXHNldGxlbmd0aFxub3JtYWxsaW5lc2tpcHsxXHBAfQpccmVuZXdjb21tYW5kXGJhc2VsaW5lc3RyZXRjaHt9ClxzZXRsZW5ndGhccGFyc2tpcHswXHBAIFxAcGx1cyBccEB9ClxAbG93cGVuYWx0eSAgIDUxClxAbWVkcGVuYWx0eSAgMTUxClxAaGlnaHBlbmFsdHkgMzAxClxzZXRjb3VudGVye3RvcG51bWJlcn17Mn0KXHJlbmV3Y29tbWFuZFx0b3BmcmFjdGlvbnsuN30KXHNldGNvdW50ZXJ7Ym90dG9tbnVtYmVyfXsxfQpccmVuZXdjb21tYW5kXGJvdHRvbWZyYWN0aW9uey4zfQpcc2V0Y291bnRlcnt0b3RhbG51bWJlcn17M30KXHJlbmV3Y29tbWFuZFx0ZXh0ZnJhY3Rpb257LjJ9ClxyZW5ld2NvbW1hbmRcZmxvYXRwYWdlZnJhY3Rpb257LjV9ClxzZXRjb3VudGVye2RibHRvcG51bWJlcn17Mn0KXHJlbmV3Y29tbWFuZFxkYmx0b3BmcmFjdGlvbnsuN30KXHJlbmV3Y29tbWFuZFxkYmxmbG9hdHBhZ2VmcmFjdGlvbnsuNX0KXGlmQHR3b3NpZGUKICBcZGVmXHBzQGhlYWRpbmdzeyUKICAgICAgXGxldFxAb2RkZm9vdFxAZW1wdHlcbGV0XEBldmVuZm9vdFxAZW1wdHkKICAgICAgXGRlZlxAZXZlbmhlYWR7XHRoZXBhZ2VcaGZpbFxzbHNoYXBlXGxlZnRtYXJrfSUKICAgICAgXGRlZlxAb2RkaGVhZHt7XHNsc2hhcGVccmlnaHRtYXJrfVxoZmlsXHRoZXBhZ2V9JQogICAgICBcbGV0XEBta2JvdGhcbWFya2JvdGgKICAgIFxkZWZcc2VjdGlvbm1hcmsjIzF7JQogICAgICBcbWFya2JvdGgge1xNYWtlVXBwZXJjYXNleyUKICAgICAgICBcaWZudW0gXGNAc2VjbnVtZGVwdGggPlx6QAogICAgICAgICAgXHRoZXNlY3Rpb25ccXVhZAogICAgICAgIFxmaQogICAgICAgICMjMX19e319JQogICAgXGRlZlxzdWJzZWN0aW9ubWFyayMjMXslCiAgICAgIFxtYXJrcmlnaHQgeyUKICAgICAgICBcaWZudW0gXGNAc2VjbnVtZGVwdGggPlxAbmUKICAgICAgICAgIFx0aGVzdWJzZWN0aW9uXHF1YWQKICAgICAgICBcZmkKICAgICAgICAjIzF9fX0KXGVsc2UKICBcZGVmXHBzQGhlYWRpbmdzeyUKICAgIFxsZXRcQG9kZGZvb3RcQGVtcHR5CiAgICBcZGVmXEBvZGRoZWFke3tcc2xzaGFwZVxyaWdodG1hcmt9XGhmaWxcdGhlcGFnZX0lCiAgICBcbGV0XEBta2JvdGhcbWFya2JvdGgKICAgIFxkZWZcc2VjdGlvbm1hcmsjIzF7JQogICAgICBcbWFya3JpZ2h0IHtcTWFrZVVwcGVyY2FzZXslCiAgICAgICAgXGlmbnVtIFxjQHNlY251bWRlcHRoID5cbUBuZQogICAgICAgICAgXHRoZXNlY3Rpb25ccXVhZAogICAgICAgIFxmaQogICAgICAgICMjMX19fX0KXGZpClxkZWZccHNAbXloZWFkaW5nc3slCiAgICBcbGV0XEBvZGRmb290XEBlbXB0eVxsZXRcQGV2ZW5mb290XEBlbXB0eQogICAgXGRlZlxAZXZlbmhlYWR7XHRoZXBhZ2VcaGZpbFxzbHNoYXBlXGxlZnRtYXJrfSUKICAgIFxkZWZcQG9kZGhlYWR7e1xzbHNoYXBlXHJpZ2h0bWFya31caGZpbFx0aGVwYWdlfSUKICAgIFxsZXRcQG1rYm90aFxAZ29iYmxldHdvCiAgICBcbGV0XHNlY3Rpb25tYXJrXEBnb2JibGUKICAgIFxsZXRcc3Vic2VjdGlvbm1hcmtcQGdvYmJsZQogICAgfQogIFxpZkB0aXRsZXBhZ2UKICBcbmV3Y29tbWFuZFxtYWtldGl0bGV7XGJlZ2lue3RpdGxlcGFnZX0lCiAgXGxldFxmb290bm90ZXNpemVcc21hbGwKICBcbGV0XGZvb3Rub3RlcnVsZVxyZWxheAogIFxsZXQgXGZvb3Rub3RlIFx0aGFua3MKICBcbnVsbFx2ZmlsCiAgXHZza2lwIDYwXHBACiAgXGJlZ2lue2NlbnRlcn0lCiAgICB7XExBUkdFIFxAdGl0bGUgXHBhcn0lCiAgICBcdnNraXAgM2VtJQogICAge1xsYXJnZQogICAgIFxsaW5lc2tpcCAuNzVlbSUKICAgICAgXGJlZ2lue3RhYnVsYXJ9W3Rde2N9JQogICAgICAgIFxAYXV0aG9yCiAgICAgIFxlbmR7dGFidWxhcn1ccGFyfSUKICAgICAgXHZza2lwIDEuNWVtJQogICAge1xsYXJnZSBcQGRhdGUgXHBhcn0lICAgICAgICUgU2V0IGRhdGUgaW4gXGxhcmdlIHNpemUuCiAgXGVuZHtjZW50ZXJ9XHBhcgogIFxAdGhhbmtzCiAgXHZmaWxcbnVsbAogIFxlbmR7dGl0bGVwYWdlfSUKICBcc2V0Y291bnRlcntmb290bm90ZX17MH0lCiAgXGdsb2JhbFxsZXRcdGhhbmtzXHJlbGF4CiAgXGdsb2JhbFxsZXRcbWFrZXRpdGxlXHJlbGF4CiAgXGdsb2JhbFxsZXRcQHRoYW5rc1xAZW1wdHkKICBcZ2xvYmFsXGxldFxAYXV0aG9yXEBlbXB0eQogIFxnbG9iYWxcbGV0XEBkYXRlXEBlbXB0eQogIFxnbG9iYWxcbGV0XEB0aXRsZVxAZW1wdHkKICBcZ2xvYmFsXGxldFx0aXRsZVxyZWxheAogIFxnbG9iYWxcbGV0XGF1dGhvclxyZWxheAogIFxnbG9iYWxcbGV0XGRhdGVccmVsYXgKICBcZ2xvYmFsXGxldFxhbmRccmVsYXgKfQpcZWxzZQpcbmV3Y29tbWFuZFxtYWtldGl0bGV7XHBhcgogIFxiZWdpbmdyb3VwCiAgICBccmVuZXdjb21tYW5kXHRoZWZvb3Rub3Rle1xAZm5zeW1ib2xcY0Bmb290bm90ZX0lCiAgICBcZGVmXEBtYWtlZm5tYXJre1xybGFwe1xAdGV4dHN1cGVyc2NyaXB0e1xub3JtYWxmb250XEB0aGVmbm1hcmt9fX0lCiAgICBcbG9uZ1xkZWZcQG1ha2VmbnRleHQjIzF7XHBhcmluZGVudCAxZW1cbm9pbmRlbnQKICAgICAgICAgICAgXGhiQHh0QDEuOGVteyUKICAgICAgICAgICAgICAgIFxoc3NcQHRleHRzdXBlcnNjcmlwdHtcbm9ybWFsZm9udFxAdGhlZm5tYXJrfX0jIzF9JQogICAgXGlmQHR3b2NvbHVtbgogICAgICBcaWZudW0gXGNvbEBudW1iZXI9XEBuZQogICAgICAgIFxAbWFrZXRpdGxlCiAgICAgIFxlbHNlCiAgICAgICAgXHR3b2NvbHVtbltcQG1ha2V0aXRsZV0lCiAgICAgIFxmaQogICAgXGVsc2UKICAgICAgXG5ld3BhZ2UKICAgICAgXGdsb2JhbFxAdG9wbnVtXHpAICAgJSBQcmV2ZW50cyBmaWd1cmVzIGZyb20gZ29pbmcgYXQgdG9wIG9mIHBhZ2UuCiAgICAgIFxAbWFrZXRpdGxlCiAgICBcZmkKICAgIFx0aGlzcGFnZXN0eWxle3BsYWlufVxAdGhhbmtzCiAgXGVuZGdyb3VwCiAgXHNldGNvdW50ZXJ7Zm9vdG5vdGV9ezB9JQogIFxnbG9iYWxcbGV0XHRoYW5rc1xyZWxheAogIFxnbG9iYWxcbGV0XG1ha2V0aXRsZVxyZWxheAogIFxnbG9iYWxcbGV0XEBtYWtldGl0bGVccmVsYXgKICBcZ2xvYmFsXGxldFxAdGhhbmtzXEBlbXB0eQogIFxnbG9iYWxcbGV0XEBhdXRob3JcQGVtcHR5CiAgXGdsb2JhbFxsZXRcQGRhdGVcQGVtcHR5CiAgXGdsb2JhbFxsZXRcQHRpdGxlXEBlbXB0eQogIFxnbG9iYWxcbGV0XHRpdGxlXHJlbGF4CiAgXGdsb2JhbFxsZXRcYXV0aG9yXHJlbGF4CiAgXGdsb2JhbFxsZXRcZGF0ZVxyZWxheAogIFxnbG9iYWxcbGV0XGFuZFxyZWxheAp9ClxkZWZcQG1ha2V0aXRsZXslCiAgXG5ld3BhZ2UKICBcbnVsbAogIFx2c2tpcCAyZW0lCiAgXGJlZ2lue2NlbnRlcn0lCiAgXGxldCBcZm9vdG5vdGUgXHRoYW5rcwogICAge1xMQVJHRSBcQHRpdGxlIFxwYXJ9JQogICAgXHZza2lwIDEuNWVtJQogICAge1xsYXJnZQogICAgICBcbGluZXNraXAgLjVlbSUKICAgICAgXGJlZ2lue3RhYnVsYXJ9W3Rde2N9JQogICAgICAgIFxAYXV0aG9yCiAgICAgIFxlbmR7dGFidWxhcn1ccGFyfSUKICAgIFx2c2tpcCAxZW0lCiAgICB7XGxhcmdlIFxAZGF0ZX0lCiAgXGVuZHtjZW50ZXJ9JQogIFxwYXIKICBcdnNraXAgMS41ZW19ClxmaQpcc2V0Y291bnRlcntzZWNudW1kZXB0aH17M30KXG5ld2NvdW50ZXIge3BhcnR9ClxuZXdjb3VudGVyIHtzZWN0aW9ufQpcbmV3Y291bnRlciB7c3Vic2VjdGlvbn1bc2VjdGlvbl0KXG5ld2NvdW50ZXIge3N1YnN1YnNlY3Rpb259W3N1YnNlY3Rpb25dClxuZXdjb3VudGVyIHtwYXJhZ3JhcGh9W3N1YnN1YnNlY3Rpb25dClxuZXdjb3VudGVyIHtzdWJwYXJhZ3JhcGh9W3BhcmFncmFwaF0KXHJlbmV3Y29tbWFuZCBcdGhlcGFydCB7XEBSb21hblxjQHBhcnR9ClxyZW5ld2NvbW1hbmQgXHRoZXNlY3Rpb24ge1xAYXJhYmljXGNAc2VjdGlvbn0KXHJlbmV3Y29tbWFuZFx0aGVzdWJzZWN0aW9uICAge1x0aGVzZWN0aW9uLlxAYXJhYmljXGNAc3Vic2VjdGlvbn0KXHJlbmV3Y29tbWFuZFx0aGVzdWJzdWJzZWN0aW9ue1x0aGVzdWJzZWN0aW9uLlxAYXJhYmljXGNAc3Vic3Vic2VjdGlvbn0KXHJlbmV3Y29tbWFuZFx0aGVwYXJhZ3JhcGggICAge1x0aGVzdWJzdWJzZWN0aW9uLlxAYXJhYmljXGNAcGFyYWdyYXBofQpccmVuZXdjb21tYW5kXHRoZXN1YnBhcmFncmFwaCB7XHRoZXBhcmFncmFwaC5cQGFyYWJpY1xjQHN1YnBhcmFncmFwaH0KXG5ld2NvbW1hbmRccGFydHslCiAgIFxpZkBub3NraXBzZWMgXGxlYXZldm1vZGUgXGZpCiAgIFxwYXIKICAgXGFkZHZzcGFjZXs0ZXh9JQogICBcQGFmdGVyaW5kZW50ZmFsc2UKICAgXHNlY2RlZlxAcGFydFxAc3BhcnR9CgpcZGVmXEBwYXJ0WyMxXSMyeyUKICAgIFxpZm51bSBcY0BzZWNudW1kZXB0aCA+XG1AbmUKICAgICAgXHJlZnN0ZXBjb3VudGVye3BhcnR9JQogICAgICBcYWRkY29udGVudHNsaW5le3RvY317cGFydH17XHRoZXBhcnRcaHNwYWNlezFlbX0jMX0lCiAgICBcZWxzZQogICAgICBcYWRkY29udGVudHNsaW5le3RvY317cGFydH17IzF9JQogICAgXGZpCiAgICB7XHBhcmluZGVudCBcekAgXHJhZ2dlZHJpZ2h0CiAgICAgXGludGVybGluZXBlbmFsdHkgXEBNCiAgICAgXG5vcm1hbGZvbnQKICAgICBcaWZudW0gXGNAc2VjbnVtZGVwdGggPlxtQG5lCiAgICAgICBcTGFyZ2VcYmZzZXJpZXMgXHBhcnRuYW1lXG5vYnJlYWtzcGFjZVx0aGVwYXJ0CiAgICAgICBccGFyXG5vYnJlYWsKICAgICBcZmkKICAgICBcaHVnZSBcYmZzZXJpZXMgIzIlCiAgICAgXG1hcmtib3Roe317fVxwYXJ9JQogICAgXG5vYnJlYWsKICAgIFx2c2tpcCAzZXgKICAgIFxAYWZ0ZXJoZWFkaW5nfQpcZGVmXEBzcGFydCMxeyUKICAgIHtccGFyaW5kZW50IFx6QCBccmFnZ2VkcmlnaHQKICAgICBcaW50ZXJsaW5lcGVuYWx0eSBcQE0KICAgICBcbm9ybWFsZm9udAogICAgIFxodWdlIFxiZnNlcmllcyAjMVxwYXJ9JQogICAgIFxub2JyZWFrCiAgICAgXHZza2lwIDNleAogICAgIFxAYWZ0ZXJoZWFkaW5nfQpcbmV3Y29tbWFuZFxzZWN0aW9ue1xAc3RhcnRzZWN0aW9uIHtzZWN0aW9ufXsxfXtcekB9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHstMy41ZXggXEBwbHVzIC0xZXggXEBtaW51cyAtLjJleH0lCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezIuM2V4IFxAcGx1cy4yZXh9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbm9ybWFsZm9udFxMYXJnZVxiZnNlcmllc319ClxuZXdjb21tYW5kXHN1YnNlY3Rpb257XEBzdGFydHNlY3Rpb257c3Vic2VjdGlvbn17Mn17XHpAfSUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHstMy4yNWV4XEBwbHVzIC0xZXggXEBtaW51cyAtLjJleH0lCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7MS41ZXggXEBwbHVzIC4yZXh9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xub3JtYWxmb250XGxhcmdlXGJmc2VyaWVzfX0KXG5ld2NvbW1hbmRcc3Vic3Vic2VjdGlvbntcQHN0YXJ0c2VjdGlvbntzdWJzdWJzZWN0aW9ufXszfXtcekB9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey0zLjI1ZXhcQHBsdXMgLTFleCBcQG1pbnVzIC0uMmV4fSUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsxLjVleCBcQHBsdXMgLjJleH0lCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5vcm1hbGZvbnRcbm9ybWFsc2l6ZVxiZnNlcmllc319ClxuZXdjb21tYW5kXHBhcmFncmFwaHtcQHN0YXJ0c2VjdGlvbntwYXJhZ3JhcGh9ezR9e1x6QH0lCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHszLjI1ZXggXEBwbHVzMWV4IFxAbWludXMuMmV4fSUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey0xZW19JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5vcm1hbGZvbnRcbm9ybWFsc2l6ZVxiZnNlcmllc319ClxuZXdjb21tYW5kXHN1YnBhcmFncmFwaHtcQHN0YXJ0c2VjdGlvbntzdWJwYXJhZ3JhcGh9ezV9e1xwYXJpbmRlbnR9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7My4yNWV4IFxAcGx1czFleCBcQG1pbnVzIC4yZXh9JQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LTFlbX0lCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xub3JtYWxmb250XG5vcm1hbHNpemVcYmZzZXJpZXN9fQpcaWZAdHdvY29sdW1uCiAgXHNldGxlbmd0aFxsZWZ0bWFyZ2luaSAgezJlbX0KXGVsc2UKICBcc2V0bGVuZ3RoXGxlZnRtYXJnaW5pICB7Mi41ZW19ClxmaQpcbGVmdG1hcmdpbiAgXGxlZnRtYXJnaW5pClxzZXRsZW5ndGhcbGVmdG1hcmdpbmlpICB7Mi4yZW19ClxzZXRsZW5ndGhcbGVmdG1hcmdpbmlpaSB7MS44N2VtfQpcc2V0bGVuZ3RoXGxlZnRtYXJnaW5pdiAgezEuN2VtfQpcaWZAdHdvY29sdW1uCiAgXHNldGxlbmd0aFxsZWZ0bWFyZ2ludiAgey41ZW19CiAgXHNldGxlbmd0aFxsZWZ0bWFyZ2ludmkgey41ZW19ClxlbHNlCiAgXHNldGxlbmd0aFxsZWZ0bWFyZ2ludiAgezFlbX0KICBcc2V0bGVuZ3RoXGxlZnRtYXJnaW52aSB7MWVtfQpcZmkKXHNldGxlbmd0aCAgXGxhYmVsc2VwICB7LjVlbX0KXHNldGxlbmd0aCAgXGxhYmVsd2lkdGh7XGxlZnRtYXJnaW5pfQpcYWRkdG9sZW5ndGhcbGFiZWx3aWR0aHstXGxhYmVsc2VwfQpcQGJlZ2lucGFycGVuYWx0eSAtXEBsb3dwZW5hbHR5ClxAZW5kcGFycGVuYWx0eSAgIC1cQGxvd3BlbmFsdHkKXEBpdGVtcGVuYWx0eSAgICAgLVxAbG93cGVuYWx0eQpccmVuZXdjb21tYW5kXHRoZWVudW1pe1xAYXJhYmljXGNAZW51bWl9ClxyZW5ld2NvbW1hbmRcdGhlZW51bWlpe1xAYWxwaFxjQGVudW1paX0KXHJlbmV3Y29tbWFuZFx0aGVlbnVtaWlpe1xAcm9tYW5cY0BlbnVtaWlpfQpccmVuZXdjb21tYW5kXHRoZWVudW1pdntcQEFscGhcY0BlbnVtaXZ9ClxuZXdjb21tYW5kXGxhYmVsZW51bWl7XHRoZWVudW1pLn0KXG5ld2NvbW1hbmRcbGFiZWxlbnVtaWl7KFx0aGVlbnVtaWkpfQpcbmV3Y29tbWFuZFxsYWJlbGVudW1paWl7XHRoZWVudW1paWkufQpcbmV3Y29tbWFuZFxsYWJlbGVudW1pdntcdGhlZW51bWl2Ln0KXHJlbmV3Y29tbWFuZFxwQGVudW1paXtcdGhlZW51bWl9ClxyZW5ld2NvbW1hbmRccEBlbnVtaWlpe1x0aGVlbnVtaShcdGhlZW51bWlpKX0KXHJlbmV3Y29tbWFuZFxwQGVudW1pdntccEBlbnVtaWlpXHRoZWVudW1paWl9ClxuZXdjb21tYW5kXGxhYmVsaXRlbWl7XHRleHRidWxsZXR9ClxuZXdjb21tYW5kXGxhYmVsaXRlbWlpe1xub3JtYWxmb250XGJmc2VyaWVzIFx0ZXh0ZW5kYXNofQpcbmV3Y29tbWFuZFxsYWJlbGl0ZW1paWl7XHRleHRhc3Rlcmlza2NlbnRlcmVkfQpcbmV3Y29tbWFuZFxsYWJlbGl0ZW1pdntcdGV4dHBlcmlvZGNlbnRlcmVkfQpcbmV3ZW52aXJvbm1lbnR7ZGVzY3JpcHRpb259CiAgICAgICAgICAgICAgIHtcbGlzdHt9e1xsYWJlbHdpZHRoXHpAIFxpdGVtaW5kZW50LVxsZWZ0bWFyZ2luCiAgICAgICAgICAgICAgICAgICAgICAgIFxsZXRcbWFrZWxhYmVsXGRlc2NyaXB0aW9ubGFiZWx9fQogICAgICAgICAgICAgICB7XGVuZGxpc3R9ClxuZXdjb21tYW5kKlxkZXNjcmlwdGlvbmxhYmVsWzFde1xoc3BhY2VcbGFiZWxzZXAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbm9ybWFsZm9udFxiZnNlcmllcyAjMX0KXGlmQHRpdGxlcGFnZQogIFxuZXdlbnZpcm9ubWVudHthYnN0cmFjdH17JQogICAgICBcdGl0bGVwYWdlCiAgICAgIFxudWxsXHZmaWwKICAgICAgXEBiZWdpbnBhcnBlbmFsdHlcQGxvd3BlbmFsdHkKICAgICAgXGJlZ2lue2NlbnRlcn0lCiAgICAgICAgXGJmc2VyaWVzIFxhYnN0cmFjdG5hbWUKICAgICAgICBcQGVuZHBhcnBlbmFsdHlcQE0KICAgICAgXGVuZHtjZW50ZXJ9fSUKICAgICB7XHBhclx2ZmlsXG51bGxcZW5kdGl0bGVwYWdlfQpcZWxzZQogIFxuZXdlbnZpcm9ubWVudHthYnN0cmFjdH17JQogICAgICBcaWZAdHdvY29sdW1uCiAgICAgICAgXHNlY3Rpb24qe1xhYnN0cmFjdG5hbWV9JQogICAgICBcZWxzZQogICAgICAgIFxzbWFsbAogICAgICAgIFxiZWdpbntjZW50ZXJ9JQogICAgICAgICAge1xiZnNlcmllcyBcYWJzdHJhY3RuYW1lXHZzcGFjZXstLjVlbX1cdnNwYWNle1x6QH19JQogICAgICAgIFxlbmR7Y2VudGVyfSUKICAgICAgICBccXVvdGF0aW9uCiAgICAgIFxmaX0KICAgICAge1xpZkB0d29jb2x1bW5cZWxzZVxlbmRxdW90YXRpb25cZml9ClxmaQpcbmV3ZW52aXJvbm1lbnR7dmVyc2V9CiAgICAgICAgICAgICAgIHtcbGV0XFxcQGNlbnRlcmNyCiAgICAgICAgICAgICAgICBcbGlzdHt9e1xpdGVtc2VwICAgICAgXHpACiAgICAgICAgICAgICAgICAgICAgICAgIFxpdGVtaW5kZW50ICAgLTEuNWVtJQogICAgICAgICAgICAgICAgICAgICAgICBcbGlzdHBhcmluZGVudFxpdGVtaW5kZW50CiAgICAgICAgICAgICAgICAgICAgICAgIFxyaWdodG1hcmdpbiAgXGxlZnRtYXJnaW4KICAgICAgICAgICAgICAgICAgICAgICAgXGFkdmFuY2VcbGVmdG1hcmdpbiAxLjVlbX0lCiAgICAgICAgICAgICAgICBcaXRlbVxyZWxheH0KICAgICAgICAgICAgICAge1xlbmRsaXN0fQpcbmV3ZW52aXJvbm1lbnR7cXVvdGF0aW9ufQogICAgICAgICAgICAgICB7XGxpc3R7fXtcbGlzdHBhcmluZGVudCAxLjVlbSUKICAgICAgICAgICAgICAgICAgICAgICAgXGl0ZW1pbmRlbnQgICAgXGxpc3RwYXJpbmRlbnQKICAgICAgICAgICAgICAgICAgICAgICAgXHJpZ2h0bWFyZ2luICAgXGxlZnRtYXJnaW4KICAgICAgICAgICAgICAgICAgICAgICAgXHBhcnNlcCAgICAgICAgXHpAIFxAcGx1c1xwQH0lCiAgICAgICAgICAgICAgICBcaXRlbVxyZWxheH0KICAgICAgICAgICAgICAge1xlbmRsaXN0fQpcbmV3ZW52aXJvbm1lbnR7cXVvdGV9CiAgICAgICAgICAgICAgIHtcbGlzdHt9e1xyaWdodG1hcmdpblxsZWZ0bWFyZ2lufSUKICAgICAgICAgICAgICAgIFxpdGVtXHJlbGF4fQogICAgICAgICAgICAgICB7XGVuZGxpc3R9ClxpZkBjb21wYXRpYmlsaXR5ClxuZXdlbnZpcm9ubWVudHt0aXRsZXBhZ2V9CiAgICB7JQogICAgICBcaWZAdHdvY29sdW1uCiAgICAgICAgXEByZXN0b25lY29sdHJ1ZVxvbmVjb2x1bW4KICAgICAgXGVsc2UKICAgICAgICBcQHJlc3RvbmVjb2xmYWxzZVxuZXdwYWdlCiAgICAgIFxmaQogICAgICBcdGhpc3BhZ2VzdHlsZXtlbXB0eX0lCiAgICAgIFxzZXRjb3VudGVye3BhZ2V9XHpACiAgICB9JQogICAge1xpZkByZXN0b25lY29sXHR3b2NvbHVtbiBcZWxzZSBcbmV3cGFnZSBcZmkKICAgIH0KXGVsc2UKXG5ld2Vudmlyb25tZW50e3RpdGxlcGFnZX0KICAgIHslCiAgICAgIFxpZkB0d29jb2x1bW4KICAgICAgICBcQHJlc3RvbmVjb2x0cnVlXG9uZWNvbHVtbgogICAgICBcZWxzZQogICAgICAgIFxAcmVzdG9uZWNvbGZhbHNlXG5ld3BhZ2UKICAgICAgXGZpCiAgICAgIFx0aGlzcGFnZXN0eWxle2VtcHR5fSUKICAgICAgXHNldGNvdW50ZXJ7cGFnZX1cQG5lCiAgICB9JQogICAge1xpZkByZXN0b25lY29sXHR3b2NvbHVtbiBcZWxzZSBcbmV3cGFnZSBcZmkKICAgICBcaWZAdHdvc2lkZVxlbHNlCiAgICAgICAgXHNldGNvdW50ZXJ7cGFnZX1cQG5lCiAgICAgXGZpCiAgICB9ClxmaQpcbmV3Y29tbWFuZFxhcHBlbmRpeHtccGFyCiAgXHNldGNvdW50ZXJ7c2VjdGlvbn17MH0lCiAgXHNldGNvdW50ZXJ7c3Vic2VjdGlvbn17MH0lCiAgXGdkZWZcdGhlc2VjdGlvbntcQEFscGhcY0BzZWN0aW9ufX0KXHNldGxlbmd0aFxhcnJheWNvbHNlcHs1XHBAfQpcc2V0bGVuZ3RoXHRhYmNvbHNlcHs2XHBAfQpcc2V0bGVuZ3RoXGFycmF5cnVsZXdpZHRoey40XHBAfQpcc2V0bGVuZ3RoXGRvdWJsZXJ1bGVzZXB7MlxwQH0KXHNldGxlbmd0aFx0YWJiaW5nc2Vwe1xsYWJlbHNlcH0KXHNraXBcQG1wZm9vdGlucyA9IFxza2lwXGZvb3RpbnMKXHNldGxlbmd0aFxmYm94c2VwezNccEB9ClxzZXRsZW5ndGhcZmJveHJ1bGV7LjRccEB9ClxyZW5ld2NvbW1hbmQgXHRoZWVxdWF0aW9uIHtcQGFyYWJpY1xjQGVxdWF0aW9ufQpcbmV3Y291bnRlcntmaWd1cmV9ClxyZW5ld2NvbW1hbmQgXHRoZWZpZ3VyZSB7XEBhcmFiaWNcY0BmaWd1cmV9ClxkZWZcZnBzQGZpZ3VyZXt0YnB9ClxkZWZcZnR5cGVAZmlndXJlezF9ClxkZWZcZXh0QGZpZ3VyZXtsb2Z9ClxkZWZcZm51bUBmaWd1cmV7XGZpZ3VyZW5hbWVcbm9icmVha3NwYWNlXHRoZWZpZ3VyZX0KXG5ld2Vudmlyb25tZW50e2ZpZ3VyZX0KICAgICAgICAgICAgICAge1xAZmxvYXR7ZmlndXJlfX0KICAgICAgICAgICAgICAge1xlbmRAZmxvYXR9ClxuZXdlbnZpcm9ubWVudHtmaWd1cmUqfQogICAgICAgICAgICAgICB7XEBkYmxmbG9hdHtmaWd1cmV9fQogICAgICAgICAgICAgICB7XGVuZEBkYmxmbG9hdH0KXG5ld2NvdW50ZXJ7dGFibGV9ClxyZW5ld2NvbW1hbmRcdGhldGFibGV7XEBhcmFiaWNcY0B0YWJsZX0KXGRlZlxmcHNAdGFibGV7dGJwfQpcZGVmXGZ0eXBlQHRhYmxlezJ9ClxkZWZcZXh0QHRhYmxle2xvdH0KXGRlZlxmbnVtQHRhYmxle1x0YWJsZW5hbWVcbm9icmVha3NwYWNlXHRoZXRhYmxlfQpcbmV3ZW52aXJvbm1lbnR7dGFibGV9CiAgICAgICAgICAgICAgIHtcQGZsb2F0e3RhYmxlfX0KICAgICAgICAgICAgICAge1xlbmRAZmxvYXR9ClxuZXdlbnZpcm9ubWVudHt0YWJsZSp9CiAgICAgICAgICAgICAgIHtcQGRibGZsb2F0e3RhYmxlfX0KICAgICAgICAgICAgICAge1xlbmRAZGJsZmxvYXR9ClxuZXdsZW5ndGhcYWJvdmVjYXB0aW9uc2tpcApcbmV3bGVuZ3RoXGJlbG93Y2FwdGlvbnNraXAKXHNldGxlbmd0aFxhYm92ZWNhcHRpb25za2lwezEwXHBAfQpcc2V0bGVuZ3RoXGJlbG93Y2FwdGlvbnNraXB7MFxwQH0KXGxvbmdcZGVmXEBtYWtlY2FwdGlvbiMxIzJ7JQogIFx2c2tpcFxhYm92ZWNhcHRpb25za2lwCiAgXHNib3hcQHRlbXBib3hheyMxOiAjMn0lCiAgXGlmZGltIFx3ZFxAdGVtcGJveGEgPlxoc2l6ZQogICAgIzE6ICMyXHBhcgogIFxlbHNlCiAgICBcZ2xvYmFsIFxAbWluaXBhZ2VmYWxzZQogICAgXGhiQHh0QFxoc2l6ZXtcaGZpbFxib3hcQHRlbXBib3hhXGhmaWx9JQogIFxmaQogIFx2c2tpcFxiZWxvd2NhcHRpb25za2lwfQpcRGVjbGFyZU9sZEZvbnRDb21tYW5ke1xybX17XG5vcm1hbGZvbnRccm1mYW1pbHl9e1xtYXRocm19ClxEZWNsYXJlT2xkRm9udENvbW1hbmR7XHNmfXtcbm9ybWFsZm9udFxzZmZhbWlseX17XG1hdGhzZn0KXERlY2xhcmVPbGRGb250Q29tbWFuZHtcdHR9e1xub3JtYWxmb250XHR0ZmFtaWx5fXtcbWF0aHR0fQpcRGVjbGFyZU9sZEZvbnRDb21tYW5ke1xiZn17XG5vcm1hbGZvbnRcYmZzZXJpZXN9e1xtYXRoYmZ9ClxEZWNsYXJlT2xkRm9udENvbW1hbmR7XGl0fXtcbm9ybWFsZm9udFxpdHNoYXBlfXtcbWF0aGl0fQpcRGVjbGFyZU9sZEZvbnRDb21tYW5ke1xzbH17XG5vcm1hbGZvbnRcc2xzaGFwZX17XEBub21hdGhcc2x9ClxEZWNsYXJlT2xkRm9udENvbW1hbmR7XHNjfXtcbm9ybWFsZm9udFxzY3NoYXBlfXtcQG5vbWF0aFxzY30KXERlY2xhcmVSb2J1c3RDb21tYW5kKlxjYWx7XEBmb250c3dpdGNoXHJlbGF4XG1hdGhjYWx9ClxEZWNsYXJlUm9idXN0Q29tbWFuZCpcbWl0e1xAZm9udHN3aXRjaFxyZWxheFxtYXRobm9ybWFsfQpcbmV3Y29tbWFuZFxAcG51bXdpZHRoezEuNTVlbX0KXG5ld2NvbW1hbmRcQHRvY3JtYXJnezIuNTVlbX0KXG5ld2NvbW1hbmRcQGRvdHNlcHs0LjV9ClxzZXRjb3VudGVye3RvY2RlcHRofXszfQpcbmV3Y29tbWFuZFx0YWJsZW9mY29udGVudHN7JQogICAgXHNlY3Rpb24qe1xjb250ZW50c25hbWUKICAgICAgICBcQG1rYm90aHslCiAgICAgICAgICAgXE1ha2VVcHBlcmNhc2VcY29udGVudHNuYW1lfXtcTWFrZVVwcGVyY2FzZVxjb250ZW50c25hbWV9fSUKICAgIFxAc3RhcnR0b2N7dG9jfSUKICAgIH0KXG5ld2NvbW1hbmQqXGxAcGFydFsyXXslCiAgXGlmbnVtIFxjQHRvY2RlcHRoID4tMlxyZWxheAogICAgXGFkZHBlbmFsdHlcQHNlY3BlbmFsdHkKICAgIFxhZGR2c3BhY2V7Mi4yNWVtIFxAcGx1c1xwQH0lCiAgICBcc2V0bGVuZ3RoXEB0ZW1wZGltYXszZW19JQogICAgXGJlZ2luZ3JvdXAKICAgICAgXHBhcmluZGVudCBcekAgXHJpZ2h0c2tpcCBcQHBudW13aWR0aAogICAgICBccGFyZmlsbHNraXAgLVxAcG51bXdpZHRoCiAgICAgIHtcbGVhdmV2bW9kZQogICAgICAgXGxhcmdlIFxiZnNlcmllcyAjMVxoZmlsIFxoYkB4dEBcQHBudW13aWR0aHtcaHNzICMyfX1ccGFyCiAgICAgICBcbm9icmVhawogICAgICAgXGlmQGNvbXBhdGliaWxpdHkKICAgICAgICAgXGdsb2JhbFxAbm9icmVha3RydWUKICAgICAgICAgXGV2ZXJ5cGFye1xnbG9iYWxcQG5vYnJlYWtmYWxzZVxldmVyeXBhcnt9fSUKICAgICAgXGZpCiAgICBcZW5kZ3JvdXAKICBcZml9ClxuZXdjb21tYW5kKlxsQHNlY3Rpb25bMl17JQogIFxpZm51bSBcY0B0b2NkZXB0aCA+XHpACiAgICBcYWRkcGVuYWx0eVxAc2VjcGVuYWx0eQogICAgXGFkZHZzcGFjZXsxLjBlbSBcQHBsdXNccEB9JQogICAgXHNldGxlbmd0aFxAdGVtcGRpbWF7MS41ZW19JQogICAgXGJlZ2luZ3JvdXAKICAgICAgXHBhcmluZGVudCBcekAgXHJpZ2h0c2tpcCBcQHBudW13aWR0aAogICAgICBccGFyZmlsbHNraXAgLVxAcG51bXdpZHRoCiAgICAgIFxsZWF2ZXZtb2RlIFxiZnNlcmllcwogICAgICBcYWR2YW5jZVxsZWZ0c2tpcFxAdGVtcGRpbWEKICAgICAgXGhza2lwIC1cbGVmdHNraXAKICAgICAgIzFcbm9icmVha1xoZmlsIFxub2JyZWFrXGhiQHh0QFxAcG51bXdpZHRoe1xoc3MgIzJ9XHBhcgogICAgXGVuZGdyb3VwCiAgXGZpfQpcbmV3Y29tbWFuZCpcbEBzdWJzZWN0aW9ue1xAZG90dGVkdG9jbGluZXsyfXsxLjVlbX17Mi4zZW19fQpcbmV3Y29tbWFuZCpcbEBzdWJzdWJzZWN0aW9ue1xAZG90dGVkdG9jbGluZXszfXszLjhlbX17My4yZW19fQpcbmV3Y29tbWFuZCpcbEBwYXJhZ3JhcGh7XEBkb3R0ZWR0b2NsaW5lezR9ezcuMGVtfXs0LjFlbX19ClxuZXdjb21tYW5kKlxsQHN1YnBhcmFncmFwaHtcQGRvdHRlZHRvY2xpbmV7NX17MTBlbX17NWVtfX0KXG5ld2NvbW1hbmRcbGlzdG9mZmlndXJlc3slCiAgICBcc2VjdGlvbip7XGxpc3RmaWd1cmVuYW1lfSUKICAgICAgXEBta2JvdGh7XE1ha2VVcHBlcmNhc2VcbGlzdGZpZ3VyZW5hbWV9JQogICAgICAgICAgICAgIHtcTWFrZVVwcGVyY2FzZVxsaXN0ZmlndXJlbmFtZX0lCiAgICBcQHN0YXJ0dG9je2xvZn0lCiAgICB9ClxuZXdjb21tYW5kKlxsQGZpZ3VyZXtcQGRvdHRlZHRvY2xpbmV7MX17MS41ZW19ezIuM2VtfX0KXG5ld2NvbW1hbmRcbGlzdG9mdGFibGVzeyUKICAgIFxzZWN0aW9uKntcbGlzdHRhYmxlbmFtZX0lCiAgICAgIFxAbWtib3RoeyUKICAgICAgICAgIFxNYWtlVXBwZXJjYXNlXGxpc3R0YWJsZW5hbWV9JQogICAgICAgICB7XE1ha2VVcHBlcmNhc2VcbGlzdHRhYmxlbmFtZX0lCiAgICBcQHN0YXJ0dG9je2xvdH0lCiAgICB9ClxsZXRcbEB0YWJsZVxsQGZpZ3VyZQpcbmV3ZGltZW5cYmliaW5kZW50ClxzZXRsZW5ndGhcYmliaW5kZW50ezEuNWVtfQpcbmV3ZW52aXJvbm1lbnR7dGhlYmlibGlvZ3JhcGh5fVsxXQogICAgIHtcc2VjdGlvbip7XHJlZm5hbWV9JQogICAgICBcQG1rYm90aHtcTWFrZVVwcGVyY2FzZVxyZWZuYW1lfXtcTWFrZVVwcGVyY2FzZVxyZWZuYW1lfSUKICAgICAgXGxpc3R7XEBiaWJsYWJlbHtcQGFyYWJpY1xjQGVudW1pdn19JQogICAgICAgICAgIHtcc2V0dG93aWR0aFxsYWJlbHdpZHRoe1xAYmlibGFiZWx7IzF9fSUKICAgICAgICAgICAgXGxlZnRtYXJnaW5cbGFiZWx3aWR0aAogICAgICAgICAgICBcYWR2YW5jZVxsZWZ0bWFyZ2luXGxhYmVsc2VwCiAgICAgICAgICAgIFxAb3BlbmJpYkBjb2RlCiAgICAgICAgICAgIFx1c2Vjb3VudGVye2VudW1pdn0lCiAgICAgICAgICAgIFxsZXRccEBlbnVtaXZcQGVtcHR5CiAgICAgICAgICAgIFxyZW5ld2NvbW1hbmRcdGhlZW51bWl2e1xAYXJhYmljXGNAZW51bWl2fX0lCiAgICAgIFxzbG9wcHkKICAgICAgXGNsdWJwZW5hbHR5NDAwMAogICAgICBcQGNsdWJwZW5hbHR5IFxjbHVicGVuYWx0eQogICAgICBcd2lkb3dwZW5hbHR5NDAwMCUKICAgICAgXHNmY29kZWBcLlxAbX0KICAgICB7XGRlZlxAbm9pdGVtZXJyCiAgICAgICB7XEBsYXRleEB3YXJuaW5ne0VtcHR5IGB0aGViaWJsaW9ncmFwaHknIGVudmlyb25tZW50fX0lCiAgICAgIFxlbmRsaXN0fQpcbmV3Y29tbWFuZFxuZXdibG9ja3tcaHNraXAgLjExZW1cQHBsdXMuMzNlbVxAbWludXMuMDdlbX0KXGxldFxAb3BlbmJpYkBjb2RlXEBlbXB0eQpcbmV3ZW52aXJvbm1lbnR7dGhlaW5kZXh9CiAgICAgICAgICAgICAgIHtcaWZAdHdvY29sdW1uCiAgICAgICAgICAgICAgICAgIFxAcmVzdG9uZWNvbGZhbHNlCiAgICAgICAgICAgICAgICBcZWxzZQogICAgICAgICAgICAgICAgICBcQHJlc3RvbmVjb2x0cnVlCiAgICAgICAgICAgICAgICBcZmkKICAgICAgICAgICAgICAgIFx0d29jb2x1bW5bXHNlY3Rpb24qe1xpbmRleG5hbWV9XSUKICAgICAgICAgICAgICAgIFxAbWtib3Roe1xNYWtlVXBwZXJjYXNlXGluZGV4bmFtZX0lCiAgICAgICAgICAgICAgICAgICAgICAgIHtcTWFrZVVwcGVyY2FzZVxpbmRleG5hbWV9JQogICAgICAgICAgICAgICAgXHRoaXNwYWdlc3R5bGV7cGxhaW59XHBhcmluZGVudFx6QAogICAgICAgICAgICAgICAgXHBhcnNraXBcekAgXEBwbHVzIC4zXHBAXHJlbGF4CiAgICAgICAgICAgICAgICBcY29sdW1uc2VwcnVsZSBcekAKICAgICAgICAgICAgICAgIFxjb2x1bW5zZXAgMzVccEAKICAgICAgICAgICAgICAgIFxsZXRcaXRlbVxAaWR4aXRlbX0KICAgICAgICAgICAgICAge1xpZkByZXN0b25lY29sXG9uZWNvbHVtblxlbHNlXGNsZWFycGFnZVxmaX0KXG5ld2NvbW1hbmRcQGlkeGl0ZW17XHBhclxoYW5naW5kZW50IDQwXHBAfQpcbmV3Y29tbWFuZFxzdWJpdGVte1xAaWR4aXRlbSBcaHNwYWNlKnsyMFxwQH19ClxuZXdjb21tYW5kXHN1YnN1Yml0ZW17XEBpZHhpdGVtIFxoc3BhY2UqezMwXHBAfX0KXG5ld2NvbW1hbmRcaW5kZXhzcGFjZXtccGFyIFx2c2tpcCAxMFxwQCBcQHBsdXM1XHBAIFxAbWludXMzXHBAXHJlbGF4fQpccmVuZXdjb21tYW5kXGZvb3Rub3RlcnVsZXslCiAgXGtlcm4tM1xwQAogIFxocnVsZVxAd2lkdGguNFxjb2x1bW53aWR0aAogIFxrZXJuMi42XHBAfQpcbmV3Y29tbWFuZFxAbWFrZWZudGV4dFsxXXslCiAgICBccGFyaW5kZW50IDFlbSUKICAgIFxub2luZGVudAogICAgXGhiQHh0QDEuOGVte1xoc3NcQG1ha2Vmbm1hcmt9IzF9ClxuZXdjb21tYW5kXGNvbnRlbnRzbmFtZXtDb250ZW50c30KXG5ld2NvbW1hbmRcbGlzdGZpZ3VyZW5hbWV7TGlzdCBvZiBGaWd1cmVzfQpcbmV3Y29tbWFuZFxsaXN0dGFibGVuYW1le0xpc3Qgb2YgVGFibGVzfQpcbmV3Y29tbWFuZFxyZWZuYW1le1JlZmVyZW5jZXN9ClxuZXdjb21tYW5kXGluZGV4bmFtZXtJbmRleH0KXG5ld2NvbW1hbmRcZmlndXJlbmFtZXtGaWd1cmV9ClxuZXdjb21tYW5kXHRhYmxlbmFtZXtUYWJsZX0KXG5ld2NvbW1hbmRccGFydG5hbWV7UGFydH0KXG5ld2NvbW1hbmRcYXBwZW5kaXhuYW1le0FwcGVuZGl4fQpcbmV3Y29tbWFuZFxhYnN0cmFjdG5hbWV7QWJzdHJhY3R9ClxkZWZcdG9kYXl7XGlmY2FzZVxtb250aFxvcgogIEphbnVhcnlcb3IgRmVicnVhcnlcb3IgTWFyY2hcb3IgQXByaWxcb3IgTWF5XG9yIEp1bmVcb3IKICBKdWx5XG9yIEF1Z3VzdFxvciBTZXB0ZW1iZXJcb3IgT2N0b2JlclxvciBOb3ZlbWJlclxvciBEZWNlbWJlclxmaQogIFxzcGFjZVxudW1iZXJcZGF5LCBcbnVtYmVyXHllYXJ9ClxzZXRsZW5ndGhcY29sdW1uc2VwezEwXHBAfQpcc2V0bGVuZ3RoXGNvbHVtbnNlcHJ1bGV7MFxwQH0KXHBhZ2VzdHlsZXtwbGFpbn0KXHBhZ2VudW1iZXJpbmd7YXJhYmljfQpcaWZAdHdvc2lkZQpcZWxzZQogIFxyYWdnZWRib3R0b20KXGZpClxpZkB0d29jb2x1bW4KICBcdHdvY29sdW1uCiAgXHNsb3BweQogIFxmbHVzaGJvdHRvbQpcZWxzZQogIFxvbmVjb2x1bW4KXGZpClxlbmRpbnB1dAolJQolJSBFbmQgb2YgZmlsZSBgYXJ0aWNsZS5jbHMnLgo=",
  "sample.tex": "XGRvY3VtZW50Y2xhc3N7YXJ0aWNsZX0KJVx1c2VwYWNrYWdle2Ftc21hdGh9CiVcdXNlcGFja2FnZVt5eXl5bW1kZCxoaG1tc3Nde2RhdGV0aW1lfQpcYmVnaW57ZG9jdW1lbnR9Cgpcc2VjdGlvbntIZWxsbywgd29ybGQufQoKSGVsbG8gdGhlcmUuICBUaGlzIGlzIHdvcmtpbmcuCgpIZXJlIGlzIHNvbWUgbWF0aDoKXFsKICBcaW50X2FeYiBmKHgpIFwsIGR4ID0gRihiKSAtIEYoYSkuClxdClRvZGF5IGlzIFx0b2RheS4KJUEgZm9ybXVsYSBpcwolXGJlZ2lue2FsaWduKn0KJSAgYSAmPSB4XjIgKyB5XjIgXFwKJSAgZih4KSAmPSBcY29zIFxzaW4geAolXGVuZHthbGlnbip9CiVhbmQgc3VjaC4gVGhlIHRpbWUgaXMgXGN1cnJlbnR0aW1lLgogIApcZW5ke2RvY3VtZW50fQo=",
  "size10.clo": "JSUKJSUgVGhpcyBpcyBmaWxlIGBzaXplMTAuY2xvJywKJSUgZ2VuZXJhdGVkIHdpdGggdGhlIGRvY3N0cmlwIHV0aWxpdHkuCiUlCiUlIFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMgd2VyZToKJSUKJSUgY2xhc3Nlcy5kdHggICh3aXRoIG9wdGlvbnM6IGAxMHB0JykKJSUgCiUlIFRoaXMgaXMgYSBnZW5lcmF0ZWQgZmlsZS4KJSUgCiUlIFRoZSBzb3VyY2UgaXMgbWFpbnRhaW5lZCBieSB0aGUgTGFUZVggUHJvamVjdCB0ZWFtIGFuZCBidWcKJSUgcmVwb3J0cyBmb3IgaXQgY2FuIGJlIG9wZW5lZCBhdCBodHRwczovL2xhdGV4LXByb2plY3Qub3JnL2J1Z3MuaHRtbAolJSAoYnV0IHBsZWFzZSBvYnNlcnZlIGNvbmRpdGlvbnMgb24gYnVnIHJlcG9ydHMgc2VudCB0byB0aGF0IGFkZHJlc3MhKQolJSAKJSUgCiUlIENvcHlyaWdodCAxOTkzLTIwMTcKJSUgVGhlIExhVGVYMyBQcm9qZWN0IGFuZCBhbnkgaW5kaXZpZHVhbCBhdXRob3JzIGxpc3RlZCBlbHNld2hlcmUKJSUgaW4gdGhpcyBmaWxlLgolJSAKJSUgVGhpcyBmaWxlIHdhcyBnZW5lcmF0ZWQgZnJvbSBmaWxlKHMpIG9mIHRoZSBMYVRlWCBiYXNlIHN5c3RlbS4KJSUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KJSUgCiUlIEl0IG1heSBiZSBkaXN0cmlidXRlZCBhbmQvb3IgbW9kaWZpZWQgdW5kZXIgdGhlCiUlIGNvbmRpdGlvbnMgb2YgdGhlIExhVGVYIFByb2plY3QgUHVibGljIExpY2Vuc2UsIGVpdGhlciB2ZXJzaW9uIDEuM2MKJSUgb2YgdGhpcyBsaWNlbnNlIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uCiUlIFRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGlzIGxpY2Vuc2UgaXMgaW4KJSUgICAgaHR0cHM6Ly93d3cubGF0ZXgtcHJvamVjdC5vcmcvbHBwbC50eHQKJSUgYW5kIHZlcnNpb24gMS4zYyBvciBsYXRlciBpcyBwYXJ0IG9mIGFsbCBkaXN0cmlidXRpb25zIG9mIExhVGVYCiUlIHZlcnNpb24gMjAwNS8xMi8wMSBvciBsYXRlci4KJSUgCiUlIFRoaXMgZmlsZSBoYXMgdGhlIExQUEwgbWFpbnRlbmFuY2Ugc3RhdHVzICJtYWludGFpbmVkIi4KJSUgCiUlIFRoaXMgZmlsZSBtYXkgb25seSBiZSBkaXN0cmlidXRlZCB0b2dldGhlciB3aXRoIGEgY29weSBvZiB0aGUgTGFUZVgKJSUgYmFzZSBzeXN0ZW0uIFlvdSBtYXkgaG93ZXZlciBkaXN0cmlidXRlIHRoZSBMYVRlWCBiYXNlIHN5c3RlbSB3aXRob3V0CiUlIHN1Y2ggZ2VuZXJhdGVkIGZpbGVzLgolJSAKJSUgVGhlIGxpc3Qgb2YgYWxsIGZpbGVzIGJlbG9uZ2luZyB0byB0aGUgTGFUZVggYmFzZSBkaXN0cmlidXRpb24gaXMKJSUgZ2l2ZW4gaW4gdGhlIGZpbGUgYG1hbmlmZXN0LnR4dCcuIFNlZSBhbHNvIGBsZWdhbC50eHQnIGZvciBhZGRpdGlvbmFsCiUlIGluZm9ybWF0aW9uLgolJSAKJSUgVGhlIGxpc3Qgb2YgZGVyaXZlZCAodW5wYWNrZWQpIGZpbGVzIGJlbG9uZ2luZyB0byB0aGUgZGlzdHJpYnV0aW9uCiUlIGFuZCBjb3ZlcmVkIGJ5IExQUEwgaXMgZGVmaW5lZCBieSB0aGUgdW5wYWNraW5nIHNjcmlwdHMgKHdpdGgKJSUgZXh0ZW5zaW9uIC5pbnMpIHdoaWNoIGFyZSBwYXJ0IG9mIHRoZSBkaXN0cmlidXRpb24uClxQcm92aWRlc0ZpbGV7c2l6ZTEwLmNsb30KICAgICAgICAgICAgICBbMjAxNC8wOS8yOSB2MS40aAogICAgICBTdGFuZGFyZCBMYVRlWCBmaWxlIChzaXplIG9wdGlvbildClxyZW5ld2NvbW1hbmRcbm9ybWFsc2l6ZXslCiAgIFxAc2V0Zm9udHNpemVcbm9ybWFsc2l6ZVxAeHB0XEB4aWlwdAogICBcYWJvdmVkaXNwbGF5c2tpcCAxMFxwQCBcQHBsdXMyXHBAIFxAbWludXM1XHBACiAgIFxhYm92ZWRpc3BsYXlzaG9ydHNraXAgXHpAIFxAcGx1czNccEAKICAgXGJlbG93ZGlzcGxheXNob3J0c2tpcCA2XHBAIFxAcGx1czNccEAgXEBtaW51czNccEAKICAgXGJlbG93ZGlzcGxheXNraXAgXGFib3ZlZGlzcGxheXNraXAKICAgXGxldFxAbGlzdGlcQGxpc3RJfQpcbm9ybWFsc2l6ZQpcbmV3Y29tbWFuZFxzbWFsbHslCiAgIFxAc2V0Zm9udHNpemVcc21hbGxcQGl4cHR7MTF9JQogICBcYWJvdmVkaXNwbGF5c2tpcCA4LjVccEAgXEBwbHVzM1xwQCBcQG1pbnVzNFxwQAogICBcYWJvdmVkaXNwbGF5c2hvcnRza2lwIFx6QCBcQHBsdXMyXHBACiAgIFxiZWxvd2Rpc3BsYXlzaG9ydHNraXAgNFxwQCBcQHBsdXMyXHBAIFxAbWludXMyXHBACiAgIFxkZWZcQGxpc3Rpe1xsZWZ0bWFyZ2luXGxlZnRtYXJnaW5pCiAgICAgICAgICAgICAgIFx0b3BzZXAgNFxwQCBcQHBsdXMyXHBAIFxAbWludXMyXHBACiAgICAgICAgICAgICAgIFxwYXJzZXAgMlxwQCBcQHBsdXNccEAgXEBtaW51c1xwQAogICAgICAgICAgICAgICBcaXRlbXNlcCBccGFyc2VwfSUKICAgXGJlbG93ZGlzcGxheXNraXAgXGFib3ZlZGlzcGxheXNraXAKfQpcbmV3Y29tbWFuZFxmb290bm90ZXNpemV7JQogICBcQHNldGZvbnRzaXplXGZvb3Rub3Rlc2l6ZVxAdmlpaXB0ezkuNX0lCiAgIFxhYm92ZWRpc3BsYXlza2lwIDZccEAgXEBwbHVzMlxwQCBcQG1pbnVzNFxwQAogICBcYWJvdmVkaXNwbGF5c2hvcnRza2lwIFx6QCBcQHBsdXNccEAKICAgXGJlbG93ZGlzcGxheXNob3J0c2tpcCAzXHBAIFxAcGx1c1xwQCBcQG1pbnVzMlxwQAogICBcZGVmXEBsaXN0aXtcbGVmdG1hcmdpblxsZWZ0bWFyZ2luaQogICAgICAgICAgICAgICBcdG9wc2VwIDNccEAgXEBwbHVzXHBAIFxAbWludXNccEAKICAgICAgICAgICAgICAgXHBhcnNlcCAyXHBAIFxAcGx1c1xwQCBcQG1pbnVzXHBACiAgICAgICAgICAgICAgIFxpdGVtc2VwIFxwYXJzZXB9JQogICBcYmVsb3dkaXNwbGF5c2tpcCBcYWJvdmVkaXNwbGF5c2tpcAp9ClxuZXdjb21tYW5kXHNjcmlwdHNpemV7XEBzZXRmb250c2l6ZVxzY3JpcHRzaXplXEB2aWlwdFxAdmlpaXB0fQpcbmV3Y29tbWFuZFx0aW55e1xAc2V0Zm9udHNpemVcdGlueVxAdnB0XEB2aXB0fQpcbmV3Y29tbWFuZFxsYXJnZXtcQHNldGZvbnRzaXplXGxhcmdlXEB4aWlwdHsxNH19ClxuZXdjb21tYW5kXExhcmdle1xAc2V0Zm9udHNpemVcTGFyZ2VcQHhpdnB0ezE4fX0KXG5ld2NvbW1hbmRcTEFSR0V7XEBzZXRmb250c2l6ZVxMQVJHRVxAeHZpaXB0ezIyfX0KXG5ld2NvbW1hbmRcaHVnZXtcQHNldGZvbnRzaXplXGh1Z2VcQHh4cHR7MjV9fQpcbmV3Y29tbWFuZFxIdWdle1xAc2V0Zm9udHNpemVcSHVnZVxAeHh2cHR7MzB9fQpcaWZAdHdvY29sdW1uCiAgXHNldGxlbmd0aFxwYXJpbmRlbnR7MWVtfQpcZWxzZQogIFxzZXRsZW5ndGhccGFyaW5kZW50ezE1XHBAfQpcZmkKXHNldGxlbmd0aFxzbWFsbHNraXBhbW91bnR7M1xwQCBcQHBsdXMgMVxwQCBcQG1pbnVzIDFccEB9ClxzZXRsZW5ndGhcbWVkc2tpcGFtb3VudHs2XHBAIFxAcGx1cyAyXHBAIFxAbWludXMgMlxwQH0KXHNldGxlbmd0aFxiaWdza2lwYW1vdW50ezEyXHBAIFxAcGx1cyA0XHBAIFxAbWludXMgNFxwQH0KXHNldGxlbmd0aFxoZWFkaGVpZ2h0ezEyXHBAfQpcc2V0bGVuZ3RoXGhlYWRzZXAgICB7MjVccEB9ClxzZXRsZW5ndGhcdG9wc2tpcCAgIHsxMFxwQH0KXHNldGxlbmd0aFxmb290c2tpcHszMFxwQH0KXGlmQGNvbXBhdGliaWxpdHkgXHNldGxlbmd0aFxtYXhkZXB0aHs0XHBAfSBcZWxzZQpcc2V0bGVuZ3RoXG1heGRlcHRoey41XHRvcHNraXB9IFxmaQpcaWZAY29tcGF0aWJpbGl0eQogIFxpZkB0d29jb2x1bW4KICAgIFxzZXRsZW5ndGhcdGV4dHdpZHRoezQxMFxwQH0KICBcZWxzZQogICAgXHNldGxlbmd0aFx0ZXh0d2lkdGh7MzQ1XHBAfQogIFxmaQpcZWxzZQogIFxzZXRsZW5ndGhcQHRlbXBkaW1he1xwYXBlcndpZHRofQogIFxhZGR0b2xlbmd0aFxAdGVtcGRpbWF7LTJpbn0KICBcc2V0bGVuZ3RoXEB0ZW1wZGltYnszNDVccEB9CiAgXGlmQHR3b2NvbHVtbgogICAgXGlmZGltXEB0ZW1wZGltYT4yXEB0ZW1wZGltYlxyZWxheAogICAgICBcc2V0bGVuZ3RoXHRleHR3aWR0aHsyXEB0ZW1wZGltYn0KICAgIFxlbHNlCiAgICAgIFxzZXRsZW5ndGhcdGV4dHdpZHRoe1xAdGVtcGRpbWF9CiAgICBcZmkKICBcZWxzZQogICAgXGlmZGltXEB0ZW1wZGltYT5cQHRlbXBkaW1iXHJlbGF4CiAgICAgIFxzZXRsZW5ndGhcdGV4dHdpZHRoe1xAdGVtcGRpbWJ9CiAgICBcZWxzZQogICAgICBcc2V0bGVuZ3RoXHRleHR3aWR0aHtcQHRlbXBkaW1hfQogICAgXGZpCiAgXGZpClxmaQpcaWZAY29tcGF0aWJpbGl0eVxlbHNlCiAgXEBzZXR0b3BvaW50XHRleHR3aWR0aApcZmkKXGlmQGNvbXBhdGliaWxpdHkKICBcc2V0bGVuZ3RoXHRleHRoZWlnaHR7NDNcYmFzZWxpbmVza2lwfQpcZWxzZQogIFxzZXRsZW5ndGhcQHRlbXBkaW1he1xwYXBlcmhlaWdodH0KICBcYWRkdG9sZW5ndGhcQHRlbXBkaW1hey0yaW59CiAgXGFkZHRvbGVuZ3RoXEB0ZW1wZGltYXstMS41aW59CiAgXGRpdmlkZVxAdGVtcGRpbWFcYmFzZWxpbmVza2lwCiAgXEB0ZW1wY250YT1cQHRlbXBkaW1hCiAgXHNldGxlbmd0aFx0ZXh0aGVpZ2h0e1xAdGVtcGNudGFcYmFzZWxpbmVza2lwfQpcZmkKXGFkZHRvbGVuZ3RoXHRleHRoZWlnaHR7XHRvcHNraXB9ClxpZkB0d29jb2x1bW4KIFxzZXRsZW5ndGhcbWFyZ2lucGFyc2VwIHsxMFxwQH0KXGVsc2UKICBcc2V0bGVuZ3RoXG1hcmdpbnBhcnNlcHsxMVxwQH0KXGZpClxzZXRsZW5ndGhcbWFyZ2lucGFycHVzaHs1XHBAfQpcaWZAY29tcGF0aWJpbGl0eQogIFxpZkB0d29zaWRlCiAgICAgXHNldGxlbmd0aFxvZGRzaWRlbWFyZ2luICAgezQ0XHBAfQogICAgIFxzZXRsZW5ndGhcZXZlbnNpZGVtYXJnaW4gIHs4MlxwQH0KICAgICBcc2V0bGVuZ3RoXG1hcmdpbnBhcndpZHRoIHsxMDdccEB9CiAgXGVsc2UKICAgICBcc2V0bGVuZ3RoXG9kZHNpZGVtYXJnaW4gICB7NjNccEB9CiAgICAgXHNldGxlbmd0aFxldmVuc2lkZW1hcmdpbiAgezYzXHBAfQogICAgIFxzZXRsZW5ndGhcbWFyZ2lucGFyd2lkdGggIHs5MFxwQH0KICBcZmkKICBcaWZAdHdvY29sdW1uCiAgICAgXHNldGxlbmd0aFxvZGRzaWRlbWFyZ2luICB7MzBccEB9CiAgICAgXHNldGxlbmd0aFxldmVuc2lkZW1hcmdpbiB7MzBccEB9CiAgICAgXHNldGxlbmd0aFxtYXJnaW5wYXJ3aWR0aCB7NDhccEB9CiAgXGZpClxlbHNlCiAgXGlmQHR3b3NpZGUKICAgIFxzZXRsZW5ndGhcQHRlbXBkaW1hICAgICAgICB7XHBhcGVyd2lkdGh9CiAgICBcYWRkdG9sZW5ndGhcQHRlbXBkaW1hICAgICAgey1cdGV4dHdpZHRofQogICAgXHNldGxlbmd0aFxvZGRzaWRlbWFyZ2luICAgIHsuNFxAdGVtcGRpbWF9CiAgICBcYWRkdG9sZW5ndGhcb2Rkc2lkZW1hcmdpbiAgey0xaW59CiAgICBcc2V0bGVuZ3RoXG1hcmdpbnBhcndpZHRoICAgey42XEB0ZW1wZGltYX0KICAgIFxhZGR0b2xlbmd0aFxtYXJnaW5wYXJ3aWR0aCB7LVxtYXJnaW5wYXJzZXB9CiAgICBcYWRkdG9sZW5ndGhcbWFyZ2lucGFyd2lkdGggey0wLjRpbn0KICBcZWxzZQogICAgXHNldGxlbmd0aFxAdGVtcGRpbWEgICAgICAgIHtccGFwZXJ3aWR0aH0KICAgIFxhZGR0b2xlbmd0aFxAdGVtcGRpbWEgICAgICB7LVx0ZXh0d2lkdGh9CiAgICBcc2V0bGVuZ3RoXG9kZHNpZGVtYXJnaW4gICAgey41XEB0ZW1wZGltYX0KICAgIFxhZGR0b2xlbmd0aFxvZGRzaWRlbWFyZ2luICB7LTFpbn0KICAgIFxzZXRsZW5ndGhcbWFyZ2lucGFyd2lkdGggICB7LjVcQHRlbXBkaW1hfQogICAgXGFkZHRvbGVuZ3RoXG1hcmdpbnBhcndpZHRoIHstXG1hcmdpbnBhcnNlcH0KICAgIFxhZGR0b2xlbmd0aFxtYXJnaW5wYXJ3aWR0aCB7LTAuNGlufQogICAgXGFkZHRvbGVuZ3RoXG1hcmdpbnBhcndpZHRoIHstLjRpbn0KICBcZmkKICBcaWZkaW0gXG1hcmdpbnBhcndpZHRoID4yaW4KICAgICBcc2V0bGVuZ3RoXG1hcmdpbnBhcndpZHRoezJpbn0KICBcZmkKICBcQHNldHRvcG9pbnRcb2Rkc2lkZW1hcmdpbgogIFxAc2V0dG9wb2ludFxtYXJnaW5wYXJ3aWR0aAogIFxzZXRsZW5ndGhcZXZlbnNpZGVtYXJnaW4gIHtccGFwZXJ3aWR0aH0KICBcYWRkdG9sZW5ndGhcZXZlbnNpZGVtYXJnaW57LTJpbn0KICBcYWRkdG9sZW5ndGhcZXZlbnNpZGVtYXJnaW57LVx0ZXh0d2lkdGh9CiAgXGFkZHRvbGVuZ3RoXGV2ZW5zaWRlbWFyZ2luey1cb2Rkc2lkZW1hcmdpbn0KICBcQHNldHRvcG9pbnRcZXZlbnNpZGVtYXJnaW4KXGZpClxpZkBjb21wYXRpYmlsaXR5CiAgXHNldGxlbmd0aFx0b3BtYXJnaW57MjdwdH0KXGVsc2UKICBcc2V0bGVuZ3RoXHRvcG1hcmdpbntccGFwZXJoZWlnaHR9CiAgXGFkZHRvbGVuZ3RoXHRvcG1hcmdpbnstMmlufQogIFxhZGR0b2xlbmd0aFx0b3BtYXJnaW57LVxoZWFkaGVpZ2h0fQogIFxhZGR0b2xlbmd0aFx0b3BtYXJnaW57LVxoZWFkc2VwfQogIFxhZGR0b2xlbmd0aFx0b3BtYXJnaW57LVx0ZXh0aGVpZ2h0fQogIFxhZGR0b2xlbmd0aFx0b3BtYXJnaW57LVxmb290c2tpcH0gICAgICUgdGhpcyBtaWdodCBiZSB3cm9uZyEKICBcYWRkdG9sZW5ndGhcdG9wbWFyZ2luey0uNVx0b3BtYXJnaW59CiAgXEBzZXR0b3BvaW50XHRvcG1hcmdpbgpcZmkKXHNldGxlbmd0aFxmb290bm90ZXNlcHs2LjY1XHBAfQpcc2V0bGVuZ3Roe1xza2lwXGZvb3RpbnN9ezlccEAgXEBwbHVzIDRccEAgXEBtaW51cyAyXHBAfQpcc2V0bGVuZ3RoXGZsb2F0c2VwICAgIHsxMlxwQCBcQHBsdXMgMlxwQCBcQG1pbnVzIDJccEB9ClxzZXRsZW5ndGhcdGV4dGZsb2F0c2VwezIwXHBAIFxAcGx1cyAyXHBAIFxAbWludXMgNFxwQH0KXHNldGxlbmd0aFxpbnRleHRzZXAgICB7MTJccEAgXEBwbHVzIDJccEAgXEBtaW51cyAyXHBAfQpcc2V0bGVuZ3RoXGRibGZsb2F0c2VwICAgIHsxMlxwQCBcQHBsdXMgMlxwQCBcQG1pbnVzIDJccEB9ClxzZXRsZW5ndGhcZGJsdGV4dGZsb2F0c2VwezIwXHBAIFxAcGx1cyAyXHBAIFxAbWludXMgNFxwQH0KXHNldGxlbmd0aFxAZnB0b3B7MFxwQCBcQHBsdXMgMWZpbH0KXHNldGxlbmd0aFxAZnBzZXB7OFxwQCBcQHBsdXMgMmZpbH0KXHNldGxlbmd0aFxAZnBib3R7MFxwQCBcQHBsdXMgMWZpbH0KXHNldGxlbmd0aFxAZGJsZnB0b3B7MFxwQCBcQHBsdXMgMWZpbH0KXHNldGxlbmd0aFxAZGJsZnBzZXB7OFxwQCBcQHBsdXMgMmZpbH0KXHNldGxlbmd0aFxAZGJsZnBib3R7MFxwQCBcQHBsdXMgMWZpbH0KXHNldGxlbmd0aFxwYXJ0b3BzZXB7MlxwQCBcQHBsdXMgMVxwQCBcQG1pbnVzIDFccEB9ClxkZWZcQGxpc3Rpe1xsZWZ0bWFyZ2luXGxlZnRtYXJnaW5pCiAgICAgICAgICAgIFxwYXJzZXAgNFxwQCBcQHBsdXMyXHBAIFxAbWludXNccEAKICAgICAgICAgICAgXHRvcHNlcCA4XHBAIFxAcGx1czJccEAgXEBtaW51czRccEAKICAgICAgICAgICAgXGl0ZW1zZXA0XHBAIFxAcGx1czJccEAgXEBtaW51c1xwQH0KXGxldFxAbGlzdElcQGxpc3RpClxAbGlzdGkKXGRlZlxAbGlzdGlpIHtcbGVmdG1hcmdpblxsZWZ0bWFyZ2luaWkKICAgICAgICAgICAgICBcbGFiZWx3aWR0aFxsZWZ0bWFyZ2luaWkKICAgICAgICAgICAgICBcYWR2YW5jZVxsYWJlbHdpZHRoLVxsYWJlbHNlcAogICAgICAgICAgICAgIFx0b3BzZXAgICAgNFxwQCBcQHBsdXMyXHBAIFxAbWludXNccEAKICAgICAgICAgICAgICBccGFyc2VwICAgIDJccEAgXEBwbHVzXHBAICBcQG1pbnVzXHBACiAgICAgICAgICAgICAgXGl0ZW1zZXAgICBccGFyc2VwfQpcZGVmXEBsaXN0aWlpe1xsZWZ0bWFyZ2luXGxlZnRtYXJnaW5paWkKICAgICAgICAgICAgICBcbGFiZWx3aWR0aFxsZWZ0bWFyZ2luaWlpCiAgICAgICAgICAgICAgXGFkdmFuY2VcbGFiZWx3aWR0aC1cbGFiZWxzZXAKICAgICAgICAgICAgICBcdG9wc2VwICAgIDJccEAgXEBwbHVzXHBAXEBtaW51c1xwQAogICAgICAgICAgICAgIFxwYXJzZXAgICAgXHpACiAgICAgICAgICAgICAgXHBhcnRvcHNlcCBccEAgXEBwbHVzXHpAIFxAbWludXNccEAKICAgICAgICAgICAgICBcaXRlbXNlcCAgIFx0b3BzZXB9ClxkZWZcQGxpc3RpdiB7XGxlZnRtYXJnaW5cbGVmdG1hcmdpbml2CiAgICAgICAgICAgICAgXGxhYmVsd2lkdGhcbGVmdG1hcmdpbml2CiAgICAgICAgICAgICAgXGFkdmFuY2VcbGFiZWx3aWR0aC1cbGFiZWxzZXB9ClxkZWZcQGxpc3R2ICB7XGxlZnRtYXJnaW5cbGVmdG1hcmdpbnYKICAgICAgICAgICAgICBcbGFiZWx3aWR0aFxsZWZ0bWFyZ2ludgogICAgICAgICAgICAgIFxhZHZhbmNlXGxhYmVsd2lkdGgtXGxhYmVsc2VwfQpcZGVmXEBsaXN0dmkge1xsZWZ0bWFyZ2luXGxlZnRtYXJnaW52aQogICAgICAgICAgICAgIFxsYWJlbHdpZHRoXGxlZnRtYXJnaW52aQogICAgICAgICAgICAgIFxhZHZhbmNlXGxhYmVsd2lkdGgtXGxhYmVsc2VwfQpcZW5kaW5wdXQKJSUKJSUgRW5kIG9mIGZpbGUgYHNpemUxMC5jbG8nLgo=",
  "tex.pool": "MDIuNgoxMWJ1ZmZlciBzaXplCjA5cG9vbCBzaXplCjE3bnVtYmVyIG9mIHN0cmluZ3MKMDM/Pz8KMTNtMmQ1YzJsNXgydjVpCjI4RW5kIG9mIGZpbGUgb24gdGhlIHRlcm1pbmFsIQowMiEgCjQyKFRoYXQgbWFrZXMgMTAwIGVycm9yczsgcGxlYXNlIHRyeSBhZ2Fpbi4pCjAyPyAKMjJZb3Ugd2FudCB0byBlZGl0IGZpbGUgCjA5IGF0IGxpbmUgCjYwVHlwZSA8cmV0dXJuPiB0byBwcm9jZWVkLCBTIHRvIHNjcm9sbCBmdXR1cmUgZXJyb3IgbWVzc2FnZXMsCjQ0UiB0byBydW4gd2l0aG91dCBzdG9wcGluZywgUSB0byBydW4gcXVpZXRseSwKMjNJIHRvIGluc2VydCBzb21ldGhpbmcsIAoyMEUgdG8gZWRpdCB5b3VyIGZpbGUsCjU2MSBvciAuLi4gb3IgOSB0byBpZ25vcmUgdGhlIG5leHQgMSB0byA5IHRva2VucyBvZiBpbnB1dCwKMjJIIGZvciBoZWxwLCBYIHRvIHF1aXQuCjEzT0ssIGVudGVyaW5nIAowOWJhdGNobW9kZQoxMW5vbnN0b3Btb2RlCjEwc2Nyb2xsbW9kZQowMy4uLgowN2luc2VydD4KNDRJIGhhdmUganVzdCBkZWxldGVkIHNvbWUgdGV4dCwgYXMgeW91IGFza2VkLgo0OFlvdSBjYW4gbm93IGRlbGV0ZSBtb3JlLCBvciBpbnNlcnQsIG9yIHdoYXRldmVyLgo1MFNvcnJ5LCBJIGRvbid0IGtub3cgaG93IHRvIGhlbHAgaW4gdGhpcyBzaXR1YXRpb24uCjM2TWF5YmUgeW91IHNob3VsZCB0cnkgYXNraW5nIGEgaHVtYW4/CjQyU29ycnksIEkgYWxyZWFkeSBnYXZlIHdoYXQgaGVscCBJIGNvdWxkLi4uCjU5QW4gZXJyb3IgbWlnaHQgaGF2ZSBvY2N1cnJlZCBiZWZvcmUgSSBub3RpY2VkIGFueSBwcm9ibGVtcy4KNDVgYElmIGFsbCBlbHNlIGZhaWxzLCByZWFkIHRoZSBpbnN0cnVjdGlvbnMuJycKMDIgKAoxNEVtZXJnZW5jeSBzdG9wCjMwVGVYIGNhcGFjaXR5IGV4Y2VlZGVkLCBzb3JyeSBbCjQ0SWYgeW91IHJlYWxseSBhYnNvbHV0ZWx5IG5lZWQgbW9yZSBjYXBhY2l0eSwKMzV5b3UgY2FuIGFzayBhIHdpemFyZCB0byBlbmxhcmdlIG1lLgoxOVRoaXMgY2FuJ3QgaGFwcGVuICgKNTlJJ20gYnJva2VuLiBQbGVhc2Ugc2hvdyB0aGlzIHRvIHNvbWVvbmUgd2hvIGNhbiBmaXggY2FuIGZpeAozNUkgY2FuJ3QgZ28gb24gbWVldGluZyB5b3UgbGlrZSB0aGlzCjU1T25lIG9mIHlvdXIgZmF1eCBwYXMgc2VlbXMgdG8gaGF2ZSB3b3VuZGVkIG1lIGRlZXBseS4uLgo1OWluIGZhY3QsIEknbSBiYXJlbHkgY29uc2Npb3VzLiBQbGVhc2UgZml4IGl0IGFuZCB0cnkgYWdhaW4uCjEySW50ZXJydXB0aW9uCjA5WW91IHJhbmc/CjYwVHJ5IHRvIGluc2VydCBzb21lIGluc3RydWN0aW9ucyBmb3IgbWUgKGUuZy4sYElcc2hvd2xpc3RzJyksCjQzdW5sZXNzIHlvdSBqdXN0IHdhbnQgdG8gcXVpdCBieSB0eXBpbmcgYFgnLgoxNm1haW4gbWVtb3J5IHNpemUKMjRBVkFJTCBsaXN0IGNsb2JiZXJlZCBhdCAKMzFEb3VibGUtQVZBSUwgbGlzdCBjbG9iYmVyZWQgYXQgCjI0RG91Ymx5IGZyZWUgbG9jYXRpb24gYXQgCjEyQmFkIGZsYWcgYXQgCjE0TmV3IGJ1c3kgbG9jczoKMDVMSU5LKAowNUlORk8oCjAyW10KMTBDTE9CQkVSRUQuCjA0Zm91bAowM2ZpbAowNiBwbHVzIAowNyBtaW51cyAKMDMgW10KMjZCYWQgbGluaywgZGlzcGxheSBhYm9ydGVkLgowNGV0Yy4KMThVbmtub3duIG5vZGUgdHlwZSEKMDV1bnNldAowNGJveCgKMDIpeAoxMCwgc2hpZnRlZCAKMDkgY29sdW1ucykKMTAsIHN0cmV0Y2ggCjA5LCBzaHJpbmsgCjExLCBnbHVlIHNldCAKMDItIAowMz8uPwowMzwgLQowNXJ1bGUoCjA2aW5zZXJ0CjE1LCBuYXR1cmFsIHNpemUgCjA4OyBzcGxpdCgKMTQpOyBmbG9hdCBjb3N0IAowNGdsdWUKMDlub25zY3JpcHQKMDVtc2tpcAowMm11CjAwCjA4bGVhZGVycyAKMDRrZXJuCjEzIChmb3IgYWNjZW50KQowNW1rZXJuCjAzZW5kCjA1YmVnaW4KMDRtYXRoCjAyb24KMDNvZmYKMTMsIHN1cnJvdW5kZWQgCjExIChsaWdhdHVyZSAKMDhwZW5hbHR5IAoxM2Rpc2NyZXRpb25hcnkKMTEgcmVwbGFjaW5nIAowNG1hcmsKMDd2YWRqdXN0CjA4Zmx1c2hpbmcKMDdjb3B5aW5nCjA4dmVydGljYWwKMTBob3Jpem9udGFsCjEyZGlzcGxheSBtYXRoCjAybm8KMTdpbnRlcm5hbCB2ZXJ0aWNhbAoyMXJlc3RyaWN0ZWQgaG9yaXpvbnRhbAowNSBtb2RlCjE4c2VtYW50aWMgbmVzdCBzaXplCjA0IyMjIAoxNyBlbnRlcmVkIGF0IGxpbmUgCjEwIChsYW5ndWFnZQoxMDpoeXBoZW5taW4KMTggKFxvdXRwdXQgcm91dGluZSkKMjUjIyMgcmVjZW50IGNvbnRyaWJ1dGlvbnM6CjEwcHJldmRlcHRoIAowN2lnbm9yZWQKMTEsIHByZXZncmFmIAowNSBsaW5lCjEyc3BhY2VmYWN0b3IgCjE5LCBjdXJyZW50IGxhbmd1YWdlIAoyOHRoaXMgd2lsbCBiZSBkZW5vbWluYXRvciBvZjoKMDhsaW5lc2tpcAoxMmJhc2VsaW5lc2tpcAowN3BhcnNraXAKMTZhYm92ZWRpc3BsYXlza2lwCjE2YmVsb3dkaXNwbGF5c2tpcAoyMWFib3ZlZGlzcGxheXNob3J0c2tpcAoyMWJlbG93ZGlzcGxheXNob3J0c2tpcAowOGxlZnRza2lwCjA5cmlnaHRza2lwCjA3dG9wc2tpcAoxMnNwbGl0dG9wc2tpcAowN3RhYnNraXAKMDlzcGFjZXNraXAKMTB4c3BhY2Vza2lwCjExcGFyZmlsbHNraXAKMTB0aGlubXVza2lwCjA5bWVkbXVza2lwCjExdGhpY2ttdXNraXAKMjVbdW5rbm93biBnbHVlIHBhcmFtZXRlciFdCjA0c2tpcAowNm11c2tpcAowMnB0CjA2b3V0cHV0CjA4ZXZlcnlwYXIKMDlldmVyeW1hdGgKMTJldmVyeWRpc3BsYXkKMDlldmVyeWhib3gKMDlldmVyeXZib3gKMDhldmVyeWpvYgowN2V2ZXJ5Y3IKMDdlcnJoZWxwCjA0dG9rcwowNEVUQy4KMDNib3gKMDR2b2lkCjEyY3VycmVudCBmb250CjA4dGV4dGZvbnQKMTBzY3JpcHRmb250CjE2c2NyaXB0c2NyaXB0Zm9udAowN2NhdGNvZGUKMDZsY2NvZGUKMDZ1Y2NvZGUKMDZzZmNvZGUKMDhtYXRoY29kZQoxMnByZXRvbGVyYW5jZQowOXRvbGVyYW5jZQoxMWxpbmVwZW5hbHR5CjEzaHlwaGVucGVuYWx0eQoxNWV4aHlwaGVucGVuYWx0eQoxMWNsdWJwZW5hbHR5CjEyd2lkb3dwZW5hbHR5CjE5ZGlzcGxheXdpZG93cGVuYWx0eQoxM2Jyb2tlbnBlbmFsdHkKMTJiaW5vcHBlbmFsdHkKMTByZWxwZW5hbHR5CjE3cHJlZGlzcGxheXBlbmFsdHkKMThwb3N0ZGlzcGxheXBlbmFsdHkKMTZpbnRlcmxpbmVwZW5hbHR5CjIwZG91YmxlaHlwaGVuZGVtZXJpdHMKMTlmaW5hbGh5cGhlbmRlbWVyaXRzCjExYWRqZGVtZXJpdHMKMDNtYWcKMTVkZWxpbWl0ZXJmYWN0b3IKMDlsb29zZW5lc3MKMDR0aW1lCjAzZGF5CjA1bW9udGgKMDR5ZWFyCjE0c2hvd2JveGJyZWFkdGgKMTJzaG93Ym94ZGVwdGgKMDhoYmFkbmVzcwowOHZiYWRuZXNzCjA3cGF1c2luZwoxM3RyYWNpbmdvbmxpbmUKMTN0cmFjaW5nbWFjcm9zCjEydHJhY2luZ3N0YXRzCjE3dHJhY2luZ3BhcmFncmFwaHMKMTJ0cmFjaW5ncGFnZXMKMTN0cmFjaW5nb3V0cHV0CjE2dHJhY2luZ2xvc3RjaGFycwoxNXRyYWNpbmdjb21tYW5kcwoxNXRyYWNpbmdyZXN0b3JlcwowNnVjaHlwaAoxM291dHB1dHBlbmFsdHkKMTNtYXhkZWFkY3ljbGVzCjA5aGFuZ2FmdGVyCjE1ZmxvYXRpbmdwZW5hbHR5CjEwZ2xvYmFsZGVmcwowM2ZhbQoxMGVzY2FwZWNoYXIKMTdkZWZhdWx0aHlwaGVuY2hhcgoxNWRlZmF1bHRza2V3Y2hhcgoxMWVuZGxpbmVjaGFyCjExbmV3bGluZWNoYXIKMDhsYW5ndWFnZQoxM2xlZnRoeXBoZW5taW4KMTRyaWdodGh5cGhlbm1pbgoxNGhvbGRpbmdpbnNlcnRzCjE3ZXJyb3Jjb250ZXh0bGluZXMKMjhbdW5rbm93biBpbnRlZ2VyIHBhcmFtZXRlciFdCjA1Y291bnQKMDdkZWxjb2RlCjA5cGFyaW5kZW50CjEybWF0aHN1cnJvdW5kCjEzbGluZXNraXBsaW1pdAowNWhzaXplCjA1dnNpemUKMDhtYXhkZXB0aAoxM3NwbGl0bWF4ZGVwdGgKMTFib3htYXhkZXB0aAowNWhmdXp6CjA1dmZ1enoKMThkZWxpbWl0ZXJzaG9ydGZhbGwKMThudWxsZGVsaW1pdGVyc3BhY2UKMTFzY3JpcHRzcGFjZQoxNHByZWRpc3BsYXlzaXplCjEyZGlzcGxheXdpZHRoCjEzZGlzcGxheWluZGVudAoxMm92ZXJmdWxscnVsZQoxMGhhbmdpbmRlbnQKMDdob2Zmc2V0CjA3dm9mZnNldAoxNmVtZXJnZW5jeXN0cmV0Y2gKMjZbdW5rbm93biBkaW1lbiBwYXJhbWV0ZXIhXQowNWRpbWVuCjA2RVFVSVYoCjEybm90ZXhwYW5kZWQ6CjA5aGFzaCBzaXplCjA2Y3NuYW1lCjA5ZW5kY3NuYW1lCjExSU1QT1NTSUJMRS4KMTJOT05FWElTVEVOVC4KMDZhY2NlbnQKMDdhZHZhbmNlCjE1YWZ0ZXJhc3NpZ25tZW50CjEwYWZ0ZXJncm91cAoxMGJlZ2luZ3JvdXAKMDRjaGFyCjA5ZGVsaW1pdGVyCjA2ZGl2aWRlCjA4ZW5kZ3JvdXAKMTFleHBhbmRhZnRlcgowNGZvbnQKMDlmb250ZGltZW4KMDZoYWxpZ24KMDVocnVsZQoxMmlnbm9yZXNwYWNlcwoxMG1hdGhhY2NlbnQKMDhtYXRoY2hhcgoxMG1hdGhjaG9pY2UKMDhtdWx0aXBseQowN25vYWxpZ24KMTBub2JvdW5kYXJ5CjA4bm9leHBhbmQKMDRvbWl0CjA4cGFyc2hhcGUKMDdwZW5hbHR5CjA4cHJldmdyYWYKMDdyYWRpY2FsCjA0cmVhZAowNXJlbGF4CjA2c2V0Ym94CjAzdGhlCjA2dmFsaWduCjA3dmNlbnRlcgowNXZydWxlCjA5c2F2ZSBzaXplCjE1Z3JvdXBpbmcgbGV2ZWxzCjExcmVhc3NpZ25pbmcKMDhjaGFuZ2luZwowNGludG8KMTdnbG9iYWxseSBjaGFuZ2luZwowOGN1cmxldmVsCjA5cmV0YWluaW5nCjA5cmVzdG9yaW5nCjA1U0FWRSgKMjhJbmNvbXBhdGlibGUgbWFnbmlmaWNhdGlvbiAoCjAyKTsKMzYgdGhlIHByZXZpb3VzIHZhbHVlIHdpbGwgYmUgcmV0YWluZWQKNThJIGNhbiBoYW5kbGUgb25seSBvbmUgbWFnbmlmaWNhdGlvbiByYXRpbyBwZXIgam9iLiBTbyBJJ3ZlCjU5cmV2ZXJ0ZWQgdG8gdGhlIG1hZ25pZmljYXRpb24geW91IHVzZWQgZWFybGllciBvbiB0aGlzIHJ1bi4KNDZJbGxlZ2FsIG1hZ25pZmljYXRpb24gaGFzIGJlZW4gY2hhbmdlZCB0byAxMDAwCjUyVGhlIG1hZ25pZmljYXRpb24gcmF0aW8gbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDMyNzY4LgowNEJBRC4KMDItPgoyMmJlZ2luLWdyb3VwIGNoYXJhY3RlciAKMjBlbmQtZ3JvdXAgY2hhcmFjdGVyIAoyMW1hdGggc2hpZnQgY2hhcmFjdGVyIAoyNm1hY3JvIHBhcmFtZXRlciBjaGFyYWN0ZXIgCjIyc3VwZXJzY3JpcHQgY2hhcmFjdGVyIAoyMHN1YnNjcmlwdCBjaGFyYWN0ZXIgCjI1ZW5kIG9mIGFsaWdubWVudCB0ZW1wbGF0ZQoxMmJsYW5rIHNwYWNlIAoxMXRoZSBsZXR0ZXIgCjE0dGhlIGNoYXJhY3RlciAKMjNbdW5rbm93biBjb21tYW5kIGNvZGUhXQowMjogCjA3KGxldmVsIAowOFJ1bmF3YXkgCjEwZGVmaW5pdGlvbgowOGFyZ3VtZW50CjA4cHJlYW1ibGUKMDR0ZXh0CjAzPCo+CjA5PGluc2VydD4gCjA2PHJlYWQgCjAybC4KMTE8YXJndW1lbnQ+IAoxMTx0ZW1wbGF0ZT4gCjE2PHJlY2VudGx5IHJlYWQ+IAoxOTx0byBiZSByZWFkIGFnYWluPiAKMTY8aW5zZXJ0ZWQgdGV4dD4gCjA5PG91dHB1dD4gCjExPGV2ZXJ5cGFyPiAKMTI8ZXZlcnltYXRoPiAKMTU8ZXZlcnlkaXNwbGF5PiAKMTI8ZXZlcnloYm94PiAKMTI8ZXZlcnl2Ym94PiAKMTE8ZXZlcnlqb2I+IAoxMDxldmVyeWNyPiAKMDc8bWFyaz4gCjExPGV2ZXJ5ZW9mPiAKMDg8d3JpdGU+IAoxNmlucHV0IHN0YWNrIHNpemUKMDV3cml0ZQo0OChpbnRlcndvdmVuIGFsaWdubWVudCBwcmVhbWJsZXMgYXJlIG5vdCBhbGxvd2VkKQoxN3RleHQgaW5wdXQgbGV2ZWxzCjAzcGFyCjExSW5jb21wbGV0ZSAKMzQ7IGFsbCB0ZXh0IHdhcyBpZ25vcmVkIGFmdGVyIGxpbmUgCjU0QSBmb3JiaWRkZW4gY29udHJvbCBzZXF1ZW5jZSBvY2N1cnJlZCBpbiBza2lwcGVkIHRleHQuCjU5VGhpcyBraW5kIG9mIGVycm9yIGhhcHBlbnMgd2hlbiB5b3Ugc2F5IGBcaWYuLi4nIGFuZCBmb3JnZXQKNTl0aGUgbWF0Y2hpbmcgYFxmaScuIEkndmUgaW5zZXJ0ZWQgYSBgXGZpJzsgdGhpcyBtaWdodCB3b3JrLgo1M1RoZSBmaWxlIGVuZGVkIHdoaWxlIEkgd2FzIHNraXBwaW5nIGNvbmRpdGlvbmFsIHRleHQuCjEwRmlsZSBlbmRlZAozMkZvcmJpZGRlbiBjb250cm9sIHNlcXVlbmNlIGZvdW5kCjE2IHdoaWxlIHNjYW5uaW5nIAowNCBvZiAKNDZJIHN1c3BlY3QgeW91IGhhdmUgZm9yZ290dGVuIGEgYH0nLCBjYXVzaW5nIG1lCjQxdG8gcmVhZCBwYXN0IHdoZXJlIHlvdSB3YW50ZWQgbWUgdG8gc3RvcC4KNDlJJ2xsIHRyeSB0byByZWNvdmVyOyBidXQgaWYgdGhlIGVycm9yIGlzIHNlcmlvdXMsCjUxeW91J2QgYmV0dGVyIHR5cGUgYEUnIG9yIGBYJyBub3cgYW5kIGZpeCB5b3VyIGZpbGUuCjAzdXNlCjM5VGV4dCBsaW5lIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyCjUzQSBmdW5ueSBzeW1ib2wgdGhhdCBJIGNhbid0IHJlYWQgaGFzIGp1c3QgYmVlbiBpbnB1dC4KNDhDb250aW51ZSwgYW5kIEknbGwgZm9yZ2V0IHRoYXQgaXQgZXZlciBoYXBwZW5lZC4KMzcoUGxlYXNlIHR5cGUgYSBjb21tYW5kIG9yIHNheSBgXGVuZCcpCjM4KioqIChqb2IgYWJvcnRlZCwgbm8gbGVnYWwgXGVuZCBmb3VuZCkKMDI9PgoyNlVuZGVmaW5lZCBjb250cm9sIHNlcXVlbmNlCjQ3VGhlIGNvbnRyb2wgc2VxdWVuY2UgYXQgdGhlIGVuZCBvZiB0aGUgdG9wIGxpbmUKNTJvZiB5b3VyIGVycm9yIG1lc3NhZ2Ugd2FzIG5ldmVyIFxkZWYnZWQuIElmIHlvdSBoYXZlCjU1bWlzc3BlbGxlZCBpdCAoZS5nLiwgYFxob2J4JyksIHR5cGUgYEknIGFuZCB0aGUgY29ycmVjdAo1MXNwZWxsaW5nIChlLmcuLCBgSVxoYm94JykuIE90aGVyd2lzZSBqdXN0IGNvbnRpbnVlLAo0NWFuZCBJJ2xsIGZvcmdldCBhYm91dCB3aGF0ZXZlciB3YXMgdW5kZWZpbmVkLgowOE1pc3NpbmcgCjA5IGluc2VydGVkCjUzVGhlIGNvbnRyb2wgc2VxdWVuY2UgbWFya2VkIDx0byBiZSByZWFkIGFnYWluPiBzaG91bGQKNDJub3QgYXBwZWFyIGJldHdlZW4gXGNzbmFtZSBhbmQgXGVuZGNzbmFtZS4KMDVpbnB1dAowOGVuZGlucHV0CjA3dG9wbWFyawowOWZpcnN0bWFyawowN2JvdG1hcmsKMTRzcGxpdGZpcnN0bWFyawoxMnNwbGl0Ym90bWFyawoyMHBhcmFtZXRlciBzdGFjayBzaXplCjEyQXJndW1lbnQgb2YgCjE1IGhhcyBhbiBleHRyYSB9CjU4SSd2ZSBydW4gYWNyb3NzIGEgYH0nIHRoYXQgZG9lc24ndCBzZWVtIHRvIG1hdGNoIGFueXRoaW5nLgo1MkZvciBleGFtcGxlLCBgXGRlZlxhIzF7Li4ufScgYW5kIGBcYX0nIHdvdWxkIHByb2R1Y2UKNTR0aGlzIGVycm9yLiBJZiB5b3Ugc2ltcGx5IHByb2NlZWQgbm93LCB0aGUgYFxwYXInIHRoYXQKNTJJJ3ZlIGp1c3QgaW5zZXJ0ZWQgd2lsbCBjYXVzZSBtZSB0byByZXBvcnQgYSBydW5hd2F5CjU0YXJndW1lbnQgdGhhdCBtaWdodCBiZSB0aGUgcm9vdCBvZiB0aGUgcHJvYmxlbS4gQnV0IGlmCjU3eW91ciBgfScgd2FzIHNwdXJpb3VzLCBqdXN0IHR5cGUgYDInIGFuZCBpdCB3aWxsIGdvIGF3YXkuCjIzUGFyYWdyYXBoIGVuZGVkIGJlZm9yZSAKMTMgd2FzIGNvbXBsZXRlCjU4SSBzdXNwZWN0IHlvdSd2ZSBmb3Jnb3R0ZW4gYSBgfScsIGNhdXNpbmcgbWUgdG8gYXBwbHkgdGhpcwo1NGNvbnRyb2wgc2VxdWVuY2UgdG8gdG9vIG11Y2ggdGV4dC4gSG93IGNhbiB3ZSByZWNvdmVyPwo1OU15IHBsYW4gaXMgdG8gZm9yZ2V0IHRoZSB3aG9sZSB0aGluZyBhbmQgaG9wZSBmb3IgdGhlIGJlc3QuCjA3VXNlIG9mIAoyOSBkb2Vzbid0IG1hdGNoIGl0cyBkZWZpbml0aW9uCjU0SWYgeW91IHNheSwgZS5nLiwgYFxkZWZcYTF7Li4ufScsIHRoZW4geW91IG11c3QgYWx3YXlzCjUycHV0IGAxJyBhZnRlciBgXGEnLCBzaW5jZSBjb250cm9sIHNlcXVlbmNlIG5hbWVzIGFyZQo1Mm1hZGUgdXAgb2YgbGV0dGVycyBvbmx5LiBUaGUgbWFjcm8gaGVyZSBoYXMgbm90IGJlZW4KNTFmb2xsb3dlZCBieSB0aGUgcmVxdWlyZWQgc3R1ZmYsIHNvIEknbSBpZ25vcmluZyBpdC4KMDI8LQoxOE1pc3NpbmcgeyBpbnNlcnRlZAo1MkEgbGVmdCBicmFjZSB3YXMgbWFuZGF0b3J5IGhlcmUsIHNvIEkndmUgcHV0IG9uZSBpbi4KNTVZb3UgbWlnaHQgd2FudCB0byBkZWxldGUgYW5kL29yIGluc2VydCBzb21lIGNvcnJlY3Rpb25zCjQ4c28gdGhhdCBJIHdpbGwgZmluZCBhIG1hdGNoaW5nIHJpZ2h0IGJyYWNlIHNvb24uCjU0KElmIHlvdSdyZSBjb25mdXNlZCBieSBhbGwgdGhpcywgdHJ5IHR5cGluZyBgSX0nIG5vdy4pCjIzSW5jb21wYXRpYmxlIGdsdWUgdW5pdHMKNTJJJ20gZ29pbmcgdG8gYXNzdW1lIHRoYXQgMW11PTFwdCB3aGVuIHRoZXkncmUgbWl4ZWQuCjMxTWlzc2luZyBudW1iZXIsIHRyZWF0ZWQgYXMgemVybwo0N0EgbnVtYmVyIHNob3VsZCBoYXZlIGJlZW4gaGVyZTsgSSBpbnNlcnRlZCBgMCcuCjU0KElmIHlvdSBjYW4ndCBmaWd1cmUgb3V0IHdoeSBJIG5lZWRlZCB0byBzZWUgYSBudW1iZXIsCjUxbG9vayB1cCBgd2VpcmQgZXJyb3InIGluIHRoZSBpbmRleCB0byBUaGUgVGVYYm9vay4pCjExc3BhY2VmYWN0b3IKMDlwcmV2ZGVwdGgKMTBkZWFkY3ljbGVzCjE1aW5zZXJ0cGVuYWx0aWVzCjAyd2QKMDJodAowMmRwCjExbGFzdHBlbmFsdHkKMDhsYXN0a2VybgowOGxhc3Rza2lwCjExaW5wdXRsaW5lbm8KMDdiYWRuZXNzCjA5SW1wcm9wZXIgCjU0WW91IGNhbiByZWZlciB0byBcc3BhY2VmYWN0b3Igb25seSBpbiBob3Jpem9udGFsIG1vZGU7CjU0eW91IGNhbiByZWZlciB0byBccHJldmRlcHRoIG9ubHkgaW4gdmVydGljYWwgbW9kZTsgYW5kCjQ4bmVpdGhlciBvZiB0aGVzZSBpcyBtZWFuaW5nZnVsIGluc2lkZSBcd3JpdGUuIFNvCjUySSdtIGZvcmdldHRpbmcgd2hhdCB5b3Ugc2FpZCBhbmQgdXNpbmcgemVybyBpbnN0ZWFkLgoxNVlvdSBjYW4ndCB1c2UgYAowOCcgYWZ0ZXIgCjE3QmFkIHJlZ2lzdGVyIGNvZGUKNDRBIHJlZ2lzdGVyIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LgoyN0kgY2hhbmdlZCB0aGlzIG9uZSB0byB6ZXJvLgoxOEJhZCBjaGFyYWN0ZXIgY29kZQo0NUEgY2hhcmFjdGVyIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjU1LgoxMEJhZCBudW1iZXIKNTFTaW5jZSBJIGV4cGVjdGVkIHRvIHJlYWQgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxNSwKMTJCYWQgbWF0aGNoYXIKNDZBIG1hdGhjaGFyIG51bWJlciBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMzI3NjcuCjE4QmFkIGRlbGltaXRlciBjb2RlCjU2QSBudW1lcmljIGRlbGltaXRlciBjb2RlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyXnsyN30tMS4KMjhJbXByb3BlciBhbHBoYWJldGljIGNvbnN0YW50CjU2QSBvbmUtY2hhcmFjdGVyIGNvbnRyb2wgc2VxdWVuY2UgYmVsb25ncyBhZnRlciBhIGAgbWFyay4KMzdTbyBJJ20gZXNzZW50aWFsbHkgaW5zZXJ0aW5nIFwwIGhlcmUuCjE0TnVtYmVyIHRvbyBiaWcKNTRJIGNhbiBvbmx5IGdvIHVwIHRvIDIxNDc0ODM2NDc9JzE3Nzc3Nzc3Nzc3PSI3RkZGRkZGRiwKNDJzbyBJJ20gdXNpbmcgdGhhdCBudW1iZXIgaW5zdGVhZCBvZiB5b3Vycy4KMDR0cnVlCjI1SWxsZWdhbCB1bml0IG9mIG1lYXN1cmUgKAoxOHJlcGxhY2VkIGJ5IGZpbGxsKQozNUkgZGRkb24ndCBnbyBhbnkgaGlnaGVyIHRoYW4gZmlsbGwuCjAyZW0KMDJleAoxMm11IGluc2VydGVkKQo0OFRoZSB1bml0IG9mIG1lYXN1cmVtZW50IGluIG1hdGggZ2x1ZSBtdXN0IGJlIG11Lgo1MVRvIHJlY292ZXIgZ3JhY2VmdWxseSBmcm9tIHRoaXMgZXJyb3IsIGl0J3MgYmVzdCB0bwo1MmRlbGV0ZSB0aGUgZXJyb25lb3VzIHVuaXRzOyBlLmcuLCB0eXBlIGAyJyB0byBkZWxldGUKNDV0d28gbGV0dGVycy4gKFNlZSBDaGFwdGVyIDI3IG9mIFRoZSBUZVhib29rLikKMDJpbgowMnBjCjAyY20KMDJtbQowMmJwCjAyZGQKMDJjYwowMnNwCjEycHQgaW5zZXJ0ZWQpCjQ5RGltZW5zaW9ucyBjYW4gYmUgaW4gdW5pdHMgb2YgZW0sIGV4LCBpbiwgcHQsIHBjLAo1MGNtLCBtbSwgZGQsIGNjLCBicCwgb3Igc3A7IGJ1dCB5b3VycyBpcyBhIG5ldyBvbmUhCjU5SSdsbCBhc3N1bWUgdGhhdCB5b3UgbWVhbnQgdG8gc2F5IHB0LCBmb3IgcHJpbnRlcidzIHBvaW50cy4KMTlEaW1lbnNpb24gdG9vIGxhcmdlCjUwSSBjYW4ndCB3b3JrIHdpdGggc2l6ZXMgYmlnZ2VyIHRoYW4gYWJvdXQgMTkgZmVldC4KNDZDb250aW51ZSBhbmQgSSdsbCB1c2UgdGhlIGxhcmdlc3QgdmFsdWUgSSBjYW4uCjA0cGx1cwowNW1pbnVzCjA1d2lkdGgKMDZoZWlnaHQKMDVkZXB0aAowNm51bWJlcgoxMnJvbWFubnVtZXJhbAowNnN0cmluZwowN21lYW5pbmcKMDhmb250bmFtZQowN2pvYm5hbWUKMTJlVGVYcmV2aXNpb24KMDQgYXQgCjYwV2hlcmUgd2FzIHRoZSBsZWZ0IGJyYWNlPyBZb3Ugc2FpZCBzb21ldGhpbmcgbGlrZSBgXGRlZlxhfScsCjQzd2hpY2ggSSdtIGdvaW5nIHRvIGludGVycHJldCBhcyBgXGRlZlxhe30nLgozMllvdSBhbHJlYWR5IGhhdmUgbmluZSBwYXJhbWV0ZXJzCjQ1SSdtIGdvaW5nIHRvIGlnbm9yZSB0aGUgIyBzaWduIHlvdSBqdXN0IHVzZWQuCjQxUGFyYW1ldGVycyBtdXN0IGJlIG51bWJlcmVkIGNvbnNlY3V0aXZlbHkKNTdJJ3ZlIGluc2VydGVkIHRoZSBkaWdpdCB5b3Ugc2hvdWxkIGhhdmUgdXNlZCBhZnRlciB0aGUgIy4KMzZUeXBlIGAxJyB0byBkZWxldGUgd2hhdCB5b3UgZGlkIHVzZS4KNDJJbGxlZ2FsIHBhcmFtZXRlciBudW1iZXIgaW4gZGVmaW5pdGlvbiBvZiAKNDFZb3UgbWVhbnQgdG8gdHlwZSAjIyBpbnN0ZWFkIG9mICMsIHJpZ2h0Pwo1Nk9yIG1heWJlIGEgfSB3YXMgZm9yZ290dGVuIHNvbWV3aGVyZSBlYXJsaWVyLCBhbmQgdGhpbmdzCjU4YXJlIGFsbCBzY3Jld2VkIHVwPyBJJ20gZ29pbmcgdG8gYXNzdW1lIHRoYXQgeW91IG1lYW50ICMjLgo0OSoqKiAoY2Fubm90IFxyZWFkIGZyb20gdGVybWluYWwgaW4gbm9uc3RvcCBtb2RlcykKMThGaWxlIGVuZGVkIHdpdGhpbiAKMzNUaGlzIFxyZWFkIGhhcyB1bmJhbGFuY2VkIGJyYWNlcy4KMDJpZgowNWlmY2F0CjA1aWZudW0KMDVpZmRpbQowNWlmb2RkCjA3aWZ2bW9kZQowN2lmaG1vZGUKMDdpZm1tb2RlCjA3aWZpbm5lcgowNmlmdm9pZAowNmlmaGJveAowNmlmdmJveAowM2lmeAowNWlmZW9mCjA2aWZ0cnVlCjA3aWZmYWxzZQowNmlmY2FzZQowNnVubGVzcwowMmZpCjAyb3IKMDRlbHNlCjA2RXh0cmEgCjQ0SSdtIGlnbm9yaW5nIHRoaXM7IGl0IGRvZXNuJ3QgbWF0Y2ggYW55IFxpZi4KMDZ7dHJ1ZX0KMDd7ZmFsc2V9CjIzTWlzc2luZyA9IGluc2VydGVkIGZvciAKNDhJIHdhcyBleHBlY3RpbmcgdG8gc2VlIGA8JywgYD0nLCBvciBgPicuIERpZG4ndC4KMDZ7Y2FzZSAKMTBUZVhpbnB1dHM6CjA5VGVYZm9udHM6CjA0LmZtdAoxNWlucHV0IGZpbGUgbmFtZQoxOUkgY2FuJ3QgZmluZCBmaWxlIGAKMjNJIGNhbid0IHdyaXRlIG9uIGZpbGUgYAowMicuCjA0LnRleAoyMFBsZWFzZSB0eXBlIGFub3RoZXIgCjQ1KioqIChqb2IgYWJvcnRlZCwgZmlsZSBlcnJvciBpbiBub25zdG9wIG1vZGUpCjA0LmR2aQoyMGZpbGUgbmFtZSBmb3Igb3V0cHV0CjA2dGV4cHV0CjA0LmxvZwowMioqCjIwdHJhbnNjcmlwdCBmaWxlIG5hbWUKMDIgIAowOG51bGxmb250CjA1Rm9udCAKMDggc2NhbGVkIAozNiBub3QgbG9hZGFibGU6IEJhZCBtZXRyaWMgKFRGTSkgZmlsZQo0MiBub3QgbG9hZGFibGU6IE1ldHJpYyAoVEZNKSBmaWxlIG5vdCBmb3VuZAo1MEkgd2Fzbid0IGFibGUgdG8gcmVhZCB0aGUgc2l6ZSBkYXRhIGZvciB0aGlzIGZvbnQsCjQwc28gSSB3aWxsIGlnbm9yZSB0aGUgZm9udCBzcGVjaWZpY2F0aW9uLgo0OFtXaXphcmRzIGNhbiBmaXggVEZNIGZpbGVzIHVzaW5nIFRGdG9QTC9QTHRvVEYuXQo0NllvdSBtaWdodCB0cnkgaW5zZXJ0aW5nIGEgZGlmZmVyZW50IGZvbnQgc3BlYzsKNTdlLmcuLCB0eXBlIGBJXGZvbnQ8c2FtZSBmb250IGlkPj08c3Vic3RpdHV0ZSBmb250IG5hbWU+Jy4KMDQudGZtCjMzIG5vdCBsb2FkZWQ6IE5vdCBlbm91Z2ggcm9vbSBsZWZ0CjUySSdtIGFmcmFpZCBJIHdvbid0IGJlIGFibGUgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmb250LAo1NWJlY2F1c2UgbXkgbWVtb3J5IGZvciBjaGFyYWN0ZXItc2l6ZSBkYXRhIGlzIHRvbyBzbWFsbC4KNTFJZiB5b3UncmUgcmVhbGx5IHN0dWNrLCBhc2sgYSB3aXphcmQgdG8gZW5sYXJnZSBtZS4KNThPciBtYXliZSB0cnkgYElcZm9udDxzYW1lIGZvbnQgaWQ+PTxuYW1lIG9mIGxvYWRlZCBmb250PicuCjIzTWlzc2luZyBmb250IGlkZW50aWZpZXIKNDJJIHdhcyBsb29raW5nIGZvciBhIGNvbnRyb2wgc2VxdWVuY2Ugd2hvc2UKNDJjdXJyZW50IG1lYW5pbmcgaGFzIGJlZW4gZGVmaW5lZCBieSBcZm9udC4KMTAgaGFzIG9ubHkgCjIxIGZvbnRkaW1lbiBwYXJhbWV0ZXJzCjUxVG8gaW5jcmVhc2UgdGhlIG51bWJlciBvZiBmb250IHBhcmFtZXRlcnMsIHlvdSBtdXN0CjUzdXNlIFxmb250ZGltZW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIFxmb250IGlzIGxvYWRlZC4KMTFmb250IG1lbW9yeQozMU1pc3NpbmcgY2hhcmFjdGVyOiBUaGVyZSBpcyBubyAKMDkgaW4gZm9udCAKMTIgVGVYIG91dHB1dCAKMDh2bGlzdG91dAozMUNvbXBsZXRlZCBib3ggYmVpbmcgc2hpcHBlZCBvdXQKMjFNZW1vcnkgdXNhZ2UgYmVmb3JlOiAKMDggYWZ0ZXI6IAoxOTsgc3RpbGwgdW50b3VjaGVkOiAKMzFIdWdlIHBhZ2UgY2Fubm90IGJlIHNoaXBwZWQgb3V0CjUwVGhlIHBhZ2UganVzdCBjcmVhdGVkIGlzIG1vcmUgdGhhbiAxOCBmZWV0IHRhbGwgb3IKNThtb3JlIHRoYW4gMTggZmVldCB3aWRlLCBzbyBJIHN1c3BlY3Qgc29tZXRoaW5nIHdlbnQgd3JvbmcuCjM1VGhlIGZvbGxvd2luZyBib3ggaGFzIGJlZW4gZGVsZXRlZDoKMTlObyBwYWdlcyBvZiBvdXRwdXQuCjE4T3V0cHV0IHdyaXR0ZW4gb24gCjA1IHBhZ2UKMDIsIAowOCBieXRlcykuCjAydG8KMDZzcHJlYWQKMDlVbmRlcmZ1bGwKMDVMb29zZQoxNiBcaGJveCAoYmFkbmVzcyAKMzgpIGhhcyBvY2N1cnJlZCB3aGlsZSBcb3V0cHV0IGlzIGFjdGl2ZQoyNCkgaW4gcGFyYWdyYXBoIGF0IGxpbmVzIAoyNCkgaW4gYWxpZ25tZW50IGF0IGxpbmVzIAowMi0tCjE5KSBkZXRlY3RlZCBhdCBsaW5lIAoxNk92ZXJmdWxsIFxoYm94ICgKMTFwdCB0b28gd2lkZQoyMVRpZ2h0IFxoYm94IChiYWRuZXNzIAowNXZwYWNrCjE2IFx2Ym94IChiYWRuZXNzIAoxNk92ZXJmdWxsIFx2Ym94ICgKMTFwdCB0b28gaGlnaAoyMVRpZ2h0IFx2Ym94IChiYWRuZXNzIAowMnt9CjEyZGlzcGxheXN0eWxlCjA5dGV4dHN0eWxlCjExc2NyaXB0c3R5bGUKMTdzY3JpcHRzY3JpcHRzdHlsZQoxNFVua25vd24gc3R5bGUhCjA3bWF0aG9yZAowNm1hdGhvcAowN21hdGhiaW4KMDdtYXRocmVsCjA4bWF0aG9wZW4KMDltYXRoY2xvc2UKMDltYXRocHVuY3QKMDltYXRoaW5uZXIKMDhvdmVybGluZQowOXVuZGVybGluZQowNGxlZnQKMDVyaWdodAowNm1pZGRsZQowNmxpbWl0cwowOG5vbGltaXRzCjIwZnJhY3Rpb24sIHRoaWNrbmVzcyAKMDk9IGRlZmF1bHQKMTcsIGxlZnQtZGVsaW1pdGVyIAoxOCwgcmlnaHQtZGVsaW1pdGVyIAoyNSBpcyB1bmRlZmluZWQgKGNoYXJhY3RlciAKNTRTb21ld2hlcmUgaW4gdGhlIG1hdGggZm9ybXVsYSBqdXN0IGVuZGVkLCB5b3UgdXNlZCB0aGUKNjBzdGF0ZWQgY2hhcmFjdGVyIGZyb20gYW4gdW5kZWZpbmVkIGZvbnQgZmFtaWx5LiBGb3IgZXhhbXBsZSwKNThwbGFpbiBUZVggZG9lc24ndCBhbGxvdyBcaXQgb3IgXHNsIGluIHN1YnNjcmlwdHMuIFByb2NlZWQsCjUyYW5kIEknbGwgdHJ5IHRvIGZvcmdldCB0aGF0IEkgbmVlZGVkIHRoYXQgY2hhcmFjdGVyLgowNm1saXN0MQowNm1saXN0MgowNm1saXN0Mwo2NDAyMzQwMDAxMjIqNDAwMDEzMyoqMyoqMzQ0KjA0MDA0MDAqMDAwMDAwMjM0MDAwMTExKjExMTExMTIzNDEwMTEKMDZtbGlzdDQKMTIgaW5zaWRlICQkJ3MKNTNEaXNwbGF5cyBjYW4gdXNlIHNwZWNpYWwgYWxpZ25tZW50cyAobGlrZSBcZXFhbGlnbm5vKQo1N29ubHkgaWYgbm90aGluZyBidXQgdGhlIGFsaWdubWVudCBpdHNlbGYgaXMgYmV0d2VlbiAkJCdzLgo1OFNvIEkndmUgZGVsZXRlZCB0aGUgZm9ybXVsYXMgdGhhdCBwcmVjZWRlZCB0aGlzIGFsaWdubWVudC4KMDRzcGFuCjAyY3IKMDRjcmNyCjExZW5kdGVtcGxhdGUKMjRhbGlnbm1lbnQgdGFiIGNoYXJhY3RlciAKNDBNaXNzaW5nICMgaW5zZXJ0ZWQgaW4gYWxpZ25tZW50IHByZWFtYmxlCjUwVGhlcmUgc2hvdWxkIGJlIGV4YWN0bHkgb25lICMgYmV0d2VlbiAmJ3MsIHdoZW4gYW4KNTZcaGFsaWduIG9yIFx2YWxpZ24gaXMgYmVpbmcgc2V0IHVwLiBJbiB0aGlzIGNhc2UgeW91IGhhZAo0N25vbmUsIHNvIEkndmUgcHV0IG9uZSBpbjsgbWF5YmUgdGhhdCB3aWxsIHdvcmsuCjI5T25seSBvbmUgIyBpcyBhbGxvd2VkIHBlciB0YWIKNDltb3JlIHRoYW4gb25lLCBzbyBJJ20gaWdub3JpbmcgYWxsIGJ1dCB0aGUgZmlyc3QuCjA0ZW5kdgo0MEV4dHJhIGFsaWdubWVudCB0YWIgaGFzIGJlZW4gY2hhbmdlZCB0byAKNTJZb3UgaGF2ZSBnaXZlbiBtb3JlIFxzcGFuIG9yICYgbWFya3MgdGhhbiB0aGVyZSB3ZXJlCjU4aW4gdGhlIHByZWFtYmxlIHRvIHRoZSBcaGFsaWduIG9yIFx2YWxpZ24gbm93IGluIHByb2dyZXNzLgo1MFNvIEknbGwgYXNzdW1lIHRoYXQgeW91IG1lYW50IHRvIHR5cGUgXGNyIGluc3RlYWQuCjA5MjU2IHNwYW5zCjA2YWxpZ24xCjA2YWxpZ24wCjQ0SW5maW5pdGUgZ2x1ZSBzaHJpbmthZ2UgZm91bmQgaW4gYSBwYXJhZ3JhcGgKNTJUaGUgcGFyYWdyYXBoIGp1c3QgZW5kZWQgaW5jbHVkZXMgc29tZSBnbHVlIHRoYXQgaGFzCjU0aW5maW5pdGUgc2hyaW5rYWJpbGl0eSwgZS5nLiwgYFxoc2tpcCAwcHQgbWludXMgMWZpbCcuCjU0U3VjaCBnbHVlIGRvZXNuJ3QgYmVsb25nIHRoZXJlLS0taXQgYWxsb3dzIGEgcGFyYWdyYXBoCjU5b2YgYW55IGxlbmd0aCB0byBmaXQgb24gb25lIGxpbmUuIEJ1dCBpdCdzIHNhZmUgdG8gcHJvY2VlZCwKNTVzaW5jZSB0aGUgb2ZmZW5zaXZlIHNocmlua2FiaWxpdHkgaGFzIGJlZW4gbWFkZSBmaW5pdGUuCjA1ZGlzYzEKMDVkaXNjMgowMkBACjA3OiBsaW5lIAowMyB0PQowNiAtPiBAQAowNyB2aWEgQEAKMDMgYj0KMDMgcD0KMDMgZD0KMTBAZmlyc3RwYXNzCjExQHNlY29uZHBhc3MKMTRAZW1lcmdlbmN5cGFzcwowOXBhcmFncmFwaAowNWRpc2MzCjA1ZGlzYzQKMTNsaW5lIGJyZWFraW5nCjA1SFlQSCgKMTFoeXBoZW5hdGlvbgoxNiB3aWxsIGJlIGZsdXNoZWQKNDhIeXBoZW5hdGlvbiBleGNlcHRpb25zIG11c3QgY29udGFpbiBvbmx5IGxldHRlcnMKNTFhbmQgaHlwaGVucy4gQnV0IGNvbnRpbnVlOyBJJ2xsIGZvcmdpdmUgYW5kIGZvcmdldC4KMTJOb3QgYSBsZXR0ZXIKNTBMZXR0ZXJzIGluIFxoeXBoZW5hdGlvbiB3b3JkcyBtdXN0IGhhdmUgXGxjY29kZT4wLgo0N1Byb2NlZWQ7IEknbGwgaWdub3JlIHRoZSBjaGFyYWN0ZXIgSSBqdXN0IHJlYWQuCjIwZXhjZXB0aW9uIGRpY3Rpb25hcnkKMThwYXR0ZXJuIG1lbW9yeSBvcHMKMzFwYXR0ZXJuIG1lbW9yeSBvcHMgcGVyIGxhbmd1YWdlCjE0cGF0dGVybiBtZW1vcnkKMTNUb28gbGF0ZSBmb3IgCjA4cGF0dGVybnMKNTNBbGwgcGF0dGVybnMgbXVzdCBiZSBnaXZlbiBiZWZvcmUgdHlwZXNldHRpbmcgYmVnaW5zLgowNEJhZCAKMTcoU2VlIEFwcGVuZGl4IEguKQowOU5vbmxldHRlcgoxN0R1cGxpY2F0ZSBwYXR0ZXJuCjA3cHJ1bmluZwowOXZlcnRicmVhawo0OEluZmluaXRlIGdsdWUgc2hyaW5rYWdlIGZvdW5kIGluIGJveCBiZWluZyBzcGxpdAo1MlRoZSBib3ggeW91IGFyZSBcdnNwbGl0dGluZyBjb250YWlucyBzb21lIGluZmluaXRlbHkKNTdzaHJpbmthYmxlIGdsdWUsIGUuZy4sIGBcdnNzJyBvciBgXHZza2lwIDBwdCBtaW51cyAxZmlsJy4KNTlTdWNoIGdsdWUgZG9lc24ndCBiZWxvbmcgdGhlcmU7IGJ1dCB5b3UgY2FuIHNhZmVseSBwcm9jZWVkLAowNnZzcGxpdAowOSBuZWVkcyBhIAowNHZib3gKNDRUaGUgYm94IHlvdSBhcmUgdHJ5aW5nIHRvIHNwbGl0IGlzIGFuIFxoYm94Lgo0OUkgY2FuJ3Qgc3BsaXQgc3VjaCBhIGJveCwgc28gSSdsbCBsZWF2ZSBpdCBhbG9uZS4KMDhwYWdlZ29hbAowOXBhZ2V0b3RhbAoxMXBhZ2VzdHJldGNoCjE0cGFnZWZpbHN0cmV0Y2gKMTVwYWdlZmlsbHN0cmV0Y2gKMTZwYWdlZmlsbGxzdHJldGNoCjEwcGFnZXNocmluawowOXBhZ2VkZXB0aAowNGZpbGwKMDVmaWxsbAoxNyMjIyBjdXJyZW50IHBhZ2U6CjI4IChoZWxkIG92ZXIgZm9yIG5leHQgb3V0cHV0KQoxM3RvdGFsIGhlaWdodCAKMTMgZ29hbCBoZWlnaHQgCjA2IGFkZHMgCjAzLCAjCjEyIG1pZ2h0IHNwbGl0CjE1JSUgZ29hbCBoZWlnaHQ9CjEyLCBtYXggZGVwdGg9CjM4SW5zZXJ0aW9ucyBjYW4gb25seSBiZSBhZGRlZCB0byBhIHZib3gKNDBUdXQgdHV0OiBZb3UncmUgdHJ5aW5nIHRvIFxpbnNlcnQgaW50byBhCjQxXGJveCByZWdpc3RlciB0aGF0IG5vdyBjb250YWlucyBhbiBcaGJveC4KNDdQcm9jZWVkLCBhbmQgSSdsbCBkaXNjYXJkIGl0cyBwcmVzZW50IGNvbnRlbnRzLgowNHBhZ2UKNDVJbmZpbml0ZSBnbHVlIHNocmlua2FnZSBmb3VuZCBvbiBjdXJyZW50IHBhZ2UKNTJUaGUgcGFnZSBhYm91dCB0byBiZSBvdXRwdXQgY29udGFpbnMgc29tZSBpbmZpbml0ZWx5CjAzIGc9CjAzIGM9CjM4SW5maW5pdGUgZ2x1ZSBzaHJpbmthZ2UgaW5zZXJ0ZWQgZnJvbSAKNTNUaGUgY29ycmVjdGlvbiBnbHVlIGZvciBwYWdlIGJyZWFraW5nIHdpdGggaW5zZXJ0aW9ucwo1Mm11c3QgaGF2ZSBmaW5pdGUgc2hyaW5rYWJpbGl0eS4gQnV0IHlvdSBtYXkgcHJvY2VlZCwKMDclIHNwbGl0CjA0IHRvIAoxNTI1NSBpcyBub3Qgdm9pZAo1M1lvdSBzaG91bGRuJ3QgdXNlIFxib3gyNTUgZXhjZXB0IGluIFxvdXRwdXQgcm91dGluZXMuCjE0T3V0cHV0IGxvb3AtLS0KMjQgY29uc2VjdXRpdmUgZGVhZCBjeWNsZXMKNTdJJ3ZlIGNvbmNsdWRlZCB0aGF0IHlvdXIgXG91dHB1dCBpcyBhd3J5OyBpdCBuZXZlciBkb2VzIGEKNTVcc2hpcG91dCwgc28gSSdtIHNoaXBwaW5nIFxib3gyNTUgb3V0IG15c2VsZi4gTmV4dCB0aW1lCjU4aW5jcmVhc2UgXG1heGRlYWRjeWNsZXMgaWYgeW91IHdhbnQgbWUgdG8gYmUgbW9yZSBwYXRpZW50IQoyNVVuYmFsYW5jZWQgb3V0cHV0IHJvdXRpbmUKNThZb3VyIHNuZWFreSBvdXRwdXQgcm91dGluZSBoYXMgcHJvYmxlbWF0aWMgeydzIGFuZC9vciB9J3MuCjQxSSBjYW4ndCBoYW5kbGUgdGhhdCB2ZXJ5IHdlbGw7IGdvb2QgbHVjay4KMzNPdXRwdXQgcm91dGluZSBkaWRuJ3QgdXNlIGFsbCBvZiAKNDNZb3VyIFxvdXRwdXQgY29tbWFuZHMgc2hvdWxkIGVtcHR5IFxib3gyNTUsCjM0ZS5nLiwgYnkgc2F5aW5nIGBcc2hpcG91dFxib3gyNTUnLgo0M1Byb2NlZWQ7IEknbGwgZGlzY2FyZCBpdHMgcHJlc2VudCBjb250ZW50cy4KMThNaXNzaW5nICQgaW5zZXJ0ZWQKNTZJJ3ZlIGluc2VydGVkIGEgYmVnaW4tbWF0aC9lbmQtbWF0aCBzeW1ib2wgc2luY2UgSSB0aGluawo0OHlvdSBsZWZ0IG9uZSBvdXQuIFByb2NlZWQsIHdpdGggZmluZ2VycyBjcm9zc2VkLgowNScgaW4gCjUwU29ycnksIGJ1dCBJJ20gbm90IHByb2dyYW1tZWQgdG8gaGFuZGxlIHRoaXMgY2FzZTsKNDVJJ2xsIGp1c3QgcHJldGVuZCB0aGF0IHlvdSBkaWRuJ3QgYXNrIGZvciBpdC4KNDlJZiB5b3UncmUgaW4gdGhlIHdyb25nIG1vZGUsIHlvdSBtaWdodCBiZSBhYmxlIHRvCjU4cmV0dXJuIHRvIHRoZSByaWdodCBvbmUgYnkgdHlwaW5nIGBJfScgb3IgYEkkJyBvciBgSVxwYXInLgowNGR1bXAKMDVoc2tpcAowNGhmaWwKMDVoZmlsbAowM2hzcwowN2hmaWxuZWcKMDV2c2tpcAowNHZmaWwKMDV2ZmlsbAowM3ZzcwowN3ZmaWxuZWcKNTJJJ3ZlIGluc2VydGVkIHNvbWV0aGluZyB0aGF0IHlvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4uCjMyKFNlZSB0aGUgPGluc2VydGVkIHRleHQ+IGFib3ZlLikKNDhXaXRoIGx1Y2ssIHRoaXMgd2lsbCBnZXQgbWUgdW53ZWRnZWQuIEJ1dCBpZiB5b3UKNTVyZWFsbHkgZGlkbid0IGZvcmdldCBhbnl0aGluZywgdHJ5IHR5cGluZyBgMicgbm93OyB0aGVuCjU2bXkgaW5zZXJ0aW9uIGFuZCBteSBjdXJyZW50IGRpbGVtbWEgd2lsbCBib3RoIGRpc2FwcGVhci4KMDZyaWdodC4KNThUaGluZ3MgYXJlIHByZXR0eSBtaXhlZCB1cCwgYnV0IEkgdGhpbmsgdGhlIHdvcnN0IGlzIG92ZXIuCjEyVG9vIG1hbnkgfSdzCjQyWW91J3ZlIGNsb3NlZCBtb3JlIGdyb3VwcyB0aGFuIHlvdSBvcGVuZWQuCjUxU3VjaCBib29ib29zIGFyZSBnZW5lcmFsbHkgaGFybWxlc3MsIHNvIGtlZXAgZ29pbmcuCjEwcmlnaHRicmFjZQoyMkV4dHJhIH0sIG9yIGZvcmdvdHRlbiAKNThJJ3ZlIGRlbGV0ZWQgYSBncm91cC1jbG9zaW5nIHN5bWJvbCBiZWNhdXNlIGl0IHNlZW1zIHRvIGJlCjU5c3B1cmlvdXMsIGFzIGluIGAkeH0kJy4gQnV0IHBlcmhhcHMgdGhlIH0gaXMgbGVnaXRpbWF0ZSBhbmQKNTl5b3UgZm9yZ290IHNvbWV0aGluZyBlbHNlLCBhcyBpbiBgXGhib3h7JHh9Jy4gSW4gc3VjaCBjYXNlcwo1OHRoZSB3YXkgdG8gcmVjb3ZlciBpcyB0byBpbnNlcnQgYm90aCB0aGUgZm9yZ290dGVuIGFuZCB0aGUKNDBkZWxldGVkIG1hdGVyaWFsLCBlLmcuLCBieSB0eXBpbmcgYEkkfScuCjA4bW92ZWxlZnQKMDltb3ZlcmlnaHQKMDVyYWlzZQowNWxvd2VyCjA0Y29weQowN2xhc3Rib3gKMDR2dG9wCjA0aGJveAowN3NoaXBvdXQKMDdsZWFkZXJzCjA4Y2xlYWRlcnMKMDh4bGVhZGVycwozNUxlYWRlcnMgbm90IGZvbGxvd2VkIGJ5IHByb3BlciBnbHVlCjU2WW91IHNob3VsZCBzYXkgYFxsZWFkZXJzIDxib3ggb3IgcnVsZT48aHNraXAgb3IgdnNraXA+Jy4KNTBJIGZvdW5kIHRoZSA8Ym94IG9yIHJ1bGU+LCBidXQgdGhlcmUncyBubyBzdWl0YWJsZQo0ODxoc2tpcCBvciB2c2tpcD4sIHNvIEknbSBpZ25vcmluZyB0aGVzZSBsZWFkZXJzLgowNXRhaWwxCjM0U29ycnk7IHRoaXMgXGxhc3Rib3ggd2lsbCBiZSB2b2lkLgo1OFNvcnJ5Li4uSSB1c3VhbGx5IGNhbid0IHRha2UgdGhpbmdzIGZyb20gdGhlIGN1cnJlbnQgcGFnZS4KMzdUaGlzIFxsYXN0Ym94IHdpbGwgdGhlcmVmb3JlIGJlIHZvaWQuCjIxTWlzc2luZyBgdG8nIGluc2VydGVkCjQ4SSdtIHdvcmtpbmcgb24gYFx2c3BsaXQ8Ym94IG51bWJlcj4gdG8gPGRpbWVuPic7CjMxd2lsbCBsb29rIGZvciB0aGUgPGRpbWVuPiBuZXh0LgozMUEgPGJveD4gd2FzIHN1cHBvc2VkIHRvIGJlIGhlcmUKNTdJIHdhcyBleHBlY3RpbmcgdG8gc2VlIFxoYm94IG9yIFx2Ym94IG9yIFxjb3B5IG9yIFxib3ggb3IKNTlzb21ldGhpbmcgbGlrZSB0aGF0LiBTbyB5b3UgbWlnaHQgZmluZCBzb21ldGhpbmcgbWlzc2luZyBpbgo1M3lvdXIgb3V0cHV0LiBCdXQga2VlcCB0cnlpbmc7IHlvdSBjYW4gZml4IHRoaXMgbGF0ZXIuCjA2aW5kZW50CjA4bm9pbmRlbnQKMjYnIGhlcmUgZXhjZXB0IHdpdGggbGVhZGVycwo1MlRvIHB1dCBhIGhvcml6b250YWwgcnVsZSBpbiBhbiBoYm94IG9yIGFuIGFsaWdubWVudCwKNTZ5b3Ugc2hvdWxkIHVzZSBcbGVhZGVycyBvciBcaHJ1bGVmaWxsIChzZWUgVGhlIFRlWGJvb2spLgoxMFlvdSBjYW4ndCAKNDVJJ20gY2hhbmdpbmcgdG8gXGluc2VydDA7IGJveCAyNTUgaXMgc3BlY2lhbC4KMzJUcnkgYElcdnNraXAtXGxhc3Rza2lwJyBpbnN0ZWFkLgozMVRyeSBgSVxrZXJuLVxsYXN0a2VybicgaW5zdGVhZC4KNDZQZXJoYXBzIHlvdSBjYW4gbWFrZSB0aGUgb3V0cHV0IHJvdXRpbmUgZG8gaXQuCjA5dW5wZW5hbHR5CjA2dW5rZXJuCjA2dW5za2lwCjA2dW5oYm94CjA3dW5oY29weQowNnVudmJveAowN3VudmNvcHkKMzRJbmNvbXBhdGlibGUgbGlzdCBjYW4ndCBiZSB1bmJveGVkCjM1U29ycnksIFBhbmRvcmEuIChZb3Ugc25lYWt5IGRldmlsLikKNThJIHJlZnVzZSB0byB1bmJveCBhbiBcaGJveCBpbiB2ZXJ0aWNhbCBtb2RlIG9yIHZpY2UgdmVyc2EuCjQwQW5kIEkgY2FuJ3Qgb3BlbiBhbnkgYm94ZXMgaW4gbWF0aCBtb2RlLgoxM0lsbGVnYWwgbWF0aCAKNTRTb3JyeTogVGhlIHRoaXJkIHBhcnQgb2YgYSBkaXNjcmV0aW9uYXJ5IGJyZWFrIG11c3QgYmUKNTdlbXB0eSwgaW4gbWF0aCBmb3JtdWxhcy4gSSBoYWQgdG8gZGVsZXRlIHlvdXIgdGhpcmQgcGFydC4KMzBEaXNjcmV0aW9uYXJ5IGxpc3QgaXMgdG9vIGxvbmcKNTBXb3ctLS1JIG5ldmVyIHRob3VnaHQgYW55Ym9keSB3b3VsZCB0d2VhayBtZSBoZXJlLgo1NllvdSBjYW4ndCBzZXJpb3VzbHkgbmVlZCBzdWNoIGEgaHVnZSBkaXNjcmV0aW9uYXJ5IGxpc3Q/CjI3SW1wcm9wZXIgZGlzY3JldGlvbmFyeSBsaXN0CjU0RGlzY3JldGlvbmFyeSBsaXN0cyBtdXN0IGNvbnRhaW4gb25seSBib3hlcyBhbmQga2VybnMuCjUzVGhlIGZvbGxvd2luZyBkaXNjcmV0aW9uYXJ5IHN1Ymxpc3QgaGFzIGJlZW4gZGVsZXRlZDoKMThNaXNzaW5nIH0gaW5zZXJ0ZWQKNDVJJ3ZlIHB1dCBpbiB3aGF0IHNlZW1zIHRvIGJlIG5lY2Vzc2FyeSB0byBmaXgKNDR0aGUgY3VycmVudCBjb2x1bW4gb2YgdGhlIGN1cnJlbnQgYWxpZ25tZW50Lgo0M1RyeSB0byBnbyBvbiwgc2luY2UgdGhpcyBtaWdodCBhbG1vc3Qgd29yay4KMTBNaXNwbGFjZWQgCjU1SSBjYW4ndCBmaWd1cmUgb3V0IHdoeSB5b3Ugd291bGQgd2FudCB0byB1c2UgYSB0YWIgbWFyawo1MGhlcmUuIElmIHlvdSBqdXN0IHdhbnQgYW4gYW1wZXJzYW5kLCB0aGUgcmVtZWR5IGlzCjUyc2ltcGxlOiBKdXN0IHR5cGUgYElcJicgbm93LiBCdXQgaWYgc29tZSByaWdodCBicmFjZQo1MnVwIGFib3ZlIGhhcyBlbmRlZCBhIHByZXZpb3VzIGFsaWdubWVudCBwcmVtYXR1cmVseSwKNTJ5b3UncmUgcHJvYmFibHkgZHVlIGZvciBtb3JlIGVycm9yIG1lc3NhZ2VzLCBhbmQgeW91CjU3bWlnaHQgdHJ5IHR5cGluZyBgUycgbm93IGp1c3QgdG8gc2VlIHdoYXQgaXMgc2FsdmFnZWFibGUuCjU3b3IgXGNyIG9yIFxzcGFuIGp1c3Qgbm93LiBJZiBzb21ldGhpbmcgbGlrZSBhIHJpZ2h0IGJyYWNlCjQ2SSBleHBlY3QgdG8gc2VlIFxub2FsaWduIG9ubHkgYWZ0ZXIgdGhlIFxjciBvZgo0OWFuIGFsaWdubWVudC4gUHJvY2VlZCwgYW5kIEknbGwgaWdub3JlIHRoaXMgY2FzZS4KNTZJIGV4cGVjdCB0byBzZWUgXG9taXQgb25seSBhZnRlciB0YWIgbWFya3Mgb3IgdGhlIFxjciBvZgo1M0knbSBndWVzc2luZyB0aGF0IHlvdSBtZWFudCB0byBlbmQgYW4gYWxpZ25tZW50IGhlcmUuCjUwSSdtIGlnbm9yaW5nIHRoaXMsIHNpbmNlIEkgd2Fzbid0IGRvaW5nIGEgXGNzbmFtZS4KMDRlcW5vCjA1bGVxbm8KMTNkaXNwbGF5bGltaXRzCjQyTGltaXQgY29udHJvbHMgbXVzdCBmb2xsb3cgYSBtYXRoIG9wZXJhdG9yCjU3SSdtIGlnbm9yaW5nIHRoaXMgbWlzcGxhY2VkIFxsaW1pdHMgb3IgXG5vbGltaXRzIGNvbW1hbmQuCjMwTWlzc2luZyBkZWxpbWl0ZXIgKC4gaW5zZXJ0ZWQpCjUySSB3YXMgZXhwZWN0aW5nIHRvIHNlZSBzb21ldGhpbmcgbGlrZSBgKCcgb3IgYFx7JyBvcgo1NWBcfScgaGVyZS4gSWYgeW91IHR5cGVkLCBlLmcuLCBgeycgaW5zdGVhZCBvZiBgXHsnLCB5b3UKNTdzaG91bGQgcHJvYmFibHkgZGVsZXRlIHRoZSBgeycgYnkgdHlwaW5nIGAxJyBub3csIHNvIHRoYXQKNTJicmFjZXMgZG9uJ3QgZ2V0IHVuYmFsYW5jZWQuIE90aGVyd2lzZSBqdXN0IHByb2NlZWQuCjU0QWNjZXB0YWJsZSBkZWxpbWl0ZXJzIGFyZSBjaGFyYWN0ZXJzIHdob3NlIFxkZWxjb2RlIGlzCjU4bm9ubmVnYXRpdmUsIG9yIHlvdSBjYW4gdXNlIGBcZGVsaW1pdGVyIDxkZWxpbWl0ZXIgY29kZT4nLgoxMVBsZWFzZSB1c2UgCjI1IGZvciBhY2NlbnRzIGluIG1hdGggbW9kZQo1NUknbSBjaGFuZ2luZyBcYWNjZW50IHRvIFxtYXRoYWNjZW50IGhlcmU7IHdpc2ggbWUgbHVjay4KNTkoQWNjZW50cyBhcmUgbm90IHRoZSBzYW1lIGluIGZvcm11bGFzIGFzIHRoZXkgYXJlIGluIHRleHQuKQoxOERvdWJsZSBzdXBlcnNjcmlwdAo0M0kgdHJlYXQgYHheMV4yJyBlc3NlbnRpYWxseSBsaWtlIGB4XjF7fV4yJy4KMTZEb3VibGUgc3Vic2NyaXB0CjQzSSB0cmVhdCBgeF8xXzInIGVzc2VudGlhbGx5IGxpa2UgYHhfMXt9XzInLgowNWFib3ZlCjA0b3ZlcgowNGF0b3AKMTVhYm92ZXdpdGhkZWxpbXMKMTRvdmVyd2l0aGRlbGltcwoxNGF0b3B3aXRoZGVsaW1zCjM1QW1iaWd1b3VzOyB5b3UgbmVlZCBhbm90aGVyIHsgYW5kIH0KNTVJJ20gaWdub3JpbmcgdGhpcyBmcmFjdGlvbiBzcGVjaWZpY2F0aW9uLCBzaW5jZSBJIGRvbid0CjUya25vdyB3aGV0aGVyIGEgY29uc3RydWN0aW9uIGxpa2UgYHggXG92ZXIgeSBcb3ZlciB6Jwo1M21lYW5zIGB7eCBcb3ZlciB5fSBcb3ZlciB6JyBvciBgeCBcb3ZlciB7eSBcb3ZlciB6fScuCjUwSSdtIGlnbm9yaW5nIGEgXG1pZGRsZSB0aGF0IGhhZCBubyBtYXRjaGluZyBcbGVmdC4KNDlJJ20gaWdub3JpbmcgYSBccmlnaHQgdGhhdCBoYWQgbm8gbWF0Y2hpbmcgXGxlZnQuCjQ3TWF0aCBmb3JtdWxhIGRlbGV0ZWQ6IEluc3VmZmljaWVudCBzeW1ib2wgZm9udHMKNTBTb3JyeSwgYnV0IEkgY2FuJ3QgdHlwZXNldCBtYXRoIHVubGVzcyBcdGV4dGZvbnQgMgo1MGFuZCBcc2NyaXB0Zm9udCAyIGFuZCBcc2NyaXB0c2NyaXB0Zm9udCAyIGhhdmUgYWxsCjUwdGhlIFxmb250ZGltZW4gdmFsdWVzIG5lZWRlZCBpbiBtYXRoIHN5bWJvbCBmb250cy4KNTBNYXRoIGZvcm11bGEgZGVsZXRlZDogSW5zdWZmaWNpZW50IGV4dGVuc2lvbiBmb250cwo1MFNvcnJ5LCBidXQgSSBjYW4ndCB0eXBlc2V0IG1hdGggdW5sZXNzIFx0ZXh0Zm9udCAzCjUwYW5kIFxzY3JpcHRmb250IDMgYW5kIFxzY3JpcHRzY3JpcHRmb250IDMgaGF2ZSBhbGwKNTN0aGUgXGZvbnRkaW1lbiB2YWx1ZXMgbmVlZGVkIGluIG1hdGggZXh0ZW5zaW9uIGZvbnRzLgozMURpc3BsYXkgbWF0aCBzaG91bGQgZW5kIHdpdGggJCQKNTlUaGUgYCQnIHRoYXQgSSBqdXN0IHNhdyBzdXBwb3NlZGx5IG1hdGNoZXMgYSBwcmV2aW91cyBgJCQnLgo0OVNvIEkgc2hhbGwgYXNzdW1lIHRoYXQgeW91IHR5cGVkIGAkJCcgYm90aCB0aW1lcy4KMDdkaXNwbGF5CjE5TWlzc2luZyAkJCBpbnNlcnRlZAowNGxvbmcKMDVvdXRlcgowNmdsb2JhbAowM2RlZgowNGdkZWYKMDRlZGVmCjA0eGRlZgowNnByZWZpeAoyOVlvdSBjYW4ndCB1c2UgYSBwcmVmaXggd2l0aCBgCjU1SSdsbCBwcmV0ZW5kIHlvdSBkaWRuJ3Qgc2F5IFxsb25nIG9yIFxvdXRlciBvciBcZ2xvYmFsLgo2OUknbGwgcHJldGVuZCB5b3UgZGlkbid0IHNheSBcbG9uZyBvciBcb3V0ZXIgb3IgXGdsb2JhbCBvciBccHJvdGVjdGVkLgowNicgb3IgYAo0OUknbGwgcHJldGVuZCB5b3UgZGlkbid0IHNheSBcbG9uZyBvciBcb3V0ZXIgaGVyZS4KNjNJJ2xsIHByZXRlbmQgeW91IGRpZG4ndCBzYXkgXGxvbmcgb3IgXG91dGVyIG9yIFxwcm90ZWN0ZWQgaGVyZS4KMDlwcm90ZWN0ZWQKMDgnIHdpdGggYAozM01pc3NpbmcgY29udHJvbCBzZXF1ZW5jZSBpbnNlcnRlZAo1MlBsZWFzZSBkb24ndCBzYXkgYFxkZWYgY3N7Li4ufScsIHNheSBgXGRlZlxjc3suLi59Jy4KNTlJJ3ZlIGluc2VydGVkIGFuIGluYWNjZXNzaWJsZSBjb250cm9sIHNlcXVlbmNlIHNvIHRoYXQgeW91cgo2MGRlZmluaXRpb24gd2lsbCBiZSBjb21wbGV0ZWQgd2l0aG91dCBtaXhpbmcgbWUgdXAgdG9vIGJhZGx5Lgo1M1lvdSBjYW4gcmVjb3ZlciBncmFjaW91c2x5IGZyb20gdGhpcyBlcnJvciwgaWYgeW91J3JlCjQyY2FyZWZ1bDsgc2VlIGV4ZXJjaXNlIDI3LjIgaW4gVGhlIFRlWGJvb2suCjEyaW5hY2Nlc3NpYmxlCjAzbGV0CjA5ZnV0dXJlbGV0CjA3Y2hhcmRlZgoxMW1hdGhjaGFyZGVmCjA4Y291bnRkZWYKMDhkaW1lbmRlZgowN3NraXBkZWYKMDltdXNraXBkZWYKMDd0b2tzZGVmCjQ0WW91IHNob3VsZCBoYXZlIHNhaWQgYFxyZWFkPG51bWJlcj4gdG8gXGNzJy4KMzRJJ20gZ29pbmcgdG8gbG9vayBmb3IgdGhlIFxjcyBub3cuCjE0SW52YWxpZCBjb2RlICgKMjkpLCBzaG91bGQgYmUgaW4gdGhlIHJhbmdlIDAuLgoyMSksIHNob3VsZCBiZSBhdCBtb3N0IAo1NEknbSBnb2luZyB0byB1c2UgMCBpbnN0ZWFkIG9mIHRoYXQgaWxsZWdhbCBjb2RlIHZhbHVlLgowMmJ5CjE5QXJpdGhtZXRpYyBvdmVyZmxvdwo1MEkgY2FuJ3QgY2Fycnkgb3V0IHRoYXQgbXVsdGlwbGljYXRpb24gb3IgZGl2aXNpb24sCjMzc2luY2UgdGhlIHJlc3VsdCBpcyBvdXQgb2YgcmFuZ2UuCjU1SSdtIGZvcmdldHRpbmcgd2hhdCB5b3Ugc2FpZCBhbmQgbm90IGNoYW5naW5nIGFueXRoaW5nLgo1N1NvcnJ5LCBcc2V0Ym94IGlzIG5vdCBhbGxvd2VkIGFmdGVyIFxoYWxpZ24gaW4gYSBkaXNwbGF5LAo0NW9yIGJldHdlZW4gXGFjY2VudCBhbmQgYW4gYWNjZW50ZWQgY2hhcmFjdGVyLgoxNkJhZCBzcGFjZSBmYWN0b3IKNDdJIGFsbG93IG9ubHkgdmFsdWVzIGluIHRoZSByYW5nZSAxLi4zMjc2NyBoZXJlLgozN0kgYWxsb3cgb25seSBub25uZWdhdGl2ZSB2YWx1ZXMgaGVyZS4KMzdQYXR0ZXJucyBjYW4gYmUgbG9hZGVkIG9ubHkgYnkgSU5JVEVYCjEwaHlwaGVuY2hhcgowOHNrZXdjaGFyCjA0Rk9OVAowMmF0CjA2c2NhbGVkCjIwSW1wcm9wZXIgYGF0JyBzaXplICgKMjFwdCksIHJlcGxhY2VkIGJ5IDEwcHQKNTBJIGNhbiBvbmx5IGhhbmRsZSBmb250cyBhdCBwb3NpdGl2ZSBzaXplcyB0aGF0IGFyZQo1Nmxlc3MgdGhhbiAyMDQ4cHQsIHNvIEkndmUgY2hhbmdlZCB3aGF0IHlvdSBzYWlkIHRvIDEwcHQuCjEyc2VsZWN0IGZvbnQgCjEzZXJyb3JzdG9wbW9kZQowNm9wZW5pbgowN2Nsb3NlaW4KMDdtZXNzYWdlCjEwZXJybWVzc2FnZQozMShUaGF0IHdhcyBhbm90aGVyIFxlcnJtZXNzYWdlLikKNTBUaGlzIGVycm9yIG1lc3NhZ2Ugd2FzIGdlbmVyYXRlZCBieSBhbiBcZXJybWVzc2FnZQo0M2NvbW1hbmQsIHNvIEkgY2FuJ3QgZ2l2ZSBhbnkgZXhwbGljaXQgaGVscC4KNTRQcmV0ZW5kIHRoYXQgeW91J3JlIEhlcmN1bGUgUG9pcm90OiBFeGFtaW5lIGFsbCBjbHVlcywKNDFhbmQgZGVkdWNlIHRoZSB0cnV0aCBieSBvcmRlciBhbmQgbWV0aG9kLgowOWxvd2VyY2FzZQowOXVwcGVyY2FzZQowNHNob3cKMDdzaG93Ym94CjA3c2hvd3RoZQowOXNob3dsaXN0cwo1N1RoaXMgaXNuJ3QgYW4gZXJyb3IgbWVzc2FnZTsgSSdtIGp1c3QgXHNob3dpbmcgc29tZXRoaW5nLgo0NlR5cGUgYElcc2hvdy4uLicgdG8gc2hvdyBtb3JlIChlLmcuLCBcc2hvd1xjcywKNDNcc2hvd3RoZVxjb3VudDEwLCBcc2hvd2JveDI1NSwgXHNob3dsaXN0cykuCjU0QW5kIHR5cGUgYElcdHJhY2luZ29ubGluZT0xXHNob3cuLi4nIHRvIHNob3cgYm94ZXMgYW5kCjU3bGlzdHMgb24geW91ciB0ZXJtaW5hbCBhcyB3ZWxsIGFzIGluIHRoZSB0cmFuc2NyaXB0IGZpbGUuCjAyPiAKMDl1bmRlZmluZWQKMDVtYWNybwoxN291dGVyIGVuZHRlbXBsYXRlCjA2PiBcYm94CjAyT0sKMjYgKHNlZSB0aGUgdHJhbnNjcmlwdCBmaWxlKQowOSAoSU5JVEVYKQoyOVlvdSBjYW4ndCBkdW1wIGluc2lkZSBhIGdyb3VwCjI0YHsuLi5cZHVtcH0nIGlzIGEgbm8tbm8uCjI1IHN0cmluZ3Mgb2YgdG90YWwgbGVuZ3RoIAo0MyBtZW1vcnkgbG9jYXRpb25zIGR1bXBlZDsgY3VycmVudCB1c2FnZSBpcyAKMzAgbXVsdGlsZXR0ZXIgY29udHJvbCBzZXF1ZW5jZXMKMjQgd29yZHMgb2YgZm9udCBpbmZvIGZvciAKMTUgcHJlbG9hZGVkIGZvbnQKMDVcZm9udAoyMiBoeXBoZW5hdGlvbiBleGNlcHRpb24KMjdIeXBoZW5hdGlvbiB0cmllIG9mIGxlbmd0aCAKMDUgaGFzIAowMyBvcAowOCBvdXQgb2YgCjE0IGZvciBsYW5ndWFnZSAKMTkgKHByZWxvYWRlZCBmb3JtYXQ9CjE2Zm9ybWF0IGZpbGUgbmFtZQoyNkJlZ2lubmluZyB0byBkdW1wIG9uIGZpbGUgCjIyVHJhbnNjcmlwdCB3cml0dGVuIG9uIAowMiApCjEzZW5kIG9jY3VycmVkIAoyNGluc2lkZSBhIGdyb3VwIGF0IGxldmVsIAowNXdoZW4gCjA5IG9uIGxpbmUgCjE2IHdhcyBpbmNvbXBsZXRlKQo1MihzZWUgdGhlIHRyYW5zY3JpcHQgZmlsZSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbikKMzUoXGR1bXAgaXMgcGVyZm9ybWVkIG9ubHkgYnkgSU5JVEVYKQoyMWRlYnVnICMgKC0xIHRvIGV4aXQpOgowN29wZW5vdXQKMDhjbG9zZW91dAowN3NwZWNpYWwKMDlpbW1lZGlhdGUKMTFzZXRsYW5ndWFnZQoyMFt1bmtub3duIGV4dGVuc2lvbiFdCjA0ZXh0MQoxMiAoaHlwaGVubWluIAowOHdoYXRzaXQ/CjA0ZXh0MgowNGV4dDMKMDhlbmR3cml0ZQoyNFVuYmFsYW5jZWQgd3JpdGUgY29tbWFuZAo1OU9uIHRoaXMgcGFnZSB0aGVyZSdzIGEgXHdyaXRlIHdpdGggZmV3ZXIgcmVhbCB7J3MgdGhhbiB9J3MuCjA0ZXh0NAoxNm91dHB1dCBmaWxlIG5hbWUKMTJsYXN0bm9kZXR5cGUKMTFlVGVYdmVyc2lvbgo1M1NvcnJ5LCB0aGlzIG9wdGlvbmFsIGUtVGVYIGZlYXR1cmUgaGFzIGJlZW4gZGlzYWJsZWQuCjA4ZXZlcnllb2YKMTR0cmFjaW5nYXNzaWducwoxM3RyYWNpbmdncm91cHMKMTB0cmFjaW5naWZzCjE3dHJhY2luZ3NjYW50b2tlbnMKMTR0cmFjaW5nbmVzdGluZwoxOXByZWRpc3BsYXlkaXJlY3Rpb24KMTFsYXN0bGluZWZpdAoxNXNhdmluZ3ZkaXNjYXJkcwoxNXNhdmluZ2h5cGhjb2RlcwoxMmJvdHRvbSBsZXZlbAowNXNlbWkgCjA2c2ltcGxlCjA5YWRqdXN0ZWQgCjAzbm8gCjA1YWxpZ24KMDRkaXNjCjA3IGNob2ljZQowNiBzaGlmdAowNSBsZWZ0CjE0IGdyb3VwIChsZXZlbCAKMDhsZWF2aW5nIAowOWVudGVyaW5nIAoxN2N1cnJlbnRncm91cGxldmVsCjE2Y3VycmVudGdyb3VwdHlwZQoxNGN1cnJlbnRpZmxldmVsCjEzY3VycmVudGlmdHlwZQoxNWN1cnJlbnRpZmJyYW5jaAoxMGZvbnRjaGFyd2QKMTBmb250Y2hhcmh0CjEwZm9udGNoYXJkcAoxMGZvbnRjaGFyaWMKMTRwYXJzaGFwZWxlbmd0aAoxNHBhcnNoYXBlaW5kZW50CjEzcGFyc2hhcGVkaW1lbgoxMHNob3dncm91cHMKMTFhbGlnbiBlbnRyeQoxMHNob3d0b2tlbnMKMTB1bmV4cGFuZGVkCjEwZGV0b2tlbml6ZQowN3Nob3dpZnMKMTcgZW50ZXJlZCBvbiBsaW5lIAoyMm5vIGFjdGl2ZSBjb25kaXRpb25hbHMKMTAjIyMgbGV2ZWwgCjE1aW50ZXJhY3Rpb25tb2RlCjIwQmFkIGludGVyYWN0aW9uIG1vZGUKNDNNb2RlcyBhcmUgMD1iYXRjaCwgMT1ub25zdG9wLCAyPXNjcm9sbCwgYW5kCjQ4Mz1lcnJvcnN0b3AuIFByb2NlZWQsIGFuZCBJJ2xsIGlnbm9yZSB0aGlzIGNhc2UuCjExVGVYWGVUc3RhdGUKMDZiZWdpbkwKMDRlbmRMCjA2YmVnaW5SCjA0ZW5kUgowOSwgZGlzcGxheQowM0xSMQoyNFxlbmRMIG9yIFxlbmRSIHByb2JsZW0gKAoxMCBtaXNzaW5nLCAKMDYgZXh0cmEKMDNMUjIKMDNMUjMKMDNMUjQKMTBzY2FudG9rZW5zCjAyKCAKMDhyZWFkbGluZQowOWlmZGVmaW5lZAowOGlmY3NuYW1lCjEwaWZmb250Y2hhcgoxMCcgYmVmb3JlIGAKMTZXYXJuaW5nOiBlbmQgb2YgCjIwIG9mIGEgZGlmZmVyZW50IGZpbGUKMjZXYXJuaW5nOiBlbmQgb2YgZmlsZSB3aGVuIAoxNCBpcyBpbmNvbXBsZXRlCjA3bnVtZXhwcgowN2RpbWV4cHIKMDhnbHVlZXhwcgowNm11ZXhwcgozM0kgY2FuJ3QgZXZhbHVhdGUgdGhpcyBleHByZXNzaW9uLAozM01pc3NpbmcgKSBpbnNlcnRlZCBmb3IgZXhwcmVzc2lvbgo1OEkgd2FzIGV4cGVjdGluZyB0byBzZWUgYCsnLCBgLScsIGAqJywgYC8nLCBvciBgKScuIERpZG4ndC4KMTZnbHVlc3RyZXRjaG9yZGVyCjE1Z2x1ZXNocmlua29yZGVyCjExZ2x1ZXN0cmV0Y2gKMTBnbHVlc2hyaW5rCjA4bXV0b2dsdWUKMDhnbHVldG9tdQowNW1hcmtzCjA4dG9wbWFya3MKMTBmaXJzdG1hcmtzCjA4Ym90bWFya3MKMTVzcGxpdGZpcnN0bWFya3MKMTNzcGxpdGJvdG1hcmtzCjQ2QSByZWdpc3RlciBudW1iZXIgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDMyNzY3LgowMyBzPQowMyBhPQoxMnBhZ2VkaXNjYXJkcwoxM3NwbGl0ZGlzY2FyZHMKMThpbnRlcmxpbmVwZW5hbHRpZXMKMTNjbHVicGVuYWx0aWVzCjE0d2lkb3dwZW5hbHRpZXMKMjFkaXNwbGF5d2lkb3dwZW5hbHRpZXMKKjI2ODgwNzg3NQo="
};
var vA = [];
function rr() {
  vA = [];
}
function gr(o, l) {
  pt[o] = btoa(l);
}
function ir(o) {
  for (let l of vA)
    if (l.filename == o)
      return l.buffer.slice(0, l.position);
  throw Error(`Could not find file ${o}`);
}
function Br(o, l) {
  let y = new Uint8Array();
  return pt[o] && (y = Uint8Array.from(Buffer.from(pt[o], "base64"))), o.match(/\.tfm$/) && (y = Uint8Array.from(Tn.tfmData(o.replace(/\.tfm$/, "")))), vA.push({
    filename: o,
    position: 0,
    erstat: 0,
    buffer: y,
    descriptor: vA.length
  }), vA.length - 1;
}
function we(o, l, y, b) {
  for (y === void 0 && (y = 0), b === void 0 && (b = l.length - y); b > o.buffer.length - o.position; ) {
    let X = new Uint8Array(1 + o.buffer.length * 2);
    X.set(o.buffer), o.buffer = X;
  }
  o.buffer.subarray(o.position).set(l.subarray(y, y + b)), o.position += b;
}
function hB(o, l, y, b, X) {
  return y === void 0 && (y = 0), b === void 0 && (b = l.length - y), b > o.buffer.length - X && (b = o.buffer.length - X), l.subarray(y).set(o.buffer.subarray(X, X + b)), b;
}
var Ye = "";
function fB(o) {
  if (Ye = Ye + o, Ye.indexOf(`
`) >= 0) {
    let l = Ye.split(`
`);
    Ye = l.pop();
    for (let y of l)
      console.log(y);
  }
}
var Ee = {
  stdout: {
    write: fB
  }
}, ue = void 0, Zt = void 0, Dt = void 0;
function or(o) {
  ue = o;
}
function ar(o, l) {
  Zt = o, l && (Dt = l);
}
function IB() {
  var o = /* @__PURE__ */ new Date();
  return 60 * o.getHours() + o.getMinutes();
}
function GB() {
  return (/* @__PURE__ */ new Date()).getDate();
}
function EB() {
  return (/* @__PURE__ */ new Date()).getMonth() + 1;
}
function bB() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
function HB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o], b = new Uint8Array(ue, l, 1)[0], X = new Uint8Array(ue, l + 1, b), u = String.fromCharCode.apply(null, X);
  if (y.stdout) {
    Ee.stdout.write(u);
    return;
  }
  we(y, Buffer.from(u));
}
function FB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o], b = l ? "TRUE" : "FALSE";
  if (y.stdout) {
    Ee.stdout.write(b);
    return;
  }
  we(y, Buffer.from(b));
}
function YB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o];
  if (y.stdout) {
    Ee.stdout.write(String.fromCharCode(l));
    return;
  }
  var b = Buffer.alloc(1);
  b[0] = l, we(y, b);
}
function pB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o];
  if (y.stdout) {
    Ee.stdout.write(l.toString());
    return;
  }
  we(y, Buffer.from(l.toString()));
}
function ZB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o];
  if (y.stdout) {
    Ee.stdout.write(l.toString());
    return;
  }
  we(y, Buffer.from(l.toString()));
}
function DB(o, l) {
  var y = o < 0 ? { stdout: !0 } : vA[o];
  if (y.stdout) {
    Ee.stdout.write(`
`);
    return;
  }
  we(y, Buffer.from(`
`));
}
function xB(o, l) {
  var y = new Uint8Array(ue, l, o), b = String.fromCharCode.apply(null, y);
  return b = b.replace(/ +$/g, ""), b = b.replace(/^\*/, ""), b = b.replace(/^TeXfonts:/, ""), b == "TeXformats:TEX.POOL" && (b = "tex.pool"), b == "TTY:" ? (vA.push({
    filename: "stdin",
    stdin: !0,
    position: 0,
    erstat: 0
  }), vA.length - 1) : Br(b);
}
function mB(o, l) {
  var y = new Uint8Array(ue, l, o), b = String.fromCharCode.apply(null, y);
  return b = b.replace(/ +$/g, ""), b == "TTY:" ? (vA.push({
    filename: "stdout",
    stdout: !0,
    erstat: 0
  }), vA.length - 1) : Br(b);
}
function yB(o) {
  var l = vA[o];
  l.descriptor && (l.descriptor, void 0);
}
function VB(o) {
  var l = vA[o];
  return l.eof ? 1 : 0;
}
function MB(o) {
  var l = vA[o];
  return l.erstat;
}
function WB(o) {
  var l = vA[o];
  return l.eoln ? 1 : 0;
}
function UB(o, l, y) {
  var b = vA[o], X = new Uint8Array(ue);
  if (b.stdin)
    b.position >= Zt.length ? (X[l] = 13, b.eof = !0, b.eoln = !0, Dt && Dt()) : X[l] = Zt[b.position].charCodeAt(0);
  else if (b.descriptor) {
    if (hB(b, X, l, y, b.position) == 0) {
      X[l] = 0, b.eof = !0, b.eoln = !0;
      return;
    }
  } else {
    b.eof = !0, b.eoln = !0;
    return;
  }
  b.eoln = !1, X[l] == 10 && (b.eoln = !0), X[l] == 13 && (b.eoln = !0), b.position = b.position + y;
}
function RB(o, l, y) {
  var b = vA[o], X = new Uint8Array(ue);
  we(b, X, l, y);
}
const NB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  close: yB,
  deleteEverything: rr,
  eof: VB,
  eoln: WB,
  erstat: MB,
  get: UB,
  getCurrentDay: GB,
  getCurrentMinutes: IB,
  getCurrentMonth: EB,
  getCurrentYear: bB,
  printBoolean: FB,
  printChar: YB,
  printFloat: ZB,
  printInteger: pB,
  printNewline: DB,
  printString: HB,
  put: RB,
  readFileSync: ir,
  reset: xB,
  rewrite: mB,
  setInput: ar,
  setMemory: or,
  writeFileSync: gr
}, Symbol.toStringTag, { value: "Module" }));
var dt = {}, Dn;
function oe() {
  return Dn || (Dn = 1, function(o) {
    var l = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function y(u, H) {
      return Object.prototype.hasOwnProperty.call(u, H);
    }
    o.assign = function(u) {
      for (var H = Array.prototype.slice.call(arguments, 1); H.length; ) {
        var n = H.shift();
        if (n) {
          if (typeof n != "object")
            throw new TypeError(n + "must be non-object");
          for (var i in n)
            y(n, i) && (u[i] = n[i]);
        }
      }
      return u;
    }, o.shrinkBuf = function(u, H) {
      return u.length === H ? u : u.subarray ? u.subarray(0, H) : (u.length = H, u);
    };
    var b = {
      arraySet: function(u, H, n, i, p) {
        if (H.subarray && u.subarray) {
          u.set(H.subarray(n, n + i), p);
          return;
        }
        for (var D = 0; D < i; D++)
          u[p + D] = H[n + D];
      },
      // Join array of chunks to single array.
      flattenChunks: function(u) {
        var H, n, i, p, D, f;
        for (i = 0, H = 0, n = u.length; H < n; H++)
          i += u[H].length;
        for (f = new Uint8Array(i), p = 0, H = 0, n = u.length; H < n; H++)
          D = u[H], f.set(D, p), p += D.length;
        return f;
      }
    }, X = {
      arraySet: function(u, H, n, i, p) {
        for (var D = 0; D < i; D++)
          u[p + D] = H[n + D];
      },
      // Join array of chunks to single array.
      flattenChunks: function(u) {
        return [].concat.apply([], u);
      }
    };
    o.setTyped = function(u) {
      u ? (o.Buf8 = Uint8Array, o.Buf16 = Uint16Array, o.Buf32 = Int32Array, o.assign(o, b)) : (o.Buf8 = Array, o.Buf16 = Array, o.Buf32 = Array, o.assign(o, X));
    }, o.setTyped(l);
  }(dt)), dt;
}
var fe = {}, Ae = {}, ce = {}, xn;
function XB() {
  if (xn) return ce;
  xn = 1;
  var o = oe(), l = 4, y = 0, b = 1, X = 2;
  function u(B) {
    for (var k = B.length; --k >= 0; )
      B[k] = 0;
  }
  var H = 0, n = 1, i = 2, p = 3, D = 258, f = 29, Y = 256, c = Y + 1 + f, w = 30, V = 19, I = 2 * c + 1, s = 15, C = 16, x = 7, U = 256, N = 16, q = 17, L = 18, $ = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), GA = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), _ = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), AA = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], aA = 512, K = new Array((c + 2) * 2);
  u(K);
  var fA = new Array(w * 2);
  u(fA);
  var bA = new Array(aA);
  u(bA);
  var xA = new Array(D - p + 1);
  u(xA);
  var HA = new Array(f);
  u(HA);
  var oA = new Array(w);
  u(oA);
  function FA(B, k, O, IA, J) {
    this.static_tree = B, this.extra_bits = k, this.extra_base = O, this.elems = IA, this.max_length = J, this.has_stree = B && B.length;
  }
  var v, a, Z;
  function m(B, k) {
    this.dyn_tree = B, this.max_code = 0, this.stat_desc = k;
  }
  function z(B) {
    return B < 256 ? bA[B] : bA[256 + (B >>> 7)];
  }
  function sA(B, k) {
    B.pending_buf[B.pending++] = k & 255, B.pending_buf[B.pending++] = k >>> 8 & 255;
  }
  function cA(B, k, O) {
    B.bi_valid > C - O ? (B.bi_buf |= k << B.bi_valid & 65535, sA(B, B.bi_buf), B.bi_buf = k >> C - B.bi_valid, B.bi_valid += O - C) : (B.bi_buf |= k << B.bi_valid & 65535, B.bi_valid += O);
  }
  function QA(B, k, O) {
    cA(
      B,
      O[k * 2],
      O[k * 2 + 1]
      /*.Len*/
    );
  }
  function P(B, k) {
    var O = 0;
    do
      O |= B & 1, B >>>= 1, O <<= 1;
    while (--k > 0);
    return O >>> 1;
  }
  function eA(B) {
    B.bi_valid === 16 ? (sA(B, B.bi_buf), B.bi_buf = 0, B.bi_valid = 0) : B.bi_valid >= 8 && (B.pending_buf[B.pending++] = B.bi_buf & 255, B.bi_buf >>= 8, B.bi_valid -= 8);
  }
  function iA(B, k) {
    var O = k.dyn_tree, IA = k.max_code, J = k.stat_desc.static_tree, gA = k.stat_desc.has_stree, Q = k.stat_desc.extra_bits, uA = k.stat_desc.extra_base, yA = k.stat_desc.max_length, t, BA, lA, F, j, tA, mA = 0;
    for (F = 0; F <= s; F++)
      B.bl_count[F] = 0;
    for (O[B.heap[B.heap_max] * 2 + 1] = 0, t = B.heap_max + 1; t < I; t++)
      BA = B.heap[t], F = O[O[BA * 2 + 1] * 2 + 1] + 1, F > yA && (F = yA, mA++), O[BA * 2 + 1] = F, !(BA > IA) && (B.bl_count[F]++, j = 0, BA >= uA && (j = Q[BA - uA]), tA = O[BA * 2], B.opt_len += tA * (F + j), gA && (B.static_len += tA * (J[BA * 2 + 1] + j)));
    if (mA !== 0) {
      do {
        for (F = yA - 1; B.bl_count[F] === 0; )
          F--;
        B.bl_count[F]--, B.bl_count[F + 1] += 2, B.bl_count[yA]--, mA -= 2;
      } while (mA > 0);
      for (F = yA; F !== 0; F--)
        for (BA = B.bl_count[F]; BA !== 0; )
          lA = B.heap[--t], !(lA > IA) && (O[lA * 2 + 1] !== F && (B.opt_len += (F - O[lA * 2 + 1]) * O[lA * 2], O[lA * 2 + 1] = F), BA--);
    }
  }
  function pA(B, k, O) {
    var IA = new Array(s + 1), J = 0, gA, Q;
    for (gA = 1; gA <= s; gA++)
      IA[gA] = J = J + O[gA - 1] << 1;
    for (Q = 0; Q <= k; Q++) {
      var uA = B[Q * 2 + 1];
      uA !== 0 && (B[Q * 2] = P(IA[uA]++, uA));
    }
  }
  function dA() {
    var B, k, O, IA, J, gA = new Array(s + 1);
    for (O = 0, IA = 0; IA < f - 1; IA++)
      for (HA[IA] = O, B = 0; B < 1 << $[IA]; B++)
        xA[O++] = IA;
    for (xA[O - 1] = IA, J = 0, IA = 0; IA < 16; IA++)
      for (oA[IA] = J, B = 0; B < 1 << GA[IA]; B++)
        bA[J++] = IA;
    for (J >>= 7; IA < w; IA++)
      for (oA[IA] = J << 7, B = 0; B < 1 << GA[IA] - 7; B++)
        bA[256 + J++] = IA;
    for (k = 0; k <= s; k++)
      gA[k] = 0;
    for (B = 0; B <= 143; )
      K[B * 2 + 1] = 8, B++, gA[8]++;
    for (; B <= 255; )
      K[B * 2 + 1] = 9, B++, gA[9]++;
    for (; B <= 279; )
      K[B * 2 + 1] = 7, B++, gA[7]++;
    for (; B <= 287; )
      K[B * 2 + 1] = 8, B++, gA[8]++;
    for (pA(K, c + 1, gA), B = 0; B < w; B++)
      fA[B * 2 + 1] = 5, fA[B * 2] = P(B, 5);
    v = new FA(K, $, Y + 1, c, s), a = new FA(fA, GA, 0, w, s), Z = new FA(new Array(0), _, 0, V, x);
  }
  function S(B) {
    var k;
    for (k = 0; k < c; k++)
      B.dyn_ltree[k * 2] = 0;
    for (k = 0; k < w; k++)
      B.dyn_dtree[k * 2] = 0;
    for (k = 0; k < V; k++)
      B.bl_tree[k * 2] = 0;
    B.dyn_ltree[U * 2] = 1, B.opt_len = B.static_len = 0, B.last_lit = B.matches = 0;
  }
  function T(B) {
    B.bi_valid > 8 ? sA(B, B.bi_buf) : B.bi_valid > 0 && (B.pending_buf[B.pending++] = B.bi_buf), B.bi_buf = 0, B.bi_valid = 0;
  }
  function nA(B, k, O, IA) {
    T(B), sA(B, O), sA(B, ~O), o.arraySet(B.pending_buf, B.window, k, O, B.pending), B.pending += O;
  }
  function EA(B, k, O, IA) {
    var J = k * 2, gA = O * 2;
    return B[J] < B[gA] || B[J] === B[gA] && IA[k] <= IA[O];
  }
  function hA(B, k, O) {
    for (var IA = B.heap[O], J = O << 1; J <= B.heap_len && (J < B.heap_len && EA(k, B.heap[J + 1], B.heap[J], B.depth) && J++, !EA(k, IA, B.heap[J], B.depth)); )
      B.heap[O] = B.heap[J], O = J, J <<= 1;
    B.heap[O] = IA;
  }
  function d(B, k, O) {
    var IA, J, gA = 0, Q, uA;
    if (B.last_lit !== 0)
      do
        IA = B.pending_buf[B.d_buf + gA * 2] << 8 | B.pending_buf[B.d_buf + gA * 2 + 1], J = B.pending_buf[B.l_buf + gA], gA++, IA === 0 ? QA(B, J, k) : (Q = xA[J], QA(B, Q + Y + 1, k), uA = $[Q], uA !== 0 && (J -= HA[Q], cA(B, J, uA)), IA--, Q = z(IA), QA(B, Q, O), uA = GA[Q], uA !== 0 && (IA -= oA[Q], cA(B, IA, uA)));
      while (gA < B.last_lit);
    QA(B, U, k);
  }
  function A(B, k) {
    var O = k.dyn_tree, IA = k.stat_desc.static_tree, J = k.stat_desc.has_stree, gA = k.stat_desc.elems, Q, uA, yA = -1, t;
    for (B.heap_len = 0, B.heap_max = I, Q = 0; Q < gA; Q++)
      O[Q * 2] !== 0 ? (B.heap[++B.heap_len] = yA = Q, B.depth[Q] = 0) : O[Q * 2 + 1] = 0;
    for (; B.heap_len < 2; )
      t = B.heap[++B.heap_len] = yA < 2 ? ++yA : 0, O[t * 2] = 1, B.depth[t] = 0, B.opt_len--, J && (B.static_len -= IA[t * 2 + 1]);
    for (k.max_code = yA, Q = B.heap_len >> 1; Q >= 1; Q--)
      hA(B, O, Q);
    t = gA;
    do
      Q = B.heap[
        1
        /*SMALLEST*/
      ], B.heap[
        1
        /*SMALLEST*/
      ] = B.heap[B.heap_len--], hA(
        B,
        O,
        1
        /*SMALLEST*/
      ), uA = B.heap[
        1
        /*SMALLEST*/
      ], B.heap[--B.heap_max] = Q, B.heap[--B.heap_max] = uA, O[t * 2] = O[Q * 2] + O[uA * 2], B.depth[t] = (B.depth[Q] >= B.depth[uA] ? B.depth[Q] : B.depth[uA]) + 1, O[Q * 2 + 1] = O[uA * 2 + 1] = t, B.heap[
        1
        /*SMALLEST*/
      ] = t++, hA(
        B,
        O,
        1
        /*SMALLEST*/
      );
    while (B.heap_len >= 2);
    B.heap[--B.heap_max] = B.heap[
      1
      /*SMALLEST*/
    ], iA(B, k), pA(O, yA, B.bl_count);
  }
  function r(B, k, O) {
    var IA, J = -1, gA, Q = k[0 * 2 + 1], uA = 0, yA = 7, t = 4;
    for (Q === 0 && (yA = 138, t = 3), k[(O + 1) * 2 + 1] = 65535, IA = 0; IA <= O; IA++)
      gA = Q, Q = k[(IA + 1) * 2 + 1], !(++uA < yA && gA === Q) && (uA < t ? B.bl_tree[gA * 2] += uA : gA !== 0 ? (gA !== J && B.bl_tree[gA * 2]++, B.bl_tree[N * 2]++) : uA <= 10 ? B.bl_tree[q * 2]++ : B.bl_tree[L * 2]++, uA = 0, J = gA, Q === 0 ? (yA = 138, t = 3) : gA === Q ? (yA = 6, t = 3) : (yA = 7, t = 4));
  }
  function E(B, k, O) {
    var IA, J = -1, gA, Q = k[0 * 2 + 1], uA = 0, yA = 7, t = 4;
    for (Q === 0 && (yA = 138, t = 3), IA = 0; IA <= O; IA++)
      if (gA = Q, Q = k[(IA + 1) * 2 + 1], !(++uA < yA && gA === Q)) {
        if (uA < t)
          do
            QA(B, gA, B.bl_tree);
          while (--uA !== 0);
        else gA !== 0 ? (gA !== J && (QA(B, gA, B.bl_tree), uA--), QA(B, N, B.bl_tree), cA(B, uA - 3, 2)) : uA <= 10 ? (QA(B, q, B.bl_tree), cA(B, uA - 3, 3)) : (QA(B, L, B.bl_tree), cA(B, uA - 11, 7));
        uA = 0, J = gA, Q === 0 ? (yA = 138, t = 3) : gA === Q ? (yA = 6, t = 3) : (yA = 7, t = 4);
      }
  }
  function W(B) {
    var k;
    for (r(B, B.dyn_ltree, B.l_desc.max_code), r(B, B.dyn_dtree, B.d_desc.max_code), A(B, B.bl_desc), k = V - 1; k >= 3 && B.bl_tree[AA[k] * 2 + 1] === 0; k--)
      ;
    return B.opt_len += 3 * (k + 1) + 5 + 5 + 4, k;
  }
  function rA(B, k, O, IA) {
    var J;
    for (cA(B, k - 257, 5), cA(B, O - 1, 5), cA(B, IA - 4, 4), J = 0; J < IA; J++)
      cA(B, B.bl_tree[AA[J] * 2 + 1], 3);
    E(B, B.dyn_ltree, k - 1), E(B, B.dyn_dtree, O - 1);
  }
  function CA(B) {
    var k = 4093624447, O;
    for (O = 0; O <= 31; O++, k >>>= 1)
      if (k & 1 && B.dyn_ltree[O * 2] !== 0)
        return y;
    if (B.dyn_ltree[9 * 2] !== 0 || B.dyn_ltree[10 * 2] !== 0 || B.dyn_ltree[13 * 2] !== 0)
      return b;
    for (O = 32; O < Y; O++)
      if (B.dyn_ltree[O * 2] !== 0)
        return b;
    return y;
  }
  var ZA = !1;
  function MA(B) {
    ZA || (dA(), ZA = !0), B.l_desc = new m(B.dyn_ltree, v), B.d_desc = new m(B.dyn_dtree, a), B.bl_desc = new m(B.bl_tree, Z), B.bi_buf = 0, B.bi_valid = 0, S(B);
  }
  function h(B, k, O, IA) {
    cA(B, (H << 1) + (IA ? 1 : 0), 3), nA(B, k, O);
  }
  function e(B) {
    cA(B, n << 1, 3), QA(B, U, K), eA(B);
  }
  function g(B, k, O, IA) {
    var J, gA, Q = 0;
    B.level > 0 ? (B.strm.data_type === X && (B.strm.data_type = CA(B)), A(B, B.l_desc), A(B, B.d_desc), Q = W(B), J = B.opt_len + 3 + 7 >>> 3, gA = B.static_len + 3 + 7 >>> 3, gA <= J && (J = gA)) : J = gA = O + 5, O + 4 <= J && k !== -1 ? h(B, k, O, IA) : B.strategy === l || gA === J ? (cA(B, (n << 1) + (IA ? 1 : 0), 3), d(B, K, fA)) : (cA(B, (i << 1) + (IA ? 1 : 0), 3), rA(B, B.l_desc.max_code + 1, B.d_desc.max_code + 1, Q + 1), d(B, B.dyn_ltree, B.dyn_dtree)), S(B), IA && T(B);
  }
  function R(B, k, O) {
    return B.pending_buf[B.d_buf + B.last_lit * 2] = k >>> 8 & 255, B.pending_buf[B.d_buf + B.last_lit * 2 + 1] = k & 255, B.pending_buf[B.l_buf + B.last_lit] = O & 255, B.last_lit++, k === 0 ? B.dyn_ltree[O * 2]++ : (B.matches++, k--, B.dyn_ltree[(xA[O] + Y + 1) * 2]++, B.dyn_dtree[z(k) * 2]++), B.last_lit === B.lit_bufsize - 1;
  }
  return ce._tr_init = MA, ce._tr_stored_block = h, ce._tr_flush_block = g, ce._tr_tally = R, ce._tr_align = e, ce;
}
var wt, mn;
function lr() {
  if (mn) return wt;
  mn = 1;
  function o(l, y, b, X) {
    for (var u = l & 65535 | 0, H = l >>> 16 & 65535 | 0, n = 0; b !== 0; ) {
      n = b > 2e3 ? 2e3 : b, b -= n;
      do
        u = u + y[X++] | 0, H = H + u | 0;
      while (--n);
      u %= 65521, H %= 65521;
    }
    return u | H << 16 | 0;
  }
  return wt = o, wt;
}
var Qt, yn;
function cr() {
  if (yn) return Qt;
  yn = 1;
  function o() {
    for (var b, X = [], u = 0; u < 256; u++) {
      b = u;
      for (var H = 0; H < 8; H++)
        b = b & 1 ? 3988292384 ^ b >>> 1 : b >>> 1;
      X[u] = b;
    }
    return X;
  }
  var l = o();
  function y(b, X, u, H) {
    var n = l, i = H + u;
    b ^= -1;
    for (var p = H; p < i; p++)
      b = b >>> 8 ^ n[(b ^ X[p]) & 255];
    return b ^ -1;
  }
  return Qt = y, Qt;
}
var ht, Vn;
function Vt() {
  return Vn || (Vn = 1, ht = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), ht;
}
var Mn;
function kB() {
  if (Mn) return Ae;
  Mn = 1;
  var o = oe(), l = XB(), y = lr(), b = cr(), X = Vt(), u = 0, H = 1, n = 3, i = 4, p = 5, D = 0, f = 1, Y = -2, c = -3, w = -5, V = -1, I = 1, s = 2, C = 3, x = 4, U = 0, N = 2, q = 8, L = 9, $ = 15, GA = 8, _ = 29, AA = 256, aA = AA + 1 + _, K = 30, fA = 19, bA = 2 * aA + 1, xA = 15, HA = 3, oA = 258, FA = oA + HA + 1, v = 32, a = 42, Z = 69, m = 73, z = 91, sA = 103, cA = 113, QA = 666, P = 1, eA = 2, iA = 3, pA = 4, dA = 3;
  function S(t, BA) {
    return t.msg = X[BA], BA;
  }
  function T(t) {
    return (t << 1) - (t > 4 ? 9 : 0);
  }
  function nA(t) {
    for (var BA = t.length; --BA >= 0; )
      t[BA] = 0;
  }
  function EA(t) {
    var BA = t.state, lA = BA.pending;
    lA > t.avail_out && (lA = t.avail_out), lA !== 0 && (o.arraySet(t.output, BA.pending_buf, BA.pending_out, lA, t.next_out), t.next_out += lA, BA.pending_out += lA, t.total_out += lA, t.avail_out -= lA, BA.pending -= lA, BA.pending === 0 && (BA.pending_out = 0));
  }
  function hA(t, BA) {
    l._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, BA), t.block_start = t.strstart, EA(t.strm);
  }
  function d(t, BA) {
    t.pending_buf[t.pending++] = BA;
  }
  function A(t, BA) {
    t.pending_buf[t.pending++] = BA >>> 8 & 255, t.pending_buf[t.pending++] = BA & 255;
  }
  function r(t, BA, lA, F) {
    var j = t.avail_in;
    return j > F && (j = F), j === 0 ? 0 : (t.avail_in -= j, o.arraySet(BA, t.input, t.next_in, j, lA), t.state.wrap === 1 ? t.adler = y(t.adler, BA, j, lA) : t.state.wrap === 2 && (t.adler = b(t.adler, BA, j, lA)), t.next_in += j, t.total_in += j, j);
  }
  function E(t, BA) {
    var lA = t.max_chain_length, F = t.strstart, j, tA, mA = t.prev_length, G = t.nice_match, M = t.strstart > t.w_size - FA ? t.strstart - (t.w_size - FA) : 0, wA = t.window, YA = t.w_mask, DA = t.prev, VA = t.strstart + oA, WA = wA[F + mA - 1], SA = wA[F + mA];
    t.prev_length >= t.good_match && (lA >>= 2), G > t.lookahead && (G = t.lookahead);
    do
      if (j = BA, !(wA[j + mA] !== SA || wA[j + mA - 1] !== WA || wA[j] !== wA[F] || wA[++j] !== wA[F + 1])) {
        F += 2, j++;
        do
          ;
        while (wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && wA[++F] === wA[++j] && F < VA);
        if (tA = oA - (VA - F), F = VA - oA, tA > mA) {
          if (t.match_start = BA, mA = tA, tA >= G)
            break;
          WA = wA[F + mA - 1], SA = wA[F + mA];
        }
      }
    while ((BA = DA[BA & YA]) > M && --lA !== 0);
    return mA <= t.lookahead ? mA : t.lookahead;
  }
  function W(t) {
    var BA = t.w_size, lA, F, j, tA, mA;
    do {
      if (tA = t.window_size - t.lookahead - t.strstart, t.strstart >= BA + (BA - FA)) {
        o.arraySet(t.window, t.window, BA, BA, 0), t.match_start -= BA, t.strstart -= BA, t.block_start -= BA, F = t.hash_size, lA = F;
        do
          j = t.head[--lA], t.head[lA] = j >= BA ? j - BA : 0;
        while (--F);
        F = BA, lA = F;
        do
          j = t.prev[--lA], t.prev[lA] = j >= BA ? j - BA : 0;
        while (--F);
        tA += BA;
      }
      if (t.strm.avail_in === 0)
        break;
      if (F = r(t.strm, t.window, t.strstart + t.lookahead, tA), t.lookahead += F, t.lookahead + t.insert >= HA)
        for (mA = t.strstart - t.insert, t.ins_h = t.window[mA], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[mA + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[mA + HA - 1]) & t.hash_mask, t.prev[mA & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = mA, mA++, t.insert--, !(t.lookahead + t.insert < HA)); )
          ;
    } while (t.lookahead < FA && t.strm.avail_in !== 0);
  }
  function rA(t, BA) {
    var lA = 65535;
    for (lA > t.pending_buf_size - 5 && (lA = t.pending_buf_size - 5); ; ) {
      if (t.lookahead <= 1) {
        if (W(t), t.lookahead === 0 && BA === u)
          return P;
        if (t.lookahead === 0)
          break;
      }
      t.strstart += t.lookahead, t.lookahead = 0;
      var F = t.block_start + lA;
      if ((t.strstart === 0 || t.strstart >= F) && (t.lookahead = t.strstart - F, t.strstart = F, hA(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - FA && (hA(t, !1), t.strm.avail_out === 0))
        return P;
    }
    return t.insert = 0, BA === i ? (hA(t, !0), t.strm.avail_out === 0 ? iA : pA) : (t.strstart > t.block_start && (hA(t, !1), t.strm.avail_out === 0), P);
  }
  function CA(t, BA) {
    for (var lA, F; ; ) {
      if (t.lookahead < FA) {
        if (W(t), t.lookahead < FA && BA === u)
          return P;
        if (t.lookahead === 0)
          break;
      }
      if (lA = 0, t.lookahead >= HA && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + HA - 1]) & t.hash_mask, lA = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), lA !== 0 && t.strstart - lA <= t.w_size - FA && (t.match_length = E(t, lA)), t.match_length >= HA)
        if (F = l._tr_tally(t, t.strstart - t.match_start, t.match_length - HA), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= HA) {
          t.match_length--;
          do
            t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + HA - 1]) & t.hash_mask, lA = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
          while (--t.match_length !== 0);
          t.strstart++;
        } else
          t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
      else
        F = l._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
      if (F && (hA(t, !1), t.strm.avail_out === 0))
        return P;
    }
    return t.insert = t.strstart < HA - 1 ? t.strstart : HA - 1, BA === i ? (hA(t, !0), t.strm.avail_out === 0 ? iA : pA) : t.last_lit && (hA(t, !1), t.strm.avail_out === 0) ? P : eA;
  }
  function ZA(t, BA) {
    for (var lA, F, j; ; ) {
      if (t.lookahead < FA) {
        if (W(t), t.lookahead < FA && BA === u)
          return P;
        if (t.lookahead === 0)
          break;
      }
      if (lA = 0, t.lookahead >= HA && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + HA - 1]) & t.hash_mask, lA = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = HA - 1, lA !== 0 && t.prev_length < t.max_lazy_match && t.strstart - lA <= t.w_size - FA && (t.match_length = E(t, lA), t.match_length <= 5 && (t.strategy === I || t.match_length === HA && t.strstart - t.match_start > 4096) && (t.match_length = HA - 1)), t.prev_length >= HA && t.match_length <= t.prev_length) {
        j = t.strstart + t.lookahead - HA, F = l._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - HA), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
        do
          ++t.strstart <= j && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + HA - 1]) & t.hash_mask, lA = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
        while (--t.prev_length !== 0);
        if (t.match_available = 0, t.match_length = HA - 1, t.strstart++, F && (hA(t, !1), t.strm.avail_out === 0))
          return P;
      } else if (t.match_available) {
        if (F = l._tr_tally(t, 0, t.window[t.strstart - 1]), F && hA(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
          return P;
      } else
        t.match_available = 1, t.strstart++, t.lookahead--;
    }
    return t.match_available && (F = l._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < HA - 1 ? t.strstart : HA - 1, BA === i ? (hA(t, !0), t.strm.avail_out === 0 ? iA : pA) : t.last_lit && (hA(t, !1), t.strm.avail_out === 0) ? P : eA;
  }
  function MA(t, BA) {
    for (var lA, F, j, tA, mA = t.window; ; ) {
      if (t.lookahead <= oA) {
        if (W(t), t.lookahead <= oA && BA === u)
          return P;
        if (t.lookahead === 0)
          break;
      }
      if (t.match_length = 0, t.lookahead >= HA && t.strstart > 0 && (j = t.strstart - 1, F = mA[j], F === mA[++j] && F === mA[++j] && F === mA[++j])) {
        tA = t.strstart + oA;
        do
          ;
        while (F === mA[++j] && F === mA[++j] && F === mA[++j] && F === mA[++j] && F === mA[++j] && F === mA[++j] && F === mA[++j] && F === mA[++j] && j < tA);
        t.match_length = oA - (tA - j), t.match_length > t.lookahead && (t.match_length = t.lookahead);
      }
      if (t.match_length >= HA ? (lA = l._tr_tally(t, 1, t.match_length - HA), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (lA = l._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), lA && (hA(t, !1), t.strm.avail_out === 0))
        return P;
    }
    return t.insert = 0, BA === i ? (hA(t, !0), t.strm.avail_out === 0 ? iA : pA) : t.last_lit && (hA(t, !1), t.strm.avail_out === 0) ? P : eA;
  }
  function h(t, BA) {
    for (var lA; ; ) {
      if (t.lookahead === 0 && (W(t), t.lookahead === 0)) {
        if (BA === u)
          return P;
        break;
      }
      if (t.match_length = 0, lA = l._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, lA && (hA(t, !1), t.strm.avail_out === 0))
        return P;
    }
    return t.insert = 0, BA === i ? (hA(t, !0), t.strm.avail_out === 0 ? iA : pA) : t.last_lit && (hA(t, !1), t.strm.avail_out === 0) ? P : eA;
  }
  function e(t, BA, lA, F, j) {
    this.good_length = t, this.max_lazy = BA, this.nice_length = lA, this.max_chain = F, this.func = j;
  }
  var g;
  g = [
    /*      good lazy nice chain */
    new e(0, 0, 0, 0, rA),
    /* 0 store only */
    new e(4, 4, 8, 4, CA),
    /* 1 max speed, no lazy matches */
    new e(4, 5, 16, 8, CA),
    /* 2 */
    new e(4, 6, 32, 32, CA),
    /* 3 */
    new e(4, 4, 16, 16, ZA),
    /* 4 lazy matches */
    new e(8, 16, 32, 32, ZA),
    /* 5 */
    new e(8, 16, 128, 128, ZA),
    /* 6 */
    new e(8, 32, 128, 256, ZA),
    /* 7 */
    new e(32, 128, 258, 1024, ZA),
    /* 8 */
    new e(32, 258, 258, 4096, ZA)
    /* 9 max compression */
  ];
  function R(t) {
    t.window_size = 2 * t.w_size, nA(t.head), t.max_lazy_match = g[t.level].max_lazy, t.good_match = g[t.level].good_length, t.nice_match = g[t.level].nice_length, t.max_chain_length = g[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = HA - 1, t.match_available = 0, t.ins_h = 0;
  }
  function B() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = q, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(bA * 2), this.dyn_dtree = new o.Buf16((2 * K + 1) * 2), this.bl_tree = new o.Buf16((2 * fA + 1) * 2), nA(this.dyn_ltree), nA(this.dyn_dtree), nA(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(xA + 1), this.heap = new o.Buf16(2 * aA + 1), nA(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * aA + 1), nA(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function k(t) {
    var BA;
    return !t || !t.state ? S(t, Y) : (t.total_in = t.total_out = 0, t.data_type = N, BA = t.state, BA.pending = 0, BA.pending_out = 0, BA.wrap < 0 && (BA.wrap = -BA.wrap), BA.status = BA.wrap ? a : cA, t.adler = BA.wrap === 2 ? 0 : 1, BA.last_flush = u, l._tr_init(BA), D);
  }
  function O(t) {
    var BA = k(t);
    return BA === D && R(t.state), BA;
  }
  function IA(t, BA) {
    return !t || !t.state || t.state.wrap !== 2 ? Y : (t.state.gzhead = BA, D);
  }
  function J(t, BA, lA, F, j, tA) {
    if (!t)
      return Y;
    var mA = 1;
    if (BA === V && (BA = 6), F < 0 ? (mA = 0, F = -F) : F > 15 && (mA = 2, F -= 16), j < 1 || j > L || lA !== q || F < 8 || F > 15 || BA < 0 || BA > 9 || tA < 0 || tA > x)
      return S(t, Y);
    F === 8 && (F = 9);
    var G = new B();
    return t.state = G, G.strm = t, G.wrap = mA, G.gzhead = null, G.w_bits = F, G.w_size = 1 << G.w_bits, G.w_mask = G.w_size - 1, G.hash_bits = j + 7, G.hash_size = 1 << G.hash_bits, G.hash_mask = G.hash_size - 1, G.hash_shift = ~~((G.hash_bits + HA - 1) / HA), G.window = new o.Buf8(G.w_size * 2), G.head = new o.Buf16(G.hash_size), G.prev = new o.Buf16(G.w_size), G.lit_bufsize = 1 << j + 6, G.pending_buf_size = G.lit_bufsize * 4, G.pending_buf = new o.Buf8(G.pending_buf_size), G.d_buf = 1 * G.lit_bufsize, G.l_buf = 3 * G.lit_bufsize, G.level = BA, G.strategy = tA, G.method = lA, O(t);
  }
  function gA(t, BA) {
    return J(t, BA, q, $, GA, U);
  }
  function Q(t, BA) {
    var lA, F, j, tA;
    if (!t || !t.state || BA > p || BA < 0)
      return t ? S(t, Y) : Y;
    if (F = t.state, !t.output || !t.input && t.avail_in !== 0 || F.status === QA && BA !== i)
      return S(t, t.avail_out === 0 ? w : Y);
    if (F.strm = t, lA = F.last_flush, F.last_flush = BA, F.status === a)
      if (F.wrap === 2)
        t.adler = 0, d(F, 31), d(F, 139), d(F, 8), F.gzhead ? (d(
          F,
          (F.gzhead.text ? 1 : 0) + (F.gzhead.hcrc ? 2 : 0) + (F.gzhead.extra ? 4 : 0) + (F.gzhead.name ? 8 : 0) + (F.gzhead.comment ? 16 : 0)
        ), d(F, F.gzhead.time & 255), d(F, F.gzhead.time >> 8 & 255), d(F, F.gzhead.time >> 16 & 255), d(F, F.gzhead.time >> 24 & 255), d(F, F.level === 9 ? 2 : F.strategy >= s || F.level < 2 ? 4 : 0), d(F, F.gzhead.os & 255), F.gzhead.extra && F.gzhead.extra.length && (d(F, F.gzhead.extra.length & 255), d(F, F.gzhead.extra.length >> 8 & 255)), F.gzhead.hcrc && (t.adler = b(t.adler, F.pending_buf, F.pending, 0)), F.gzindex = 0, F.status = Z) : (d(F, 0), d(F, 0), d(F, 0), d(F, 0), d(F, 0), d(F, F.level === 9 ? 2 : F.strategy >= s || F.level < 2 ? 4 : 0), d(F, dA), F.status = cA);
      else {
        var mA = q + (F.w_bits - 8 << 4) << 8, G = -1;
        F.strategy >= s || F.level < 2 ? G = 0 : F.level < 6 ? G = 1 : F.level === 6 ? G = 2 : G = 3, mA |= G << 6, F.strstart !== 0 && (mA |= v), mA += 31 - mA % 31, F.status = cA, A(F, mA), F.strstart !== 0 && (A(F, t.adler >>> 16), A(F, t.adler & 65535)), t.adler = 1;
      }
    if (F.status === Z)
      if (F.gzhead.extra) {
        for (j = F.pending; F.gzindex < (F.gzhead.extra.length & 65535) && !(F.pending === F.pending_buf_size && (F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), EA(t), j = F.pending, F.pending === F.pending_buf_size)); )
          d(F, F.gzhead.extra[F.gzindex] & 255), F.gzindex++;
        F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), F.gzindex === F.gzhead.extra.length && (F.gzindex = 0, F.status = m);
      } else
        F.status = m;
    if (F.status === m)
      if (F.gzhead.name) {
        j = F.pending;
        do {
          if (F.pending === F.pending_buf_size && (F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), EA(t), j = F.pending, F.pending === F.pending_buf_size)) {
            tA = 1;
            break;
          }
          F.gzindex < F.gzhead.name.length ? tA = F.gzhead.name.charCodeAt(F.gzindex++) & 255 : tA = 0, d(F, tA);
        } while (tA !== 0);
        F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), tA === 0 && (F.gzindex = 0, F.status = z);
      } else
        F.status = z;
    if (F.status === z)
      if (F.gzhead.comment) {
        j = F.pending;
        do {
          if (F.pending === F.pending_buf_size && (F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), EA(t), j = F.pending, F.pending === F.pending_buf_size)) {
            tA = 1;
            break;
          }
          F.gzindex < F.gzhead.comment.length ? tA = F.gzhead.comment.charCodeAt(F.gzindex++) & 255 : tA = 0, d(F, tA);
        } while (tA !== 0);
        F.gzhead.hcrc && F.pending > j && (t.adler = b(t.adler, F.pending_buf, F.pending - j, j)), tA === 0 && (F.status = sA);
      } else
        F.status = sA;
    if (F.status === sA && (F.gzhead.hcrc ? (F.pending + 2 > F.pending_buf_size && EA(t), F.pending + 2 <= F.pending_buf_size && (d(F, t.adler & 255), d(F, t.adler >> 8 & 255), t.adler = 0, F.status = cA)) : F.status = cA), F.pending !== 0) {
      if (EA(t), t.avail_out === 0)
        return F.last_flush = -1, D;
    } else if (t.avail_in === 0 && T(BA) <= T(lA) && BA !== i)
      return S(t, w);
    if (F.status === QA && t.avail_in !== 0)
      return S(t, w);
    if (t.avail_in !== 0 || F.lookahead !== 0 || BA !== u && F.status !== QA) {
      var M = F.strategy === s ? h(F, BA) : F.strategy === C ? MA(F, BA) : g[F.level].func(F, BA);
      if ((M === iA || M === pA) && (F.status = QA), M === P || M === iA)
        return t.avail_out === 0 && (F.last_flush = -1), D;
      if (M === eA && (BA === H ? l._tr_align(F) : BA !== p && (l._tr_stored_block(F, 0, 0, !1), BA === n && (nA(F.head), F.lookahead === 0 && (F.strstart = 0, F.block_start = 0, F.insert = 0))), EA(t), t.avail_out === 0))
        return F.last_flush = -1, D;
    }
    return BA !== i ? D : F.wrap <= 0 ? f : (F.wrap === 2 ? (d(F, t.adler & 255), d(F, t.adler >> 8 & 255), d(F, t.adler >> 16 & 255), d(F, t.adler >> 24 & 255), d(F, t.total_in & 255), d(F, t.total_in >> 8 & 255), d(F, t.total_in >> 16 & 255), d(F, t.total_in >> 24 & 255)) : (A(F, t.adler >>> 16), A(F, t.adler & 65535)), EA(t), F.wrap > 0 && (F.wrap = -F.wrap), F.pending !== 0 ? D : f);
  }
  function uA(t) {
    var BA;
    return !t || !t.state ? Y : (BA = t.state.status, BA !== a && BA !== Z && BA !== m && BA !== z && BA !== sA && BA !== cA && BA !== QA ? S(t, Y) : (t.state = null, BA === cA ? S(t, c) : D));
  }
  function yA(t, BA) {
    var lA = BA.length, F, j, tA, mA, G, M, wA, YA;
    if (!t || !t.state || (F = t.state, mA = F.wrap, mA === 2 || mA === 1 && F.status !== a || F.lookahead))
      return Y;
    for (mA === 1 && (t.adler = y(t.adler, BA, lA, 0)), F.wrap = 0, lA >= F.w_size && (mA === 0 && (nA(F.head), F.strstart = 0, F.block_start = 0, F.insert = 0), YA = new o.Buf8(F.w_size), o.arraySet(YA, BA, lA - F.w_size, F.w_size, 0), BA = YA, lA = F.w_size), G = t.avail_in, M = t.next_in, wA = t.input, t.avail_in = lA, t.next_in = 0, t.input = BA, W(F); F.lookahead >= HA; ) {
      j = F.strstart, tA = F.lookahead - (HA - 1);
      do
        F.ins_h = (F.ins_h << F.hash_shift ^ F.window[j + HA - 1]) & F.hash_mask, F.prev[j & F.w_mask] = F.head[F.ins_h], F.head[F.ins_h] = j, j++;
      while (--tA);
      F.strstart = j, F.lookahead = HA - 1, W(F);
    }
    return F.strstart += F.lookahead, F.block_start = F.strstart, F.insert = F.lookahead, F.lookahead = 0, F.match_length = F.prev_length = HA - 1, F.match_available = 0, t.next_in = M, t.input = wA, t.avail_in = G, F.wrap = mA, D;
  }
  return Ae.deflateInit = gA, Ae.deflateInit2 = J, Ae.deflateReset = O, Ae.deflateResetKeep = k, Ae.deflateSetHeader = IA, Ae.deflate = Q, Ae.deflateEnd = uA, Ae.deflateSetDictionary = yA, Ae.deflateInfo = "pako deflate (from Nodeca project)", Ae;
}
var se = {}, Wn;
function sr() {
  if (Wn) return se;
  Wn = 1;
  var o = oe(), l = !0, y = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    l = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    y = !1;
  }
  for (var b = new o.Buf8(256), X = 0; X < 256; X++)
    b[X] = X >= 252 ? 6 : X >= 248 ? 5 : X >= 240 ? 4 : X >= 224 ? 3 : X >= 192 ? 2 : 1;
  b[254] = b[254] = 1, se.string2buf = function(H) {
    var n, i, p, D, f, Y = H.length, c = 0;
    for (D = 0; D < Y; D++)
      i = H.charCodeAt(D), (i & 64512) === 55296 && D + 1 < Y && (p = H.charCodeAt(D + 1), (p & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (p - 56320), D++)), c += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
    for (n = new o.Buf8(c), f = 0, D = 0; f < c; D++)
      i = H.charCodeAt(D), (i & 64512) === 55296 && D + 1 < Y && (p = H.charCodeAt(D + 1), (p & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (p - 56320), D++)), i < 128 ? n[f++] = i : i < 2048 ? (n[f++] = 192 | i >>> 6, n[f++] = 128 | i & 63) : i < 65536 ? (n[f++] = 224 | i >>> 12, n[f++] = 128 | i >>> 6 & 63, n[f++] = 128 | i & 63) : (n[f++] = 240 | i >>> 18, n[f++] = 128 | i >>> 12 & 63, n[f++] = 128 | i >>> 6 & 63, n[f++] = 128 | i & 63);
    return n;
  };
  function u(H, n) {
    if (n < 65534 && (H.subarray && y || !H.subarray && l))
      return String.fromCharCode.apply(null, o.shrinkBuf(H, n));
    for (var i = "", p = 0; p < n; p++)
      i += String.fromCharCode(H[p]);
    return i;
  }
  return se.buf2binstring = function(H) {
    return u(H, H.length);
  }, se.binstring2buf = function(H) {
    for (var n = new o.Buf8(H.length), i = 0, p = n.length; i < p; i++)
      n[i] = H.charCodeAt(i);
    return n;
  }, se.buf2string = function(H, n) {
    var i, p, D, f, Y = n || H.length, c = new Array(Y * 2);
    for (p = 0, i = 0; i < Y; ) {
      if (D = H[i++], D < 128) {
        c[p++] = D;
        continue;
      }
      if (f = b[D], f > 4) {
        c[p++] = 65533, i += f - 1;
        continue;
      }
      for (D &= f === 2 ? 31 : f === 3 ? 15 : 7; f > 1 && i < Y; )
        D = D << 6 | H[i++] & 63, f--;
      if (f > 1) {
        c[p++] = 65533;
        continue;
      }
      D < 65536 ? c[p++] = D : (D -= 65536, c[p++] = 55296 | D >> 10 & 1023, c[p++] = 56320 | D & 1023);
    }
    return u(c, p);
  }, se.utf8border = function(H, n) {
    var i;
    for (n = n || H.length, n > H.length && (n = H.length), i = n - 1; i >= 0 && (H[i] & 192) === 128; )
      i--;
    return i < 0 || i === 0 ? n : i + b[H[i]] > n ? i : n;
  }, se;
}
var ft, Un;
function ur() {
  if (Un) return ft;
  Un = 1;
  function o() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return ft = o, ft;
}
var Rn;
function vB() {
  if (Rn) return fe;
  Rn = 1;
  var o = kB(), l = oe(), y = sr(), b = Vt(), X = ur(), u = Object.prototype.toString, H = 0, n = 4, i = 0, p = 1, D = 2, f = -1, Y = 0, c = 8;
  function w(C) {
    if (!(this instanceof w)) return new w(C);
    this.options = l.assign({
      level: f,
      method: c,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: Y,
      to: ""
    }, C || {});
    var x = this.options;
    x.raw && x.windowBits > 0 ? x.windowBits = -x.windowBits : x.gzip && x.windowBits > 0 && x.windowBits < 16 && (x.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new X(), this.strm.avail_out = 0;
    var U = o.deflateInit2(
      this.strm,
      x.level,
      x.method,
      x.windowBits,
      x.memLevel,
      x.strategy
    );
    if (U !== i)
      throw new Error(b[U]);
    if (x.header && o.deflateSetHeader(this.strm, x.header), x.dictionary) {
      var N;
      if (typeof x.dictionary == "string" ? N = y.string2buf(x.dictionary) : u.call(x.dictionary) === "[object ArrayBuffer]" ? N = new Uint8Array(x.dictionary) : N = x.dictionary, U = o.deflateSetDictionary(this.strm, N), U !== i)
        throw new Error(b[U]);
      this._dict_set = !0;
    }
  }
  w.prototype.push = function(C, x) {
    var U = this.strm, N = this.options.chunkSize, q, L;
    if (this.ended)
      return !1;
    L = x === ~~x ? x : x === !0 ? n : H, typeof C == "string" ? U.input = y.string2buf(C) : u.call(C) === "[object ArrayBuffer]" ? U.input = new Uint8Array(C) : U.input = C, U.next_in = 0, U.avail_in = U.input.length;
    do {
      if (U.avail_out === 0 && (U.output = new l.Buf8(N), U.next_out = 0, U.avail_out = N), q = o.deflate(U, L), q !== p && q !== i)
        return this.onEnd(q), this.ended = !0, !1;
      (U.avail_out === 0 || U.avail_in === 0 && (L === n || L === D)) && (this.options.to === "string" ? this.onData(y.buf2binstring(l.shrinkBuf(U.output, U.next_out))) : this.onData(l.shrinkBuf(U.output, U.next_out)));
    } while ((U.avail_in > 0 || U.avail_out === 0) && q !== p);
    return L === n ? (q = o.deflateEnd(this.strm), this.onEnd(q), this.ended = !0, q === i) : (L === D && (this.onEnd(i), U.avail_out = 0), !0);
  }, w.prototype.onData = function(C) {
    this.chunks.push(C);
  }, w.prototype.onEnd = function(C) {
    C === i && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = l.flattenChunks(this.chunks)), this.chunks = [], this.err = C, this.msg = this.strm.msg;
  };
  function V(C, x) {
    var U = new w(x);
    if (U.push(C, !0), U.err)
      throw U.msg || b[U.err];
    return U.result;
  }
  function I(C, x) {
    return x = x || {}, x.raw = !0, V(C, x);
  }
  function s(C, x) {
    return x = x || {}, x.gzip = !0, V(C, x);
  }
  return fe.Deflate = w, fe.deflate = V, fe.deflateRaw = I, fe.gzip = s, fe;
}
var Ie = {}, qA = {}, It, Nn;
function SB() {
  if (Nn) return It;
  Nn = 1;
  var o = 30, l = 12;
  return It = function(b, X) {
    var u, H, n, i, p, D, f, Y, c, w, V, I, s, C, x, U, N, q, L, $, GA, _, AA, aA, K;
    u = b.state, H = b.next_in, aA = b.input, n = H + (b.avail_in - 5), i = b.next_out, K = b.output, p = i - (X - b.avail_out), D = i + (b.avail_out - 257), f = u.dmax, Y = u.wsize, c = u.whave, w = u.wnext, V = u.window, I = u.hold, s = u.bits, C = u.lencode, x = u.distcode, U = (1 << u.lenbits) - 1, N = (1 << u.distbits) - 1;
    A:
      do {
        s < 15 && (I += aA[H++] << s, s += 8, I += aA[H++] << s, s += 8), q = C[I & U];
        e:
          for (; ; ) {
            if (L = q >>> 24, I >>>= L, s -= L, L = q >>> 16 & 255, L === 0)
              K[i++] = q & 65535;
            else if (L & 16) {
              $ = q & 65535, L &= 15, L && (s < L && (I += aA[H++] << s, s += 8), $ += I & (1 << L) - 1, I >>>= L, s -= L), s < 15 && (I += aA[H++] << s, s += 8, I += aA[H++] << s, s += 8), q = x[I & N];
              t:
                for (; ; ) {
                  if (L = q >>> 24, I >>>= L, s -= L, L = q >>> 16 & 255, L & 16) {
                    if (GA = q & 65535, L &= 15, s < L && (I += aA[H++] << s, s += 8, s < L && (I += aA[H++] << s, s += 8)), GA += I & (1 << L) - 1, GA > f) {
                      b.msg = "invalid distance too far back", u.mode = o;
                      break A;
                    }
                    if (I >>>= L, s -= L, L = i - p, GA > L) {
                      if (L = GA - L, L > c && u.sane) {
                        b.msg = "invalid distance too far back", u.mode = o;
                        break A;
                      }
                      if (_ = 0, AA = V, w === 0) {
                        if (_ += Y - L, L < $) {
                          $ -= L;
                          do
                            K[i++] = V[_++];
                          while (--L);
                          _ = i - GA, AA = K;
                        }
                      } else if (w < L) {
                        if (_ += Y + w - L, L -= w, L < $) {
                          $ -= L;
                          do
                            K[i++] = V[_++];
                          while (--L);
                          if (_ = 0, w < $) {
                            L = w, $ -= L;
                            do
                              K[i++] = V[_++];
                            while (--L);
                            _ = i - GA, AA = K;
                          }
                        }
                      } else if (_ += w - L, L < $) {
                        $ -= L;
                        do
                          K[i++] = V[_++];
                        while (--L);
                        _ = i - GA, AA = K;
                      }
                      for (; $ > 2; )
                        K[i++] = AA[_++], K[i++] = AA[_++], K[i++] = AA[_++], $ -= 3;
                      $ && (K[i++] = AA[_++], $ > 1 && (K[i++] = AA[_++]));
                    } else {
                      _ = i - GA;
                      do
                        K[i++] = K[_++], K[i++] = K[_++], K[i++] = K[_++], $ -= 3;
                      while ($ > 2);
                      $ && (K[i++] = K[_++], $ > 1 && (K[i++] = K[_++]));
                    }
                  } else if ((L & 64) === 0) {
                    q = x[(q & 65535) + (I & (1 << L) - 1)];
                    continue t;
                  } else {
                    b.msg = "invalid distance code", u.mode = o;
                    break A;
                  }
                  break;
                }
            } else if ((L & 64) === 0) {
              q = C[(q & 65535) + (I & (1 << L) - 1)];
              continue e;
            } else if (L & 32) {
              u.mode = l;
              break A;
            } else {
              b.msg = "invalid literal/length code", u.mode = o;
              break A;
            }
            break;
          }
      } while (H < n && i < D);
    $ = s >> 3, H -= $, s -= $ << 3, I &= (1 << s) - 1, b.next_in = H, b.next_out = i, b.avail_in = H < n ? 5 + (n - H) : 5 - (H - n), b.avail_out = i < D ? 257 + (D - i) : 257 - (i - D), u.hold = I, u.bits = s;
  }, It;
}
var Gt, Xn;
function JB() {
  if (Xn) return Gt;
  Xn = 1;
  var o = oe(), l = 15, y = 852, b = 592, X = 0, u = 1, H = 2, n = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], i = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], p = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], D = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return Gt = function(Y, c, w, V, I, s, C, x) {
    var U = x.bits, N = 0, q = 0, L = 0, $ = 0, GA = 0, _ = 0, AA = 0, aA = 0, K = 0, fA = 0, bA, xA, HA, oA, FA, v = null, a = 0, Z, m = new o.Buf16(l + 1), z = new o.Buf16(l + 1), sA = null, cA = 0, QA, P, eA;
    for (N = 0; N <= l; N++)
      m[N] = 0;
    for (q = 0; q < V; q++)
      m[c[w + q]]++;
    for (GA = U, $ = l; $ >= 1 && m[$] === 0; $--)
      ;
    if (GA > $ && (GA = $), $ === 0)
      return I[s++] = 1 << 24 | 64 << 16 | 0, I[s++] = 1 << 24 | 64 << 16 | 0, x.bits = 1, 0;
    for (L = 1; L < $ && m[L] === 0; L++)
      ;
    for (GA < L && (GA = L), aA = 1, N = 1; N <= l; N++)
      if (aA <<= 1, aA -= m[N], aA < 0)
        return -1;
    if (aA > 0 && (Y === X || $ !== 1))
      return -1;
    for (z[1] = 0, N = 1; N < l; N++)
      z[N + 1] = z[N] + m[N];
    for (q = 0; q < V; q++)
      c[w + q] !== 0 && (C[z[c[w + q]]++] = q);
    if (Y === X ? (v = sA = C, Z = 19) : Y === u ? (v = n, a -= 257, sA = i, cA -= 257, Z = 256) : (v = p, sA = D, Z = -1), fA = 0, q = 0, N = L, FA = s, _ = GA, AA = 0, HA = -1, K = 1 << GA, oA = K - 1, Y === u && K > y || Y === H && K > b)
      return 1;
    for (; ; ) {
      QA = N - AA, C[q] < Z ? (P = 0, eA = C[q]) : C[q] > Z ? (P = sA[cA + C[q]], eA = v[a + C[q]]) : (P = 96, eA = 0), bA = 1 << N - AA, xA = 1 << _, L = xA;
      do
        xA -= bA, I[FA + (fA >> AA) + xA] = QA << 24 | P << 16 | eA | 0;
      while (xA !== 0);
      for (bA = 1 << N - 1; fA & bA; )
        bA >>= 1;
      if (bA !== 0 ? (fA &= bA - 1, fA += bA) : fA = 0, q++, --m[N] === 0) {
        if (N === $)
          break;
        N = c[w + C[q]];
      }
      if (N > GA && (fA & oA) !== HA) {
        for (AA === 0 && (AA = GA), FA += L, _ = N - AA, aA = 1 << _; _ + AA < $ && (aA -= m[_ + AA], !(aA <= 0)); )
          _++, aA <<= 1;
        if (K += 1 << _, Y === u && K > y || Y === H && K > b)
          return 1;
        HA = fA & oA, I[HA] = GA << 24 | _ << 16 | FA - s | 0;
      }
    }
    return fA !== 0 && (I[FA + fA] = N - AA << 24 | 64 << 16 | 0), x.bits = GA, 0;
  }, Gt;
}
var kn;
function KB() {
  if (kn) return qA;
  kn = 1;
  var o = oe(), l = lr(), y = cr(), b = SB(), X = JB(), u = 0, H = 1, n = 2, i = 4, p = 5, D = 6, f = 0, Y = 1, c = 2, w = -2, V = -3, I = -4, s = -5, C = 8, x = 1, U = 2, N = 3, q = 4, L = 5, $ = 6, GA = 7, _ = 8, AA = 9, aA = 10, K = 11, fA = 12, bA = 13, xA = 14, HA = 15, oA = 16, FA = 17, v = 18, a = 19, Z = 20, m = 21, z = 22, sA = 23, cA = 24, QA = 25, P = 26, eA = 27, iA = 28, pA = 29, dA = 30, S = 31, T = 32, nA = 852, EA = 592, hA = 15, d = hA;
  function A(J) {
    return (J >>> 24 & 255) + (J >>> 8 & 65280) + ((J & 65280) << 8) + ((J & 255) << 24);
  }
  function r() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function E(J) {
    var gA;
    return !J || !J.state ? w : (gA = J.state, J.total_in = J.total_out = gA.total = 0, J.msg = "", gA.wrap && (J.adler = gA.wrap & 1), gA.mode = x, gA.last = 0, gA.havedict = 0, gA.dmax = 32768, gA.head = null, gA.hold = 0, gA.bits = 0, gA.lencode = gA.lendyn = new o.Buf32(nA), gA.distcode = gA.distdyn = new o.Buf32(EA), gA.sane = 1, gA.back = -1, f);
  }
  function W(J) {
    var gA;
    return !J || !J.state ? w : (gA = J.state, gA.wsize = 0, gA.whave = 0, gA.wnext = 0, E(J));
  }
  function rA(J, gA) {
    var Q, uA;
    return !J || !J.state || (uA = J.state, gA < 0 ? (Q = 0, gA = -gA) : (Q = (gA >> 4) + 1, gA < 48 && (gA &= 15)), gA && (gA < 8 || gA > 15)) ? w : (uA.window !== null && uA.wbits !== gA && (uA.window = null), uA.wrap = Q, uA.wbits = gA, W(J));
  }
  function CA(J, gA) {
    var Q, uA;
    return J ? (uA = new r(), J.state = uA, uA.window = null, Q = rA(J, gA), Q !== f && (J.state = null), Q) : w;
  }
  function ZA(J) {
    return CA(J, d);
  }
  var MA = !0, h, e;
  function g(J) {
    if (MA) {
      var gA;
      for (h = new o.Buf32(512), e = new o.Buf32(32), gA = 0; gA < 144; )
        J.lens[gA++] = 8;
      for (; gA < 256; )
        J.lens[gA++] = 9;
      for (; gA < 280; )
        J.lens[gA++] = 7;
      for (; gA < 288; )
        J.lens[gA++] = 8;
      for (X(H, J.lens, 0, 288, h, 0, J.work, { bits: 9 }), gA = 0; gA < 32; )
        J.lens[gA++] = 5;
      X(n, J.lens, 0, 32, e, 0, J.work, { bits: 5 }), MA = !1;
    }
    J.lencode = h, J.lenbits = 9, J.distcode = e, J.distbits = 5;
  }
  function R(J, gA, Q, uA) {
    var yA, t = J.state;
    return t.window === null && (t.wsize = 1 << t.wbits, t.wnext = 0, t.whave = 0, t.window = new o.Buf8(t.wsize)), uA >= t.wsize ? (o.arraySet(t.window, gA, Q - t.wsize, t.wsize, 0), t.wnext = 0, t.whave = t.wsize) : (yA = t.wsize - t.wnext, yA > uA && (yA = uA), o.arraySet(t.window, gA, Q - uA, yA, t.wnext), uA -= yA, uA ? (o.arraySet(t.window, gA, Q - uA, uA, 0), t.wnext = uA, t.whave = t.wsize) : (t.wnext += yA, t.wnext === t.wsize && (t.wnext = 0), t.whave < t.wsize && (t.whave += yA))), 0;
  }
  function B(J, gA) {
    var Q, uA, yA, t, BA, lA, F, j, tA, mA, G, M, wA, YA, DA = 0, VA, WA, SA, XA, ae, Qe, RA, JA, kA = new o.Buf8(4), zA, jA, re = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!J || !J.state || !J.output || !J.input && J.avail_in !== 0)
      return w;
    Q = J.state, Q.mode === fA && (Q.mode = bA), BA = J.next_out, yA = J.output, F = J.avail_out, t = J.next_in, uA = J.input, lA = J.avail_in, j = Q.hold, tA = Q.bits, mA = lA, G = F, JA = f;
    A:
      for (; ; )
        switch (Q.mode) {
          case x:
            if (Q.wrap === 0) {
              Q.mode = bA;
              break;
            }
            for (; tA < 16; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if (Q.wrap & 2 && j === 35615) {
              Q.check = 0, kA[0] = j & 255, kA[1] = j >>> 8 & 255, Q.check = y(Q.check, kA, 2, 0), j = 0, tA = 0, Q.mode = U;
              break;
            }
            if (Q.flags = 0, Q.head && (Q.head.done = !1), !(Q.wrap & 1) || /* check if zlib header allowed */
            (((j & 255) << 8) + (j >> 8)) % 31) {
              J.msg = "incorrect header check", Q.mode = dA;
              break;
            }
            if ((j & 15) !== C) {
              J.msg = "unknown compression method", Q.mode = dA;
              break;
            }
            if (j >>>= 4, tA -= 4, RA = (j & 15) + 8, Q.wbits === 0)
              Q.wbits = RA;
            else if (RA > Q.wbits) {
              J.msg = "invalid window size", Q.mode = dA;
              break;
            }
            Q.dmax = 1 << RA, J.adler = Q.check = 1, Q.mode = j & 512 ? aA : fA, j = 0, tA = 0;
            break;
          case U:
            for (; tA < 16; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if (Q.flags = j, (Q.flags & 255) !== C) {
              J.msg = "unknown compression method", Q.mode = dA;
              break;
            }
            if (Q.flags & 57344) {
              J.msg = "unknown header flags set", Q.mode = dA;
              break;
            }
            Q.head && (Q.head.text = j >> 8 & 1), Q.flags & 512 && (kA[0] = j & 255, kA[1] = j >>> 8 & 255, Q.check = y(Q.check, kA, 2, 0)), j = 0, tA = 0, Q.mode = N;
          /* falls through */
          case N:
            for (; tA < 32; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            Q.head && (Q.head.time = j), Q.flags & 512 && (kA[0] = j & 255, kA[1] = j >>> 8 & 255, kA[2] = j >>> 16 & 255, kA[3] = j >>> 24 & 255, Q.check = y(Q.check, kA, 4, 0)), j = 0, tA = 0, Q.mode = q;
          /* falls through */
          case q:
            for (; tA < 16; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            Q.head && (Q.head.xflags = j & 255, Q.head.os = j >> 8), Q.flags & 512 && (kA[0] = j & 255, kA[1] = j >>> 8 & 255, Q.check = y(Q.check, kA, 2, 0)), j = 0, tA = 0, Q.mode = L;
          /* falls through */
          case L:
            if (Q.flags & 1024) {
              for (; tA < 16; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              Q.length = j, Q.head && (Q.head.extra_len = j), Q.flags & 512 && (kA[0] = j & 255, kA[1] = j >>> 8 & 255, Q.check = y(Q.check, kA, 2, 0)), j = 0, tA = 0;
            } else Q.head && (Q.head.extra = null);
            Q.mode = $;
          /* falls through */
          case $:
            if (Q.flags & 1024 && (M = Q.length, M > lA && (M = lA), M && (Q.head && (RA = Q.head.extra_len - Q.length, Q.head.extra || (Q.head.extra = new Array(Q.head.extra_len)), o.arraySet(
              Q.head.extra,
              uA,
              t,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              M,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              RA
            )), Q.flags & 512 && (Q.check = y(Q.check, uA, M, t)), lA -= M, t += M, Q.length -= M), Q.length))
              break A;
            Q.length = 0, Q.mode = GA;
          /* falls through */
          case GA:
            if (Q.flags & 2048) {
              if (lA === 0)
                break A;
              M = 0;
              do
                RA = uA[t + M++], Q.head && RA && Q.length < 65536 && (Q.head.name += String.fromCharCode(RA));
              while (RA && M < lA);
              if (Q.flags & 512 && (Q.check = y(Q.check, uA, M, t)), lA -= M, t += M, RA)
                break A;
            } else Q.head && (Q.head.name = null);
            Q.length = 0, Q.mode = _;
          /* falls through */
          case _:
            if (Q.flags & 4096) {
              if (lA === 0)
                break A;
              M = 0;
              do
                RA = uA[t + M++], Q.head && RA && Q.length < 65536 && (Q.head.comment += String.fromCharCode(RA));
              while (RA && M < lA);
              if (Q.flags & 512 && (Q.check = y(Q.check, uA, M, t)), lA -= M, t += M, RA)
                break A;
            } else Q.head && (Q.head.comment = null);
            Q.mode = AA;
          /* falls through */
          case AA:
            if (Q.flags & 512) {
              for (; tA < 16; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              if (j !== (Q.check & 65535)) {
                J.msg = "header crc mismatch", Q.mode = dA;
                break;
              }
              j = 0, tA = 0;
            }
            Q.head && (Q.head.hcrc = Q.flags >> 9 & 1, Q.head.done = !0), J.adler = Q.check = 0, Q.mode = fA;
            break;
          case aA:
            for (; tA < 32; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            J.adler = Q.check = A(j), j = 0, tA = 0, Q.mode = K;
          /* falls through */
          case K:
            if (Q.havedict === 0)
              return J.next_out = BA, J.avail_out = F, J.next_in = t, J.avail_in = lA, Q.hold = j, Q.bits = tA, c;
            J.adler = Q.check = 1, Q.mode = fA;
          /* falls through */
          case fA:
            if (gA === p || gA === D)
              break A;
          /* falls through */
          case bA:
            if (Q.last) {
              j >>>= tA & 7, tA -= tA & 7, Q.mode = eA;
              break;
            }
            for (; tA < 3; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            switch (Q.last = j & 1, j >>>= 1, tA -= 1, j & 3) {
              case 0:
                Q.mode = xA;
                break;
              case 1:
                if (g(Q), Q.mode = Z, gA === D) {
                  j >>>= 2, tA -= 2;
                  break A;
                }
                break;
              case 2:
                Q.mode = FA;
                break;
              case 3:
                J.msg = "invalid block type", Q.mode = dA;
            }
            j >>>= 2, tA -= 2;
            break;
          case xA:
            for (j >>>= tA & 7, tA -= tA & 7; tA < 32; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if ((j & 65535) !== (j >>> 16 ^ 65535)) {
              J.msg = "invalid stored block lengths", Q.mode = dA;
              break;
            }
            if (Q.length = j & 65535, j = 0, tA = 0, Q.mode = HA, gA === D)
              break A;
          /* falls through */
          case HA:
            Q.mode = oA;
          /* falls through */
          case oA:
            if (M = Q.length, M) {
              if (M > lA && (M = lA), M > F && (M = F), M === 0)
                break A;
              o.arraySet(yA, uA, t, M, BA), lA -= M, t += M, F -= M, BA += M, Q.length -= M;
              break;
            }
            Q.mode = fA;
            break;
          case FA:
            for (; tA < 14; ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if (Q.nlen = (j & 31) + 257, j >>>= 5, tA -= 5, Q.ndist = (j & 31) + 1, j >>>= 5, tA -= 5, Q.ncode = (j & 15) + 4, j >>>= 4, tA -= 4, Q.nlen > 286 || Q.ndist > 30) {
              J.msg = "too many length or distance symbols", Q.mode = dA;
              break;
            }
            Q.have = 0, Q.mode = v;
          /* falls through */
          case v:
            for (; Q.have < Q.ncode; ) {
              for (; tA < 3; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              Q.lens[re[Q.have++]] = j & 7, j >>>= 3, tA -= 3;
            }
            for (; Q.have < 19; )
              Q.lens[re[Q.have++]] = 0;
            if (Q.lencode = Q.lendyn, Q.lenbits = 7, zA = { bits: Q.lenbits }, JA = X(u, Q.lens, 0, 19, Q.lencode, 0, Q.work, zA), Q.lenbits = zA.bits, JA) {
              J.msg = "invalid code lengths set", Q.mode = dA;
              break;
            }
            Q.have = 0, Q.mode = a;
          /* falls through */
          case a:
            for (; Q.have < Q.nlen + Q.ndist; ) {
              for (; DA = Q.lencode[j & (1 << Q.lenbits) - 1], VA = DA >>> 24, WA = DA >>> 16 & 255, SA = DA & 65535, !(VA <= tA); ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              if (SA < 16)
                j >>>= VA, tA -= VA, Q.lens[Q.have++] = SA;
              else {
                if (SA === 16) {
                  for (jA = VA + 2; tA < jA; ) {
                    if (lA === 0)
                      break A;
                    lA--, j += uA[t++] << tA, tA += 8;
                  }
                  if (j >>>= VA, tA -= VA, Q.have === 0) {
                    J.msg = "invalid bit length repeat", Q.mode = dA;
                    break;
                  }
                  RA = Q.lens[Q.have - 1], M = 3 + (j & 3), j >>>= 2, tA -= 2;
                } else if (SA === 17) {
                  for (jA = VA + 3; tA < jA; ) {
                    if (lA === 0)
                      break A;
                    lA--, j += uA[t++] << tA, tA += 8;
                  }
                  j >>>= VA, tA -= VA, RA = 0, M = 3 + (j & 7), j >>>= 3, tA -= 3;
                } else {
                  for (jA = VA + 7; tA < jA; ) {
                    if (lA === 0)
                      break A;
                    lA--, j += uA[t++] << tA, tA += 8;
                  }
                  j >>>= VA, tA -= VA, RA = 0, M = 11 + (j & 127), j >>>= 7, tA -= 7;
                }
                if (Q.have + M > Q.nlen + Q.ndist) {
                  J.msg = "invalid bit length repeat", Q.mode = dA;
                  break;
                }
                for (; M--; )
                  Q.lens[Q.have++] = RA;
              }
            }
            if (Q.mode === dA)
              break;
            if (Q.lens[256] === 0) {
              J.msg = "invalid code -- missing end-of-block", Q.mode = dA;
              break;
            }
            if (Q.lenbits = 9, zA = { bits: Q.lenbits }, JA = X(H, Q.lens, 0, Q.nlen, Q.lencode, 0, Q.work, zA), Q.lenbits = zA.bits, JA) {
              J.msg = "invalid literal/lengths set", Q.mode = dA;
              break;
            }
            if (Q.distbits = 6, Q.distcode = Q.distdyn, zA = { bits: Q.distbits }, JA = X(n, Q.lens, Q.nlen, Q.ndist, Q.distcode, 0, Q.work, zA), Q.distbits = zA.bits, JA) {
              J.msg = "invalid distances set", Q.mode = dA;
              break;
            }
            if (Q.mode = Z, gA === D)
              break A;
          /* falls through */
          case Z:
            Q.mode = m;
          /* falls through */
          case m:
            if (lA >= 6 && F >= 258) {
              J.next_out = BA, J.avail_out = F, J.next_in = t, J.avail_in = lA, Q.hold = j, Q.bits = tA, b(J, G), BA = J.next_out, yA = J.output, F = J.avail_out, t = J.next_in, uA = J.input, lA = J.avail_in, j = Q.hold, tA = Q.bits, Q.mode === fA && (Q.back = -1);
              break;
            }
            for (Q.back = 0; DA = Q.lencode[j & (1 << Q.lenbits) - 1], VA = DA >>> 24, WA = DA >>> 16 & 255, SA = DA & 65535, !(VA <= tA); ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if (WA && (WA & 240) === 0) {
              for (XA = VA, ae = WA, Qe = SA; DA = Q.lencode[Qe + ((j & (1 << XA + ae) - 1) >> XA)], VA = DA >>> 24, WA = DA >>> 16 & 255, SA = DA & 65535, !(XA + VA <= tA); ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              j >>>= XA, tA -= XA, Q.back += XA;
            }
            if (j >>>= VA, tA -= VA, Q.back += VA, Q.length = SA, WA === 0) {
              Q.mode = P;
              break;
            }
            if (WA & 32) {
              Q.back = -1, Q.mode = fA;
              break;
            }
            if (WA & 64) {
              J.msg = "invalid literal/length code", Q.mode = dA;
              break;
            }
            Q.extra = WA & 15, Q.mode = z;
          /* falls through */
          case z:
            if (Q.extra) {
              for (jA = Q.extra; tA < jA; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              Q.length += j & (1 << Q.extra) - 1, j >>>= Q.extra, tA -= Q.extra, Q.back += Q.extra;
            }
            Q.was = Q.length, Q.mode = sA;
          /* falls through */
          case sA:
            for (; DA = Q.distcode[j & (1 << Q.distbits) - 1], VA = DA >>> 24, WA = DA >>> 16 & 255, SA = DA & 65535, !(VA <= tA); ) {
              if (lA === 0)
                break A;
              lA--, j += uA[t++] << tA, tA += 8;
            }
            if ((WA & 240) === 0) {
              for (XA = VA, ae = WA, Qe = SA; DA = Q.distcode[Qe + ((j & (1 << XA + ae) - 1) >> XA)], VA = DA >>> 24, WA = DA >>> 16 & 255, SA = DA & 65535, !(XA + VA <= tA); ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              j >>>= XA, tA -= XA, Q.back += XA;
            }
            if (j >>>= VA, tA -= VA, Q.back += VA, WA & 64) {
              J.msg = "invalid distance code", Q.mode = dA;
              break;
            }
            Q.offset = SA, Q.extra = WA & 15, Q.mode = cA;
          /* falls through */
          case cA:
            if (Q.extra) {
              for (jA = Q.extra; tA < jA; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              Q.offset += j & (1 << Q.extra) - 1, j >>>= Q.extra, tA -= Q.extra, Q.back += Q.extra;
            }
            if (Q.offset > Q.dmax) {
              J.msg = "invalid distance too far back", Q.mode = dA;
              break;
            }
            Q.mode = QA;
          /* falls through */
          case QA:
            if (F === 0)
              break A;
            if (M = G - F, Q.offset > M) {
              if (M = Q.offset - M, M > Q.whave && Q.sane) {
                J.msg = "invalid distance too far back", Q.mode = dA;
                break;
              }
              M > Q.wnext ? (M -= Q.wnext, wA = Q.wsize - M) : wA = Q.wnext - M, M > Q.length && (M = Q.length), YA = Q.window;
            } else
              YA = yA, wA = BA - Q.offset, M = Q.length;
            M > F && (M = F), F -= M, Q.length -= M;
            do
              yA[BA++] = YA[wA++];
            while (--M);
            Q.length === 0 && (Q.mode = m);
            break;
          case P:
            if (F === 0)
              break A;
            yA[BA++] = Q.length, F--, Q.mode = m;
            break;
          case eA:
            if (Q.wrap) {
              for (; tA < 32; ) {
                if (lA === 0)
                  break A;
                lA--, j |= uA[t++] << tA, tA += 8;
              }
              if (G -= F, J.total_out += G, Q.total += G, G && (J.adler = Q.check = /*UPDATE(state.check, put - _out, _out);*/
              Q.flags ? y(Q.check, yA, G, BA - G) : l(Q.check, yA, G, BA - G)), G = F, (Q.flags ? j : A(j)) !== Q.check) {
                J.msg = "incorrect data check", Q.mode = dA;
                break;
              }
              j = 0, tA = 0;
            }
            Q.mode = iA;
          /* falls through */
          case iA:
            if (Q.wrap && Q.flags) {
              for (; tA < 32; ) {
                if (lA === 0)
                  break A;
                lA--, j += uA[t++] << tA, tA += 8;
              }
              if (j !== (Q.total & 4294967295)) {
                J.msg = "incorrect length check", Q.mode = dA;
                break;
              }
              j = 0, tA = 0;
            }
            Q.mode = pA;
          /* falls through */
          case pA:
            JA = Y;
            break A;
          case dA:
            JA = V;
            break A;
          case S:
            return I;
          case T:
          /* falls through */
          default:
            return w;
        }
    return J.next_out = BA, J.avail_out = F, J.next_in = t, J.avail_in = lA, Q.hold = j, Q.bits = tA, (Q.wsize || G !== J.avail_out && Q.mode < dA && (Q.mode < eA || gA !== i)) && R(J, J.output, J.next_out, G - J.avail_out), mA -= J.avail_in, G -= J.avail_out, J.total_in += mA, J.total_out += G, Q.total += G, Q.wrap && G && (J.adler = Q.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    Q.flags ? y(Q.check, yA, G, J.next_out - G) : l(Q.check, yA, G, J.next_out - G)), J.data_type = Q.bits + (Q.last ? 64 : 0) + (Q.mode === fA ? 128 : 0) + (Q.mode === Z || Q.mode === HA ? 256 : 0), (mA === 0 && G === 0 || gA === i) && JA === f && (JA = s), JA;
  }
  function k(J) {
    if (!J || !J.state)
      return w;
    var gA = J.state;
    return gA.window && (gA.window = null), J.state = null, f;
  }
  function O(J, gA) {
    var Q;
    return !J || !J.state || (Q = J.state, (Q.wrap & 2) === 0) ? w : (Q.head = gA, gA.done = !1, f);
  }
  function IA(J, gA) {
    var Q = gA.length, uA, yA, t;
    return !J || !J.state || (uA = J.state, uA.wrap !== 0 && uA.mode !== K) ? w : uA.mode === K && (yA = 1, yA = l(yA, gA, Q, 0), yA !== uA.check) ? V : (t = R(J, gA, Q, Q), t ? (uA.mode = S, I) : (uA.havedict = 1, f));
  }
  return qA.inflateReset = W, qA.inflateReset2 = rA, qA.inflateResetKeep = E, qA.inflateInit = ZA, qA.inflateInit2 = CA, qA.inflate = B, qA.inflateEnd = k, qA.inflateGetHeader = O, qA.inflateSetDictionary = IA, qA.inflateInfo = "pako inflate (from Nodeca project)", qA;
}
var Et, vn;
function Cr() {
  return vn || (vn = 1, Et = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), Et;
}
var bt, Sn;
function jB() {
  if (Sn) return bt;
  Sn = 1;
  function o() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return bt = o, bt;
}
var Jn;
function _B() {
  if (Jn) return Ie;
  Jn = 1;
  var o = KB(), l = oe(), y = sr(), b = Cr(), X = Vt(), u = ur(), H = jB(), n = Object.prototype.toString;
  function i(f) {
    if (!(this instanceof i)) return new i(f);
    this.options = l.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, f || {});
    var Y = this.options;
    Y.raw && Y.windowBits >= 0 && Y.windowBits < 16 && (Y.windowBits = -Y.windowBits, Y.windowBits === 0 && (Y.windowBits = -15)), Y.windowBits >= 0 && Y.windowBits < 16 && !(f && f.windowBits) && (Y.windowBits += 32), Y.windowBits > 15 && Y.windowBits < 48 && (Y.windowBits & 15) === 0 && (Y.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
    var c = o.inflateInit2(
      this.strm,
      Y.windowBits
    );
    if (c !== b.Z_OK)
      throw new Error(X[c]);
    if (this.header = new H(), o.inflateGetHeader(this.strm, this.header), Y.dictionary && (typeof Y.dictionary == "string" ? Y.dictionary = y.string2buf(Y.dictionary) : n.call(Y.dictionary) === "[object ArrayBuffer]" && (Y.dictionary = new Uint8Array(Y.dictionary)), Y.raw && (c = o.inflateSetDictionary(this.strm, Y.dictionary), c !== b.Z_OK)))
      throw new Error(X[c]);
  }
  i.prototype.push = function(f, Y) {
    var c = this.strm, w = this.options.chunkSize, V = this.options.dictionary, I, s, C, x, U, N = !1;
    if (this.ended)
      return !1;
    s = Y === ~~Y ? Y : Y === !0 ? b.Z_FINISH : b.Z_NO_FLUSH, typeof f == "string" ? c.input = y.binstring2buf(f) : n.call(f) === "[object ArrayBuffer]" ? c.input = new Uint8Array(f) : c.input = f, c.next_in = 0, c.avail_in = c.input.length;
    do {
      if (c.avail_out === 0 && (c.output = new l.Buf8(w), c.next_out = 0, c.avail_out = w), I = o.inflate(c, b.Z_NO_FLUSH), I === b.Z_NEED_DICT && V && (I = o.inflateSetDictionary(this.strm, V)), I === b.Z_BUF_ERROR && N === !0 && (I = b.Z_OK, N = !1), I !== b.Z_STREAM_END && I !== b.Z_OK)
        return this.onEnd(I), this.ended = !0, !1;
      c.next_out && (c.avail_out === 0 || I === b.Z_STREAM_END || c.avail_in === 0 && (s === b.Z_FINISH || s === b.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (C = y.utf8border(c.output, c.next_out), x = c.next_out - C, U = y.buf2string(c.output, C), c.next_out = x, c.avail_out = w - x, x && l.arraySet(c.output, c.output, C, x, 0), this.onData(U)) : this.onData(l.shrinkBuf(c.output, c.next_out))), c.avail_in === 0 && c.avail_out === 0 && (N = !0);
    } while ((c.avail_in > 0 || c.avail_out === 0) && I !== b.Z_STREAM_END);
    return I === b.Z_STREAM_END && (s = b.Z_FINISH), s === b.Z_FINISH ? (I = o.inflateEnd(this.strm), this.onEnd(I), this.ended = !0, I === b.Z_OK) : (s === b.Z_SYNC_FLUSH && (this.onEnd(b.Z_OK), c.avail_out = 0), !0);
  }, i.prototype.onData = function(f) {
    this.chunks.push(f);
  }, i.prototype.onEnd = function(f) {
    f === b.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = l.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
  };
  function p(f, Y) {
    var c = new i(Y);
    if (c.push(f, !0), c.err)
      throw c.msg || X[c.err];
    return c.result;
  }
  function D(f, Y) {
    return Y = Y || {}, Y.raw = !0, p(f, Y);
  }
  return Ie.Inflate = i, Ie.inflate = p, Ie.inflateRaw = D, Ie.ungzip = p, Ie;
}
var Ht, Kn;
function OB() {
  if (Kn) return Ht;
  Kn = 1;
  var o = oe().assign, l = vB(), y = _B(), b = Cr(), X = {};
  return o(X, l, y, b), Ht = X, Ht;
}
var LB = OB();
const TB = /* @__PURE__ */ fr(LB);
function zB(o, l) {
  return fetch(o, l).then((y) => ({
    body: y.body,
    headers: y.headers,
    ok: y.ok,
    status: y.status,
    statusText: y.statusText,
    url: y.url
  }));
}
let PB = class dr {
  constructor(l = {}) {
    this.h = {}, l instanceof dr && l.forEach((y, b) => this.append(b, y)), Object.getOwnPropertyNames(l).forEach((y) => this.append(y, l[y]));
  }
  append(l, y) {
    l = l.toLowerCase(), Array.isArray(this.h[l]) || (this.h[l] = []), this.h[l].push(y);
  }
  set(l, y) {
    this.h[l.toLowerCase()] = [y];
  }
  has(l) {
    return Array.isArray(this.h[l.toLowerCase()]);
  }
  get(l) {
    if (l = l.toLowerCase(), Array.isArray(this.h[l]))
      return this.h[l][0];
  }
  getAll(l) {
    return this.h[l.toLowerCase()].concat();
  }
  entries() {
    const l = [];
    return this.forEach((y, b) => {
      l.push([b, y]);
    }), qB(l);
  }
  // forEach is not part of the official spec.
  forEach(l, y) {
    Object.getOwnPropertyNames(this.h).forEach((b) => {
      this.h[b].forEach((X) => l.call(y, X, b, this));
    }, this);
  }
};
function qB(o) {
  return {
    next() {
      const l = o.shift();
      return {
        done: l === void 0,
        value: l
      };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
function Ft() {
  try {
    return new DOMException("Aborted", "AbortError");
  } catch {
    const l = new Error("Aborted");
    return l.name = "AbortError", l;
  }
}
function jn({ responseType: o, responseParserFactory: l }) {
  return function(b, X) {
    const u = new XMLHttpRequest(), H = l();
    let n, i = !1;
    const p = new ReadableStream({
      start(Y) {
        n = Y;
      },
      cancel() {
        i = !0, u.abort();
      }
    }), { method: D = "GET", signal: f } = X;
    if (u.open(D, b), u.responseType = o, u.withCredentials = X.credentials !== "omit", X.headers)
      for (const Y of X.headers.entries())
        u.setRequestHeader(Y[0], Y[1]);
    return new Promise((Y, c) => {
      if (X.body && (D === "GET" || D === "HEAD") && c(new TypeError("Failed to execute 'fetchStream' on 'Window': Request with GET/HEAD method cannot have body")), f)
        if (f.aborted) {
          c(Ft());
          return;
        } else
          f.addEventListener("abort", () => {
            u.abort(), n && n.error(Ft()), c(Ft());
          }, { once: !0 });
      u.onreadystatechange = function() {
        if (u.readyState === u.HEADERS_RECEIVED)
          return Y({
            body: p,
            headers: eo(u.getAllResponseHeaders()),
            ok: u.status >= 200 && u.status < 300,
            status: u.status,
            statusText: u.statusText,
            url: Ao(u.responseURL, b)
          });
      }, u.onerror = function() {
        return c(new TypeError("Network request failed"));
      }, u.ontimeout = function() {
        c(new TypeError("Network request failed"));
      }, u.onprogress = function() {
        if (!i) {
          const w = H(u.response);
          n.enqueue(w);
        }
      }, u.onload = function() {
        n.close();
      }, u.send(X.body);
    });
  };
}
function $B() {
  return typeof Headers < "u" ? new Headers() : new PB();
}
function Ao(o, l) {
  return o || (l.substring(0, 4) !== "http" ? location.origin + l : l);
}
function eo(o) {
  const l = $B();
  if (o) {
    const y = o.split(`\r
`);
    for (let b = 0; b < y.length; b++) {
      const X = y[b], u = X.indexOf(": ");
      if (u > 0) {
        const H = X.substring(0, u), n = X.substring(u + 2);
        l.append(H, n);
      }
    }
  }
  return l;
}
let Yt = null;
function to() {
  return Yt || (Yt = no()), Yt;
}
function no() {
  if (typeof Response < "u" && Response.prototype.hasOwnProperty("body"))
    return zB;
  const o = "moz-chunked-arraybuffer";
  return ro(o) ? jn({
    responseType: o,
    responseParserFactory: function() {
      return (l) => new Uint8Array(l);
    }
  }) : jn({
    responseType: "text",
    responseParserFactory: function() {
      const l = new TextEncoder();
      let y = 0;
      return function(b) {
        const X = b.substr(y);
        return y = b.length, l.encode(X, { stream: !0 });
      };
    }
  });
}
function ro(o) {
  try {
    const l = new XMLHttpRequest();
    return l.responseType = o, l.responseType === o;
  } catch {
  }
  return !1;
}
function Mt(o, l = {}) {
  let y = l.transport;
  return y || (y = Mt.transportFactory()), y(o, l);
}
Mt.transportFactory = to;
if (document.currentScript === void 0) {
  var _n = document.getElementsByTagName("script");
  document.currentScript = _n[_n.length - 1];
}
var wr = new URL(import.meta.url), go = wr.host, On = wr.protocol + "//" + go;
let We = 1e3;
var Qr, hr;
async function io() {
  hr = await (await fetch(On + "/tex.wasm")).arrayBuffer();
  const y = (await Mt(On + "/core.dump.gz")).body.getReader(), b = new TB.Inflate();
  try {
    for (; ; ) {
      const { done: X, value: u } = await y.read();
      if (b.push(u, X), X) break;
    }
  } finally {
    y.releaseLock();
  }
  Qr = new Uint8Array(b.result, 0, We * 65536);
}
function Bo(o) {
  var l = new Uint8Array(o.length);
  return l.set(o), l;
}
async function oo(o) {
  o.match("\\\\begin *{document}") === null && (o = `\\begin{document}
` + o), o = o + `
\\end{document}
`, rr(), gr("sample.tex", Buffer.from(o));
  let l = new WebAssembly.Memory({ initial: We, maximum: We });
  return new Uint8Array(l.buffer, 0, We * 65536).set(Bo(Qr)), or(l.buffer), ar(` sample.tex 
\\end
`), await WebAssembly.instantiate(hr, {
    library: NB,
    env: { memory: l }
  }), ir("sample.dvi");
}
async function co(o) {
  await io();
  async function l(X) {
    var u = X.childNodes[0].nodeValue, H = document.createElement("div");
    let n = await oo(u), i = "";
    const p = new QB.Writable({
      write(c, w, V) {
        i = i + c.toString(), V();
      }
    });
    async function* D() {
      yield Buffer.from(n);
    }
    let f = await Tn.dvi2html(D(), p);
    H.style.display = "flex", H.style.width = f.paperwidth.toString() + "pt", H.style.height = f.paperheight.toString() + "pt", H.style["align-items"] = "center", H.style["justify-content"] = "center", H.innerHTML = i;
    let Y = H.getElementsByTagName("svg");
    Y[0].setAttribute("width", f.paperwidth.toString() + "pt"), Y[0].setAttribute("height", f.paperheight.toString() + "pt"), Y[0].setAttribute("viewBox", `-72 -72 ${f.paperwidth} ${f.paperheight}`), X.parentNode.replaceChild(H, X);
  }
  var y = o.getElementsByTagName("script"), b = Array.prototype.slice.call(y).filter(
    (X) => X.getAttribute("type") === "text/tikz"
  );
  b.reduce(async (X, u) => (await X, l(u)), Promise.resolve());
}
export {
  co as TikZJax
};
